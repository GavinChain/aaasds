/**
  * 全站路径配置
  */
const root = {
  /** 部署的二级地址 */
  base: '/docs',
  // 搜索的文件名地址，默认是根目录下,与Layout.vue 搜索数据源同步
  keyword: '\\keywords.json',
  /** 当前项目根目录地址 */
  path: '',
};

/**
 * 顶部导航
 */
const nav = [{ text: '主页', link: '/' }, { text: '扩展', link: '/code/' }];

/**
   * 左侧导航分类
   */
let sidebar = {
  '/code/': [
    {
      text: '基础',
      link: 'base',
    },
    {
      text: '使用',
      link: 'index',
    },
    {
      text: '图表组件',
      link: 'graphs',
    },
    {
      text: 'JS组件',
      link: 'run',
    },
  ],
  '/': [
    {
      text: '介绍',
      link: 'index',
    },
  ],
};

const path = require('path');
/**
 * 根目路径
 * @param {*} dir 指定的路径
 * @returns 返回完整路径
 */
const resolve = dir => {
  return path.resolve(__dirname, dir);
};

// 当前项目目录
root.path = resolve('../../');

/**
 * markdown-it 外挂
 * @param {*} md 对象
 */
const usePlus = md => {
  // use more markdown-it plugins!
  md.use(
    require('quick-plugin-md/language/'),
    {
      // 无需标签根据第一行代码自动转为图形组件
      // tags: ['gitGraph', 'classDiagram', 'sequenceDiagram', 'gantt'],
      // /** 默认标签*/
      // default: 'mermaid',
      // // 输出日志
      // log: true,
      // // 自定义markdown标签对应转换的模板组件名
      // template: {
      //   // mermaid 标签转为 组件定义
      //   // mermaid: '<mermaid code="{code}"></mermaid>',
      //   mermaid: '<mermaid>{code}</mermaid>',
      //   pie: '<PieCode>{code}</PieCode>',
      // },
    }
  );
};

/**
 * 路径补全处理
 * @param {*} data 侧边栏
 * @returns 
 */
const pathJoin = data => {
  let _sidebar = {};

  // 路径处理
  for (let k in data) {
    // let _key = k != '/' ? root.base + k : k;
    // console.log('sidebar', k);
    data[k].forEach(e => {
      // console.log('sidebar.' + k, e);
      // 补充路径
      e.link = k + e.link;
      if (e.children) {
        // 有下级
        let _chpath = e.link.replace(/index$/gi, '');
        e.children.forEach(item => {
          // 补充路径
          item.link = _chpath + item.link;
        });
      }
    });

    _sidebar[k] = data[k];
  }

  return _sidebar;
};

sidebar = pathJoin(sidebar);

/**
 * 初始化页面的搜索数据
 */
const { KeywordInit } = require('quick-plugin-md/search/');
KeywordInit(sidebar, root.keyword, root.path);

//console.log(sidebar);

module.exports = { resolve, usePlus, root, nav, sidebar };
