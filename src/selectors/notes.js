export const getNotes = (state, id) => {
  return { ...state[id], id };
};

export const getNoteTitle = (state, id) => {
  return state[id].title;
};
