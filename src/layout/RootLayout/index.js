import React from 'react';
import { renderRoutes } from 'react-router-config';

function RootLayout(props) {
  const { route } = props;
  return (
    <div className="container-main">
      {renderRoutes(route.routes)}
    </div>
  )
}

export default React.memo(RootLayout);