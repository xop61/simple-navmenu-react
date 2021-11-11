export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const Media = Object.keys(breakpoints).reduce(
  (sum, breakpoint) =>
    Object.assign(sum, {
      [breakpoint]: `@media screen and (min-width: ${breakpoints[breakpoint]}px)`,
    }),
  {}
);

export default Media;
