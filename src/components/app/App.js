import React from 'react';
import 'normalize.css';
import AllNotes from '../../containers/AllNotes';
import AddNote from '../../containers/AddNote';

export default function App() {
  return (
    <>
      <h1>EXPERT-FIESTA</h1>
      <p>two-time-fools</p>
      <AddNote />
      <AllNotes />
    </>
  );
}
