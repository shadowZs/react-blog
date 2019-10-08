import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './index.scss'

import Navigator from '@components/navigator'
import Header from '@components/header'
import {articleListByUser} from "../../api/article";
import {getCookie} from "../../util/cookie";
import {getUserInfo, formatDate} from '@static/js/common'

class User extends Component{
  constructor(props){
    super(props)
    this.state = {
      navigator: [{name: '首页', link: '/'}, {name: '个人中心', link: '/user'}],
      articlePara: {pageNo: 1, pageSize: 5, id: ''},
      articleList: [],
    }
  }

  //  个人发表的文章
  async getUserArticle(){
    let result = await articleListByUser(this.state.articlePara);
    console.log('我的文章列表', result);
    if(result.code === 1){
      this.setState({
        articleList: result.data
      })
    }
  }

  componentDidMount(){
    let blog_user = getUserInfo();
    if(blog_user){
      let id = blog_user.id;
      let state = this.state;
      this.state.articlePara = {
        pageNo: 1,
        pageSize: 5,
        id
      }
      this.setState({
        ...state
      }, ()=> {
        this.getUserArticle();
      })
    }

  }

  render(){
    return(
      <div className="user-page">
        <Header />
        <div className="wrap">
          <div className="page-content">
            <div className="page-left">
              <Navigator data={this.state.navigator} />

              <div className="user-info">
                  <div className="article-list">
                    {this.state.articleList.length > 0 && this.state.articleList.map(item => {
                      return(
                        <Link to={`/articleDetail/${item.id}`} className="article-li clear">
                          <h3 className='fl article-title fl'>{item.title}</h3>
                           <span className='article-time fr'>{formatDate(new Date(item.create_time), 'yyyy-MM-dd hh:mm')}</span>
                        </Link>
                      )
                    })}
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      )
  }
}

export default User
