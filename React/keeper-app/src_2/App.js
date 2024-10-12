import React from "react";
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from './notes'

function createNote(notes){
  return <Note title={notes.title} content={notes.content}/>
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;

