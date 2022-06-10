import { UserInfoStyled } from './user-info-styled';
import CommonInfo from './common-info/common-info';
import UserDetails from './user-details/user-details';

function UserInfo() {
  return (
    <UserInfoStyled>
      <CommonInfo />
      <UserDetails />
    </UserInfoStyled>
  );
}

export default UserInfo;
