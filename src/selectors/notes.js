export const getNotes = (state, id) => {
  return { ...state[id], id };
};
