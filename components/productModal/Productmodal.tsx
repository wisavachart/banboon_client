"use client";
import useModalStore from "@/hook/useOpenmodal";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../modal/Modal";
import ProductModalDetail from "./ProductModalDetail";
import ProductModalImage from "./ProductModalImage";

const Productmodal = () => {
  const { isOpen, closeModal } = useModalStore();
  return (
    <AnimatePresence>
      {isOpen && (
        <Modal>
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: "12.5deg" }}
            animate={{ opacity: 1, scale: 1, rotate: "0deg" }}
            exit={{ opacity: 0, scale: 0, rotate: "0deg" }}
            className="bg-white rounded-md stage1:max-w-[320px] ">
            <div className="flex flex-col relative">
              <ProductModalImage />
              <div className="p-4">
                <ProductModalDetail />
              </div>
            </div>
            <div className="w-full flex justify-end pb-4 pr-4">
              <button
                onClick={closeModal}
                type="button"
                className="bg-bbred text-white p-2 rounded-md text-[14px] ">
                ปิดหน้าต่าง
              </button>
            </div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default Productmodal;
