import {POST, GET} from './config.js'

// 根据用户id查询用户信息
export const getUserInfoById = async (params) => {
  try{
    let result = await GET('/userInfo', params)
    if(result){
      return result
    }else{
      throw('用户信息接口错误')
    }
  }catch(err){
    throw('用户信息接口错误', err)
  }
}
