import { NavbarProps } from "@/lib/types";
import Link from "next/link";
import { BiCategory, BiHome } from "react-icons/bi";
import { BsTelephone, BsTelephoneFill } from "react-icons/bs";
import { FcContacts } from "react-icons/fc";
import { HiHome } from "react-icons/hi2";
import { TbCategory2 } from "react-icons/tb";

const Menu = ({ onCategoryClick, setSelectCate }: NavbarProps) => {
  function onClick() {
    onCategoryClick();
  }
  return (
    <div className="flex justify-between font-bold relative z-20 mt-1 gap-2 ">
      <Link href="/catalog" onClick={() => setSelectCate("")}>
        <div className="flex bg-bbredsec justify-center items-center gap-2 px-2 py-1 rounded-md shadow-md text-[12px] cursor-pointer hover:bg-red-500 lg:text-[20px] lg:px-3 lg:py-2">
          <BiHome size="18px" />
          <p>หน้าแรก</p>
        </div>
      </Link>

      <div
        onClick={onClick}
        className="flex bg-bbredsec justify-center items-center gap-2 px-2 py-1 rounded-md shadow-md text-[12px] cursor-pointer hover:bg-red-500 lg:text-[20px] lg:px-3 lg:py-2">
        <TbCategory2 size="18px" />
        <p>หมวดหมู่สินค้า</p>
      </div>
      <Link href="/contact">
        <div className="flex bg-bbredsec justify-center items-center gap-2 px-2 py-1 rounded-md shadow-md text-[12px] cursor-pointer hover:bg-red-500 lg:text-[20px] lg:px-3 lg:py-2">
          <BsTelephoneFill />
          <p>ติดต่อเรา</p>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
