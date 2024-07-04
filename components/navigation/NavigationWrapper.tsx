"use client";
import { useSidebar } from "@/hook/useSidebar";
import SideBar from "./SideBar";
import Topbar from "./Topbar";

const NavigationWrapper = () => {
  const { isSidebarOpen, openSidebar, closeSidebar, setSelectCate, selecCate } =
    useSidebar();
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <SideBar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          setSelectCate={setSelectCate}
          selecCate={selecCate}
        />
      </div>
      <Topbar onCategoryClick={openSidebar} setSelectCate={setSelectCate} />
    </>
  );
};

export default NavigationWrapper;
