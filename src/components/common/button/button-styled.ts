import styled from 'styled-components';

export const Button = styled.button`
  min-width: 100px;
  height: ${({theme}) => theme.button.height}px;
  background: ${({theme}) => theme.button.background};
  color: ${({theme}) => theme.button.text};
  border-radius: ${({theme}) => theme.borderRadius}px;
  border: 1px ${({theme}) => theme.color.border} solid;
  transition: box-shadow 200ms ease-in;
  cursor: pointer;

  &:hover {
    box-shadow: ${({theme}) => theme.shadow};
  }
`;
