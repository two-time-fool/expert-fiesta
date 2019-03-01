export const ADD_NOTE = 'ADD_NOTE';
export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note
});

export const UPDATE_NOTE_TITLE = 'UPDATE_NOTE_TITLE';
export const updateNoteTitle = title => ({
  type: UPDATE_NOTE_TITLE,
  payload: title
});

export const UPDATE_NOTE_BODY = 'UPDATE_NOTE_BODY';
export const updateNoteBody = body => ({
  type: UPDATE_NOTE_BODY,
  payload: body
});
