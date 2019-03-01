import React from 'react';
import PropTypes from 'prop-types';

function AddNoteForm({ title, body, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" value={title} onChange={onChange} />
      <textarea name="body" value={body} onChange={onChange}></textarea>
      <button>Submit</button>
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
