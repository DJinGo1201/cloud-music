import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonWrap } from './style';

function Button(props) {
  const { onClick } = props;
  const [active, setActive] = useState(false);

  const touchStartHandler = function () {
    setActive(true);
  }

  const touchEndHandler = function () {
    setActive(false);
  }

  return (
    <ButtonWrap
      active={active}
      onTouchStart={touchStartHandler}
      onTouchEnd={touchEndHandler}
      onClick={onClick}
    >
      <span>{props.children}</span>
    </ButtonWrap>
  )
};

Button.propTypes = {
  onClick: PropTypes.func
}

export default React.memo(Button);