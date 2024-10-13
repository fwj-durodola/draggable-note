import { bodyParser } from "../utils/_helpers";
import { STORAGE_KEY } from "../utils/constants";

export const fetchData = () => {
  const notes = bodyParser(localStorage.getItem(STORAGE_KEY));

  return !notes ? [] : notes;
};

export const saveNote = (newNote) => {
  const oldNotes = fetchData();

  localStorage.setItem(STORAGE_KEY, JSON.stringify([...oldNotes, newNote]));

  const notes = bodyParser(localStorage.getItem(STORAGE_KEY));

  return !notes ? [] : notes;
};

export const updateNote = (updateData) => {
  const oldNotes = fetchData();

  const updatedNotes = oldNotes?.map((note) => {
    if (note.id === updateData.id) return updateData;

    return note;
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));

  const notes = bodyParser(localStorage.getItem(STORAGE_KEY));

  return !notes ? [] : notes;
};

export const deleteNote = (noteId) => {
  const notes = bodyParser(localStorage.getItem(STORAGE_KEY));

  const remainingNotes = notes.filter((note) => note.id !== noteId);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(remainingNotes));

  const latestNotes = bodyParser(localStorage.getItem(STORAGE_KEY));

  return !notes ? [] : latestNotes;
};

export const overrideNotesNote = (notes) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));

  const objNotes = bodyParser(localStorage.getItem(STORAGE_KEY));

  return !objNotes ? [] : objNotes;
};
