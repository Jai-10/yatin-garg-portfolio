/**
 * Font-Face definitions.
 */
import Poppins400 from '@assets/fonts/poppins-400.woff';
import Poppins500 from '@assets/fonts/poppins-500.woff';
import Poppins700 from '@assets/fonts/poppins-700.woff';

export const FONTS = {
  styleOverrides: `
        @font-face {
            font-family: "Poppins";
            font-weight: 400;
            font-style: normal;
            src: url(${Poppins400}) format('woff');
        }
        @font-face {
            font-family: "Poppins";
            font-weight: 500;
            font-style: normal;
            src: url(${Poppins500}) format('woff');
        }
        @font-face {
            font-family: "Poppins";
            font-weight: 700;
            font-style: normal;
            src: url(${Poppins700}) format('woff');
        }
    `,
};
