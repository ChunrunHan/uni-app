const urlbase = 'https://www.rainrain.xin/hospital'

export const api = {
    // 获取用户openid
    getopenid: (jscode) => `${urlbase}/openid/${jscode}`,
    // 判断用户是否可以下单
    getcanorder: (jscode) => `${urlbase}/openid/canorder/${jscode}`,
    // 用户下单接口
    postorder: () => `${urlbase}/order/commit`,
    // 获取用户下单记录
    getorder: (userid) => `${urlbase}/order/search/${userid}`,
    // 获取用户下单记录
    getdetails: (userid) => `${urlbase}/order/details/${userid}`,
    // 统计用户本月和上月下单数量
    getcount: (userid) => `${urlbase}/order/count/${userid}`
}
