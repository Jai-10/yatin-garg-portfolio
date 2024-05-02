/**
 * Converts px to rem
 * @param {Number} val - The font size required (in px)
 * @returns {String} - Returns the converted px to rem value
 */
export const pxToRem = (val: number) => {
  return `${val / 16}rem`;
};
