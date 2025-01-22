"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(1, {
      message: "Name must be atleast 1 character long",
    }),
  })

const Register = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
        },
      })

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = (values : z.infer<typeof formSchema>) => {
        console.log(values);
    }
    return (
        <div className='max-w-5xl mx-auto flex md:items-center h-full p-6'>
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
                                    Who do you register as? (Client/Talent)
                                </FormDescription>
                            </FormItem>
                        )} />
                        <div className="flex items-center gap-4">
                            <Button type="button" variant={"default"} disabled={!isValid || isSubmitting}>
                                Join as Talent
                            </Button>
                            <Button type="submit" variant={"default"} disabled={!isValid || isSubmitting}>
                                Join as Client
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Register;