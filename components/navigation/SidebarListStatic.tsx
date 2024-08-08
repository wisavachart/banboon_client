import { motion } from "framer-motion";
import Link from "next/link";

interface SideBarCategoryStaticListProps {
  id: string;
  name: string;
  tagname: string;
  selecCate: string;
  onselect: (idCate: string) => void;
  onClose: () => void;
}

const SideBarListStatic = ({
  id,
  name,
  tagname,
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
            ? "flex relative bg-bbredsec custom_shadow_active hover:cursor-pointer pl-7 items-center "
            : "flex relative  hover:cursor-pointer hover:bg-bbredsec pl-3  items-center"
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
                ? "ml-4 my-2 custom_tab "
                : "ml-4 my-2 custom_tab_tran "
            }></motion.div>
        )}

        <h3 className="prompt-light text-[20px] px-4 py-5 text-white">
          {name}
        </h3>
        <Tag name={tagname} />
      </motion.div>
    </Link>
  );
};

export default SideBarListStatic;

//TAG

type TagName = {
  name: string;
};
export const Tag = ({ name }: TagName) => {
  return (
    <div className="w-fit h-fit  px-2 py-1 rounded-md element">
      <p className="text-[12px] font-semibold text-black">{name}</p>
    </div>
  );
};
