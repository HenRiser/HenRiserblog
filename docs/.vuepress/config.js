module.exports = {
  title: "Codeverse",
  description: "分享个人学习心得及日常",
  theme: 'reco',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav:[
      {text:'主页',link:'/'},
      {text:'指南',link:'/guide/guide.md'},
      // {text:'学习',
      //   items:[
      //     {text:'英语',link:'/study/english/english01'},
      //     {text:'数学',link:'/study/math/math01'},
      //   ],
      // },
      {text:'Gitee仓库',link:'/'},//TODO
    ],
    navbbar:true,
    sidebar: [
      {//第一个侧边栏的路径
        title: '快速导航',
        collapsable:false,//可折叠的
        children: [
          {title:'蒟蒻乱爬→',
            children:[
              {title:'樗栎庸才', path:'/noob/noobtry/'},
              {title:'拾人牙慧', path:'/noob/yaytry/'},
            ]
          },
          {title:'闲侃漫谈→',
            children: [
              {title:'烫烫烫', path:'/schmooze/study/'},
              {title:'躺躺躺', path:'/schmooze/play/'},
            ]
          }//烫烫烫，躺躺躺
        ]
      },
    ],
    sidebarDepth:1,
    lastUpdated:'Last Updated'
  },
};