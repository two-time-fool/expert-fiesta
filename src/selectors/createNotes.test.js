import { getNoteTitle, getNoteBody } from './createNotes';

describe('notes selector', () => {
  it('gets a note title', () => {
    const state = {
      createNotes: {
        title: 'yolo420',
        body: 'expert-fiesta'
      }, 
      notes: {}
    };

    const selectedTitle = getNoteTitle(state, 1234);
    expect(selectedTitle).toEqual('yolo420');
  });

  it('gets a note body', () => {
    const state = {
      createNotes: {
        title: '',
        body: 'expert-fiesta'
      }, 
      notes: {}
    };

    const selectedBody = getNoteBody(state, 1234);
    expect(selectedBody).toEqual('expert-fiesta');
  });
});
