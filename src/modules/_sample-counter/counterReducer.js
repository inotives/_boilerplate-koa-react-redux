import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './counterActions'

// Action Handler ----------------------------------------------------------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload,
  [COUNTER_DECREMENT]: (state, action) => state - action.payload
}


// Reducer -----------------------------------------------------------------------------------------------
const initialState = 0
export default function counterReducer(state=initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state // base on the action type
}
