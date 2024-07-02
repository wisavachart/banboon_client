import { motion } from "framer-motion";

interface SideBarCategoryListProps {
  id: number;
  name: string;
  selecCate: number;
  onselect: (idCate: number) => void;
}

const SidebarList = ({
  id,
  name,
  onselect,
  selecCate,
}: SideBarCategoryListProps) => {
  function cateSelect(idCate: number) {
    onselect(idCate);
  }

  return (
    <motion.div
      onClick={() => cateSelect(id)}
      className={
        selecCate === id
          ? "flex relative bg-bbredsec custom_shadow_active hover:cursor-pointer pl-7 "
          : "flex relative  hover:cursor-pointer hover:bg-bbredsec pl-5"
      }>
      {selecCate === id && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className={
            selecCate === id
              ? "ml-4 my-2 custom_tab"
              : "ml-4 my-2 custom_tab_tran"
          }></motion.div>
      )}
      <h3 className="prompt-light text-[20px] px-4 py-5 text-white">{name}</h3>
    </motion.div>
  );
};

export default SidebarList;
