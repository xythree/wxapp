

var app = getApp()

Page({
    data: {
        hidden: false,
        title: "",
        time: "",
        author: "",
        visitCount: "",
        tagName: "",
        content: "",
        col_fade: 0,
        reply: {}
    },
    onLoad: function (options) {
        var _t = this        

        wx.request({
            url: app.config.topic + options.id,
            data: {
                mdrender: false
            },        
            success: function (data) {
                var d = data.data.data, tagName

                tagName = app.config.tagName.filter(function (t) {                                  
                    if (t.us == d.tab) {
                        return t.cn
                    }
                })

                _t.setData({
                    hidden: true,
                    title: d.title,
                    time: d.create_at,
                    author: d.author.loginname,
                    visitCount: d.visit_count,
                    tagName: tagName[0].cn,
                    content: d.content,
                    col_fade: d.replies.length,
                    reply: d.replies
                })
            }
        })
    }

})








