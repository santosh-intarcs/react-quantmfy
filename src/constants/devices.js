export const breakPoint = {
    xs: 767, // 767px & below is mobile
    sm: 768,
    md: 992,
    lg: 1200
  }
  
  export const xs = () => `@media (max-width: ${breakPoint.xs}px)`
  export const sm = () => `@media (min-width: ${breakPoint.sm}px)`
  export const md = () => `@media (min-width: ${breakPoint.md}px)`
  export const lg = () => `@media (min-width: ${breakPoint.lg}px)`
  