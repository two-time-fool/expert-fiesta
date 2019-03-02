import shortid from 'shortid';
import { ADD_NOTE } from '../actions/notes';

const initialState = {
  notes: {
    [shortid.generate()]: {
      title: 'Zuko',
      body: 'I\'m never happy!'
    },
    [shortid.generate()]: {
      title: 'Zuko & Sokka',
      body: 'Sokka: My first girlfriend turned into the moon... Zuko: That\'s rough buddy'
    },
    [shortid.generate()]: {
      title: 'Zuko',
      body: 'I\'m never happy!'
    },
    [shortid.generate()]: {
      title: 'Zuko',
      body: 'I\'m never happy!'
    },
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

