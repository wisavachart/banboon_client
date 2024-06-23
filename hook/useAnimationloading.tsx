import { useState } from "react";

const useAnimationloading = () => {
  const [isloding, setisloading] = useState(true);
  return { isloding, setisloading };
};

export default useAnimationloading;
