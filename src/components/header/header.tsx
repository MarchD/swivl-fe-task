import React from 'react';
import { ContainerStyled } from '../common/container/container-styled';
import { HeaderStyled } from './header-styled';
import Logo from '../common/logo/logo';
import { Flex } from '../common/flex/flex';

function Header() {
  return (
    <HeaderStyled>
      <Flex>
        <ContainerStyled>
          <Logo/>
        </ContainerStyled>
      </Flex>
    </HeaderStyled>
  );
}

export default Header;
