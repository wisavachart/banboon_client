import { AnimatePresence, motion } from "framer-motion";

const Circle = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, zIndex: 99 }}
        animate={{ opacity: 1, scale: 1, zIndex: 99 }}
        exit={{ opacity: 0, scale: 0, zIndex: 99 }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 15,
          duration: 2,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="bg-yellow-300 w-[350px] h-[350px] absolute -top-28 rounded-full flex justify-center items-center drop-shadow-xl z-10 ">
        <div className="flex flex-col absolute top-[120px] text-center">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: 5 }}
            transition={{
              repeat: Infinity,
              repeatDelay: 2,
              repeatType: "loop",
              type: "spring",
              stiffness: 700,
              damping: 5,
            }}
            className="italic text-5xl text-black prompt-extrabold-italic">
            สินค้าเริ่มต้น
          </motion.h1>
          <h1 className="prompt-extrabold-italic italic text-8xl text-red-600">
            20.-
          </h1>
          <h1 className="prompt-extrabold-italic inline-block italic text-5xl text-black">
            บาท
          </h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Circle;
