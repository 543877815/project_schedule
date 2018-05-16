// pages/homePage/newTask/addFeedBackEvents/addFeedBackEvents.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      time:"00:00",
      date:"2017-08-01",
      urgencyDegree:['一般','中等','紧急'],
      urgency: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindlaunch: function (e) {
    wx.navigateBack({
      delta: 2,
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindUrgencyChange:function (e){
    this.setData({
      urgency: e.detail.value
    })
  },
  onLoad: function (options) {
  
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