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
        className="drop-shadow-xl rounded-[14px] cursor-pointer bg-white "
        onClick={handleClick}>
        {/* TOP */}
        <div className="relative ">
          <div
            className={
              productData.isNewArrival
                ? `absolute left-5 bg-bbyellow px-3`
                : `absolute left-5 bg-bbred px-3`
            }>
            <span
              className={
                productData.isNewArrival
                  ? `text-bbred font-semibold`
                  : `text-white `
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
        <div className="stage1:text-[13px] h-[130px] stage2:h-[160px] stage2:text-[16px] flex flex-col justify-between px-4 py-4 gap-2 bg-white rounded-b-[14px]">
          <div>
            {" "}
            {productData?.category?.title ? (
              <h6>{productData.category.title}</h6>
            ) : (
              <h6>no category</h6>
            )}
            <h2 className="prompt-semibold stage1:text-[14px] stage2:text-lg card_preview_title">
              {productData.title}
            </h2>
          </div>
          <div className=" flex justify-between">
            <h1 className="stage1:text-[16px] stage2:text-xl prompt-extrabold text-xl">
              {productData.price} บาท
            </h1>
            <button
              className="px-2 py-1 bg-bbred text-white rounded-[5px]"
              onClick={handleClick}>
              <span className="stage1:text-[13px] stage2:text-[16px] ">
                ดูสินค้า
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
