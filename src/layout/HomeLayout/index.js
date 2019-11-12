import React from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Container, Header, Tabs, TabPane } from './style';

function HomeLayout(props) {
  const { route } = props;

  return (
    <Container>
      <Header>
        <div className="left">
          <span className="iconfont">&#xe65c;</span>
        </div>
        <Tabs>
          <NavLink to="/discover" activeClassName="actived">
            <span className="item">发现</span>
          </NavLink>
          <NavLink to="/radio" activeClassName="actived">
            <span className="item">电台</span>
          </NavLink>
          <NavLink to="rank" activeClassName="actived">
            <span className="item">排行榜</span>
          </NavLink>
        </Tabs>
        <div className="right">
          <span className="iconfont">&#xe62b;</span>
        </div>
      </Header>
      <TabPane>
        {renderRoutes(route.routes)}
      </TabPane>
    </Container>
  )
}

export default React.memo(HomeLayout);