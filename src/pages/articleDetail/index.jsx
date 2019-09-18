import React, {Component} from 'react'
import Header from '@components/header'
import {articleDetail} from '@api/article';


import './index.scss'


class ArticleDetail extends Component{
  constructor(props){
    super(props)
    this.state = {
      message: {
        title: '',
        content: '',
        author: '',
        create_time: ''
      }

    }
  }

  componentDidMount(){
    this.getArticle()
  }


 async getArticle(){
    let id = this.props.match.params.id;
    if(id){
      let result = await articleDetail({id});
      console.log(result)
      if(result.code === 1){
        this.setState({
          message: result.data
        })
      }

    }
  }

  render(){
    return(
      <div className="article-detail-page page">
        <Header />
        <div className="wrap">
          <div className="page-main">
            <div className="page-top">
              <div className="title">{this.state.message.title}</div>
              <div className="des">
                <span>作者：{this.state.message.author}</span>
                <span>发布时间：{this.state.message.create_time}</span>
              </div>

            </div>
            <div className="article-content" dangerouslySetInnerHTML={{__html:this.state.message.content}}></div>
          </div>
        </div>
      </div>

    )
  }
}

export default ArticleDetail
