import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-blog/',
  title: 'My Gallery',
  description: '成果物置き場',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/pad.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Games', link: '/games' },
      { text: 'Apps', link: '/apps' },
      { text: 'Tools', link: '/tools' },
    ],

    sidebar: [
      {
        text: 'Games',
        items: [
          { text: 'ゲーム一覧', link: '/games/' },
          { text: 'ゲーム1', link: '/games/game1' },
          { text: 'ゲーム2', link: '/games/game2' },
        ],
      },
      {
        text: 'Apps',
        items: [
          { text: 'Apps一覧', link: '/apps' },
          { text: 'TODOアプリ', link: '/apps/todo' },
          { text: '架空のカフェHP', link: '/apps/cafeHP' },
        ],
      },
      {
        text: 'Tools',
        items: [
          { text: 'Tools一覧', link: '/tools' },
          { text: 'efekprojをefkに変換するツール', link: '/tools/transformEfk' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pucchok' },
      {
        icon: 'twitter',
        link: 'https://x.com/068ZqMwXvX64?t=uqsTN9KCT3OA9sXzvUwY2Q&s=09',
      },
    ],
  },
});
