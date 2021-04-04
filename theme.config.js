export default {
  repository: 'https://github.com/imperialbin/imperial-docs',
  titleSuffix: ' – IMPERIAL documentation',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">IMPERIAL</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#161A1E" />
      <meta name="theme-color" content="#161A1E" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="This page contains IMPERIALs API, community projects, and official projects documentation."
      />
      <meta
        name="og:description"
        content="This page contains IMPERIALs API, community projects, and official projects documentation."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/banner.png" />
      <meta name="twitter:site:domain" content="docs.imperialb.in" />
      <meta name="twitter:url" content="https://docs.imperialb.in/" />
      <meta name="og:title" content="IMPERIAL - API Documentation" />
      <meta name="og:image" content="/banner.png" />
      <meta name="apple-mobile-web-app-title" content="IMPERIAL Docs" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon-96x96.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-96x96.png"
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
        href="/favicon-96x96.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: false,
  nextLinks: false,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>MPL 2.0 {new Date().getFullYear()} © IMPERIAL.</>,
}
