export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const increment = () => ({
  type: INCREMENT_COUNTER
});

export const incrementAsync = () => (dispatch: any) => {
  setTimeout(() => {
    dispatch(increment())
  }, 2000);
}

export const decrement = () => ({
  type: DECREMENT_COUNTER
});