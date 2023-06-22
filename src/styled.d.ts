import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      text: string;
      lightGray: string;
      contrast: string;
    };
  }
}
