export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

export const increment = (value=1) => {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

export const decrement = (value=1) => {
  return {
    type: COUNTER_DECREMENT,
    payload: value
  }
}
