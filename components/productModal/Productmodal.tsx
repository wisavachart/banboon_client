"use client";
import useModalStore from "@/hook/useOpenmodal";
import { useGetproductByID } from "@/service/queries";
import { AnimatePresence, motion } from "framer-motion";
import LoadingModal from "../loader/LoadingModal";
import Modal from "../modal/Modal";
import ProductModalDetail from "./ProductModalDetail";
import ProductModalImage from "./ProductModalImage";
import { FaXmark } from "react-icons/fa6";

const Productmodal = () => {
  const { isOpen, closeModal, productID, fetchSwitch, setFetchoff } =
    useModalStore();
  const { data, isPending, isError, error } = useGetproductByID(
    productID,
    fetchSwitch
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal>
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: "12.5deg" }}
            animate={{ opacity: 1, scale: 1, rotate: "0deg" }}
            exit={{ opacity: 0, scale: 0, rotate: "0deg" }}
            className={` ${
              isPending ? "bg-transparent" : "bg-white "
            } rounded-md stage1:max-w-[320px] stage3:max-w-[480px] lg:max-w-[1000px]`}>
            {isPending ? (
              <LoadingModal />
            ) : isError ? (
              <p>Error...</p>
            ) : (
              <>
                <div className="flex flex-col lg:flex-row min-w-[320px] relative ">
                  <div
                    onClick={closeModal}
                    className="hidden lg:flex cursor-pointer absolute top-0 z-50 right-0 rounded-full px-1 py-1 mr-3 mt-3 hover:bg-gray-300">
                    <FaXmark size="22px" />
                  </div>
                  <div className="lg:flex-1 relative">
                    <div
                      onClick={closeModal}
                      className="flex lg:hidden cursor-pointer absolute top-0 z-50 right-0 rounded-full px-1 py-1 mr-3 mt-3 hover:bg-gray-300">
                      <FaXmark size="22px" />
                    </div>
                    <ProductModalImage
                      imgData={data?.media}
                      imgCover={data?.imageCover}
                    />
                  </div>
                  <div className="p-4 lg:p-8 md:min-w-[500px] lg:flex-1 lg:flex lg:flex-col lg:justify-between ">
                    <ProductModalDetail producDetail={data} />
                    <button
                      onClick={closeModal}
                      type="button"
                      className="bg-bbred hover:bg-bbredsec hidden lg:block  text-white p-2 rounded-md text-[14px]  ">
                      ปิดหน้าต่าง
                    </button>
                  </div>
                </div>
                <div className="w-full flex justify-end pb-4 pr-4 lg:hidden">
                  <button
                    onClick={() => {
                      setFetchoff();
                      closeModal();
                    }}
                    type="button"
                    className="bg-bbred hover:bg-bbredsec  text-white p-2 rounded-md text-[14px] ">
                    ปิดหน้าต่าง
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default Productmodal;
