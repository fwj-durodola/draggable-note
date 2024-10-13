import NoteCard from "@components/NoteCard";
import { useContext } from "react";

import { NoteContext } from "@/context/NoteContext";

const NotePage = () => {
  const { notesData } = useContext(NoteContext);

  return (
    <div>
      {notesData?.length > 0 ? (
        notesData?.map((note) => {
          return <NoteCard key={note?.id} {...{ note }} />;
        })
      ) : (
        <p>No note</p>
      )}
    </div>
  );
};

export default NotePage;
