import HomeNavbar from "@/components/HomeNavbar"

const HomeLayout = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <div className="h-[80px] w-full">
                <HomeNavbar />
            </div>
            {children}
        </div>
    )
}

export default HomeLayout;