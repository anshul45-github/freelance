"use client";
import { Filters } from "@/components/Filters";
import { TalentList } from "@/components/TalentList";
import { Boxes } from "@/components/ui/background-boxes";
import { ExpandableCardDemo } from "@/components/ui/expandable-card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { words } from "@/lib/model/words";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Hire = () => {
    const router = useRouter();
    const handleFreelanceClick = () => {
        router.push("/");
    }
    return (
        <div>
            <div className="h-[100vh] relative w-full overflow-hidden bg-slate-200 flex flex-col items-center justify-center rounded-lg">
              <div className="absolute inset-0 w-full h-full bg-slate-200 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
              <Boxes />
              <div className="flex flex-col items-center justify-center z-20">
                <div className="flex justify-center items-center px-4">
                  <p className="text-black font-semibold text-sm max-w-3xl mx-auto">
                    <button onClick={handleFreelanceClick}>Freelance</button>
                    {" > "}
                    <Link href="#">Hire</Link>
                  </p>
                </div>
                <TypewriterEffectSmooth words={words} />
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 z-20">
                <button className="mx-8 px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                  Hire Top Talents Now
                </button>
              </div>
            </div>   
            </div>   
            <div>
                <div className="font-sans px-8 pt-16 pb-8">
                    <h1 className="text-4xl font-semibold">Find Talent</h1>
                    <p className="text-neutral-700">Loda lassan, talent khojo</p>
                </div>
                <div>
                    <div className="p-6">
                        <Filters />
                        <TalentList />
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Hire;