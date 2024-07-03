"use client";
import { fetchCategory } from "@/lib/httpsRequest";
import { SidebarProps } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import SidebarList from "./SidebarList";

interface CategoryMenuType {
  _id: string;
  title: string;
}

const SideBar = ({ isOpen, onClose }: SidebarProps) => {
  const [selecCate, setSelectCate] = useState("");

  const { data, isPending } = useQuery({
    queryKey: ["category"],
    queryFn: fetchCategory,
  });

  let content;
  if (isPending) {
    content = <p>Loading...</p>;
  }
  if (data) {
    content = data.map((cate: CategoryMenuType) => (
      <SidebarList
        id={cate._id}
        name={cate.title}
        key={cate._id}
        selecCate={selecCate}
        onselect={setSelectCate}
        onClose={onClose}
      />
    ));
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, width: "0px" }}
          animate={{
            opacity: 1,
            width: "300px",
            transition: { duration: 0.5, ease: [0, 0.71, 0.2, 1.01] },
          }}
          exit={{
            opacity: 0,
            width: "0px",
            transition: {
              delay: 0.2,
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          className="fixed w-[300px] md:w-[360px] h-full z-40 bg-bbred drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col pt-3 px-5">
            <div
              className="w-full flex justify-end hover:cursor-pointer "
              onClick={onClose}>
              <FaXmark size={40} color="white" />
            </div>
            {/* MENU - Title*/}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
              }}
              exit={{
                opacity: 0,
              }}
              className=" w-full flex mt-5 pb-5">
              <h1 className="text-white prompt-medium text-[24px] md:text-[28px]">
                หมวดหมู่สินค้า
              </h1>
            </motion.div>
          </div>
          {/* MENU - List*/}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
            }}
            className="overflow-y-scroll h-full"
            id="style-3">
            {content}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default SideBar;
