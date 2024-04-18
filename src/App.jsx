import { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = 'http://localhost:3001/api/notes'



const Nombre = () => {
  return <h1 style={{color: 'purple', fontSize: '24px', textDecoration: 'underline'}}>Notes</h1>;
};

const Lista = ({notes}) => {
  return (
    <ul style={{padding: '20px', backgroundColor: 'lightgray'}}>
      {notes.map((note) => (
        <li key={note.id} style={{marginBottom: '8px', borderBottom: '1px solid gray', padding: '4px'}}>
          {note.content}</li>
      ))}
    </ul>
  );
};

const Formulario = ({newNote, handleNoteChange, addNote}) => {
  return (
    <form  onSubmit={addNote} style={{marginTop: '20px'}}>
      <input value={newNote} onChange={handleNoteChange} style={{width: '93%', padding: '8px', fontSize: '16px'}} />
      <button type="submit" style={{padding: '8px 16px', fontSize: '16px', backgroundColor: 'blue', color: 'white'}}>save</button>
    </form>
  );
};

const App = () => {
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString(),  // Formato ISO para compatibilidad con SQL
    };

    axios
      .post(baseUrl, noteObject)
      .then((response) => {
        console.log(response);
        setNotes(notes.concat(response.data))
        setNewNote("");
      });
  };

  return (
    <div>
      <Nombre />
      <Lista notes={notes} />
      <Formulario
        newNote={newNote}
        handleNoteChange={handleNoteChange}
        addNote={addNote}
      />
    </div>
  );
};

export default App;