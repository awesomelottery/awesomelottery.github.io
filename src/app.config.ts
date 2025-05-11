export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/manage/index',
    'pages/lottery/index'
  ],
  tabBar: {
    color: '#666',
    selectedColor: '#d81e06',
    backgroundColor: '#fff',
    list: [{
      pagePath: 'pages/index/index',
      text: '首页',
      iconPath: 'static/tabbar/home.svg',
      selectedIconPath: 'static/tabbar/home-active.svg',
    }, {
      pagePath: 'pages/manage/index',
      text: '管理',
      iconPath:'static/tabbar/manage.svg',
      selectedIconPath:'static/tabbar/manage-active.svg',
    }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
