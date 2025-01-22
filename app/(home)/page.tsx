// import { HeroSection } from "@/components/HomeBackground";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* <HeroSection /> */}
      <div className="flex h-[100vh] bg-[#f3f3f1] items-center justify-center p-10">
        <div className="flex flex-col items-center justify-center h-[50%]">
        Discover the Best Talent, Anytime,
        <br/> Anywhere Hire verified experts in just a few clicks.
        </div>
       <div>
       <CardContainer className="inter-var">
          <CardBody className="bg-[#f3f3f1] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  w-auto sm:w-[30rem] h-auto rounded-xl p-6   ">
           
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
           
          </CardBody>
        </CardContainer>
       </div>
      </div>
      <div className="flex h-[100vh] bg-[#254f1a]"></div>
      <div className="flex h-[100vh] bg-[#e9c0e9]"></div>
    </div>
  );
}
