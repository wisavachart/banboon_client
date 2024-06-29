import { useState } from "react";

export const useSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => {
    console.log("close");
    setSidebarOpen(false);
  };
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
};
