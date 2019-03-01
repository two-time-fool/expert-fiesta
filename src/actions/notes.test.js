import { 
  addNote, 
  ADD_NOTE,
  updateNoteBody,
  UPDATE_NOTE_BODY,
  updateNoteTitle,
  UPDATE_NOTE_TITLE
} from './notes';

describe('notes action creators', () => {
  it('can add a note', () => {
    const action = addNote({
      title: 'fiesta-fools',
      body: 'want margaritas'
    });

    expect(action).toEqual({
      type: ADD_NOTE,
      payload: {
        title: 'fiesta-fools',
        body: 'want margaritas'
      }
    });
  });

  it('can update a note title', () => {
    const action = updateNoteTitle('yolo');

    expect(action).toEqual({
      type: UPDATE_NOTE_TITLE,
      payload: 'yolo'
    });
  });
});
