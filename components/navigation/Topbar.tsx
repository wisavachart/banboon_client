"use client";
import { useHideOnScrollDown } from "@/hook/useHideOnScrollDown";
import { NavbarProps } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Menu from "./Menu";
import Circle from "./circlepromotion/Circle";

const Topbar = ({ onCategoryClick, setSelectCate }: NavbarProps) => {
  const isVisible = useHideOnScrollDown();
  return (
    <AnimatePresence>
      <motion.nav
        exit={{ opacity: 0, scale: 100 }}
        className="mx-auto w-full fixed z-30">
        <div className="max-w-[1440px]  bg-bbred text-white content-center mx-auto pt-2 px-8 md:px-6 sm:pt-4 md:pt-4 relative">
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="absolute w-[1440px] mx-auto h-[300px] -top-10 left-0 overflow-hidden z-0">
              <img
                className="object-cover w-[1440px] "
                src="/bg_overlay.svg"
                alt=""
              />
            </motion.div>
          )}
          {/* Normal Menu */}
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 15,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="max-w-[1140px] content-center mx-auto flex justify-between">
              <div className="flex-col flex-1">
                <div>
                  <Menu
                    onCategoryClick={onCategoryClick}
                    setSelectCate={setSelectCate}
                  />
                </div>
                <div className="relative">
                  <Image
                    className="sm:w-full md:w-[600px]"
                    src="/shopname.svg"
                    width={600}
                    height={150}
                    alt="shopname"
                  />
                </div>
              </div>
              <div className="hidden md:flex lg:flex flex-1 justify-end relative">
                <Circle />
              </div>
            </motion.div>
          )}
          {!isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="max-w-[1140px] pt-5 content-center mx-auto flex justify-between items-center ">
              <div className="flex-1">
                <Menu
                  onCategoryClick={onCategoryClick}
                  setSelectCate={setSelectCate}
                />
              </div>
              <div className="flex-1 hidden md:flex justify-end items-center ">
                <img src="/shopname_mini.svg" alt="" />
              </div>
            </motion.div>
          )}
        </div>
        <div className="w-[1440px] mx-auto overflow-hidden">
          <div className="content-center flex mx-auto w-[1880px]">
            <img src="/path.svg" alt="" />
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Topbar;
