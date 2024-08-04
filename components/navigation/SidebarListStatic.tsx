import { motion } from "framer-motion";
import Link from "next/link";

interface SideBarCategoryStaticListProps {
  id: string;
  name: string;
  selecCate: string;
  onselect: (idCate: string) => void;
  onClose: () => void;
}

const SideBarListStatic = ({
  id,
  name,
  onselect,
  selecCate,
  onClose,
}: SideBarCategoryStaticListProps) => {
  function cateSelect(idCate: string) {
    onselect(idCate);
  }

  return (
    <Link href={`/catalog/${id}`}>
      <motion.div
        onClick={() => {
          cateSelect(id);
          setTimeout(() => {
            onClose();
          }, 200);
        }}
        className={
          selecCate === id
            ? "flex relative bg-bbredsec custom_shadow_active hover:cursor-pointer pl-7 "
            : "flex relative  hover:cursor-pointer hover:bg-bbredsec pl-5 "
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

        <h3 className="prompt-light text-[20px] px-4 py-5 text-white">
          {name}
        </h3>
      </motion.div>
    </Link>
  );
};

export default SideBarListStatic;
