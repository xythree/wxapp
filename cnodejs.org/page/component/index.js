

var app = getApp()

Page({
    data: {
        hidden: false,
        data: {
            page: 0,
            tab: "all",
            mdrender: false
        },
        scrollTop: 0,
        tempLists: [],
        lists: [],
        tabInd: 0,
        tabLists: app.config.tagName
    },
    onLoad: function () {
        var _t = this

        this.loadLists(function (data) {
            _t.setData({
                hidden: true,
                lists: data.data.data
            })
        })
    },
    loadLists: function (callback) {

        wx.request({
            url: app.config.topics,
            data: this.data.data,
            success: function (data) {
                callback && callback(data)
            }
        })
        
    },
    ontab: function (ev) {
        var index = ev.currentTarget.dataset.index

        if (this.data.tabInd != index) {

            this.setData({
                tabInd: index,
                scrollTop: 0,
                data: {
                    tab: this.data.tabLists[index].us,
                    page: 0
                },
                tempLists: []
            })
            this.onbindscrolltolower()
        }
    },
    onbindscrolltolower: function () {
        var _t = this

        this.setData({
            hidden: false,
            page: ++this.data.page
        })
        
        this.loadLists(function (data) {

            data.data.data.map(function (t) {                
                 _t.data.tempLists.push(t)
            })
            
            _t.setData({
                hidden: true,
                lists: _t.data.tempLists
            })
            
        })
    }
    
})

















