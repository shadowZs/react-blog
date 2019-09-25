import React, {Component} from 'react'
import ReactDOM from "react-dom";
import './index.scss'
import Header from '@components/header';
import Footer from '@components/footer';
import {setPageMainHeight} from '../../statics/js/common'
import {register} from '../../api/login';

import { Form, Icon, Input, Button, Checkbox, message } from 'antd';



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
 async submitLogin(){
    let mobile = ReactDOM.findDOMNode(this.refs.mobile).value;
    let password = ReactDOM.findDOMNode(this.refs.password).value;
    let nickName = ReactDOM.findDOMNode(this.refs.nickName).value

    let result = await register({mobile, password, nickName})
    console.log(result)
   message.info(result.message)
    if(result.code === 1){
     this.props.history.push('/login')
    }
  }

  render(){
    return(
      <div className='register-page page'>
        <Header />
        <div className="page-main register-main">
          <div className="register-input-container">
            <h3>注册</h3>
            <Input placeholder='请输入用户昵称' ref='nickName' className='register-input'/>

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
