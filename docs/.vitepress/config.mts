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
      { text: 'Cheatsheets', link: '../python/index' },
      {text: 'Changelog',items:[
        {text:"v0.1.5",link:"https://github.com/sumangal44/cheatsheets/releases/tag/v0.1.5"},
        {text:"v0.1.4",link:"https://github.com/sumangal44/cheatsheets/releases/tag/v0.1.4"},
        {text:"v0.0.3",link:"https://github.com/sumangal44/cheatsheets/releases/tag/v0.0.3"},
        {text:"v0.0.2",link:"https://github.com/sumangal44/cheatsheets/releases/tag/v0.0.2"},
        {text:"v0.0.1-alpha",link:"https://github.com/sumangal44/cheatsheets/releases/tag/v0.0.1-alpha"},
      ]}
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Cheatsheets',
        items: [
          { text: 'JavaScript', link: '../javascript/index' },
          { text: 'Python', link: '../python/index' },
          { text: 'Git', link: '../git/index' },
          { text: 'HTML', link: '../html/index' },
          { text: 'CSS', link: '../css/index' },
          { text: 'TypeScript', link: '../typescript/index' },
          { text: 'React', link: '../react/index' },
          { text: 'Vue', link: '../vue/index' },
          { text: 'Node.js', link: '../node/index' },
          { text: 'Linux', link: '../linux/index' },
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
