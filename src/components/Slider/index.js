import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SliderContainer } from './style';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

const Slider = React.forwardRef((props, ref) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const { data, config } = props;

  useEffect(() => {
    if (data.length && !swiperInstance) {
      let instance = new Swiper('#swiperContainer', config);
      setSwiperInstance(instance)
    }
  }, [data, config, swiperInstance]);

  return (
    <SliderContainer>
      <div className="swiper-container" id="swiperContainer" ref={ref}>
        <div className="swiper-wrapper">
          {
            data.map((item, index) => (
              <div className="swiper-slide" key={index}>
                <img src={item.pic}
                  width="100%"
                  height="100%"
                  alt={item.pic} />
              </div>
            ))
          }
        </div>
      </div>
    </SliderContainer>
  )
})

Slider.defaultProps = {
  data: [],
  config: {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  }
}

Slider.propTypes = {
  data: PropTypes.array,
  config: PropTypes.object
}

export default Slider;