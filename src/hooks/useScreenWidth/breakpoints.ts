// based in bootstrap size
export const screenSize: { [index: string]: number } = {
  xSmall: 576,
  small: 576,
  medium: 768,
  large: 992,
  extraLarge: 1200,
  extraExtraLarge: 1400,
};
const device = (value: number) => `@media screen and (min-width: ${value}px)`;

export const breakpoints = {
  greaterThan: {
    // Alias breakpoints
    tablet: device(screenSize.large),
    desktop: device(screenSize.extraLarge),
    custom: (value: number) => device(value),
    // Default breakpoints
    xSmall: device(screenSize.xSmall),
    small: device(screenSize.small),
    medium: device(screenSize.medium),
    large: device(screenSize.large),
    extraLarge: device(screenSize.extraLarge),
    extraExtraLarge: device(screenSize.extraExtraLarge),
  },
};
