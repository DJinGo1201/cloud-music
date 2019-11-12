import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { requireBannerList } from './store/action';
import Slider from '../../components/Slider';

function Discover(props) {
  const { bannerList, getBannerList } = props;
  useEffect(() => {
    if (!bannerList.size) getBannerList({ type: 2 });
  });

  const bannerListJS = bannerList ? bannerList.toJS() : [];

  return (
    <div>
      <Slider data={bannerListJS} />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    bannerList: state.getIn(['discover', 'bannerList'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerList(querys) {
      dispatch(requireBannerList(querys));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Discover));