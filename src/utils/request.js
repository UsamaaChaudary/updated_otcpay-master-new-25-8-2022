import axios from "axios";
import { Message } from "element-ui";

// create an axios instance
const service = axios.create({
  baseURL: "", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
  // headers: {
  //   "Content-type": "application/x-www-form-urlencoded",
  // },
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code && res.code !== "00000") {
      Message({
        message: res.message || "系统错误",
        type: "error",
        duration: 5 * 1000,
      });
      return Promise.reject(new Error(res.message || "系统错误"));
    } else {
      return res;
    }
  },
  (error) => {
    let _message = "系统错误";
    if (typeof error.response === "undefined") {
      if (error.code === "ECONNABORTED") {
        Message.error({
          message: "请求超时",
        });
      }
      return Promise.reject(error);
    }
    switch (error.response.status) {
      case 404:
        _message = "资源不存在";
        break;
      case 403:
        _message = "您无权进行此操作";
        break;
      case 401:
        _message = "登录失效,请重新登录";
        break;
      default:
        _message = error.response.data.message || _message;
    }
    Message({
      message: _message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
