import { combineReducers } from 'redux-immutable';
import discoverReducer from '../views/Discover/store/reducer';

export default combineReducers({
  discover: discoverReducer
});