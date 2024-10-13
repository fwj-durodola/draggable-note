import ColorPalette from "@/components/ColorPalette";

const ColorPalettes = () => {
  const colorsBg = [
    {
      bg: "linear-gradient(0deg, #F5F5F7  50%, #B7B7B7 50%)",
      colorName: "grey",
    },
    {
      bg: "linear-gradient(0deg, #FFCFB3  50%, #E78F81 50%)",
      colorName: "pink",
    },
    {
      bg: "linear-gradient(0deg, #77CDFF  50%, #0D92F4 50%)",
      colorName: "blue",
    },
    {
      bg: "linear-gradient(0deg, #B6FFA1 50%, #72BF78 50%)",
      colorName: "green",
    },
    {
      bg: "linear-gradient(0deg, #243642 50%, #0B192C  50%)",
      colorName: "black",
    },
    {
      bg: "linear-gradient(0deg, #798645 50%, #626F47 50%)",
      colorName: "lemon",
    },
  ];

  return (
    <div className="color-palette-container">
      {colorsBg.map((colorBg, index) => {
        return <ColorPalette key={index} {...{ colorBg }} />;
      })}
    </div>
  );
};

export default ColorPalettes;
