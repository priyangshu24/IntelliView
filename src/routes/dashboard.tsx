import { Headings } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return <>
    <div className="flex justify-between w-full item-center">
        {/*Heading*/}
        <Headings
          title="Dashboard"
          description="Create and start your AI Mock Interview "
          />
        <Link to="/generate/create">
           <Button size={"sm"}>
            <Plus/> Add New
           </Button>
        </Link>
    </div>
        {/* centent section */}
    
  </>;
};
