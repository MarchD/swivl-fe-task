import React from 'react';
import { Outlet } from 'react-router-dom';
import { ContainerStyled } from '../../common/container/container-styled';
import Header from '../../header/header';
import { LayoutStyled } from './layout-styled';
import Footer from '../../footer/footer';

const Layout = () => {
  return (
    <LayoutStyled>
      <Header/>
      <ContainerStyled>
        <div>
          <Outlet/>
        </div>
      </ContainerStyled>
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
