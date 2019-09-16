import React, {Component} from 'react'
import ReactDOM from "react-dom";
import './index.scss'
import Header from '@components/header';
import Footer from '@components/footer';
import {setPageMainHeight} from '../../statics/js/common'

import { Form, Icon, Input, Button, Checkbox } from 'antd';



class Register extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentDidMount(){
    setPageMainHeight();
  }

  // 登录
  submitLogin(){
    let mobile = ReactDOM.findDOMNode(this.refs.mobile).value;
    let password = ReactDOM.findDOMNode(this.refs.password).value;
    console.log(mobile, password)
  }

  render(){
    return(
      <div className='register-page page'>
        <Header />
        <div className="page-main register-main">
          <div className="register-input-container">
            <h3>注册</h3>
            <Input placeholder='请输入用户名' ref='mobile' className='register-input'/>

            <Input placeholder='请输入密码' ref='password' className='register-input'/>

            <Button type='primary' className='register-btn' onClick={this.submitLogin.bind(this)}>注册</Button>
          </div>

        </div>
        <Footer />
      </div>
    )
  }
}

export default  Register
