import {POST,GET} from './config.js'

export const  login = async (params) => {
  console.log('login params:', params)
  try{
    let result = await POST('/login',params);
    console.log('result:', result);
    if(result){
      return result
    }else{
      throw('登录接口错误', result.message)
    }
  }catch(err){
    throw('登录接口错误：', err)
  }
}


export const register = async (params) =>{
  try{
    let result = await POST('/register', params)
    if(result){
      return result
    }else{
      console.error('注册接口错误', result.message)
    }
  }catch(err){
    throw('登录接口错误', err)
  }
}
