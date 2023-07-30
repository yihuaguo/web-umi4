import moment from "moment";

// 判断是否是h5且是tokenPocket钱包
export const isMobileAndTokenPocket = () => {
  var userAgentInfo = navigator.userAgent;
  var mobileAgents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  var mobile_flag = false;
  //根据userAgent判断是否是手机
  for (var v = 0; v < mobileAgents.length; v++) {
    if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
      mobile_flag = true;
      break;
    }
  }
  return mobile_flag && window.ethereum?.isTokenPocket;
};

// 返回当前时间
export const renderTime: RenderTime = (
  year = "YYYY/MM/DD",
  time = "h:mm:ss",
  stamp = undefined
) => {
  if (stamp !== undefined && (stamp + "").length === 10) {
    stamp = Number(stamp + "000");
  }
  return moment(stamp).format(`${year} ${time}`);
};

export default {
  isMobileAndTokenPocket,
  renderTime,
};
