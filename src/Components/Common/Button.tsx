import React from "react";

interface ButtonProps {
  B_name: string;
  ClickToAction: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  B_name,
  ClickToAction,
}) => {
  return (
    <div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        onClick={ClickToAction}
      >
        {B_name}
      </button>
    </div>
  );
};
