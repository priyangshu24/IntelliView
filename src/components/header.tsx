 import { cn } from "@/lib/utils"
 import { useAuth } from "@clerk/clerk-react"
import { Container } from "@/components/container"
import { LogoContainer } from "@/components/logo-container"
 const Header = () => {
  const { userId } = useAuth()
  return <header  className={cn("w-full border-b duration-150 transition-all ease-in-out")}>
    <Container>
      <div className="flex items-center gap-4 w-full">
        {/* Logo */}
        <LogoContainer />
        {/* Navigation */}
        <nav className ="hidden md:flex items-center gap-3">
          <ul className="flex items-center gap-6">

          </ul>
        </nav>

      </div>
    </Container>
  </header>
}
export default Header


