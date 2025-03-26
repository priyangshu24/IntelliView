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
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
          {/* Logo */}
          <LogoContainer />
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            {/* <ul className="flex items-center gap-6"></ul> */}
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>
          <div className="ml-auto flex items-center gap-6">
            {/*profile*/}
            <ProfileContainer/>

            {/* mobile toggle section */}
            <ToggleContainer/>

            {/* ProfileContainer
            <ProfileContainer /> */}
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
