var util = require("../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindAddGroup: function (event) {
    wx.navigateTo({
      url: 'addGroup/addGroup',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  bindTurnToMemberList: function (event) {
    var groupid = event.currentTarget.dataset.groupid
    if(groupid!="0000"){
      wx.navigateTo({
        url: 'memberList/memberList?groupid=' + groupid,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }else if (groupid=="0000"){
      wx.navigateTo({
        url: 'blackMemberList/blackMemberList?groupid=' + groupid,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },

  bindGroupDelete: function (event) {
    var groupid = event.currentTarget.dataset.groupid
    var that = this;
    wx.showModal({
      title: '',
      content: '确定删除本组？',
      showCancel: true,
      cancelText: '放弃删除',
      cancelColor: '',
      confirmText: '确定删除',
      confirmColor: '',
      success: function (res) {
        if (res.confirm) {
          for (var i = 0; i < that.data.groupList.length; i++) {
            if (groupid == that.data.groupList[i].groupid) {
              var NewgroupList = that.data.groupList
              NewgroupList.splice(i, 1)
              that.setData({
                groupList: NewgroupList
              })
              var deleteGroupJson = {
                url: 'https://www.eunieunieuni.xin/schedule/deleteGroup?groupid=' + groupid,
                data: {},
                contentType: 'application/json',
                success: function (data) {
                  console.log(data)
                },
                fail: function () { },
                complete: function () { },
                method: "POST",
              }
              util.NetRequest(deleteGroupJson)
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
    var getGroupListJson = {
      url: 'https://www.eunieunieuni.xin/schedule/getGroupList',
      data: {},
      contentType: 'application/json',
      success: function (data) {
        that.setData({
          groupList: data
        })
        console.log(data)
      },
      fail: function () { },
      complete: function () { },
      method: "POST",
    }
    util.NetRequest(getGroupListJson);
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