App({
  config: {
    topics: "https://cnodejs.org/api/v1/topics", //主题首页
    topic: "https://cnodejs.org/api/v1/topic/",    //主题详情
    tagName: [
        {us: "all", cn: "全部"},
        {us: "good", cn: "精华"},
        {us: "ask", cn: "问答"},
        {us: "share", cn: "分享"},
        {us: "job", cn: "招聘"}
    ]
  },
  onLaunch: function () {
    
  },
  onShow: function () {
    
  },
  onHide: function () {
    
  },
  globalData: {
    hasLogin: false
  }
})
