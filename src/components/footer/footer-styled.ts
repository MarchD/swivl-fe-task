import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({theme}) => theme.footer.height}px;
  padding: 1rem;
  border-top: 1px solid ${({theme}) => theme.color.border};
  background: ${({theme}) => theme.footer.background};
`;
