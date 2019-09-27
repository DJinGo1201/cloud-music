import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import RootLayout from '../layout/RootLayout';

const DiscoverComponent = lazy(() => import('../views/Discover'));
const Discover = (props) => (
  <Suspense fallback={null}>
    <DiscoverComponent {...props} />
  </Suspense>
);

const RadioComponent = lazy(() => import('../views/Radio'));
const Radio = (props) => (
  <Suspense fallback={null}>
    <RadioComponent {...props} />
  </Suspense>
);

const RankComponent = lazy(() => import('../views/Rank'));
const Rank = (props) => (
  <Suspense fallback={null}>
    <RankComponent {...props} />
  </Suspense>
);


const router = [
  {
    component: RootLayout,
    routes: [
      {
        path: '/',
        component: HomeLayout,
        routes: [
          {
            path: '/',
            exact: true,
            render: () => (<Redirect to={"/discover"} />)
          },
          {
            path: '/discover',
            component: Discover
          },
          {
            path: '/radio',
            component: Radio
          },
          {
            path: '/rank',
            component: Rank
          }
        ]
      }
    ]
  }
];

export default router;