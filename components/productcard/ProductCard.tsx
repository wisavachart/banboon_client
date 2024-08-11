import useModalStore from "@/hook/useOpenmodal";
import { Product } from "@/lib/types";
import Image from "next/image";

interface ProductCardPROP {
  productData: Product;
}

const ProductCard = ({ productData }: ProductCardPROP) => {
  const { openModal, setProductIdModal, setFetchOn } = useModalStore();
  function handleClick() {
    setFetchOn();
    setProductIdModal(productData._id);
    openModal();
  }

  return (
    <>
      <div
        className="outline-1 drop-shadow-md md:drop-shadow-lg rounded-[14px] cursor-pointer bg-white "
        onClick={handleClick}>
        {/* TOP */}
        <div className="relative ">
          <div className="w-[35px] absolute right-4 top-3">
            <img src="/bb_icon.svg" alt="icon" />
          </div>
          <div
            className={
              productData.isNewArrival
                ? `absolute left-0 bg-bbyellow px-3 rounded-tr-md rounded-br-md bottom-0`
                : `absolute left-0 bg-bbred px-3 rounded-tr-md rounded-br-md bottom-0`
            }>
            <span
              className={
                productData.isNewArrival
                  ? `text-bbred font-semibold stage1:text-[12px]`
                  : `text-white stage1:text-[12px]`
              }>
              {productData.isNewArrival
                ? "สินค้ามาใหม่"
                : productData.isBestSeller
                ? "สินค้าขายดี"
                : null}
            </span>
          </div>
          <div className="flex flex-col ">
            <div className="overflow-hidden  rounded-t-[14px] ">
              <Image
                src={
                  productData.imageCover ? productData.imageCover : "/img1.png"
                }
                width={350}
                height={350}
                alt="img"
              />
            </div>
          </div>
        </div>
        {/* Detail */}
        <div className="stage1:text-[13px] h-[160px] stage2:h-[160px] stage2:text-[16px] flex flex-col justify-between px-4 py-4 gap-2 bg-white rounded-b-[14px]">
          <div>
            {productData?.category?.title ? (
              <p className="leading-none mb-1 font-normal text-[14px] text-gray-400">
                {productData.category.title}
              </p>
            ) : (
              <h6>no category</h6>
            )}
            <h2 className=" prompt-semibold stage1:text-[14px] stage2:text-[16px] card_preview_title ">
              {productData.title}
            </h2>
          </div>
          <div className="flex justify-between ">
            <h1 className="stage1:text-[22px] stage2:text-xl prompt-extrabold text-xl">
              {productData.price} บาท
            </h1>
            <button
              className="stage1:hidden stage2:block px-2 py-1 bg-bbred text-white rounded-[5px]"
              onClick={handleClick}>
              <span className="text-[16px]">ดูสินค้า</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
