import {POST,GET} from './config.js'

// 提交文章
// id  用户id
// title  文章标题
// content  文章内容
export const addArticle = async (params) => {
  console.log('login params:', params)
  try{
    let result = await POST('/addArticle',params);
    if(result){
      return result
    }else{
      throw('提交文章接口错误', result.message)
    }
  }catch(err){
    throw('提交文章接口错误：', err)
  }

}


// 文章列表
// pageNo  limit
// pageSize  页数
// keyword 关键词匹配
// id  用户发表的文章
export const articleList = async (params) => {
  console.log('article params:', params)
  try{
    let result = await GET('/articleList',params);
    if(result){
      return result
    }

  }catch(err){
    throw('提交文章接口错误：', err)
  }

}


// 文章详情
// id 文章id
export const articleDetail = async (params) => {
  console.log('article params:', params)
  try{
    let result = await GET('/articleDetail',params);
    return result
  }catch(err){
    throw('文章详情接口错误：', err)
  }

}


// 文章分类
export const articleTypes = async (params) =>{
  try{
    let result = await GET('/articleTypes', params);
    if(result){
      return result
    }
  }catch(err){
    throw('文章分类接口错误：', err);
  }
}
