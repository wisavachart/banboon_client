"use client";

import { SidebarProps } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";

const category = [
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
  {
    id: 1,
    name: "หมวดหมู่สินค้าที่ 1",
  },
];
const SideBar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="fixed w-full md:w-72 h-full z-40  bg-red-600">
          <div className="flex flex-col pt-3 px-5">
            <div className="w-full flex justify-end check" onClick={onClose}>
              X
            </div>
            <div className="check">
              <h1>หมวดหมู่สินค้า</h1>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
