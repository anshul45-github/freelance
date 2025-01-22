"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

const Register = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = (values : Schema) => {
        console.log(values);
    }
    return (
        <div className='max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6'>
            <div>
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
                                    Who do you register as? (Client/Talent)
                                </FormDescription>
                            </FormItem>
                        )} />
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Register;