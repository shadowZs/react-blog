import {getCookie} from "../../util/cookie";

// 设置页面内容高度
export const setPageMainHeight = () => {
  let wh = window.innerHeight;
  let headerH = 60
  let footerH = 60
  let mainH = wh - headerH - footerH;
  console.log('mainH:', mainH);
  document.getElementsByClassName('page-main')[0].style.height = mainH + 'px';
}

// 检查是否登录
export const checkLogin = () => {
  let userInfo = getCookie('blog_user');
  if(userInfo && JSON.parse(userInfo) && JSON.parse(userInfo).id){
    return true
  }else{
    window.location.href = '/login'
  }
}


// 获取用户信息
export const getUserInfo = () => {
  let userInfo = getCookie('blog_user')
  console.log(userInfo);
  if(userInfo){
    userInfo = JSON.parse(userInfo)
    return userInfo
  }else{
    window.location.href = '/login'
  }
}

// 去掉html中的标签，只显示文字
export const formatHTMLToStr = (html) => {
    if(html){
      let str = html.replace(/(\n)/g ,'')
      str = str.replace(/(\t)/g, '')
      str = str.replace(/(\r)/g, '')
      str = str.replace(/<\/?[^>]*>/g, '');
      str = str.replace(/\s*/g, '')
      return str
    }
}


/*
* 格式化日期
* date 要格式化的日期
* fmt 格式 yyyy-MM-dd hh:mm
* */
export const formatDate = (date, fmt) =>{
  var o = {
    "M+": date.getMonth() + 1,                 //月份
    "d+": date.getDate(),                    //日
    "h+": date.getHours(),                   //小时
    "m+": date.getMinutes(),                 //分
    "s+": date.getSeconds(),                 //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;

}


// 去掉前后空格
export const trim = (str) => {
  if(str.length <= 0){
    return
  }
  return str.replace(/(^\s*)|(\s$)/g, '')
}
