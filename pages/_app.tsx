import 'nextra-theme-docs/style.css'

// @ts-ignore Throws an error saying component and pageprops are type any, no idea what type to put them as though.
export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}
