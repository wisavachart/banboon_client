import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="drop-shadow-xl rounded-[14px]">
      <div className="relative flex-1">
        <div className="absolute left-5 bg-bbred px-3">
          <span className="text-white">สินค้ามาใหม่</span>
        </div>
        <div className="flex flex-col">
          <div className="overflow-hidden  rounded-[14px] ">
            <Image
              src="/product_img_test.jpg"
              width={350}
              height={350}
              alt="img"
            />
          </div>
          <div className="flex flex-col px-4 py-4 gap-2 bg-white ">
            <h6>เครื่องเขียน</h6>
            <h2 className="prompt-semibold text-lg">ที่รองเมาส์หมีแพนด้า</h2>
            <div className="flex justify-between">
              <h1 className="prompt-extrabold text-xl">20 บาท</h1>
              <button className="px-2 py-1 bg-bbred text-white rounded-[5px]">
                <span className="text-[16px]">ดูสินค้า</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
