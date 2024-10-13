import NotePage from "@/pages/NotePage";
import NoteProvider from "@/context/NoteContext";
import ColorPalettes from "@/components/ColorPalettes";
import AddIcon from "@/Icons/AddIcon";

function App() {
  return (
    <NoteProvider>
      <header className="container">
        <ColorPalettes />
        <AddIcon />
      </header>
      <NotePage />
    </NoteProvider>
  );
}

export default App;
