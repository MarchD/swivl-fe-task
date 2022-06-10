import React from 'react';
import { useFetchUserByIdQuery } from 'src/services/user-service';
import { useParams } from 'react-router-dom';
import { CommonInfoStyled, ImageStyled } from './common-info-styled';
import { WebIcon } from 'src/assets';
import { Text } from 'src/components/common/typography/typography';
import { TypographyType } from 'src/models/props/typography';
import { Flex } from '../../../../components/common/flex/flex';

function CommonInfo() {
  const {login} = useParams();
  const {data: user} = useFetchUserByIdQuery(login!);
  const date = new Date(user?.created_at as string);

  return (
    <CommonInfoStyled>
      <ImageStyled src={user?.avatar_url} alt={user?.login}/>
      <Flex>
        <a href={user?.blog}><WebIcon width={50} height={50}/></a>
        <Text type={TypographyType.SECONDARY}>With github since {date.getFullYear()}</Text>
      </Flex>
      <Flex>
        <Text>
          Followers: {user?.followers}
        </Text>
        <Text>
          Following: {user?.following}
        </Text>
      </Flex>
    </CommonInfoStyled>
  );
}

export default CommonInfo;
