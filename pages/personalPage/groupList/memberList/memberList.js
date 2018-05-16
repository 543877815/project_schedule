var dataSimulateServer = require("../../../../dataSimulateServer/data.js")
var util = require("../../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindAddMember: function (event) {
    wx.navigateTo({
      url: 'addMemberPage/addMemberPage?groupid=' + this.data.groupid,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindDeleteMember: function (event) {
    var userid = event.currentTarget.dataset.userid;
    var that = this;
    wx.showModal({
      title: '',
      content: '确定删除该名成员吗？',
      showCancel: true,
      cancelText: '放弃删除',
      cancelColor: '',
      confirmText: '确定删除',
      confirmColor: '',
      success: function (res) {
        if (res.confirm) {
          for (var i = 0; i < that.data.memberList.length; i++) {
            if (userid == that.data.memberList[i].userid) {
              var NewmemberList = that.data.memberList
              NewmemberList.splice(i, 1)
              that.setData({
                memberList: NewmemberList
              })
              var deleteGroupUserJson = {
                url: 'https://www.eunieunieuni.xin/schedule/deleteGroupUser?userid=' + userid + '&groupid=' + that.data.groupid ,
                data: {},
                contentType: 'application/json',
                success: function (data) {
                  console.log(data)
                },
                fail: function () { },
                complete: function () { },
                method: "POST",
              }
              util.NetRequest(deleteGroupUserJson)
            }
          }
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      groupid: options.groupid,
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
  onShow: function (options) {
    console.log(this.data.groupid)
    var that = this;
    var getGroupUsersJson = {
      url: 'https://www.eunieunieuni.xin/schedule/getGroupUsers?groupid=' + that.data.groupid,
      data: {},
      contentType: 'application/json',
      success: function (data) {
        that.setData({
          memberList: data
        })
      },
      fail: function () { },
      complete: function () { },
      method: "POST",
    }
    util.NetRequest(getGroupUsersJson);
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