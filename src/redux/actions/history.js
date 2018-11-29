export const HISTORY_BACK = 'HISTORY_BACK';
export const historyBack = () => {
  return {
    type: HISTORY_BACK
  };
}

export const HISTORY_FORWARD = 'HISTORY_FORWARD';
export const historyForward = () => {
  return {
    type: HISTORY_FORWARD
  };
}
