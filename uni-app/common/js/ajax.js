import {wxPromisify} from './promise.js'
// var md5 = require('md5');

var ajax = wxPromisify(uni.request);


// var source = 'wx_lpqd';
// var ver = '0.3';

// function getToken() {
//   return wx.getStorageSync('token');
// }

// // 获取header
// function getHeader() {
//   var token = getToken();
//   var argNum = arguments.length;
//   if (argNum > 2) {
//     alert("请求参数不正确");
//     return;
//   }

//   var url = encodeURI(arguments[0]);
//   var json = "";
//   if (argNum == 2) {
//     if (typeof arguments[1] == "string") {
//       json = arguments[1];
//     } else {
//       json = JSON.stringify(arguments[1]);
//     }
//   }


//   if (url.split('/')[3] == 'sso') {
//     var key = '2d7fce9f-cea5-11e7-ad62-00163e068d8f';
//   } else {
//     var key = token || '2d7fce9f-cea5-11e7-ad62-00163e068d8f';
//   }


//   var timestamp = Date.parse(new Date());

//   var sign = md5(key + timestamp + url + json);
//   sign = sign.replace(' ', '');

//   var header = new Object({
//     ver: ver,
//     source: source,
//     timestamp: timestamp,
//     sign: sign,
//     token: key
//   });

//   return header;
// }

// get方法
function get(url) {
  // var header = getHeader(url);
  return ajax({
    method: 'GET',
    url: url,
    dataType: 'json',
    // header: header
  })
}

// post方法
function post(url, data) {
  // var header = getHeader(url, data);
  return ajax({
    method: 'POST',
    url: url,
    data: data,
    dataType: 'json',
    // header: header
  })
}

//  put方法
function put(url, data) {
  // var header = getHeader(url, data);
  return ajax({
    method: 'PUT',
    url: url,
    dataType: 'json',
    data: data,
    // header: header
  })
}

//  delete方法
function del(url) {
  // var header = getHeader(url);
  return ajax({
    method: 'DELETE',
    url: url,
    dataType: 'json',
    // header: header
  })
}

export {
  get,
  post,
  put,
  del,
}