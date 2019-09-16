import React, {Component} from 'react'
import ReactDOM from "react-dom";
import './index.scss'
import Header from '@components/header';
import Footer from '@components/footer';
import {setPageMainHeight} from '../../statics/js/common'
import {login} from '@api/login';

import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentDidMount(){
    setPageMainHeight();
  }

  // 登录
  async submitLogin(){
    let mobile = ReactDOM.findDOMNode(this.refs.mobile).value;
    let password = ReactDOM.findDOMNode(this.refs.password).value;
    let result = await login({mobile, password})
    message.info(result.message)
    if(result.code === 1){
      this.props.history.push('/')
    }
  }

  render(){
    return(
      <div className='login-page page'>
        <Header />
        <div className="page-main login-main">
          <div className="login-input-container">
            <h3>登录</h3>
            <Input placeholder='请输入手机号' ref='mobile' className='login-input'/>

            <Input placeholder='请输入密码' ref='password' className='login-input'/>

            {/*<Input placeholder='请输入用户昵称' ref='nickName' className='login-input'/>*/}

            <Button type='primary' className='login-btn' onClick={this.submitLogin.bind(this)}>登录</Button>
          </div>

        </div>
        <Footer />
      </div>
    )
  }
}

// const WrappedNormalLoginForm = Form.create()(Login);
// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
export default  Form.create()(Login);;
