module.exports = {
  title: "Jonathan Turnock",
  tagline: "Software, Technology 👩‍💻 and a Sprinkle of Gaming 🎮",
  url: "https://jonathanturnock.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "JonathanTurnock", // Usually your GitHub org/user name.
  projectName: "JonathanTurnock.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "My Site",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://medium.com/@jonathan.turnock",
          label: "Medium",
          position: "right",
        },
        {
          href: "https://github.com/JonathanTurnock",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Pet Projects",
          items: [
            {
              label: "Geoffrey",
              to: "https://bitbucket.org/fxqlabs-oss/geoffrey/src/master/",
            },
            {
              label: "Kodiak",
              to: "https://bitbucket.org/fxqlabs-oss/kodiak/src/master/",
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/JonathanTurnock",
            },
            {
              label: "BitBucket",
              href: "https://bitbucket.org/fxqlabs-oss/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jonathan Turnock. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/JonathanTurnock/JonathanTurnock.github.io/edit/develop",
        },
        docs2: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/JonathanTurnock/JonathanTurnock.github.io/edit/develop",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/JonathanTurnock/JonathanTurnock.github.io/edit/develop",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
