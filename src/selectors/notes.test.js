import { getNotes } from './notes';

describe('notes selector', () => {
  it('gets a list of notes', () => {
    const state = {
      1234: {
        title: 'yolo420',
        body: 'expert-fiesta'
      }
    };

    const selectedNotes = getNotes(state, 1234);
    expect(selectedNotes).toEqual({
      title: 'yolo420',
      id: 1234,
      body: 'expert-fiesta'
    });
  });
});
