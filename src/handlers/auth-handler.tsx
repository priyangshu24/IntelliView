import { db } from "@/config/firebase.config";
import { LoaderPage } from "@/routes/loader-page";
import { user } from "@/types";
import { useAuth, useUser } from "@clerk/clerk-react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthHandler = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    const storeUserData = async () => {
      if (!isSignedIn || !user) return;
      
      if (!isOnline && retryCount === 0) {
        console.log("Device is offline. Will retry when connection is available.");
        return;
      }

      setLoading(true);
      
      try {
        const userSnap = await getDoc(doc(db, "users", user.id));
        
        if (!userSnap.exists()) {
          const userData: user = {
            id: user.id,
            name: user.fullName || user.firstName || "Anonymous",
            email: user.primaryEmailAddress?.emailAddress || "N/A",
            imageUrl: user.imageUrl,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          };
          
          await setDoc(doc(db, "users", user.id), userData);
          console.log("User data stored successfully");
        } else {
          console.log("User already exists in the database");
        }
        
        setRetryCount(0);
      } catch (error) {
        console.error("Error on storing the user data:", error);
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!isOnline || (error as any)?.message?.includes("offline")) {
          const nextRetryCount = retryCount + 1;
          
          if (nextRetryCount <= 5) {
            setRetryCount(nextRetryCount);
            const backoffTime = Math.min(1000 * (2 ** nextRetryCount), 30000);
            console.log(`Scheduling retry ${nextRetryCount} in ${backoffTime/1000} seconds`);
          }
        }
      } finally {
        setLoading(false);
      }
    };

    storeUserData();
  }, [isSignedIn, user, pathname, navigate, isOnline, retryCount]);

  useEffect(() => {
    if (isOnline && retryCount > 0) {
      console.log("Connection restored. Attempting to store user data again.");
    }
  }, [isOnline, retryCount]);

  if (loading) {
    return <LoaderPage />;
  }

  return null;
};

export default AuthHandler;
