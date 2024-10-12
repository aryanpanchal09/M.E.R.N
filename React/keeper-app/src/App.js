import React, { useState } from "react";
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from "./CreateArea";
import notes from './notes'

function createNote(notes){
  return <Note title={notes.title} content={notes.content}/>
}

  function App() {
    const [notes,setNotes]=useState([])
    function addNote(newNote){
      setNotes(prevNotes=>{
        return [...prevNotes, newNote]
      })
    }

  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
        {notes.map((noteItem,index) => {
          return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
        })}
        <Footer />
      </div>
    );
  }  
    // <div>  
    //   <Header />
    //   {notes.map(createNote)}
    //   <Footer />
    // </div>

export default App;

