import {get,put,del,post} from './ajax.js'

const weekArry = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
const formatTime = date => {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  let week = date.getDay()
  return `${year}年${month}月${day}日 ${weekArry[week]}`
}

const formatDate = (timestamp) => {
  timestamp = new Date(timestamp);
  let year = timestamp.getFullYear();
  let month = timestamp.getMonth() + 1;
  let date = timestamp.getDate();
  let hour = timestamp.getHours();
  let minute = timestamp.getMinutes();
  let second = timestamp.getSeconds();
  if (month < 10) {
    month = '0' + month;
  }
  if (date < 10) {
    date = '0' + date;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }
  return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}

const setTitle = title => {
  wx.setNavigationBarTitle({
    title: title
  })
}

const showLoading = title => {
  wx.showLoading({
    title: title || '加载中',
  })
}

const hideLoading = () => {
  wx.hideLoading()
}

const jump = (url, close) => {
  if (close) {
    wx.redirectTo({
      url: url
    })
  } else {
    wx.navigateTo({
      url: url
    })
  }
}

const statusHandler = (status, message) => {
  var _this = this;
  console.log('statusHandler(' + status + ')');
  console.log(status);
  wx.hideLoading();
  let showImg = '../imgs/fail.png'
    switch (status) {
      case 0:
        wx.showToast({
          title: '网络问题稍后再试',
          image: showImg,
          duration: 2000
        })
        break;
      case "request:fail timeout":
        wx.showToast({
          title: '请求超时稍后再试',
          image: showImg,
          duration: 2000
        })
        break;

      case 204:
        wx.showToast({
          title: '没有内容稍后再试',
          image: showImg,
          duration: 2000
        })
        break;
      case 401:
        wx.showToast({
          title: '没有权限',
          image: showImg,
          duration: 2000
        })
        break;
      case 403:
        wx.showToast({
          title: '没有权限',
          image: showImg,
          duration: 2000
        })
        break;
      case 404:
        wx.showToast({
          title: '请求地址错误',
          image: showImg,
          duration: 2000
        })
        break;
      case 500:
        wx.showToast({
          title: '请稍候再试',
          image: showImg,
          duration: 2000
        })

        break;
      case 502:
        wx.showToast({
          title: '请稍后再试',
          image: showImg,
          duration: 2000
        })
        break;
      default:
        wx.showToast({
          title: '未知错误',
          image: showImg,
          duration: 2000
        })
    }
}

// 精确到毫秒
const formatDateMilliseconds = timestamp => {
  timestamp = new Date(timestamp);
  var year = timestamp.getFullYear();
  var month = timestamp.getMonth() + 1;
  var date = timestamp.getDate();
  var hour = timestamp.getHours();
  var minute = timestamp.getMinutes();
  var second = timestamp.getSeconds();
  var milliseconds = timestamp.getMilliseconds();
  if (month < 10) {
    month = '0' + month;
  }
  if (date < 10) {
    date = '0' + date;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }
  return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second + ":" + milliseconds;
}

export const util = {
  get,
	put,
	del,
	post,
  formatTime,
  setTitle,
  showLoading,
  hideLoading,
  jump,
  statusHandler,
  formatDate
}