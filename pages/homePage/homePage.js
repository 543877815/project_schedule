var app = getApp();
var util = require("../../utils/util.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  turnToFinishPage: function (event) {

  },
  turnToFeedbackFinishPage: function (event) {
    var taskid = event.currentTarget.dataset.taskid;
    var task = undefined;
    for (var i = 0; i < this.data.receiveTasks.length; i++) {
      if (this.data.receiveTasks[i].taskid == taskid) {
        task = JSON.stringify(this.data.receiveTasks[i])
        break;
      }
    }
    console.log(task)
    wx.navigateTo({
      url: 'feedbackFinishPage/feedbackFinishPage?taskid=' + taskid + "&task=" + task,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  turnToNonFeedbackFinishPage: function (event) {
    var taskid = event.currentTarget.dataset.taskid;
    var task = undefined;
    for (var i = 0; i < this.data.receiveTasks.length; i++) {
      if (this.data.receiveTasks[i].taskid == taskid) {
        task = JSON.stringify(this.data.receiveTasks[i])
        break;
      }
    }
    wx.navigateTo({
      url: 'nonFeedbackFinishPage/nonFeedbackFinishPage?taskid=' + taskid + "&task=" + task,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  turnToaddNewTask: function (event) {
    wx.navigateTo({
      url: 'newTaskList/newTaskList',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  showGiveUpModal: function (event) {
    var taskid = event.currentTarget.dataset.taskid;
    var that = this;
    wx.showModal({
      title: '警告',
      content: '确定放弃该任务吗？',
      cancelText: '确定放弃',
      confirmText: '努力一把',
      success: function (res) {
        if (res.cancel) {
          for (var i = 0; i < that.data.receiveTasks.length; i++) {
            if (that.data.receiveTasks[i].taskid == taskid) {
              var param = {};
              var String = "receiveTasks[" + i + "].urgency";
              param[String] = "已放弃"
              that.setData(param)
              var giveUpTaskJson = {
                url: 'https://www.eunieunieuni.xin/schedule/giveupTask?task_id=' + taskid,
                data: {},
                contentType: 'application/json',
                success: function (data) {
                  console.log(data)
                },
                fail: function () { },
                complete: function () { },
                method: "POST",
              }
              util.NetRequest(giveUpTaskJson)
            }
          }
        }
      }
    })

  },
  onPullDownRefresh: function () {
    var that = this;
    wx.stopPullDownRefresh()
  },
  onLoad: function (options) {
    this.setData({
      userWechatInfo: app.globalData.userInfo
    })
    if (app.globalData.firstEnter == true) {
      wx.redirectTo({
        url: '../bindPhone/bindPhone',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }

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
    if (app.globalData.firstEnter == false || app.globalData.firstEnter == undefined) {
      var getReceivedTasksJson = {
        url: 'https://www.eunieunieuni.xin/schedule/getRecievedTasks',
        data: {},
        contentType: 'application/json',
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            var dateAndTime = data[i].deadline.split(" ");
            var date = dateAndTime[0].split("-")
            data[i].deadlineYear = date[0];
            data[i].deadlineMonth = date[1];
            data[i].deadlineDay = date[2];
            data[i].deadlineTime = dateAndTime[1]
            if (data[i].state == 2) {
              switch (data[i].urgency) {
                case 5:
                  data[i].urgency = "不紧急";
                  break;
                case 6:
                  data[i].urgency = "一般";
                  break;
                case 7:
                  data[i].urgency = "紧急";
                  break;
              }
            } else {
              switch (data[i].state) {
                case 3:
                  data[i].urgency = "已完成";
                  break;
                case 4:
                  data[i].urgency = "已结束";
                  break;
                case 5:
                  data[i].urgency = "已放弃";
                  break;
              }
            }

          }
          that.setData({
            receiveTasks: data
          })
        },
        fail: function () { },
        complete: function () { },
        method: "POST",
      }
      util.NetRequest(getReceivedTasksJson);
    }

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