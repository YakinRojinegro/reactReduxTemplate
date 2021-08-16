import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      goldMain: string;
      secondary: string;
      goldButton: string;
      whiteText: string;
      blackDefault: string;
      grayBorder: string;
      blackFocus: string;
    };
  }
}
