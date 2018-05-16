var util = require("../../../../utils/util.js")
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
            var addBlackListUserJson = {
              url:"https://www.eunieunieuni.xin/schedule/addBlackListUser?userid=" + data.userid,
              data:{},
              contentType: 'application/x-www-form-urlencoded',
              success:function(){},
              fail:function(){},
              complete:function(){},
              method: "POST"
            }
            util.NetRequest(addBlackListUserJson)
          }
        }
      },
      fail: function () { },
      complete: function () { },
      method: "POST",
    }
    util.NetRequest(lookForUserJson);
  },
  bindBackToGroupList:function(){
      wx.navigateBack({
        delta: 1,
      })
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
    var memberList = new Array();
    var that = this
    this.setData({
      memberList: memberList,
    })
    var getGroupUsersJson = {
      url: 'https://www.eunieunieuni.xin/schedule/getGroupUsers?groupid=' + options.groupid,
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