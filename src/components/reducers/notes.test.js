import reducer from './notes';

describe('notes reducer', () => {
  it('can add a note', () => {
    const state = {};

    const addedNote = reducer(state, {
      type: 'ADD_NOTE',
      payload: {
        title: 'yolo420',
        body: 'when'
      }
    });

    expect(addedNote).toEqual({
      note: {
        title: 'yolo420',
        body: 'when'
      }
    });
  });
});
