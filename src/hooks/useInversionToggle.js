// hooks/useInversionToggle.js
import { useState } from "react";
import { toggleColorInversion } from "../utils/darkModeToggle";

export const useInversionToggle = () => {
  const [isInverted, setIsInverted] = useState(false);

  const toggleInversion = () => {
    const nowInverted = toggleColorInversion();
    setIsInverted(nowInverted);
  };

  return { isInverted, toggleInversion };
};
