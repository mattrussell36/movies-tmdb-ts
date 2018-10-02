import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from '../actions/counterActions';
import initialState from '../initialState';

function counterReducer(state = initialState.counter, action: any) {
  switch(action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };
      break;

    case DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - 1,
      };
      break;

    default:
      return state;
  }
}

export default counterReducer;