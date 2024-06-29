import { NavbarProps } from "@/lib/types";

const Menu = ({ onCategoryClick }: NavbarProps) => {
  function onClick() {
    onCategoryClick();
    console.log("open side bar");
  }
  return (
    <div className="flex justify-between font-bold text-xl">
      <button>หน้าแรก</button>
      <button onClick={onClick}>หมวดหมู่สินค้า</button>
      <button>ติดต่อเรา</button>
    </div>
  );
};

export default Menu;
