import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="check xs:w-[150px] max-w-[263px] rounded-[14px]">
      <div className="flex flex-col">
        <div className="overflow-hidden rounded-[14px] ">
          <Image
            className="xs:w-[150px] sm:w-[263px] md:w-[263px]"
            src="/product_img_test.jpg"
            width={263}
            height={263}
            alt="img"
          />
        </div>
        <div className="flex flex-col px-4 py-4 gap-2">
          <h6>เครื่องเขียน</h6>
          <h2 className="prompt-semibold text-lg">ที่รองเมาส์หมีแพนด้า</h2>
          <div className="flex justify-between">
            <h1 className="prompt-extrabold text-xl">20 บาท</h1>
            <button>
              <span>ดูสินค้า</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
