var util = require("../../../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindPhoneNumberInput: function (event) {
    this.data.phoneNumber = event.detail.value;
  },
  addMember: function () {
    var that = this;
    var lookForUserJson = {
      url: 'https://www.eunieunieuni.xin/schedule/lookForUser',
      data: { "tel": this.data.phoneNumber },
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        if (data != "") {
          var sameJudge = false;
          for (var i = 0; i < that.data.memberList.length; i++) {
            if (data.name == that.data.memberList[i].name) {
              sameJudge = true;
              break;
            }
          }
          if (sameJudge == false) {
            that.setData({
              memberList: that.data.memberList.concat(data)
            })
          }
        }
      },
      fail: function () { },
      complete: function () { },
      method: "POST",
    }
    util.NetRequest(lookForUserJson);
  },

  bindBackToGroupList: function (event) {
    var getGroupUsersJson = {
      url: 'https://www.eunieunieuni.xin/schedule/addGroupUsers',
      data: { 
        "groupid": this.data.groupid ,
        "userslist": this.data.memberList,
      },
      contentType: 'application/json',
      success: function (data) {
        console.log(data)
        wx.navigateBack({
          delta: 1,
        })
      },
      fail: function () { },
      complete: function () { },
      method: "POST",
    }
    util.NetRequest(getGroupUsersJson);
  },

  bindDeleteMember: function (event) {
    var userid = event.currentTarget.dataset.userid;
    var that = this;
    wx.showModal({
      title: '',
      content: '确定删除该成员吗？',
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
            }
          }
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var groupid = options.groupid;
    var memberList = new Array();
    this.setData({
      memberList: memberList,
      groupid: groupid
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