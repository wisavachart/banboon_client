"use client";
import { useSidebar } from "@/hook/useSidebar";
import SideBar from "./SideBar";
import Topbar from "./Topbar";

const NavigationWrapper = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </div>
      <Topbar onCategoryClick={openSidebar} />
    </>
  );
};

export default NavigationWrapper;
