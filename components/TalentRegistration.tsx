import { auth } from '@clerk/nextjs/server';
import { FaUpload } from 'react-icons/fa6';
import * as z from "zod";
import { CgProfile } from "react-icons/cg";

const Skill = ['Labor', 'Manufacturing', 'Agriculture', 'Construction', 'Maintenance'];

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Title is required",
    }),
});

export const TalentRegistrationForm = async () => {
  const { userId } = await auth();
//   if(!userId)
//     return redirect("/");

  return (
    <div className='p-6'>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-y-2'>
                <h1 className='flex items-center gap-2 text-2xl font-medium'>
                    <CgProfile />
                    {" "}Register!
                </h1>
            </div>
        </div>
    </div>
  );
}