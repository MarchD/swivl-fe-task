import styled from 'styled-components';

export const UserListStyled = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const UserSettingStyled = styled.div`
  position: sticky;
  bottom: -1px;
  display: flex;
  justify-content: space-between;
  height: 134px;
  padding: 1rem;
  background: ${({theme}) => theme.color.box};
  border-top: 1px ${({theme}) => theme.color.border} solid;
`;
