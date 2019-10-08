import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import './index.scss'

import {addArticle, articleTypes} from "../../api/article";
import {getCookie} from "../../util/cookie";
import {getUserInfo} from '../../statics/js/common';

import Header from '@components/header'
import Editor from '@components/editor'
import FloatRight from '@components/floatRight'
import {Input, Button, Tag, message} from 'antd'

class ArticleAdd extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      types: [],
      selectType: [],
    }
  }


  componentDidMount(){
    this.getArticleTypes();
  }

  // 分类列表
  async getArticleTypes(){
    let result = await  articleTypes();
    console.log(result);
    if(result.code === 1){
        this.setState({
          ...this.state,
          types: result.data
        })
    }
  }

  handleTypeChange(type){
    let selectType = this.state.selectType;
    if(selectType.indexOf(type) === -1){
      selectType.push(type)
    }else{
      selectType.splice(selectType.indexOf(type), 1)
    }

    this.setState({
      ...this.state,
      selectType
    }, ()=> {
      console.log(this.state)
    })
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
    message.info(result.message)
    if(result.code === 1){
       this.props.history.push('/')
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
                <Input className='fl input-item-content' ref='title' placeholder='请输入文章标题'/>
              </div>

              <div className="article-types">
                <div className="input-item clear">
                  <span className="input-title">文章分类：</span>
                  {this.state.types && this.state.types.map(type => {
                    return (
                      <Tag  className={`${this.state.selectType.indexOf(type.type) == -1 ? '' : 'active'}`} onClick={this.handleTypeChange.bind(this, type.type)} key={type.id}>{type.type}</Tag >
                    )
                  })}
                </div>
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
