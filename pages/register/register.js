var app = getApp();
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindUserInput: function (e) {
    this.data.user = e.detail.value
  },
  bindPasswordInput: function (e) {
    this.data.password = e.detail.value
    if (this.data.password != this.data.repeatPassword) {
      this.setData({
        repeatAlarm: true
      })
    } else {
      this.setData({
        repeatAlarm: false
      })
    }
  },
  bindRepeatPasswordInput: function (e) {
    this.data.repeatPassword = e.detail.value;
    if (this.data.password != this.data.repeatPassword) {
      this.setData({
        repeatAlarm: true
      })
    } else {
      this.setData({
        repeatAlarm: false
      })
    }
  },
  getUserInfomation: function () {
    var that = this
    var getUserInfomationJson = {
      url: 'https://www.eunieunieuni.xin/schedule/getUserInformation',
      data: {
        "name": that.data.user,
        "password": that.data.password,
      },
      contentType: "application/x-www-form-urlencoded",
      success: function (data) {
        console.log(data);
        wx.switchTab({
          url: '../homePage/homePage',
        })
      },
      fail: function (res) { },
      complete: function (res) { },
      method: "POST"
    }
    util.NetRequest(getUserInfomationJson)
  },
  bindregister: function () {
    var that = this;
    var registerJson = {
      url: 'https://www.eunieunieuni.xin/schedule/wechatRegister',
      data: {
        "name": this.data.user,
        "password": this.data.password,
      },
      contentType: "application/json",
      success: function (data) {
        if(data==1){
          wx.switchTab({
            url: '../homePage/homePage',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
          })
        }
        console.log(data);
      },
      fail: function (res) { },
      complete: function (res) { },
      method: "POST"
    }
    util.NetRequest(registerJson)
  },
  /**
   * 生命周期函数--监听页面加载
   */
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