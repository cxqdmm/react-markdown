import home from '../md/home/index.md';
import useEffect from '../md/useEffect/index.md';
import { Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { renderRouterWithChildren } from './routeWithLayout';
import Layout from '../components/Layout';
import React from 'react';
import MdView from '../components/MdView';
import { IRoute } from './interface';
const routes: IRoute[] = [
  {
    path: '/',
    layout: Layout,
    layoutProps: { title: 'react 解析' },
    ignoreCache: true,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => <MdView md={home} />,
      },
      {
        path: '/useEffect',
        name: 'useEffect',
        component: () => <MdView md={useEffect} />,
      },
    ],
  },
];

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {renderRouterWithChildren(undefined, routes)}
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
