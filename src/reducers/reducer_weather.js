import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
  console.log('Action Received ', action);
  if (action.type==FETCH_WEATHER) {
   // case FETCH_WEATHER:
      // return state.concat( [ action.payload.data ] );
      return [action.payload.data, ...state]
  }
  return state;
}
