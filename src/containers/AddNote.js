import { connect } from 'react-redux';
import AddNoteForm from '../components/AddNoteForm';
import { addNote } from '../actions/notes';

const mapDispatchToProps = dispatch => ({
  onSubmit(title, body, event) {
    event.preventDefault();
    dispatch(addNote({ title, body }));
  }
});

export default connect(
  // mapStateToProps,
  mapDispatchToProps
)(AddNoteForm);
