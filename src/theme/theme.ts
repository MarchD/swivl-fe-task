import { normalize } from 'styled-normalize';
import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { COLORS } from './types';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    font-family: "Roboto Light", sans-serif;
    background: ${({theme}) => theme.color.background};

    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    * {
      scrollbar-width: auto;
      scrollbar-color: #b0b0b0 #ffffff;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
      width: 11px;
    }

    *::-webkit-scrollbar-track {
      background: transparent;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #b0b0b0;
      border-radius: 10px;
      border: 3px solid #ffffff;
    }
  }
  
  h1, h2, h6, p, a {
    margin: 0;
    color: ${({theme}) => theme.color.text};
  }

  h1, a {
    font-family: "Roboto Light", sans-serif;
    text-decoration: none;
  }
`;

export const theme: DefaultTheme = {
  borderRadius: 10,
  color: {
    background: COLORS.beige,
    border: COLORS.black,
    box: COLORS.white,
    text: COLORS.black,
    secondaryText: COLORS.gray,
  },
  header: {
    height: 50,
    background: COLORS.white
  },
  footer: {
    height: 30,
    background: COLORS.blue
  },
  dropdown: {
    background: COLORS.green,
    text: COLORS.blue,
    hoverText: COLORS.orange,
    height: 50
  },
  button: {
    background: COLORS.orange,
    text: COLORS.black,
    height: 50
  },
  shadow: '6px 5px 2px rgba(0, 0, 0, 0.3)',
  breakpoints: {
    tablet: 1078,
    mobile: 768
  }
};
