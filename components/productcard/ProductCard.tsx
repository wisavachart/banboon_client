import useModalStore from "@/hook/useOpenmodal";
import Image from "next/image";
// import Link from "next/link";
const ProductCard = () => {
  const { openModal } = useModalStore();
  return (
    <div className="drop-shadow-xl rounded-[14px]">
      <div className="relative flex-1">
        <div className="absolute left-5 bg-bbred px-3">
          <span className="text-white">สินค้ามาใหม่</span>
        </div>
        <div className="flex flex-col">
          <div className="overflow-hidden  rounded-t-[14px] ">
            <Image
              src="/product_img_test.jpg"
              width={350}
              height={350}
              alt="img"
            />
          </div>
          <div className="stage1:text-[13px] stage2:text-[16px] flex flex-col px-4 py-4 gap-2 bg-white rounded-b-[14px] ">
            <h6>เครื่องเขียน</h6>
            <h2 className="prompt-semibold stage1:text-[14px] stage2:text-lg">
              ที่รองเมาส์หมีแพนด้า
            </h2>
            <div className="flex justify-between">
              <h1 className="stage1:text-[16px] stage2:text-xl prompt-extrabold text-xl">
                20 บาท
              </h1>
              <button
                className="px-2 py-1 bg-bbred text-white rounded-[5px]"
                onClick={openModal}>
                <span className="stage1:text-[13px] stage2:text-[16px] ">
                  ดูสินค้า
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
