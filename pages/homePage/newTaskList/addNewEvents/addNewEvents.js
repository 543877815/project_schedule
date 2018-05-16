var app = getApp();
var util = require("../../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urgencyDegree: ['不紧急', '一般', '紧急'],
    urgency: "0",
    title: "",
    context: "",
    feedback: "0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindTaskTitleInput: function (e) {
    this.setData({
      title: e.detail.value
    })
  },

  bindTaskDescriptionInput: function (e) {
    this.setData({
      context: e.detail.value
    })
  },

  formatTime: function (date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    this.setData({
      date: year + "-" + month + "-" + day,
      time: (hour + 1) + ":" + "00",
    })
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindPerformerSelect: function () {
    wx.navigateTo({
      url: '../performList/performList',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },

  bindUrgencyChange: function (e) {
    this.setData({
      urgency: e.detail.value
    })
  },

  bindlaunch: function (e) {
    var that = this;
    if (this.data.users == undefined || this.data.users == []) {
      wx.showToast({
        title: '请选择执行人',
        icon: '',
        image: '/miniProgram/schedule/imgs/tab/alarming.png',
        duration: 0,
        mask: true,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else {
      var urgency = "";
      switch (this.data.urgency) {
        case "0":
          urgency = "5"
          break;
        case "1":
          urgency = "6"
          break;
        case "2":
          urgency = "7"
          break;
      }
      //+":00"因为后台格式要求，然而小程序picker没有封装秒
      var deadline = this.data.date + " " + this.data.time + ":00"
      var createTaskJson = {
        url: 'https://www.eunieunieuni.xin/schedule/createTask',
        data: {
          "title": this.data.title,
          "context": this.data.context,
          "deadline": deadline,
          "urgency": urgency,
          "feedbacktype": this.data.feedback,
          "users": this.data.users
        },
        contentType: 'application/json',
        success: function (data) {
          wx.switchTab({
            url: '../../homePage',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        },
        fail: function () { },
        complete: function () { },
        method: "POST",
      }
      util.NetRequest(createTaskJson);

    }

  },
  onLoad: function (options) {
    this.formatTime(new Date());
    if (options.feedback == "true") {
      this.data.feedback = "0";
    } else {
      this.data.feedback = "1";
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (option) {

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