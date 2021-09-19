export default {
  github: "https://github.com/imperialbin/",
  docsRepositoryBase: "https://github.com/imperialbin/imperial-docs/blob/main",
  titleSuffix: " – IMPERIAL",
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">IMPERIAL</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="IMPERIAL Documentation" />
      <meta name="og:description" content="IMPERIAL Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="https://docs.imperialb.in/" />
      <meta name="twitter:url" content="https://docs.imperialb.in/" />
      <meta name="og:title" content="IMPERIAL Documentation" />
      <meta name="og:image" content="https://docs.imperialb.in/og.png" />
      <meta
        name="apple-mobile-web-app-title"
        content="IMPERIAL Documentation"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: "Edit this page on GitHub",
  footerText: <>MPL-2.0 {new Date().getFullYear()} © IMPERIAL.</>,
  unstable_faviconGlyph: "👋",
};
