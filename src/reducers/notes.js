import shortid from 'shortid';
import { ADD_NOTE } from '../actions/notes';

const initialState = {
  notes: {
    [shortid.generate()]: {

    }
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NOTE:
      return {
        notes: {
          ...state.notes,
          [shortid.generate()]: action.payload
        }
      };
    default: 
      return state;
  }
}

