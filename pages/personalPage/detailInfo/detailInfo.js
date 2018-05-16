var app = getApp();
var util = require("../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindNickNameInput: function (e) {
    this.data.userServerInfo.nickname = e.detail.value;
  },
  bindUnitInput: function (e) {
    this.data.userServerInfo.college = e.detail.value;
  },
  bindDepartmentInput: function (e) {
    this.data.userServerInfo.major = e.detail.value;
  },
  bindSaveInfo: function () {
    var that = this;
    var alterInfoJson = {
      url: 'https://www.eunieunieuni.xin/schedule/alterUserInformation',
      data: {
        "college": this.data.userServerInfo.college,
        "major": this.data.userServerInfo.major,
        "nickname": this.data.userServerInfo.nickname,
      },
      contentType:'application/x-www-form-urlencoded',
      success: function (data) {
        console.log(data);
      },
      fail: function (res) { },
      complete: function (res) { },
      method: "POST"
    }
    util.NetRequest((alterInfoJson))
  },
  onLoad: function (options) {
    var that = this;
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

    this.setData({
      avatar: app.globalData.userInfo.avatarUrl
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