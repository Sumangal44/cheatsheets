import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cheatsheets for Developers",
  description: "A VitePress Site",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Cheatsheets', link: '../python/index' }
    ],
    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Cheatsheets',
        items: [
          { text: 'Python', link: '../python/index' },
          { text: 'JavaScript', link: '../javascript/index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sumangal44/cheatsheets' }
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/sumangal44/cheatsheets/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/sumangal44">sumangal44</a>'
    }  }
})
