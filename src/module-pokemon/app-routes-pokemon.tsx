import React from 'react';
import { RouteObject } from 'react-router';
import { ModuleLayout, LazyLoad } from '../components';
import { ROUTES } from './constants';

const PokemonList = React.lazy(() => import('./pages/index'));
const PokemonDetail = React.lazy(() => import('./pages/detail'));

export const getPokemonModuleRoutes = (): RouteObject[] => {
  return [
    {
      element: <ModuleLayout />,
      children: [
        {
          index: true,
          element: LazyLoad(<PokemonList />),
        },
        {
          path: `${ROUTES.DETAIL}/:id`,
          element: LazyLoad(<PokemonDetail />),
        },
      ],
    },
  ];
};
