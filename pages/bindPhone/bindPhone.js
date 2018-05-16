var app = getApp();
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  bindClear: function () {
    wx.request({
      url: 'https://www.eunieunieuni.xin/schedule/deleteUser',
      method: "POST",
      data: { "tel": this.data.userPhoneNumberInput },
      header: { "content-type": "application/x-www-form-urlencoded" },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  bindGetIdentifyingCode: function () {
    var sendParamJson = {
      url: 'https://www.eunieunieuni.xin/schedule/sendParam',
      data: { "tel": this.data.userPhoneNumberInput },
      contentType: "application/json",
      success: function (data) {},
      fail: function (res) { },
      complete: function (res) { },
      method: "POST"
    }
    util.NetRequest(sendParamJson)
  },
  bindwechatOut: function () {
    wx.request({
      url: 'https://www.eunieunieuni.xin/schedule/wechatOut?unionId=ot5--1aD_SYnwYmZI5k5rl0KY5vU', //+ app.globalData.unionId,
      method: "POST",
      header: {
        'content-type': "application/json"
      },
      success: function (res) {
        console.log(res.data)
      },
    })
  },
  bindIdentifyingCodeInput: function (e) {
    this.data.IdentifyingCode = e.detail.value
  },
  bindUserPhoneNumberInput: function (e) {
    this.data.userPhoneNumberInput = e.detail.value;
  },

  bindBackToPersonalPage: function (event) {
    var bindPhoneJson = {
      url: 'https://www.eunieunieuni.xin/schedule/wechatTel',
      data: {
        "tel": this.data.userPhoneNumberInput,
        "param": this.data.IdentifyingCode,
      },
      contentType: "application/json",
      success: function (data) {
        if (data == 2) {
          app.globalData.firstEnter = false
          wx.navigateTo({
            url: '../register/register',
          })
        } else if (data == 1) {
          app.globalData.firstEnter = false
          wx.switchTab({
            url: '../homePage/homePage',
          })
        } else if (data == 3) {
          wx.showToast({
            title: '验证码超时或错误',
            icon: '',
            image: '/miniProgram/schedule/imgs/tab/alarming.png',
            duration: 0,
            mask: true,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
      method: "POST"
    }
    util.NetRequest(bindPhoneJson);

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