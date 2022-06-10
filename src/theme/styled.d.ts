import 'styled-components';
import { COLORS } from './types';


declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: number,
    color: {
      background: COLORS,
      border: COLORS,
      box: COLORS,
      text: COLORS,
      secondaryText: COLORS,
    };
    header: {
      height: number,
      background: string
    };
    footer: {
      height: number,
      background: string
    };
    shadow: string;
    dropdown: {
      background: COLORS,
      text: COLORS,
      hoverText: COLORS,
      height: number
    },
    button: {
      background: COLORS,
      text: COLORS,
      height: number
    },
    breakpoints: {
      tablet: number,
      mobile: number
    }
  }
}
