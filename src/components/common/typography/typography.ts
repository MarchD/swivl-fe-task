import styled from 'styled-components';
import { TypographyProps, TypographyType } from 'src/models/props/typography';

export const Title = styled.h2`
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 3rem;
`

export const Subtitle = styled.h6`
  font-size: 2rem;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;


export const Text = styled.p<TypographyProps>`
  color: ${({theme, type = TypographyType.GENERAL}) => type === TypographyType.GENERAL ? theme.color.text : theme.color.secondaryText};
`;
