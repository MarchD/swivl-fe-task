import styled from 'styled-components';

export const DropDownContainer = styled.div`
  width: 170px;
`;

export const DropDownField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({theme}) => theme.dropdown.height}px;
  padding: 0 1rem;
  font-weight: 500;
  font-size: 1.3rem;
  color: ${({theme}) => theme.color.secondaryText};
  cursor: pointer;
  border-radius: ${({theme}) => theme.borderRadius}px;
  border: 1px ${({theme}) => theme.color.border} solid;
  background-color: ${({theme}) => theme.dropdown.background};
  transition: box-shadow 200ms ease-in;

  &:hover {
    box-shadow: ${({theme}) => theme.shadow};
  }
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10.5rem;
  width: 10.5em;
  z-index: 1;
`;

export const DropDownList = styled.ul`
  padding: 1rem 1rem 0;
  margin: 0;
  color: ${({theme}) => theme.dropdown.text};
  font-size: 1.3rem;
  font-weight: 500;
  background: ${({theme}) => theme.color.box};
  border-radius: ${({theme}) => theme.borderRadius}px;
  border: 1px ${({theme}) => theme.color.border} solid;
`;

export const DropDownItem = styled.li`
  margin-bottom: 0.5rem;
  list-style: none;
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.dropdown.hoverText};
  }
`;
