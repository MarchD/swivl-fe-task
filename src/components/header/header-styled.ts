import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  height: ${({theme}) => theme.header.height}px;
  padding: 0 2rem;
  border-bottom: 1px solid ${({theme}) => theme.color.border};
  background: ${({theme}) => theme.header.background};
`;
