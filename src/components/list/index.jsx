import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { List, Avatar, message, Pagination } from 'antd';
import {articleList} from '@api/article';
import {formatHTMLToStr} from '../../statics/js/common'

import './index.scss'

class ComponentList extends Component{
  constructor(props){
    super(props)

    this.state = {
      list: [],
      params: {
        pageNo: 1,
        pageSize: 20,
        type: '0'      // 全部: '0'; 热门:'1',我的文章'2'
      }
    }
  }

  componentDidMount(){
    this.getArticleList();
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps, 'nextProps', nextProps.activeIndex)
    if(nextProps){
      this.setState({
        params: {
          type: nextProps.activeIndex,
          pageNo: 1,
          pageSize: 20
        }

      }, this.getArticleList)
    }
  }

  getArticleList(){
    articleList(this.state.params).then(res => {
      console.log('文章列表:', res)
      if(res.code === 1){
        this.setState({
          list: res.data
        })
      }else{
        message.info(res.message)
      }
    })
  }

  jumpLink(id){
    this.props.history.push(`/articleDetail/${id}`)
  }

  // 跳转页面
  changePage(val){
    console.log('跳转页面：', val);
  }

  render(){
    return(
      <div className='list-container'>
        <List
          className='page-list-item'
          itemLayout="horizontal"
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href={`/articleDetail/${item.id}`}>{item.title}</a>}
                description={formatHTMLToStr(item.content)}
                onClick={this.jumpLink.bind(this, item.id)}
              />
            </List.Item>
          )}
        />

        <Pagination className='list-pagination' defaultCurrent={this.state.params.pageNo} total={this.state.total} onChange={this.changePage.bind(this)} ></Pagination>
      </div>
    )
  }
}


export default ComponentList;
