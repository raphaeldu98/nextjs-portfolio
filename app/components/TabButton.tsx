import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  children: React.ReactNode;
  selectTab: () => void;
  active: boolean;
  className?: string;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ children, selectTab, active, className }) => {
  // Combining provided className with default styles and conditional active styles
  const buttonBaseClasses = "flex flex-col items-start transition duration-150 ease-in-out";
  const textClasses = `${"text-black"} font-semibold hover:text-blue-500`;
  const combinedButtonClasses = `${buttonBaseClasses} ${className ? className : ''}`;
  
  return (
    <button
      onClick={selectTab}
      className={combinedButtonClasses}
      aria-pressed={active} // Improve accessibility by indicating the state of the button
    >
      <p className={textClasses}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-blue-500 mt-2"
      ></motion.div>
    </button>
  );
};

export default TabButton;
