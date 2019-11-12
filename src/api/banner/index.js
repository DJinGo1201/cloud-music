import require from '../require';

export const getBannerList = (params) => {
  return require({
    url: '/banner',
    method: 'GET',
    params
  })
};