/**
 * @module Theme
 * This module exports the theme config.
 */
import { createTheme } from '@mui/material';

import { COLORS } from './colors.constant';
import { FONTS } from './fonts.constant';
import { pxToRem } from './pxToRem.util';
import { TYPOGRAPHY } from './typography.constant';

/**
 * Create and configure the theme.
 * @param {MUITheme} options - The config options for the theme.
 * @returns {Object} The configured theme.
 */
export const theme = createTheme({
  palette: COLORS,
  typography: TYPOGRAPHY,
  components: {
    MuiCssBaseline: FONTS,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  spacing: pxToRem,
});
