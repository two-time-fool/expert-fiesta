import React from 'react';
import PropTypes from 'prop-types';
import './app/App.css';

function AddNoteForm({ title, body, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" value={title} onChange={onChange} placeholder='Title' />
      <textarea name="body" value={body} onChange={onChange} placeholder='Note'></textarea>
      <button>SUBMIT</button>
    </form>
  );
}

AddNoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AddNoteForm;
