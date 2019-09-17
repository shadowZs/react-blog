import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import './index.scss'

import {addArticle} from "../../api/article";
import {getCookie} from "../../util/cookie";
import {getUserInfo} from '../../statics/js/common';

import Header from '@components/header'
import Editor from '@components/editor'
import FloatRight from '@components/floatRight'
import {Input, Button} from 'antd'

class ArticleAdd extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  // 提交文章
  async submitArticle(){
    let title = ReactDOM.findDOMNode(this.refs['title']).value;
    let content = this.refs.child.getContent();

    let userId ='';
    let userInfo = getUserInfo()
    console.log('userInfo:', userInfo);
    userId = userInfo.id;
    let result = await addArticle({title, content, userId});
    console.log('提交文章：', result)
    // message.info(result.message)
    if(result.code === 1){

    }
  }

  render(){
    return(
      <div className="article-add-page page">
        <Header />
        <div className="article-add-main">
          <div className="wrap clear">

            <div className="article-add-left page-float-left fl">
              <div className="input-item clear">
                <span className="input-title fl">标题：</span>
                <Input placeholder="Basic usage "  ref='title' className='fl input-main'/>
              </div>

              <Editor ref='child'/>

              <div className='btn-container'>
                <Button type='primary' onClick={this.submitArticle.bind(this)}>保存</Button>
              </div>
            </div>

            <div className="article-add-right page-float-right fr">
              <FloatRight />
            </div>

          </div>

        </div>
      </div>
    )
  }
}


export default ArticleAdd;
