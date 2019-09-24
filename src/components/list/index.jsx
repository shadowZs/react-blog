import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import { List, Avatar, message } from 'antd';
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
    console.log(id);
    this.props.history.push(`/articleDetail/${id}`)
  }

  render(){
    return(
      <div className='list-container'>
        <List
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
      </div>
    )
  }
}


export default ComponentList;
