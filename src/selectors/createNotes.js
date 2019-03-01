export const getNoteTitle = (state) => {
  console.log(state);
  return state.createNotes.title;
};

export const getNoteBody = (state) => {
  return state.createNotes.body;
};
