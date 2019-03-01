import { combineReducers } from 'redux';
import notes from './notes';
import createNotes from './createNotes';

export default combineReducers({
  notes,
  createNotes
});
