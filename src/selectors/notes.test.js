import { getNotes } from './notes';

describe('notes selectors', () => {
  it('selects the notes', () => {
    const state = {
      createNotes: {
        title: '',
        body: ''
      }, 
      notes: {
        1234: {
          title: 'tired',
          body: 'sleep'
        }
      }
    };

    const selectedNotes = getNotes(state);
    expect(selectedNotes).toEqual({
      1234: {
        title: 'tired',
        body: 'sleep'
      }
    });

  });
});
