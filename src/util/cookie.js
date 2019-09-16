import Cookie from "js-cookie";

// 获取cookie
export const getCookie = name => {
  return Cookie.get(name);
};

// 客设置cookie
export const setCookie = (name, value, option) => {
  if (typeof option === "number") {
    Cookie.set(name, value, { expires: option });
  } else {
    Cookie.set(name, value, option);
  }
};

// 删除cookie
export const removeCookie = name => {
  Cookie.remove(name);
};
