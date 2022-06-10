import { ReactNode } from 'react';

export enum ROUTES {
  MAIN = '/',
  USERS = '/users/',
  USER = '/users/:login',
  PAGE_NOT_FOUND = '/404'
}

export type RouteType = {
  path: ROUTES,
  component: ReactNode
}
