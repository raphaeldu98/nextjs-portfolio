import React from "react";

// Define a type for the props
interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void; // Assuming onClick is a function that takes a string argument
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-blue-500 text-white"
    : "bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white";
  return (
    <button
      className={`${buttonStyles} rounded-full px-5 py-2 text-lg cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
