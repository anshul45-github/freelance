"use client";
import Image from "next/image";
import NavbarRoutes from "./HomeNavbarRoutes";
import { useRouter } from "next/navigation";

const HomeNavbar = () => {
    const router = useRouter();
    const findTalent = () => {
        router.push("/hire");
    }
    return (
        <div className="p-4 border-b h-full flex justify-between items-center bg-white shadow-sm">
            <Image height={250} width={250} src="/Freelance.svg" alt="logo" />
            <button onClick={findTalent} className="mx-8 px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                Find Talent
            </button>
            <NavbarRoutes />
        </div>
    )
}

export default HomeNavbar;