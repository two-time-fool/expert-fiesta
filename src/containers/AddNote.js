import { connect } from 'react-redux';
import React from 'react';
import AddNoteForm from '../components/AddNoteForm';
import PropTypes from 'prop-types';
import { addNote, updateNoteTitle, updateNoteBody } from '../actions/notes';
import { getNoteTitle, getNoteBody } from '../selectors/notes';

function AddNote({ title, body, onChange, onSubmit }) {
  return (
    <AddNoteForm
      title={title}
      body={body}
      onChange={onChange}
      onSubmit={onSubmit.bind(null, title, body)}
    />
  );
}

const mapStateToProps = (state, props) => ({
  title: getNoteTitle(state, props.notes.id),
  body: getNoteBody(state, props.notes.id)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      title: updateNoteTitle,
      body: updateNoteBody
    };
    dispatch(factoryMethod[target.name](target.value));
  },
  onSubmit(title, body, event) {
    event.preventDefault();
    dispatch(addNote({ title, body }));
  }
});

AddNote.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNote);
