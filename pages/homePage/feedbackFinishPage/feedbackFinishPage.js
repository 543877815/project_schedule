var util = require("../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2017-08-01",
  },
  backToHomePage: function () {
    var sendFeedbackJson = {
      url: 'https://www.eunieunieuni.xin/schedule/sendFeedback?feedback=' + this.data.date + '&task_id=' + this.data.taskid,
      data: {},
      contentType: 'application/json',
      success: function (data) {
        wx.navigateBack({
          delta: 1,
        })
      },
      fail: function () { },
      complete: function () { },
      method: "POST",
    }
    util.NetRequest(sendFeedbackJson)
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.data.taskid = options.taskid
    var task = JSON.parse(options.task)
    this.setData({
      task: task
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})