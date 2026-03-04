// @ts-check
const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'H.O.S.T.',
  tagline: 'Human Operated Spacecraft Terminal - Development Blog',
  favicon: 'img/favicon.ico',
  url: 'https://matteokosina.github.io',
  baseUrl: '/host',
  organizationName: 'matteokosina',
  projectName: 'host',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          routeBasePath: '/blog',
          path: './blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/host-banner.svg',
    navbar: {
      title: 'H.O.S.T.',
      logo: {
        alt: 'H.O.S.T. Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/blog',
          label: 'Development Log',
          position: 'left',
        },
        {
          to: '/about',
          label: 'About',
          position: 'right',
        },
        {
          href: 'https://github.com/matteokosina/host',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/matteokosina/host',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} H.O.S.T. Development. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.nightOwl,
      darkTheme: themes.nightOwl,
    },
  },
};

module.exports = config;
