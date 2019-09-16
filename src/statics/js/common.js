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
  let userInfo = getCookie('userInfo');
  if(userInfo && JSON.parse(userInfo) && JSON.parse(userInfo).id){
    return true
  }else{
    location.href = '/login'
  }
}


// 获取用户信息
export const getUserInfo = () => {
  let userInfo = getCookie('userInfo')
  if(userInfo){
    userInfo = JSON.parse(userInfo)
    return userInfo.id
  }else{
    location.href = '/login'
  }
}
