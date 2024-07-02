import { NavbarProps } from "@/lib/types";

const Menu = ({ onCategoryClick }: NavbarProps) => {
  function onClick() {
    onCategoryClick();
  }
  return (
    <div className="flex justify-between font-bold relative z-20">
      <p className="bg-bbredsec px-3 py-2 rounded-md shadow-md cursor-pointer hover:bg-red-500">
        หน้าแรก
      </p>
      <p
        className="bg-bbredsec hover:bg-red-500 px-3 py-2 rounded-md shadow-md cursor-pointer"
        onClick={onClick}>
        หมวดหมู่สินค้า
      </p>
      <p className="bg-bbredsec hover:bg-red-500 px-3 py-2 rounded-md shadow-md cursor-pointer">
        ติดต่อเรา
      </p>
    </div>
  );
};

export default Menu;
