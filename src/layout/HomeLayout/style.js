import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #fff;
  height: 50px;
  align-items: center;
  margin-bottom: 8px;
  color: #000;
  .right,
  .left {
    height: 50px;
    line-height: 50px;
  }
  .iconfont {
    font-size: 26px;
  }
`;

export const Tabs = styled.div`
  height: 50px;
  display: flex;
  background: #fff;
  flex: 1;
  padding: 0 30px;
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 16px;
    color: #000;
    justify-content: center;
    align-items: center;
    display: flex;
    &.actived {
      font-weight: 700;
      font-size: 18px;
    }
  }
`

export const TabPane = styled.div`
  flex: 1;
`

