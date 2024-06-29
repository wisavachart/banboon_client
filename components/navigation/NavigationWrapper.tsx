"use client";
import { useSidebar } from "@/hook/useSidebar";
import SideBar from "./SideBar";
import Topbar from "./Topbar";

const NavigationWrapper = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();
  return (
    <>
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Topbar onCategoryClick={openSidebar} />
    </>
  );
};

export default NavigationWrapper;
