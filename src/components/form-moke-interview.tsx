import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"

import { Interview } from "@/types"
import { CustomBreadCrumb } from "./custom-bread-crumb";
import { useEffect , useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Headings } from "./heading";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

interface FormMockInterviewProps {
    initialData : Interview | null
}

const formSchema = z.object({
    position: z
    .string()
    .min(1, "Position is required")
    .max(100, "Position must be 100 characters or less"),
  description: z.string().min(10, "Description is required"),
  experience: z.coerce
    .number()
    .min(0, "Experience cannot be empty or negative"),
  techStack: z.string().min(1, "Tech stack must be at least a character"),
});

type FormData = z.infer<typeof formSchema>;
export const ForMokInterview = ({initialData}: FormMockInterviewProps) => {
    
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {},
    })
    
    const { isValid, isSubmitting } = form.formState;
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { userId } = useAuth();

    const title = initialData
    ? initialData.position
    : "Create a new mock interview";

    const breadCrumpPage = initialData ? initialData?.position : "Create";
    const actions = initialData ? "Save Changes" : "Create";
    const toastMessage = initialData
      ? { title: "Updated..!", description: "Changes saved successfully..." }
      : { title: "Created..!", description: "New Mock Interview created..." };

    const onSubmit = async (data: FormData) => {
        try{
            setLoading(true);
        }
        catch (error) {
            console.log(error);
            toast.error("error..",{
                description: "Something went wrong. Plese try again...",
            })
        }finally{
            setLoading(false);}
    }
    
    useEffect (() => {
        if (initialData) {
            form.reset({
                position : initialData.position,
                description: initialData.description,
                experience: initialData.experience,
                techStack: initialData.techStack,
            })
        }
    },[initialData, form])
  return <div className= "flex-col w-full space-y-4">
    <CustomBreadCrumb
      breadCrumbPage={breadCrumpPage}
      breadCrumpItems={[{ label: "Mock Interview", link: "/generate" }]}
    
    />
    <div className="flex items-center justify-between w-full">
        <Headings title={title} isSubHeading/>
        
        {initialData && (
            <Button>
                <Trash2 className="text-red-500 min-w-4 min-h-4"/>
            </Button>
        )}
     </div>
     
     <Separator className="my-4"/>
     
     <div className="my-6"></div>

     <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}></form>
     </FormProvider>
  </div>
};


