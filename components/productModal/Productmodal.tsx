"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Modal from "../modal/Modal";
import ProductModalDetail from "./ProductModalDetail";
import ProductModalImage from "./ProductModalImage";

const Productmodal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  return (
    modal && (
      <Modal>
        <div className="bg-white rounded-md p-4 stage1:max-w-[320px] ">
          <div className="flex flex-col">
            <ProductModalImage />
            <ProductModalDetail />
          </div>
          <div className="w-full flex justify-end">
            <Link href={pathname}>
              <button
                type="button"
                className="bg-bbred text-white p-2 rounded-md text-[14px]">
                ปิดหน้าต่าง
              </button>
            </Link>
          </div>
        </div>
      </Modal>
    )
  );
};

export default Productmodal;
