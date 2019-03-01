import React from 'react';
import 'normalize.css';
import AllNotes from '../../containers/AllNotes';
import AddNote from '../../containers/AddNote';
import './App.css';

export default function App() {
  return (
    <>
      <img src="https://wallpapercave.com/wp/THWKvXb.jpg"/>
      <header>
        <h1>LAST AIRBENDER NOTES</h1>
        <p>Your chi can warm you.</p>
      </header>
      <AddNote />
      <AllNotes />
    </>
  );
}
