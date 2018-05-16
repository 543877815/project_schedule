var app = getApp();
var dataHomePage = require("../../../../dataSimulateServer/data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urgencyDegree: ['一般', '中等', '紧急'],
    urgency: 0,
    task: {
      taskTitle: "",
      taskDescription: "",
      deadlineYear: null,
      deadlineMonth: null,
      deadlineDay: null,
      deadlineHour: null,
      deadlineMinite: null,
      urgencyDegree: '一般',
      feedBack: null,
      taskId: 0,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindTaskTitleInput: function (e) {
    if (e.detail.value.length <= 20) {
      this.setData({
        titleAlarm: false
      })
      this.data.task.taskTitle = e.detail.value;
    } else {
      this.setData({
        titleAlarm: true
      })
    }
  },

  bindTaskDescriptionInput: function (e) {
    if (e.detail.value.length <= 200) {
      this.setData({
        descriptionAlarm: false
      })
      this.data.task.taskDescription = e.detail.value;
    } else {
      this.setData({
        descriptionAlarm: true
      })
    }
  },

  formatTime: function (date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    this.setData({
      date: year + "-" + month + "-" + day,
      time: hour + ":" + "00",
    })
    this.data.task.deadlineYear = year;
    this.data.task.deadlineMonth = month;
    this.data.task.deadlineDay = day;
    this.data.task.deadlineHour = hour;
    this.data.task.deadlineMinite = minute;
  },

  bindDateChange: function (e) {
    var dateArray = e.detail.value.split("-");
    //setData具有覆盖性
    this.data.task.deadlineYear = dateArray[0];
    this.data.task.deadlineMonth = dateArray[1];
    this.data.task.deadlineDay = dateArray[2];
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
    var timeArray = e.detail.value.split(":");
    this.data.task.deadlineHour = timeArray[0];
    this.data.task.deadlineMinite = timeArray[1];
  },

  bindUrgencyChange: function (e) {
    this.setData({
      urgency: e.detail.value
    })
    this.data.task.urgencyDegree = this.data.urgencyDegree[e.detail.value]
  },

  bindlaunch: function (e) {
    var tempTask = this.data.task;
    // dataHomePage.taskListServer.push(this.data.task);
    // // dataHomePage.taskList = dataHomePage.taskList.concat(tempTask)
    // wx.setStorage({
    //   key: 'tasks',
    //   data: dataHomePage.taskListServer,
    // })
    wx.switchTab({
      url: '../../homePage',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onLoad: function (option) {
    this.formatTime(new Date());
    this.data.task.feedBack = option.feedBack;
    this.data.task.taskId = dataHomePage.receiveTask.length
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (option) {

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