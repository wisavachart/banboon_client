"use client";
import useModalStore from "@/hook/useOpenmodal";
import Modal from "../modal/Modal";
import ProductModalDetail from "./ProductModalDetail";
import ProductModalImage from "./ProductModalImage";

const Productmodal = () => {
  const { isOpen, closeModal } = useModalStore();
  return (
    isOpen && (
      <Modal>
        <div className="bg-white rounded-md p-4 stage1:max-w-[320px] ">
          <div className="flex flex-col">
            <ProductModalImage />
            <ProductModalDetail />
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={closeModal}
              type="button"
              className="bg-bbred text-white p-2 rounded-md text-[14px]">
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      </Modal>
    )
  );
};

export default Productmodal;
