import actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import { getBannerList } from '../../../api/banner';

export const setBannerList = (data) => {
  return {
    type: actionTypes.SET_BANNER_LIST,
    data: fromJS(data)
  }
}

export const requireBannerList = (querys) => {
  return (dispatch) => {
    getBannerList(querys).then((res) => {
      dispatch(setBannerList(res.banners));
    }).catch(() => { });
  };
}