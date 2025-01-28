"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const formSchema = z.object({
    name: z.string().min(1, {
      message: "Name must be atleast 1 character",
    }),
})

const Register = () => {
    const router = useRouter();
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
        },
    })

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values : z.infer<typeof formSchema>) => {
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if(response.ok) {
                router.push("/");
            } else {
                toast.error("Failed to register");
            }
        }
        catch(e) {
            toast.error("Failed to register");
        }
    };

    return (
        <div className='max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6'>
            <div className="w-full md:w-1/2 mt-20">
                <h1 className="text-2xl">
                    Register!
                </h1>
                <p className="text-sm text-slate-600">
                    Please enter your name:
                </p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl><Input disabled={isSubmitting} placeholder="Enter your name" {...field} /></FormControl>
                                <FormDescription>
                                    Avoid registering with a fake name. We want to know who you are!
                                </FormDescription>
                            </FormItem>
                        )} />
                        <Button type="submit" disabled={!isValid || isSubmitting}>
                            Continue
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Register;