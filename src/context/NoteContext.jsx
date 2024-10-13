import { createContext, useEffect, useRef, useState } from "react";
import {
  saveNote,
  deleteNote,
  fetchData,
  updateNote,
  overrideNotesNote,
} from "@/services/localStorageService";
import colortThemData from "@/database/color-theme.json";

export const NoteContext = createContext(null);

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState();
  const currentCardSelected = useRef(null);

  useEffect(() => {
    init();
  }, []);

  function init() {
    setNotes(fetchData());
  }

  function addNoteHandler(note) {
    const notes = saveNote(note);

    setNotes(notes);
  }

  function noteUpdateHandler(note) {
    const notesData = updateNote(note);
    setNotes(notesData);
  }

  function noteDeleteHandler(noteId) {
    const remainingNote = deleteNote(noteId);

    setNotes(remainingNote);
  }

  async function changeCardColorHandler(currentPaletteName) {
    const notesData = notes.map((note) => {
      if (currentCardSelected.current === note.id) {
        return {
          ...note,
          styles: {
            ...note.styles,
            colorTheme: {
              ...colortThemData[currentPaletteName],
            },
          },
        };
      }

      return note;
    });

    const latestNotes = overrideNotesNote(notesData);
    setNotes(latestNotes);
  }

  return (
    <NoteContext.Provider
      value={{
        notesData: notes,
        addNoteHandler,
        noteUpdateHandler,
        noteDeleteHandler,
        currentCardSelected,
        changeCardColorHandler,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
