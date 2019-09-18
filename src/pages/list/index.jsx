import React, {Component} from 'react';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import Header from '@components/header'
import './index.scss'
import ArticleList from '@components/list'

class List extends Component{
  constructor(props){
    super(props)
    this.state = {
      likes: 0,
      dislikes: 0,
      action: null
    }
  }



  render(){
    return (
      <div className="article-list-page page">
        <Header />
        <div className="wrap">
          <div className="article-list-nav">
            <span className="article-list-nav-item">全部</span>
            <span className="article-list-nav-item">热门文章</span>
            <span className="article-list-nav-item">我的文章</span>
          </div>
          <ArticleList ref='articleList' />
        </div>

      </div>
    )
  }
}


export default List;
