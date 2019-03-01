import { UPDATE_NOTE_TITLE, UPDATE_NOTE_BODY } from '../actions/notes';
import reducer from './createNotes';

describe('create notes reducer', () => {
  it('can update a note title', () => {
    const state = {
      title: '',
      body: ''
    };

    const noteTitle = reducer(state, {
      type: UPDATE_NOTE_TITLE,
      payload: 'yolo420',
    });

    expect(noteTitle).toEqual({
      title: 'yolo420',
      body: ''
    });
  });


  it('can update a note body', () => {
    const state = {
      title: '',
      body: ''
    };

    const noteBody = reducer(state, {
      type: UPDATE_NOTE_BODY,
      payload: 'yolo420',
    });

    expect(noteBody).toEqual({
      title: '',
      body: 'yolo420'
    });
  });
});
