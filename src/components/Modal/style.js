import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  0% {
    transform: translate3d(-50%, -50%, 0) scale(0);
  }
  50% {
    transform: translate3d(-50%, -50%, 0) scale(1.1);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) scale(1);
  }
`

const zoomOut = keyframes`
  0% {
    transform: translate3d(-50%, -50%, 0) scale(1);
  }
  50% {
    transform: translate3d(-50%, -50%, 0) scale(1.1);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) scale(0);
  }
`

export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
`
export const Dialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 100;
  background-color: #fff;
  width: 60vw;
  border-radius: 12px;
  &.dialog-zoom-appear {
    animation: ${zoomIn} 300ms;
  }
  &.dialog-zoom-exit {
    animation: ${zoomOut} 300ms;
  }
  .content {
    padding: 19px 15px;
    line-height: 22px;
    font-size: 16px;
    color: #bba8a8;
    text-align: center;
  }
  .footer {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 16px;
    .btn {
      flex: 1;
      line-height: 22px;
      padding: 10px 0;
      border-top: 1px solid #e4e4e4;
      border-right: 1px solid #e4e4e4;
      color: #666;
      &:last-child {
        border-right: none;
      }
    }
  }
`
