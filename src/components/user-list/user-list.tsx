import React, { useCallback, useState } from 'react';
import { useFetchAllUsersQuery } from 'src/services/user-service';
import UserItem from '../user-item/user-item';
import { Loader } from '../common/loader/loader';
import { UserListStyled, UserSettingStyled } from './user-list-styled';
import DropDown from '../common/dropdown/dropdown';
import { Button } from '../common/button/button-styled';
import { INITIAL_ITEMS_PER_PAGE, ITEMS_PER_PAGE } from 'src/constants';
import { BoxWrapper } from '../layouts/box-wrapper/box-wrapper-styled';

function UserList() {
  const [ limit, setLimit ] = useState(INITIAL_ITEMS_PER_PAGE);
  const [ since, setSince ] = useState(0);
  const {data: users, isLoading} = useFetchAllUsersQuery({limit, since});

  const next = useCallback(() => {
    setSince(users?.[users?.length - 1].id || 0);
  }, [ users ]);

  return isLoading ? <Loader/> :
    <BoxWrapper withScroll>
      <UserListStyled>
        {users?.map(user => (
          <UserItem {...user} key={user.id}/>
        ))}
      </UserListStyled>

      <UserSettingStyled>
        <DropDown
          options={ITEMS_PER_PAGE}
          value={limit}
          onChange={setLimit}
        />

        <Button onClick={next}>
          Next
        </Button>
      </UserSettingStyled>
    </BoxWrapper>;
}

export default UserList;
