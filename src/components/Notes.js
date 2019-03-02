import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import './app/App.css';

function Notes({ notes }) {
  const notesList = Object.keys(notes.notes).map(id => {
    const title = Object.values(notes.notes[id])[0];
    const body = Object.values(notes.notes[id])[1];
    return (
      <li key={id}><Note title={title} body={body}/></li>
    );
  });
  return (
    <ul>{notesList}</ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.object.isRequired
};

export default Notes;
