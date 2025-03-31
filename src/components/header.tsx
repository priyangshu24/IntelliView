import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "@/components/container";
import { LogoContainer } from "@/components/logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";

const Header = () => {
  const { userId } = useAuth();
  
  return (
    <header
      className={cn(
        "w-full border-b sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-200 ease-in-out shadow-sm"
      )}
    >
      <Container>
        <div className="flex items-center justify-between w-full h-12 md:h-14">
          {/* Logo - Made smaller */}
          <div className="flex items-center origin-left scale-90">
            <LogoContainer />
          </div>
          
          {/* Desktop Navigation - Reduced padding */}
          <nav className="items-center hidden mx-4 space-x-4 md:flex">
            <NavigationRoutes />
            
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200",
                    isActive && "text-blue-600 font-semibold"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>
          
          {/* Right side items - Reduced scale */}
          <div className="flex items-center gap-3 origin-right scale-95">
            {/* Profile */}
            <ProfileContainer />
            
            {/* Mobile toggle */}
            <div className="md:hidden">
              <ToggleContainer />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;