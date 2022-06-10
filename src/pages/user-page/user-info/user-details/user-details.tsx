import React, { useMemo } from 'react';
import { Text, Title } from 'src/components/common/typography/typography';
import { useParams } from 'react-router-dom';
import { useFetchUserByIdQuery } from 'src/services/user-service';
import { UserDetailsList, UserDetailsStyled, UserDetailStyled } from './user-details-styled';
import { TypographyType } from 'src/models/props/typography';

function UserDetails() {
  const {login} = useParams();
  const {data: user} = useFetchUserByIdQuery(login!);

  const details = useMemo(() => ([ {
    title: 'Email',
    data: user?.email
  }, {
    title: 'Company',
    data: user?.company
  }, {
    title: 'Location',
    data: user?.location
  } ]), []);

  return (
    <UserDetailsStyled>
      <Title>
        {user?.login}
      </Title>

      <UserDetailsList>
        {
          details.map(({title, data}) => {
            return data ? (
              <UserDetailStyled key={data}>
                <Text>{title}:</Text><Text type={TypographyType.SECONDARY}>{data}</Text>
              </UserDetailStyled>
            ) : null;
          })
        }
      </UserDetailsList>
    </UserDetailsStyled>
  );
}

export default UserDetails;
