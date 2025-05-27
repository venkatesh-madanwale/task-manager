import React from "react";

type AddButtonProps = {
  onClick: () => void;
  label : string;
}

const AddButton: React.FC<AddButtonProps> = ({label, ...props}) => {
  return (
    <button {...props}>{label}</button> 
  )
}

export default AddButton