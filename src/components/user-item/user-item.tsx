import React, { memo, useMemo } from 'react';
import { UserType } from '../../models/user';
import { userUrl } from '../../helpers/links';
import { Avatar } from '../common/avatar/avatar';
import { UserItemStyled } from './user-item-styled';
import { Subtitle } from '../common/typography/typography';

function UserItem({login, avatar_url}: UserType) {
  const link = useMemo(() => userUrl(login), []);

  return (
    <UserItemStyled to={link}>
      <Avatar src={avatar_url} alt={login}/>
      <Subtitle>{login}</Subtitle>
    </UserItemStyled>
  );
}

export default memo(UserItem);
