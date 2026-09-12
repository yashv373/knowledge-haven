import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/knowledge-haven/',
  title: "The Silicon Drafts",
  description: "My personal chip design and RTL practice knowledge base",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Digital Design', link: '/DDCA/' }
    ],

    sidebar: [
      {
        text: 'Digital Design (DDCA)',
        items: [
          { text: 'Combinational Logic', link: '/DDCA/Combinational_Logic' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yashv373' }
    ],

    footer: {
      message: 'Website design and maintenance agentically by Antigravity AI.',
      copyright: 'Content by Yash.'
    }
  }
})
