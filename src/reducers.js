import { combineReducers } from 'redux';

// import your module reducer here ....
import sampleCounterReducer from './modules/_sample-counter/counterReducer';

// combine all the reducers here
const reducer = combineReducers({
  counter: sampleCounterReducer
});

export default reducer;
