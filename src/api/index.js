// 包含所有接口请求函数的模块
// 每个函数的返回值都是promise

import ajax from "./ajax";
import mockAjax from "./mockAjax";

// 请求获取3级分类列表
// /api/product/getBaseCategoryList
export function reqBaseCategoryList() {
  // return ajax('/product/getBaseCategoryList')
  return ajax({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
  // return ajax.get('/product/getBaseCategoryList')
}

/* mock接口对应的接口请求函数 */
export const reqBanners = () => mockAjax("/banners");
export const reqFloors = () => mockAjax("/floors");

// 根据搜索的条件参数对象获取商品列表数据
export const reqProductList = (searchParams) =>
  ajax({
    url: "/list",
    method: "POST",
    data: searchParams,
  });
// 请求获取指定id的商品信息
// /api/item/{skud}
export const reqProduct = (skuId) => ajax(`/item/${skuId}`);
// reqProduct(6);//测试查看数据

// 添加购物车
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddToCart = (skuId, skuNumChange) =>
  ajax.post(`/cart/addToCart/${skuId}/${skuNumChange}`);

// 获取购物车列表
// /api/cart/cartList GET
export const reqCartList = () => ajax("/cart/cartList");

// 切换商品选中状态
// /api/cart/checkCart/{skuID}/{isChecked} GET
export const reqCheckCartItem = (skuId, isChecked) =>
  ajax(`/cart/checkCart/${skuId}/${isChecked}`);

// 删除购物车商品
// /api/cart/deleteCart/{skuId} DELETE
export const reqDeleteCartItem = (skuId) =>
  ajax.delete(`/cart/deleteCart/${skuId}`);

// 请求登陆
// /api/user/passport/login
// POST
export function reqLogin(mobile, password) {
  return ajax({
    method: "POST",
    url: "/user/passport/login",
    data: { mobile, password },
  });

  // return ajax.post('/user/passport/login', {mobile, password})
}

// 请求注册
// /api/user/passport/register  POST
export const reqRegister = (userInfo) =>
  ajax.post("/user/passport/register", userInfo);

// 退出登录
// /api/user/passport/logout
export const reqLogout = () => ajax("/user/passport/logout");

// 获取我的订单列表
// /api/order/auth/{page}/{limit}  GET
export const reqMyOrders = (page, limit) =>
  ajax(`/order/auth/${page}/${limit}`);

//获取订单交易页信息
// /api/order/auth/trade  GET
export const reqTradeInfo = () => ajax("/order/auth/trade");

// 提交订单
// /api/order/auth/submitOrder?tradeNo={tradeNo} POST
export const reqSubmitOrder = (tradeNo, orderInfo) =>
  ajax({
    url: "/order/auth/submitOrder",
    method: "POST",
    params: { tradeNo }, // 指定的是请求的query参数
    data: orderInfo, // 指定请求体数据对象  ==> 当前是包含订单信息
  }); // 当前是基于axios语法的配置, 而不vue-router

// 获取订单支付信息
// /api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo = (orderId) =>
  ajax(`/payment/weixin/createNative/${orderId}`);

// 查询支付订单装填
// /api/payment/weixin/queryPayStatus/{orderId} GET
export const reqOrderStatus = (orderId) =>
  ajax(`/payment/weixin/queryPayStatus/${orderId}`);
