"use client";
import useAnimationloading from "@/hook/useAnimationloading";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SplashScreen = () => {
  const router = useRouter();
  const { isloding, setisloading } = useAnimationloading();

  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      router.push("/catalog");
    }, 2000);
  }, []);

  return (
    <>
      <div className=" bg-bbred w-full h-full flex justify-center items-center relative overflow-hidden">
        <AnimatePresence>
          {isloding && (
            <motion.div
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
              }}
              exit={{ opacity: 0, transition: { ease: [0, 0.71, 0.2, 1.01] } }}>
              <Image
                className="w-[100px] sm:w-[200px]"
                src="/baanboon_logo_v2.svg"
                width={200}
                height={200}
                alt="Picture of the author"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SplashScreen;
