import react from "react";
import SideBar from "../Component/Sidebar";
import HeaderDashboard from "../Pages/HeaderDashboard";

const LayoutDashboard = (props) => {
    return(
        <>
            <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
                <div className="flex items-start justify-between">
                    <SideBar/>
                    <div className="flex flex-col w-full md:space-y-4">
                        <HeaderDashboard/>
                    <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
                        {props.children}
                    </div>
                    </div>    
                </div>
            </main>
            </>
    )
}

export default LayoutDashboard;