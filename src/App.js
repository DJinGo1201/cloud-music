import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './router';
import store from './store';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle />
        <IconStyle />
        {renderRoutes(router)}
      </HashRouter>
    </Provider>
  );
}

export default App;
