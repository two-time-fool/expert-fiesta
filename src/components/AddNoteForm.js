import React from 'react';
import PropTypes from 'prop-types';

function AddNoteForm({ title, body, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" value={title} />
      <texarea name="body" value={body}></texarea>
    </form>
  );
}

AddNoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AddNoteForm;
