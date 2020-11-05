import home from '../md/home/index.md';
import useEffect from '../md/useEffect/index.md';
import UseEffectView from '../md/useEffect';
import { Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { renderRouterWithChildren } from './routeWithLayout';
import Layout from '../components/Layout';
import React from 'react';
import MdView from '../components/MdView';
import { IRoute } from './interface';

const WEB_ROOT = process.env.WEB_ROOT || '/';

function getPath(path: string) {
  return `${WEB_ROOT}${path}`;
}

export const homePath = getPath('/home');
const routes: IRoute[] = [
  {
    path: WEB_ROOT,
    layout: Layout,
    layoutProps: { title: 'react 解析' },
    ignoreCache: true,
    children: [
      {
        path: homePath,
        name: 'home',
        component: () => <MdView md={home} />,
      },
      {
        path: getPath('/useEffect'),
        name: 'useEffect',
        component: () => <MdView md={useEffect} view={<UseEffectView />} />,
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
