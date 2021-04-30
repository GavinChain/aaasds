/**
 * 文档路径
 */
const { usePlus, root, nav, sidebar } = require('./plus');

module.exports = {
  base: root.base,
  alias: {
    '@': root.path,
    vue: 'vue/dist/vue.esm-bundler.js',
  },
  title: 'Hello VitePress',
  description: 'Just playing around.',
  themeConfig: {
    docsDir: 'docs',
    logo: 'img/logo.png',
    lastUpdated: 'Last Updated',
    editLinkText: 'Edit this page on Gitee',
    // 编辑连接
    editLink: true,
    nextLinks: true,
    prevLinks: true,
    // 导航栏
    sidebar: true, // 'auto',
    // 层次
    // sidebarDepth: 2,
    // 顶部导航
    nav,
    // 侧边栏
    sidebar,
  },
  markdown: {
    lineNumbers: true,
    // options for markdown-it-anchor
    //  anchor: { permalink: false },
    // options for markdown-it-toc
    // toc: { includeLevel: [1, 2] },

    config: usePlus,
  },
};
