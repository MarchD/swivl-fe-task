import styled from 'styled-components';
import { BoxProps } from 'src/models/props/box';

export const BoxWrapper = styled.div<BoxProps>`
  position: relative;
  margin: 2rem;
  ${({withScroll, theme}) => withScroll && (
    `max-height: calc(100vh - (${theme.header.height + theme.footer.height}px + 4rem));`
  )}
  min-height: calc(100vh - (${({theme: {header, footer}}) => header.height + footer.height}px + 4rem));
  background-color: ${({theme}) => theme.color.box};
  border: 1px ${({theme}) => theme.color.border} solid;
  border-radius: ${({theme}) => theme.borderRadius}px;
  box-shadow: ${({theme}) => theme.shadow};
  ${({withScroll}) => withScroll && 'overflow-y: scroll;'}
`;
