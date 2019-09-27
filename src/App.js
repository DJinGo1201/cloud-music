import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import router from './router';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <IconStyle />
      {renderRoutes(router)}
    </HashRouter>
  );
}

export default App;
