import { ADD_NOTE, UPDATE_NOTE_BODY, UPDATE_NOTE_TITLE } from '../actions/notes';

const initialState = {
  title: '',
  body: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NOTE:
      return {
        ...state,
        note: action.payload
      };
    case UPDATE_NOTE_BODY:
      return {
        ...state,
        body: action.payload
      };
    case UPDATE_NOTE_TITLE:
      return {
        ...state, title: action.payload
      };
    default: 
      return state;
  }
}

