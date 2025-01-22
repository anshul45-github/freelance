"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { GoHome } from "react-icons/go";
import { LuHandshake } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoImage from '@/public/Logo.png';
import { cn } from "@/lib/utils";


export function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <GoHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Hire",
      href: "/hire",
      icon: (
        <LuHandshake className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Provide Talent",
      href: "#",
      icon: (
        <IoBriefcaseOutline className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen z-50" >
      {/* Sidebar */}
      <Sidebar
        open={open}
        setOpen={setOpen}
        animate={true}
      >
        <SidebarBody className="justify-between gap-10 z-50">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Profile",
                href: "/profile",
                icon: (
                  <Image
                    src="/user.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

     
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-100"
    >
      <Image src={LogoImage} alt="Logo" className="h-7 w-[28px]" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre text-2xl"
      >
        Freelance
      </motion.span>
    </Link>
  );
};


export default SidebarDemo;

