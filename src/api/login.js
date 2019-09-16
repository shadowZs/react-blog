import {POST,GET} from './config.js'

export const login = async (params) => {
  console.log('login params:', params)
  try{
    let result = await POST('/login',params);
    if(result.code === 1){
      return result
    }else{
      throw('登录接口错误', result.message)
    }
  }catch(err){
    throw('登录接口错误：', err)
  }

}
