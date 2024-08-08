"use client";
import { SidebarProps } from "@/lib/types";
import { useGetCategory } from "@/service/queries";
import { AnimatePresence, motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import SidebarList from "./SidebarList";
import SideBarListStatic from "./SidebarListStatic";
import { TbCategory2 } from "react-icons/tb";

const SideBar = ({
  isOpen,
  onClose,
  selecCate,
  setSelectCate,
}: SidebarProps) => {
  const category = useGetCategory();
  let loadingsideBarcontent;
  if (category.isPending) {
    loadingsideBarcontent = <p>Loading...</p>;
  }
  if (category.isError) {
    return <p>error</p>;
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
          className="fixed w-[300px] md:w-[360px] h-full left-0 z-40 bg-bbred drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col pt-3 px-5">
            <div
              className="w-full flex justify-start hover:cursor-pointer "
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
              className=" w-full flex items-center gap-2 mt-5 pb-5">
              <TbCategory2 size="24px" color="white" />
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
            className="scrollable-menu"
            id="style-3">
            <SideBarListStatic
              id="bestseller"
              name="สินค้าขายดี"
              tagname="Best Seller"
              selecCate={selecCate}
              onselect={setSelectCate}
              onClose={onClose}
            />
            <SideBarListStatic
              id="newavailable"
              name="สินค้ามาใหม่"
              tagname="New Arrival"
              selecCate={selecCate}
              onselect={setSelectCate}
              onClose={onClose}
            />
            {category.data
              ?.slice()
              .sort((a, b) => a.title.localeCompare(b.title, "th"))
              .map((item) => (
                <SidebarList
                  key={item._id}
                  id={item._id}
                  name={item.title}
                  selecCate={selecCate}
                  onselect={setSelectCate}
                  onClose={onClose}
                />
              ))}
            {loadingsideBarcontent}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default SideBar;
