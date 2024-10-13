import { useContext, useEffect, useRef, useState } from "react";

import DeleteIcon from "@/Icons/DeleteIcon";
import SavingIcon from "@/Icons/SavingIcon";
import { setNewOffsetCard } from "@/utils/_helpers";
import { NoteContext } from "../context/NoteContext";
import { autoHeight } from "../utils/_helpers";
import TextArea from "./TextArea";
import Input from "./Input";

const NoteCard = ({ note }) => {
  const {
    id,
    noteTitle,
    body,
    styles: { position, colorTheme },
  } = note;

  const { noteUpdateHandler, currentCardSelected } = useContext(NoteContext);

  const [isSaving, setIsSaving] = useState(false); // Moved isSaving into NoteCard

  const headerInputRef = useRef(null);
  const bodyTextareaRef = useRef(null);
  const selectedNoteCard = useRef(null);

  const mousePosition = { x: 0, y: 0 };

  function mouseDownHandler(e) {
    if (e.target === bodyTextareaRef.current) return;

    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  }

  function mouseMoveHandler(e) {
    const mouseMoveDirection = {
      x: mousePosition.x - e.clientX,
      y: mousePosition.y - e.clientY,
    };

    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;

    const newPosition = setNewOffsetCard(selectedNoteCard, mouseMoveDirection);

    noteUpdateHandler({
      ...note,
      styles: { ...note.styles, position: { ...newPosition } },
    });
  }

  function mouseUpHandler() {
    document.removeEventListener("mousedown", mouseDownHandler);
    document.removeEventListener("mousemove", mouseMoveHandler);
  }

  function onInputHandler() {
    autoHeight(bodyTextareaRef);
    setIsSaving(true); // Set isSaving to true when changes are made

    noteUpdateHandler({
      ...note,
      body: bodyTextareaRef.current.value.trim(),
    });

    // Simulate saving delay
    setTimeout(() => setIsSaving(false), 2000); // Set isSaving to false after saving
  }

  function onChangeHandler(newHeaderTitle) {
    setIsSaving(true); // Set isSaving to true when header changes
    noteUpdateHandler({
      ...note,
      noteTitle: newHeaderTitle,
    });

    // Simulate saving delay
    setTimeout(() => setIsSaving(false), 2000); // Set isSaving to false after saving
  }

  useEffect(() => {
    autoHeight(bodyTextareaRef);
  }, []);

  return (
    <div
      className="note-card"
      onMouseDown={mouseDownHandler}
      ref={selectedNoteCard}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onClick={() => {
        currentCardSelected.current = id;
      }}
    >
      <header
        className="note-card-header"
        style={{
          backgroundColor: colorTheme.headerBgColor,
          color: colorTheme.headerTextColor,
        }}
      >
        <Input
          {...{
            noteTitle,
            headerInputRef,
            onChangeHandler,
            textColor: colorTheme.headerTextColor,
          }}
        />
      </header>
      <main style={{ backgroundColor: colorTheme.bodyBgColor }}>
        <TextArea
          {...{
            onInputHandler,
            body,
            bodyTextareaRef,
            textColor: colorTheme.bodyTextColor,
          }}
        />
      </main>
      <footer
        className="note-card-footer"
        style={{
          backgroundColor: colorTheme.headerBgColor,
          color: colorTheme.headerTextColor,
        }}
      >
        <DeleteIcon noteId={id} />
        <SavingIcon isSaving={isSaving} />
      </footer>
    </div>
  );
};

export default NoteCard;
