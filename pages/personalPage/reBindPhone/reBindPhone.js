var util = require("../../../utils/util.js")
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindUserPhoneNumberInput: function (e) {
    this.data.userPhoneNumberInput = e.detail.value;
  },
  bindidentifyingCodeInput:function(e){
    this.data.identifyingCodeInput = e.detail.value;
  },
  bindBackToPersonalPage: function (event) {
    var boundTelJson = {
      url: 'https://www.eunieunieuni.xin/schedule/boundTel',
      data: { 
        "tel": this.data.userPhoneNumberInput,
        "param": this.data.identifyingCodeInput
      },
      contentType: "application/x-www-form-urlencoded",
      success: function (data) {
        wx.navigateBack({
          delta: 1,
        })
       },
      fail: function (res) { },
      complete: function (res) { },
      method: "POST",
    }
    util.NetRequest(boundTelJson);
  },

  bindGetIdentifyingCode: function (e) {
    var sendParamJson = {
      url: 'https://www.eunieunieuni.xin/schedule/sendParam',
      data: { "tel": this.data.userPhoneNumberInput },
      contentType: "application/json",
      success: function (data) { },
      fail: function (res) { },
      complete: function (res) { },
      method: "POST",
    }
    util.NetRequest(sendParamJson);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tel:options.tel
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