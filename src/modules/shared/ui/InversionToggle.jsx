// components/InversionToggle.jsx

import { useInversionToggle } from "../../../hooks/useInversionToggle";

const InversionToggle = () => {
  const { isInverted, toggleInversion } = useInversionToggle();

  return (
    <button
      onClick={toggleInversion}
      className="fixe bottom-4 right-4 z-50 p-3 rounded-full bg-gray-800 text-white shadow-lg"
      aria-label={isInverted ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isInverted ? "🌙" : "☀️"}
    </button>
  );
};

export default InversionToggle;
