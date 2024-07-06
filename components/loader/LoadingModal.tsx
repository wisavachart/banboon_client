import { motion } from "framer-motion";
import Image from "next/image";
const LoadingModal = () => {
  return (
    <motion.div
      className="bg-transparent"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 2.5,
        transition: {
          type: "spring",
          stiffness: 700,
          damping: 15,
          duration: 3,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}>
      <Image
        className="w-[100px] sm:w-[200px] bg-transparent"
        src="/baanboon_logo_v2.svg"
        width={200}
        height={200}
        alt="Picture of the author"
        priority
      />
    </motion.div>
  );
};

export default LoadingModal;
