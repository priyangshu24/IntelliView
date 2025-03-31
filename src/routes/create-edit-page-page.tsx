import { ForMokInterview } from "@/components/form-moke-interview";
import { db } from "@/config/firebase.config";
import { Interview } from "@/types";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CreateEditPage = () => {
    const { interviewId } = useParams<{interviewId: string}>();
    const [ interview , setInterview ] = useState< Interview | null>(null)

    useEffect(() => {
        const fetchInterview = async () => {
            try{
                if (interviewId){
                    const interviewDoc = await getDoc(doc(db,"interviews", interviewId));
                    if (interviewDoc.exists()){
                        setInterview({...interviewDoc.data()} as Interview);
                    }
                }
            }
            catch (error) {
                console.error("Error fetching interview data:", error);
            }
        };
        fetchInterview();
    }, [interviewId]);
  return <div className="flex w-full my-4-col">
    <ForMokInterview initialData = {interview} />
  </div>;
}


