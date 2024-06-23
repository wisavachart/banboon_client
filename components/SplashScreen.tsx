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
    }, 3500);
  }, []);

  return (
    <>
      <div className=" bg-banboon w-full h-full flex justify-center items-center relative overflow-hidden">
        <AnimatePresence>
          {isloding && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 3 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}>
              <Image
                src="/banboon_sq.svg"
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
