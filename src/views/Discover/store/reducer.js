import actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  bannerList: []
});

const discoverReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_BANNER_LIST:
      return state.set('bannerList', action.data);

    default:
      return state;
  }
};

export default discoverReducer;