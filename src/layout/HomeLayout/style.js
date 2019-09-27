import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background: #d44439;
  height: 6.4vh;
  align-items: center;
  color: #f1f1f1;
  .title {
    font-size: 5.3vw;
    height: 100%;
    line-height: 6.4vh;
  }
  .iconfont {
    font-size: 6.7vw;
    height: 100%;
    line-height: 6.4vh;
  }
`;

export const Tabs = styled.div`
  height: 6.3vh;
  display: flex;
  background: #d44439;
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 3.73vw;
    color: #e4e4e4;
    justify-content: center;
    align-items: center;
    display: flex;
    &.actived {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`

export const TabPane = styled.div`
  flex: 1;
`

