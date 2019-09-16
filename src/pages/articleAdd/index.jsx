import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import './index.scss'

import {addArticle} from "../../api/article";
import {getCookie} from "../../util/cookie";
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
  submitArticle(){
    let title = ReactDOM.findDOMNode(this.refs['title']).value;
    let content = this.refs.child.getContent();
  }

  render(){
    return(
      <div className="article-add-page page">
        <Header />
        <div className="article-add-main">
          <div className="wrap clear">

            <div className="article-add-left page-float-left">
              <div className="input-item clear">
                <span className="input-title fl">标题：</span>
                <Input placeholder="Basic usage "  ref='title' className='fl input-main'/>
              </div>

              <Editor ref='child'/>

              <div className='btn-container'>
                <Button type='primary' onClick={this.submitArticle.bind(this)}>保存</Button>
              </div>
            </div>

            <div className="article-add-right page-float-right">
              <FloatRight />
            </div>

          </div>

        </div>
      </div>
    )
  }
}


export default ArticleAdd;
