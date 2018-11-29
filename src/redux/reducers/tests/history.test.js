import {
  history,
  defaultHistoryState,
} from '../history';
import {
  HISTORY_BACK,
  HISTORY_FORWARD,
} from '../../actions/history';

describe('Reducer: signUp.history initial state', () => {
  it('should return default initial state', () => {
    expect(defaultHistoryState).toEqual({
      back: [],
      current: null,
      forward: [],
    });
  });
});

describe('Reducer: signUp.history reducer', () => {
  it('should return initial state by default', () => {
    expect(
      history(defaultHistoryState, {
        type: 'ANOTHER_ACTION',
      })
    ).toEqual(defaultHistoryState);
  });

  it('should go back', () => {
    expect(
      history(
        {
          back: [1, 2],
          current: 3,
          forward: [4, 5],
        },
        {
          type: HISTORY_BACK,
        }
      )
    ).toEqual({
      back: [1],
      current: 2,
      forward: [3, 4, 5],
    });

    expect(
      history(
        {
          back: [1],
          current: 2,
          forward: [3, 4, 5],
        },
        {
          type: HISTORY_BACK,
        }
      )
    ).toEqual({
      back: [],
      current: 1,
      forward: [2, 3, 4, 5],
    });
  });

  it('should do nothing if back history is empty', () => {
    expect(
      history(
        {
          back: [],
          current: 1,
          forward: [2, 3, 4, 5],
        },
        {
          type: HISTORY_BACK,
        }
      )
    ).toEqual({
      back: [],
      current: 1,
      forward: [2, 3, 4, 5],
    });
  });

  it('should go forward', () => {
    expect(
      history(
        {
          back: [1, 2],
          current: 3,
          forward: [4, 5],
        },
        {
          type: HISTORY_FORWARD,
        }
      )
    ).toEqual({
      back: [1, 2, 3],
      current: 4,
      forward: [5],
    });

    expect(
      history(
        {
          back: [1, 2, 3],
          current: 4,
          forward: [5],
        },
        {
          type: HISTORY_FORWARD,
        }
      )
    ).toEqual({
      back: [1, 2, 3, 4],
      current: 5,
      forward: [],
    });
  });

  it('should do nothing if forward history is empty', () => {
    expect(
      history(
        {
          back: [1, 2, 3, 4],
          current: 5,
          forward: [],
        },
        {
          type: HISTORY_FORWARD,
        }
      )
    ).toEqual({
      back: [1, 2, 3, 4],
      current: 5,
      forward: [],
    });
  });
});
