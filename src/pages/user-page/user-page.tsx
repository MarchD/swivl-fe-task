import React from 'react';
import { BoxWrapper } from 'src/components/layouts/box-wrapper/box-wrapper-styled';
import { useFetchUserByIdQuery } from '../../services/user-service';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../components/common/loader/loader';
import { UserContainerStyled } from './user-page-styled';
import UserInfo from './user-info/user-info';
import { Text } from '../../components/common/typography/typography';
import { ROUTES } from '../../models/routes';

function UserPage() {
  const {login} = useParams();
  const {data: user, isLoading} = useFetchUserByIdQuery(login!);
  const navigate = useNavigate();

  if (!isLoading && !user) {
    navigate(ROUTES.PAGE_NOT_FOUND);
  }

  return isLoading ? <Loader/> : (
    <BoxWrapper>
      <UserContainerStyled>
        <UserInfo/>
        {user?.bio && <Text>user?.bio</Text>}
      </UserContainerStyled>
    </BoxWrapper>
  );
}

export default UserPage;
