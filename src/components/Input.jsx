import { useState } from "react";

const Input = ({ noteTitle, onChangeHandler, textColor }) => {
  const [headerTitle, setHeaderTitle] = useState(noteTitle || "");

  return (
    <input
      value={headerTitle}
      onChange={(e) => {
        if (e.target.value.length > 25) return;
        setHeaderTitle(e.target.value);
      }}
      
      onKeyUp={() => onChangeHandler(headerTitle)}
      style={{ color: textColor }}
    />
  );
};

export default Input;
