import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

const AddIcon = () => {
  const { notesData, addNoteHandler } = useContext(NoteContext);

  const newNoteData = {
    id: notesData?.length + 1 || 1,
    noteTitle: "Change Header Here",
    body: "Your note goes here...",
    styles: {
      position: {
        x: "120px",
        y: "120px",
      },
      colorTheme: {
        headerBgColor: "#E78F81",
        headerTextColor: "#fff",
        bodyBgColor: "#fdd7c1",
        bodyTextColor: "#000",
      },
    },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle-plus "
      onClick={() => addNoteHandler(newNoteData)}
      style={{ cursor: "pointer" }}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
};
export default AddIcon;
