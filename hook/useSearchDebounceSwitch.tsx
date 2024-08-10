import { useEffect, useState } from "react";

const useSearchDebounceSwitch = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);
  const [switchOn, setSwitchOn] = useState<boolean>(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value !== "") {
        setSwitchOn(true);
        setDebouncedValue(value);
      } else {
        setSwitchOn(false);
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return { debouncedValue, switchOn };
};

export default useSearchDebounceSwitch;
