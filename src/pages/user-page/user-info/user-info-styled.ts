import styled from 'styled-components';

export const UserInfoStyled = styled.div`
  display: flex;
  column-gap: 1rem;
  
  @media(max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
`;
