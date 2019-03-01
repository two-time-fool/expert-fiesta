import reducer from './notes';
import { ADD_NOTE } from '../actions/notes';

describe('notes reducer', () => {
  it('can add a note', () => {
    const state = {
      notes: {},
      createNotes: {}
    };

    const addedNote = reducer(state, {
      type: ADD_NOTE,
      payload: {
        title: 'yolo420',
        body: 'when'
      }
    });

    expect(Object.values(addedNote.notes)).toEqual(
      [{
        title: 'yolo420',
        body: 'when'
      }]
    );
  });
});
