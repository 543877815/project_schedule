var app = getApp();
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    repeatLoginAlarm: true
  },
  bindUserPasswordInput: function (e) {
    this.data.UserPasswordInput = e.detail.value;
    console.log(this.data.UserPasswordInput)
    if (this.data.UserPasswordInput != this.data.UserRepeatPasswordwordInput) {
      this.setData({
        repeatAlarm: true
      })
    } else {
      this.setData({
        repeatAlarm: false
      })
    }
  },
  bindUserRepeatPasswordwordInput: function (e) {
    this.data.UserRepeatPasswordwordInput = e.detail.value;
    if (this.data.UserPasswordInput != this.data.UserRepeatPasswordwordInput) {
      this.setData({
        repeatAlarm: true
      })
    } else {
      this.setData({
        repeatAlarm: false
      })
    }

  },
  bindUserNameInput: function (e) {
    this.data.UserNameInput = e.detail.value;
    console.log(this.data.UserNameInput)
  },
  bindIdentifyingCodeInput: function (e) {
    this.data.IdentifyingCodeInput = e.detail.value;
    console.log(this.data.IdentifyingCodeInput);
  },
  bindPhone: function () {
    var data = this.data.userPhoneNumberInput;
    wx.setStorageSync("phone", data);

    // wx.switchTab({
    //   url: '../homePage/homePage',
    //   success: function (res) { },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })
  },
  bindUserPhoneNumberInput: function (e) {
    this.data.userPhoneNumberInput = e.detail.value;
    console.log(this.data.userPhoneNumberInput)
  },

  bindGetIdentifyingCode: function (e) {
    this.data.IdentifyingCode = e.detail.value;
    var sendParamJson = {
      url: 'https://www.eunieunieuni.xin/schedule/sendParam',
      //data: { "tel": this.data.userPhoneNumberInput },
      data: { "tel": this.data.userPhoneNumberInput },
      contentType: 'application/json',
      success: function (data) { console.log(data) },
      fail: function (res) { },
      complete: function (res) { },
      method: "POST"
    }
    util.NetRequest(sendParamJson)
  },

  bindClear: function () {
    wx.request({
      url: 'https://www.eunieunieuni.xin/schedule/deleteUser',
      method:"POST",
      data: { "tel": this.data.userPhoneNumberInput },
      header: { "content-type":"application/x-www-form-urlencoded"},
      success:function(res){
        console.log(res.data)
      }
    })
  },

  bindBackToHomePage: function (event) {
    var loginJson = {
      url: 'https://www.eunieunieuni.xin/schedule/login',
      data: {
        "name": this.data.UserNameInput,
        "password": this.data.UserPasswordInput
      },
      contentType: 'application/json',
      success: function (data) { },
      fail: function (res) { },
      complete: function (res) { },
      method: "POST"
    }
    var registerJson = {
      url: 'https://www.eunieunieuni.xin/schedule/register',
      data: {
        "tel": this.data.userPhoneNumberInput,
        "param": this.data.IdentifyingCodeInput,
        "name": this.data.UserNameInput,
        "password": this.data.UserPasswordInput
      },
      contentType: 'application/json',
      success: function (data) {
        if (data == 1) {
          util.NetRequest(loginJson)
          wx.switchTab({
            url: '../homePage/homePage',
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
    if (this.data.UserPasswordInput && this.data.UserRepeatPasswordwordInput
      && this.data.IdentifyingCodeInput && this.data.userPhoneNumberInput &&
      this.data.UserNameInput) {
      util.NetRequest(registerJson)
    } else {
      wx.showToast({
        title: '输入不完全',
        icon: '',
        image: '/miniProgram/schedule/imgs/tab/alarming.png',
        duration: 0,
        mask: true,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }


    //var userPhoneNumber = this.data.userPhoneNumberInput;
    // app.globalData.userInfo.phoneNumber = userPhoneNumber;
    //  wx.setStorageSync("phone", userPhoneNumber);

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