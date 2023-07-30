import Web3 from "web3";
import "nprogress/nprogress.css";
import nprogress from "nprogress";
import type { RequestConfig } from "umi";

// 网站初始化
export function render(oldRender: any) {
  console.log("init");
  !window.ethereum && new Web3(window.ethereum);
  nprogress.start();
  oldRender();
}

// 路由切换
export function onRouteChange() {
  console.log("change");
  nprogress.start();
  window.scrollTo(0, 0);
  nprogress.done();
}

// 运行时配置
export const request: RequestConfig = {
  // 统一的请求设定
  timeout: 10000,
  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {
    // 错误抛出
    errorThrower: (res: any) => {},
    // 错误接收及处理
    errorHandler: (error: any, opts: any) => {},
  },

  // 请求拦截器
  requestInterceptors: [
    (config: any) => {
      // 拦截请求配置，进行个性化处理。
      console.log("config", config);
      return config;
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      // 拦截响应数据，进行个性化处理
      console.log("response", response);
      return response;
    },
  ],
};
