import React from 'react';
import { Button } from 'src/components/common/button/button-styled';
import { PageNotFoundStyled } from './page-not-found-styled';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../models/routes';
import { NotFoundIcon } from '../../assets';

function PageNotFound() {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate(ROUTES.MAIN)
  }

  return (
    <PageNotFoundStyled>
      <NotFoundIcon width={200}/>
      <Button onClick={goToMainPage}>Main Page</Button>
    </PageNotFoundStyled>
  );
}

export default PageNotFound;
