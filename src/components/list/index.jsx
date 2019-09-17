import React, {Component} from 'react'
import { List, Avatar } from 'antd';
import {articleList} from '@api/article';

import './index.scss'

class ComponentList extends Component{
  constructor(props){
    super(props)

    this.state = {
      list: [],
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
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.content}
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}


export default ComponentList;
