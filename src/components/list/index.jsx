import React, {Component} from 'react'
import { List, Avatar } from 'antd';
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
        type: ''      // 全部: ''; 热门:'1';
      }
    }
  }

  componentDidMount(){
    this.getArticleList();
  }

  getArticleList(){
    articleList().then(res => {
      console.log('文章列表:', res)
      if(res.code === 1){
        this.setState({
          list: res.data
        })
      }
    })
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
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}


export default ComponentList;
