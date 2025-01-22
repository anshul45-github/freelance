import { HeroSection } from "@/components/HomeBackground";
import { UserButton } from "@clerk/nextjs";
import HomeSidebar from "@/components/HomeSidebar"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
    </div>
  );
}
