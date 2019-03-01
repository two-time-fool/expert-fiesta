import { addNote, ADD_NOTE } from './notes';

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
});
