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
      title: 'Uncle Iroh',
      body: 'Who knew floating on a piece of driftwood for three weeks, with no food or water, and sea vultures waiting to pluck out your liver, could make one SO tense!'
    },
    [shortid.generate()]: {
      title: 'Uncle Iroh',
      body: 'I know you\'re not supposed to cry over spilled tea, but [cries] it’s just so sad!'
    },
    [shortid.generate()]: {
      title: 'Uncle Iroh',
      body: 'You’re looking at the rare white dragon bush. Its leaves make a tea so delicious it’s *heartbreaking!* That, or it’s the white jade bush, which is poisonous...'
    },
    [shortid.generate()]: {
      title: 'Sokka',
      body: 'Okay, karma person or thing… whoever’s in charge of this stuff…if I can just get out of this situation alive, I will give up meat…and sarcasm. Okay? That’s all I got. That’s pretty much my whole identity. Sokka: the meat and sarcasm guy. But I’m willing to be Sokka: the veggies and straight-talk fellow. Deal? [Aang runs into view] Aang! Thank goodness! Have you got any meat?'
    },
    [shortid.generate()]: {
      title: 'Zuko',
      body: 'The scar\'s NOT on the wrong side!'
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

