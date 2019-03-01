import React from 'react';
import Notes from '../components/Notes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotes } from '../selectors/notes';
import '../components/app/App.css';

function AllNotes({ notes }) {
  return (
    <>
      {notes && <Notes notes={notes} />}
    </>
  );
}

const mapStateToProps = state => ({
  notes: getNotes(state)
});

AllNotes.propTypes = {
  notes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps
)(AllNotes);
