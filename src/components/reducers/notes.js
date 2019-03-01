import shortid from 'shortid';
import { ADD_NOTE } from '../actions/notes';

const initialState = {
  [shortid.generate()]: {
    title: 'expert-fiesta',
    body: 'two-time-fool'
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NOTE:
      return {
        ...state,
        note: action.payload
      };
  }
}

