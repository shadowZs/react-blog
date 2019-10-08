import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {articleList} from '@api/article.js';
import {message} from  'antd'
import {formatDate} from '@static/js/common.js'
import './index.scss'

class FloatRight extends Component{
  constructor(props){
    super(props)
    this.state = {
      newList: [],
      hotList: [],
    }
  }

  componentDidMount(){
      let newPara = {pageNo: 1, pageSize: 5, type: '0'}
      let hotPara = {pageNo: 1, pageSize: 5, type: '1'}
      this.getList(newPara,'new');
      this.getList(hotPara, 'hot')
  }

  async getList(params, type){
    let result = await articleList(params);
    console.log('推荐列表：', result);
    if(result.code ===  1){
      let state = this.state;
     switch (type){
       case 'new':
         state.newList = result.data;
         this.setState({
           ...state
         })
         break;

       case 'hot':
         state.hotList = result.data;
         this.setState({
           ...state
         })
     }
    }else{
      message.info(result.message)
    }

  }

  render(){
    return(
      <div className='float-right-container'>
        <div className="float-list-container">
        <h3 className='float-list-title'>最新文章</h3>
        {this.state.newList && this.state.newList.length > 0 && this.state.newList.map(item => {
          return (
            <div className="float-li" key={item.id}>
              <Link className="title" to={`/articleDetail/${item.id}`}>{item.title}</Link>
              <div className="more-info clear">
                <span className="author fl">{item.author}</span>
                <span className="create-time fr">{formatDate(new Date(item.create_time), 'yyyy-MM-dd hh:mm')}</span>
              </div>
            </div>

          )
        })}
      </div>

        <div className="float-list-container">
          <h3 className='float-list-title'>热门文章</h3>
          {this.state.hotList && this.state.hotList.length > 0 && this.state.hotList.map(item => {
            return (
              <div className="float-li" key={item.id}>
                <Link className="title" to={`/articleDetail/${item.id}`}>{item.title}</Link>
                <div className="more-info clear">
                  <span className="author fl">{item.author}</span>
                  <span className="create-time fr">{formatDate(new Date(item.create_time), 'yyyy-MM-dd hh:mm')}</span>
                </div>
              </div>

            )
          })}
        </div>
      </div>
    )
  }
}


export default FloatRight;
