export const breakpoints = [576, 768, 992, 1200]

export const mq = breakpoints
  .map(bp => `@media screen and (min-width: ${bp}px)`)
