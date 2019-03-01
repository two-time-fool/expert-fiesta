import React from 'react';
import Notes from '../components/Notes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotes } from '../selectors/notes';

function AllNotes({ notes }) {
  return (
    <>
      <Notes notes={notes} />
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
