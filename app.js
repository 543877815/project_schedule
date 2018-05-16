var util = require('utils/util.js')
App({
  data: {

  },
  onLaunch: function () {
    wx.removeStorage({
      key: 'JSESSIONID',
      success: function(res) {},
    })
    var that = this;
    //首次登陆判断
    wx.getStorage({
      key: '3rd_session',
      //不是首次登陆
      success: function (res) {
        if (res =="third_session aleardy exist"){
          that.globalData.firstEnter = true;
          that.login();
        }
        var checkThirdSessionJson = {
          url: 'https://www.eunieunieuni.xin/schedule/checkThirdSession',
          data: {
            "3rd_session": res.data
          },
          contentType: 'application/x-www-form-urlencoded',
          success: function (res) {
            that.getUserInfo();
            if (res == 6 || res == 0) {
              that.login();
              that.globalData.firstEnter = true;
            }
          },
          fail: function () {
            console.log("fail")
            that.globalData.firstEnter = true;
          },
          complete: function () { },
          method: "POST",
        }
        util.NetRequest(checkThirdSessionJson);
      },
      //是首次登陆
      fail: function (res) {
        that.globalData.firstEnter = true;
        that.login();
      }
    })
    wx.checkSession({
      success: function () {
        console.log("success");
      },
      fail: function () {
        console.log("fail");
        that.login();
        that.getWechatInfo();
        that.globalData.firstEnter = true;
      },
      complete: function () { 
        console.log("complete");
        },
    })
  },
  
  login: function () {
    var that = this;
    wx.login({
      success: function (res) {
        console.log(res)
        if (res.code) {
          //利用res.code换取3rd_session
          var getThirdSessionJson = {
            url: 'https://www.eunieunieuni.xin/schedule/getThirdSession',
            data: { code: res.code },
            contentType: "application/x-www-form-urlencoded",
            success: function (res) {
              //保存3rd_session
              wx.setStorage({
                key: '3rd_session',
                data: res,
              })
              that.globalData.thirdSession = res;
              //调用小程序获取用户信息接口，要在login后调用
              that.getUserInfoSecret();
            },
            fail: function (res) { },
            complete: function (res) { },
            method: "POST"
          }
          util.NetRequest(getThirdSessionJson);
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  getUserInfo: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        that.globalData.userInfo = res.userInfo
        typeof cb == "function" && cb(that.globalData.userInfo);
      }
    })
  },
  getWechatInfo:function(){
    var that = this;
    wx.getUserInfo({
      withCredentials: true,
      success: function (res) {
        that.globalData.userInfo = res.userInfo
        that.globalData.encryptedData = res.encryptedData
        that.globalData.iv = res.iv
        typeof cb == "function" && cb(that.globalData.userInfo);
        //将获取的用户信息传入后台进行解密
        var getWechatInfoJson = {
          url: 'https://www.eunieunieuni.xin/schedule/getWechatInfo',
          data: {
            "encryptedData": res.encryptedData,
            "iv": res.iv,
            "signature": res.signature,
            "rawData": res.rawData
          },
          contentType: "application/json",
          success: function (res) {
            that.globalData.unionId = res
            console.log(res)
          },
          fail: function (res) { },
          complete: function (res) { },
          method: "POST",
        }
        util.NetRequest(getWechatInfoJson);
      }
    })
  },
  getUserInfoSecret: function (cb) {
    var that = this;
    wx.getUserInfo({
      withCredentials: true,
      success: function (res) {
        that.globalData.userInfo = res.userInfo
        that.globalData.encryptedData = res.encryptedData
        that.globalData.iv = res.iv
        typeof cb == "function" && cb(that.globalData.userInfo);
        //将获取的用户信息传入后台进行解密
        var getWechatInfoJson = {
          url: 'https://www.eunieunieuni.xin/schedule/getWechatInfo',
          data: {
            "encryptedData": res.encryptedData,
            "iv": res.iv,
            "signature": res.signature,
            "rawData": res.rawData
          },
          contentType: "application/json",
          success: function (res) {
            that.globalData.unionId = res
            console.log(res)
          },
          fail: function (res) { },
          complete: function (res) { },
          method: "POST",
        }
        util.NetRequest(getWechatInfoJson);
      }
    })
    // var that = this;
    // if (this.globalData.userInfo) {
    //   typeof cb == "function" && cb(this.globalData.userInfo)
    // } else {
    //   //获取包括UNIONID在内的用户信息
    //   var that = this;
    //   wx.getUserInfo({
    //     withCredentials: true,
    //     success: function (res) {
    //       that.globalData.userInfo = res.userInfo
    //       that.globalData.encryptedData = res.encryptedData
    //       that.globalData.iv = res.iv
    //       typeof cb == "function" && cb(that.globalData.userInfo);
    //       //将获取的用户信息传入后台进行解密
    //       var getWechatInfoJson = {
    //         url: 'https://www.eunieunieuni.xin/schedule/getWechatInfo',
    //         data: {
    //           "encryptedData": res.encryptedData,
    //           "iv": res.iv,
    //           "signature": res.signature,
    //           "rawData": res.rawData
    //         },
    //         contentType: "application/json",
    //         success: function (res) {
    //           that.globalData.unionId = res
    //           console.log(res)
    //         },
    //         fail: function (res) { },
    //         complete: function (res) { },
    //         method: "POST",
    //       }
    //       util.NetRequest(getWechatInfoJson);
    //     }
    //   })
    // }
  },


  globalData: {
    userInfo: null
  }
})
