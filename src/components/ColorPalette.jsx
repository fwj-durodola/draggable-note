import { useContext, useRef } from "react";
import { NoteContext } from "@/context/NoteContext";

const ColorPalette = ({ colorBg }) => {
  const { changeCardColorHandler } = useContext(NoteContext);

  const currentPalette = useRef();

  function handleClick() {
    const currentPaletteName = currentPalette?.current?.dataset?.name;

    changeCardColorHandler(currentPaletteName);
  }

  return (
    <span
      onClick={handleClick}
      ref={currentPalette}
      data-name={colorBg?.colorName}
      className="color-palette"
      style={{
        background: colorBg?.bg,
      }}
    ></span>
  );
};

export default ColorPalette;
