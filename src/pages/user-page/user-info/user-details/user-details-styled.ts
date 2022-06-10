import styled from 'styled-components';

export const UserDetailsStyled = styled.div`
  flex-grow: 1;

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    order: -1;
  }
`;

export const UserDetailsList = styled.div`
  max-width: 500px;

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    margin: 0 auto;
  }
`;

export const UserDetailStyled = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  justify-content: space-between;
  column-gap: 2rem;
  margin-bottom: 1rem;

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
