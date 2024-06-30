import { NavbarProps } from "@/lib/types";

const Menu = ({ onCategoryClick }: NavbarProps) => {
  function onClick() {
    onCategoryClick();
    console.log("open side bar");
  }
  return (
    <div className="flex justify-between font-bold">
      <p>หน้าแรก</p>
      <button onClick={onClick}>หมวดหมู่สินค้า</button>
      <p>ติดต่อเรา</p>
    </div>
  );
};

export default Menu;
