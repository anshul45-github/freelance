"use client";
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const NavbarRoutes = () => {
    const router = useRouter();
    const handleLogIn = () => {
        router.push("/sign-in");
    }
    const handleSignUp = () => {
        router.push("/sign-up");
    }
    return (
        <div className="flex gap-x-2 ml-auto">
            <SignedOut>
                <Button className="bg-[#1ED760]" onClick={handleLogIn} variant={"default"}>Login</Button>
                <Button className="bg-[#1ED760]" onClick={handleSignUp} variant={"default"}>Sign Up</Button>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}

export default NavbarRoutes;