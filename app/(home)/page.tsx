"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/ui/home-button";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="md:flex h-[100vh] bg-[rgb(120,0,22)] items-center justify-center p-10 pt-20">
        {/* Animated Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col gap-3 items-center justify-center text-center text-[rgb(233,192,233)] px-7"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeOut",
            }}
            className="text-5xl md:text-8xl font-bold md:px-12"
          >
          Discover the Best Talent, Anytime, Anywhere !!
          </motion.div>
          <br />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="text-2xl md:text-4xl"
          >
            Hire verified experts in just a few clicks.
          </motion.div>
        </motion.div>

        {/* Animated Card Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.05 }}
          className="p-7"
        >
          <CardContainer className="inter-var">
            <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  w-auto sm:w-[30rem] h-auto rounded-xl p-6">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/img1.jpg"
                  height="1000"
                  width="1000"
                  className="h-52 md:h-full w-full object-cover rounded-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>

      {/* Other Sections */}
      <div className="flex h-[100vh] bg-[#254f1a] items-center justify-center p-10">
        <div>
          <div className="flex flex-col gap-3 items-center justify-center text-center h-[50%] text-[#d2e823] text-5xl md:text-8xl font-bold px-12">
            Unlock Top Talent: 
            <br/>Your Perfect Match Awaits Here!
          </div>
          <div className="flex items-center justify-center py-12">
            <InteractiveHoverButton>Find Talent</InteractiveHoverButton>
          </div>
        </div>
        <div>
          <CardContainer className="inter-var">
              <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  w-auto sm:w-[30rem] h-auto rounded-xl p-6   ">
              
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
      <div className="flex h-[100vh] bg-[#e9c0e9] items-center justify-center">
        <div>
          <div className="flex flex-col gap-3 items-center justify-center text-center h-[50%] text-[#502274] text-5xl md:text-8xl font-bold px-12">
            Showcase Your Talent: <br /> Upload and Shine!
          </div>
          <div className="flex items-center justify-center py-12">
            <InteractiveHoverButton>Apply Now</InteractiveHoverButton>
          </div>
        </div>
  
        <div>
          <CardContainer className="inter-var">
              <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  w-auto sm:w-[30rem] h-auto rounded-xl p-6   ">
              
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
    </div>
  );
}
