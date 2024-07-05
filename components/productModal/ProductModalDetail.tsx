const ProductModalDetail = () => {
  return (
    <div className="w-full  flex flex-col mb-3 mt-3">
      <div className=" flex flex-col gap-3">
        <div className="bg-bbred max-w-[100px] text-center rounded-md text-white">
          <span>สินค้าใหม่</span>
        </div>
        <h1 className="text-[20px] prompt-bold">ปากกาเจลหมึกลื่นมาก</h1>
      </div>
      <div className="flex flex-col mt-3 gap-3">
        <div>
          <h6 className="prompt-medium">
            ราคา : <span className="prompt-light">20 บาท</span>
          </h6>
        </div>
        <div>
          <h6 className="prompt-medium">
            ประเภทสินค้า : <span className="prompt-light">เครื่องเขียน</span>
          </h6>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="prompt-medium">รายละเอียดสินค้า</h1>
          <p className="prompt-light">
            ปากกาสไตล์ MUJI หมึกเยอะ !! ขนาด 0.5mm เขียนลื่น หมึกเยอะ
            ซื้อ1ด้ามเหมือนได้4 ปากกาเจล เครื่องเขียน ปากกาสี ปากกาลื่น
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductModalDetail;
