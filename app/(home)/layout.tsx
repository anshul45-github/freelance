import HomeNavbar from "@/components/HomeNavbar"
import HomeSidebar from "@/components/HomeSidebar"

const HomeLayout = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="">
            <div className="fixed z-50">
                <HomeSidebar />
            </div>
            <div className="left-[60px] z-0">
                {children}
            </div>
        </div>
    )
}

export default HomeLayout;