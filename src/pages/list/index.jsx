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
      action: null,
      activeIndex: '0'
    }
  }

  changeNav(index){
    this.setState({
      activeIndex: index
    })
  }

  render(){
    return (
      <div className="article-list-page page">
        <Header />
        <div className="wrap">
          <div className="article-list-nav">
            <span className={`article-list-nav-item ${this.state.activeIndex == '0' ? 'active' : ''}`} onClick={this.changeNav.bind(this, '0')}>全部</span>
            <span className={`article-list-nav-item ${this.state.activeIndex == '1' ? 'active' : ''}`} onClick={this.changeNav.bind(this, '1')}>热门文章</span>
            <span className={`article-list-nav-item ${this.state.activeIndex == '2' ? 'active' : ''}`} onClick={this.changeNav.bind(this, '2')}>我的文章</span>
          </div>
          <ArticleList ref='articleList' activeIndex={this.state.activeIndex}/>
        </div>

      </div>
    )
  }
}


export default List;
