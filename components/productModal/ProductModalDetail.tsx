import { Product } from "@/lib/types";

interface ProductModalDetailPROPS {
  producDetail: Product;
}

const ProductModalDetail = ({ producDetail }: ProductModalDetailPROPS) => {
  return (
    <div className="w-full flex flex-col mb-3 mt-3">
      <div className=" flex flex-col gap-3">
        <div
          className={
            producDetail.isNewArrival
              ? `bg-bbyellow max-w-[100px] text-center rounded-md text-white`
              : `bg-bbred max-w-[100px] text-center rounded-md text-white`
          }>
          <span
            className={
              producDetail.isNewArrival
                ? `text-bbred font-semibold`
                : `text-white`
            }>
            {producDetail.isNewArrival
              ? "สินค้าใหม่"
              : producDetail.isBestSeller
              ? "สินค้าขายดี"
              : null}
          </span>
        </div>
        <h1 className="text-[20px] prompt-bold">{producDetail.title}</h1>
      </div>
      <div className="flex flex-col mt-3 gap-3">
        <div>
          <h6 className="prompt-medium">
            ราคา : <span className="prompt-light">{producDetail.price}</span>
          </h6>
        </div>
        <div>
          <h6 className="prompt-medium">
            ประเภทสินค้า :
            {producDetail.category?.title ? (
              <span className="prompt-light">
                {producDetail.category.title}
              </span>
            ) : (
              <span className="prompt-light">no category</span>
            )}
          </h6>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="prompt-medium">รายละเอียดสินค้า</h1>
          <p className="prompt-light">{producDetail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModalDetail;
