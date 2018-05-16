var util = require("../../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindGroupNameInput: function (event) {
    this.data.groupname = event.detail.value;
  },

  bindAddMember: function (event) {
    var that = this;
    var createGroupJson ={
      url: 'https://www.eunieunieuni.xin/schedule/createGroup',
      data: {
        "groupname": this.data.groupname
      },
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        that.setData({
          groupid: data
        })
        wx.redirectTo({
          url: '../memberList/addMemberPage/addMemberPage?groupid=' + that.data.groupid,
        })
      },
      fail: function () { },
      complete: function () { },
      method: "POST",
    }
    util.NetRequest(createGroupJson)
    
    // wx.getStorage({
    //   key: 'groupList',
    //   success: function (res) {
    //     var groupId = res.data.length;
    //     console.log(groupId)
    //     var newGroup = {
    //       groupName,
    //       groupId,
    //       groupMembers,
    //     }
    //     res.data.push(newGroup);
    //     wx.setStorage({
    //       key: 'groupList',
    //       data: res.data,
    //     })
    //     wx.redirectTo({
    //       url: '../memberList/addMemberPage/addMemberPage?groupId=' + groupId,
    //     })
    //   },
    // })
    
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