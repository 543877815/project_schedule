var app = getApp();
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userWechatInfo: {

    },
  },
  reBindPhoneNumber: function (event) {
    console.log(this.data.userServerInfo.tel)
    wx.navigateTo({
      url: 'reBindPhone/reBindPhone?tel=' + this.data.userServerInfo.tel,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindPersonalDetailInfo: function () {
    wx.navigateTo({
      url: 'detailInfo/detailInfo',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindGroupList: function (event) {
    wx.navigateTo({
      url: 'groupList/groupList',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindtaskList: function (event) {
    wx.navigateTo({
      url: 'taskList/taskList',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindopensetting:function(event){
    wx.openSetting({
      
    })
  },
  bindLogOutPage:function(){
    wx.navigateTo({
      url: 'logout/logout',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      userWechatInfo: app.globalData.userInfo,
    })
    var that = this;
    wx.getStorage({
      key: 'phone',
      success: function (res) {
        var thatSthat = that;
        var thatresdata = res.data;
        wx.getStorage({
          key: 'personalInfo',
          success: function (res) {
            for (var i = 0; i < res.data.length; i++) {
              if (res.data[i].userPhoneNumber == thatresdata) {
                thatSthat.setData({
                  userServerinfo: res.data[i]
                })
              }
            }
          },
        })
      },
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
    var that = this;
    wx.getStorage({
      key: 'phone',
      success: function (res) {
        that.setData({
          phoneNumber: res.data
        })
      },
    })
    var getInfoJson = {
      url: 'https://www.eunieunieuni.xin/schedule/getUserInformation',
      data: {},
      contentType:'application/json',
      success: function (data) {
        that.setData({
          userServerInfo: data
        })
        console.log(data)
      },
      fail: function () { },
      complete: function () { },
      method: "POST",
    }
    util.NetRequest(getInfoJson);
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