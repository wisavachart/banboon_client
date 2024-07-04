import { useState } from "react";

export const useSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selecCate, setSelectCate] = useState("");

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
    selecCate,
    setSelectCate,
  };
};
