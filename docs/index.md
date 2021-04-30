# Hello VitePress

- [markdown-it](https://markdown-it.docschina.org/)

![An image](./img/logo.png)

## 全局配置 config

- [配置文档](https://vitepress.vuejs.org/guide/global-computed.html)

> .vitepress>config.js

```js
{
  base: '/',
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  head: [],
  locales: {},
  themeConfig:{}
}
```

## 显示行号 Line Numbers

```js{3}
module.exports = {
  markdown: {
    lineNumbers: true,
  },
};
```

## 配置 markdown

```js
module.exports = {
  markdown: {
    // 描点 options for markdown-it-anchor
    anchor: { permalink: false },

    // 目录 options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      // 自定义外挂 use more markdown-it plugins!
      md.use(require('markdown-it-xxx'));
    },
  },
};
```

## 使用组件 vue

Using Vue in Markdown

```js
// 默认主题
import DefaultTheme from 'vitepress/theme';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('VueClickAwayExample', VueClickAwayExample);
  },
};
```

- markdown 全局使用组件

```md
# Vue Click Away

<VueClickAwayExample />
```

## 外挂 markdown.plugins

```js
module.exports = {
  markdown: {
    plugins: {
      '@org/foo': {}
      'markdown-it-bar': {
        // provide options here
      }
    }
  }
}
```

## 主题 themeConfig

```js

{
  locales: {},
  repo: 'vuejs/vitepress',
  docsDir: 'docs',
  editLinks: true,
  editLinkText: 'Edit this page on GitHub',
  lastUpdated: 'Last Updated',
  nav: [...],
  sidebar: { ... }
}

```
