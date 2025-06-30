/* eslint-disable spaced-comment */
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/* eslint-enable spaced-comment */

declare module '*.css' {
  const content: string
  export default content
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
