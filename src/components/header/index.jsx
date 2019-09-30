import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getCookie, removeCookie} from "../../util/cookie";
import './index.scss';

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInfo: {
        nick_name: '',
        mobile: '',
      }
    }
  }

  componentDidMount(){
    this.setUserInfo()
  }

  //设置用户登录状态
  setUserInfo(){
    let userInfo = getCookie('blog_user');
    console.log(userInfo);
    if(userInfo){
      this.setState({
        userInfo: JSON.parse(userInfo)
      },)
    }

  }

  // 登出
  loginOut(){
    removeCookie('blog_user');
    window.location.href = '/'
  }

  // 生成用户登录模板
  renderUserInfo(){
    if(this.state.userInfo && (this.state.userInfo.mobile || this.state.userInfo.nick_name)){
      return (
        <div className="header-user-userInfo">
          <i className='icon-user icon-img fl'></i>
          <span className='fl'>{this.state.userInfo.nick_name || this.state.userInfo.mobile}</span>
          <span className='login-out' onClick={this.loginOut.bind(this)}>登出</span>
        </div>
      )
    }else{
      return (
        <div className="header-login-btn">
            <Link to='/login' className="header-login header-btn">登录</Link>
            <Link to='/register' className="header-register header-btn">注册</Link>
        </div>
      )
    }
  }


  render(){
    return(
      <div className='header'>
        <div className="wrap clear">
          <div className="header-title fl">Blog</div>

          <div className="header-btns fr clear">
            {this.renderUserInfo()}
          </div>

          <div className="header-list fr">
            <Link to='/index' className="header-li">首页</Link>
            <Link to='/articleAdd' className='header-li'>发表文章</Link>
            <Link to='/userInfo' className='header-li'>个人中心</Link>
          </div>

        </div>

      </div>
    )
  }
}


export default Header;
