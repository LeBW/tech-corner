import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tech Corner（技术角落）",
  description: "程序员的技术角落",
  base: "/tech-corner/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo-color.svg',

    nav: [
      { text: '知识精讲', link: '/knowledge/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/knowledge/': [
        {
          text:'计算机网络',
          items: [
            { text: "万字长文，带你彻底搞懂HTTPS", link: '/knowledge/https' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lebw/tech-corner' }
    ]
  }
})
