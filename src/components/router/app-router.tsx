import React from 'react';
import Layout from '../layouts/layout/layout';
import { ROUTES } from 'src/models/routes';
import { Route, Routes } from 'react-router-dom';
import Main from 'src/pages/main/main';
import UserPage from 'src/pages/user-page/user-page';
import PageNotFound from '../../pages/404/page-not-found';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path={ROUTES.MAIN} element={<Main/>}/>
        <Route path={ROUTES.USER} element={<UserPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    </Routes>
  );
}

export default AppRouter;
