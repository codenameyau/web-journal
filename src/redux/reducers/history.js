import {
  HISTORY_BACK,
  HISTORY_FORWARD,
} from '../actions/history';

export const defaultHistoryState = {
  back: [],
  current: null,
  forward: [],
};

export const history = (state = defaultHistoryState, action) => {
  switch (action.type) {
    case HISTORY_BACK:
      return state.back.length
        ? {
            back: state.back.slice(0, state.back.length - 1),
            current: state.back[state.back.length - 1],
            forward: [state.current, ...state.forward],
          }
        : state;
    case HISTORY_FORWARD:
      return state.forward.length
        ? {
            back: [...state.back, state.current],
            current: state.forward[0],
            forward: state.forward.slice(1),
          }
        : state;
    default:
      return state;
  }
};

export default history;
