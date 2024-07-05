import Image from "next/image";

const Footer = () => {
  const location =
    "บ้านบุญ (Baanboon Superstore) 102/197 ถ.เคหะร่มเกล้า แขวงคลองสองต้นนุ่น เขตลาดกระบัง กรุงเทพฯ 10520";
  return (
    <div className="max-w-[1440px] bg-bbred mx-auto px-6 py-4 xl:py-8">
      <div className="flex flex-wrap mb-3 gap-3 justify-around sm:justify-between sm:flex-nowrap lg:max-w-[1140px] lg:mx-auto">
        <div>
          <Image
            src="/footer_logo.svg"
            width={75}
            height={130}
            alt="footer_logo"
          />
        </div>
        <div className="flex flex-col text-white text-[14px] justify-evenly xl:text-[16px]">
          <h6>หน้าแรก</h6>
          <h6>หมวดหมู่สินค้า</h6>
          <h6>ติดต่อเรา</h6>
        </div>
        {/* LOACATION <=SM > */}
        <div className="text-center sm:hidden ">
          <h6 className="text-[12px]  text-white prompt-extralight">
            {location}
          </h6>
        </div>
        {/* LOACATION SM>= */}
        <div className="hidden sm:flex flex-col justify-between items-end">
          <h6 className="text-[14px] text-white xl:text-[16px]">
            บ้านบุญ (Baanboon Superstore)
          </h6>
          <h6 className="text-[14px] text-white xl:text-[16px]">
            102/197 ถ.เคหะร่มเกล้า
          </h6>
          <h6 className="text-[14px] text-white xl:text-[16px]">
            แขวงคลองสองต้นนุ่น เขตลาดกระบัง
          </h6>
          <h6 className="text-[14px] text-white xl:text-[16px]">
            กรุงเทพฯ 10520
          </h6>
        </div>
      </div>
      <div className="customline mb-3 lg:max-w-[1140px] lg:mx-auto"></div>
      <div className="text-center sm:text-left lg:max-w-[1140px] lg:mx-auto">
        <h6 className="text-white text-[12px] sm:text-[14px] prompt-extralight xl:text-[16px]">
          © บ้านบุญซุปเปอร์สโตร์ ร้านสินค้าเริ่มต้น 20 บาท
        </h6>
      </div>
    </div>
  );
};

export default Footer;
