export function wxPromisify(fn) {
  return function (obj) {
    obj = obj || {}
    return new Promise(function (resolve, reject) {
      obj.success = function (res) {
        resolve(res)
      }

      obj.fail = function (res) {
        uni.hideLoading()
        reject(res)
      }

      fn(obj)
    })
  }
}
