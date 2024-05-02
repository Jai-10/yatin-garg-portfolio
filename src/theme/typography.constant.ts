import { pxToRem } from './pxToRem.util';

/**
 * @module Typography.constants
 * This module exports constant values for typography settings.
 */
export const TYPOGRAPHY = {
  fontFamily: 'Poppins, sans-serif',

  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  textSm: {
    fontSize: pxToRem(14),
    lineHeight: 1.5,
  },
  textBase: {
    fontSize: pxToRem(16),
    lineHeight: 1.5,
  },
  textMd: {
    fontSize: pxToRem(20),
    lineHeight: 1.5,
  },
  textLg: {
    fontSize: pxToRem(24),
    lineHeight: 1.5,
  },
  textXl: {
    fontSize: pxToRem(32),
    lineHeight: 1.5,
  },
  text2Xl: {
    fontSize: pxToRem(48),
    lineHeight: 1.5,
  },
  text3Xl: {
    fontSize: pxToRem(64),
    lineHeight: 1.5,
  },
};
