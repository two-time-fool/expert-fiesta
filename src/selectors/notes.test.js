import { getNotes, getNoteTitle, getNoteBody } from './notes';

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

  it('gets a note title', () => {
    const state = {
      1234: {
        title: 'yolo420',
        body: 'expert-fiesta'
      }
    };

    const selectedTitle = getNoteTitle(state, 1234);
    expect(selectedTitle).toEqual('yolo420');
  });

  it('gets a note body', () => {
    const state = {
      1234: {
        title: 'yolo420',
        body: 'expert-fiesta'
      }
    };

    const selectedBody = getNoteBody(state, 1234);
    expect(selectedBody).toEqual('expert-fiesta');
  });
});
