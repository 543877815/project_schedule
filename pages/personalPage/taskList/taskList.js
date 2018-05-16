
var util = require("../../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  bindViewTaskDetail: function (event) {
    var taskid = event.currentTarget.dataset.taskid;
    wx.navigateTo({
      url: 'task/task?taskid=' + taskid,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindDeleteTask: function (e) {
    var taskid = e.currentTarget.dataset.taskid;
    var that = this;
    wx.showModal({
      title: '',
      content: '确定删除该项任务？',
      showCancel: true,
      cancelText: '确定删除',
      cancelColor: '',
      confirmText: '取消删除',
      confirmColor: '',
      success: function (res) {
        if (res.cancel) {
          for (var i = 0; i < that.data.sendTasks.length; i++) {
            if (that.data.sendTasks[i].taskid == taskid) {
              var NewTaskLIsts = that.data.sendTasks;
              NewTaskLIsts.splice(i, 1);
              that.setData({
                sendTasks: NewTaskLIsts
              })
              var deleteTaskJson = {
                url: 'https://www.eunieunieuni.xin/schedule/deleteTask?task_id=' + taskid,
                data: {},
                contentType: 'application/json',
                success: function (data) {},
                fail: function () { },
                complete: function () { },
                method: "POST",
              }
              util.NetRequest(deleteTaskJson)
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
    var getSendTasksJson = {
      url: 'https://www.eunieunieuni.xin/schedule/getSendTasks',
      data: {},
      contentType: 'application/json',
      success: function (data) {
        that.setData({
          sendTasks: data
        })
      },
      fail: function () { },
      complete: function () { },
      method: "POST",
    }
    util.NetRequest(getSendTasksJson)
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