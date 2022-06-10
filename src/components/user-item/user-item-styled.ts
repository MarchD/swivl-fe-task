import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserItemStyled = styled(Link)`
  max-width: 200px;
  width: 100%;
  padding: 1rem;
  border-radius: ${({theme}) => theme.borderRadius}px;
  border: 1px ${({theme}) => theme.color.border} solid;
  transition: box-shadow 200ms ease-in;
  
  &:hover {
    box-shadow: ${({theme}) => theme.shadow};
  }
`;
