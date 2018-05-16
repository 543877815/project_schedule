function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function json2Form(json) {
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}


function NetRequest({ url, data, contentType,success, fail, complete, method = "POST" }) {
  var sessionID = wx.getStorageSync('JSESSIONID');//本地取存储的sessionID
  if (sessionID != "" && sessionID != null) {
    var header = { 'content-type': contentType, 'Cookie': 'JSESSIONID=' + sessionID }
  } else {
    var header = { 'content-type': contentType }
  }
  //console.log(sessionID);
  wx.request({
    url: url,
    method: method,
    data: data,
    header: header,
    success: res => {
      if (sessionID == "" || sessionID == null) {
        wx.setStorageSync('JSESSIONID', res.header.sessionID) //如果本地没有就说明第一次请求 把返回的session id 存入本地
      }
      console.log(res);
      let data = res.data
      res['statusCode'] === 200 ? success(data) : fail(res)
    },
    fail: fail,
    complete: complete
  })

}
module.exports = {
  formatTime: formatTime,
  json2Form: json2Form,
  NetRequest: NetRequest
}
