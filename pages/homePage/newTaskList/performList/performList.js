var util = require("../../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  addSendUser: function () {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    var userlist = [];
    for (var i = 0; i < this.data.groupList.length; i++){
      for (var j = 0; j < this.data.groupList[i].usersBeanList.length; j++){
        if (this.data.groupList[i].usersBeanList[j].checked==true){
          userlist = userlist.concat(this.data.groupList[i].usersBeanList[j]);
        }
      }
    }
    prevPage.setData({
      users:userlist
    })
    wx.navigateBack({
      delta: 1
    })
  },
  bindGroupSelectTap: function (event) {
    var groupid = event.currentTarget.dataset.groupid;
    for (var i = 0; i < this.data.groupList.length; i++) {
      var param = {};
      var String = "groupList[" + i + "].checked";
      if (this.data.groupList[i].groupid == groupid) {
        (this.data.groupList[i].checked == false) ?
          this.data.groupList[i].checked = true :
          this.data.groupList[i].checked = false;
        var param = {};
        var String = "groupList[" + i + "].checked";
        param[String] = this.data.groupList[i].checked
        this.setData(param);
        for (var j = 0; j < this.data.groupList[i].usersBeanList.length; j++) {
          (this.data.groupList[i].checked == false) ?
            this.data.groupList[i].usersBeanList[j].checked = false :
            this.data.groupList[i].usersBeanList[j].checked = true
          var param = {};
          var String = "groupList[" + i + "].usersBeanList[" + j + "].checked";
          param[String] = this.data.groupList[i].usersBeanList[j].checked
          this.setData(param)
        }
      }
    }
  },
  bindGroupTap: function (event) {
    var groupid = event.currentTarget.dataset.groupid;
    for (var i = 0; i < this.data.groupList.length; i++) {
      var param = {};
      var String = "groupList[" + i + "].display";
      if (this.data.groupList[i].groupid == groupid && this.data.groupList[i].display == "active") {
        param[String] = "hide";
        this.setData(param)
        break;
      }
      (this.data.groupList[i].groupid == groupid) ?
        param[String] = "active" :
        param[String] = "hide";
      this.setData(param)
    }
  },
  bindMemberTap: function (event) {
    var groupid = event.currentTarget.dataset.groupid;
    var userid = event.currentTarget.dataset.userid;
    for (var i = 0; i < this.data.groupList.length; i++) {
      if (groupid == this.data.groupList[i].groupid) {
        var groupChecked = true;
        for (var j = 0; j < this.data.groupList[i].usersBeanList.length; j++) {
          if (this.data.groupList[i].usersBeanList[j].userid == userid) {
            (this.data.groupList[i].usersBeanList[j].checked == false) ?
              this.data.groupList[i].usersBeanList[j].checked = true :
              this.data.groupList[i].usersBeanList[j].checked = false && (groupChecked = false);
            var param = {};
            var String = "groupList[" + i + "].usersBeanList[" + j + "].checked";
            param[String] = this.data.groupList[i].usersBeanList[j].checked
            this.setData(param)
          }
          if (this.data.groupList[i].usersBeanList[j].checked == false) {
            groupChecked = false;
          }
          var param1 = {};
          var String1 = "groupList[" + i + "].checked";
          groupChecked == true ? param1[String1] = true : param1[String1] = false;
          this.setData(param1)
        }
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var getGroupListJson = {
      url: 'https://www.eunieunieuni.xin/schedule/getAll',
      data: {},
      contentType: 'application/json',
      success: function (data) {
        that.setData({
          groupList: data,
        })
        for (var i = 0; i < that.data.groupList.length; i++) {
          for (var j = 0; j < that.data.groupList[i].usersBeanList.length; j++) {
            var param = {};
            var String = "groupList[" + i + "].usersBeanList[" + j + "].checked";
            param[String] = false
            that.setData(param)
          }
          var param = {};
          var String = "groupList[" + i + "].checked";
          param[String] = false;
          that.setData(param)
        }
      },
      fail: function () { },
      complete: function () { },
      method: "POST",
    }
    util.NetRequest(getGroupListJson);
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