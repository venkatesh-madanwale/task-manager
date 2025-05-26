import React from "react";

type AddButtonProps = {
  onClick: () => void;
  label : string;
};

const AddButton: React.FC<AddButtonProps> = ({ onClick, label}) => {
  return (
    <button onClick={onClick} className="task-add-btn">
      {label}
    </button>
  );
};

export default AddButton;