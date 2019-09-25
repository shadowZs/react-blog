import React, {Component} from 'react';
import './index.scss'

import Navigator from '@components/navigator'
import Header from '@components/header'

class User extends Component{
  constructor(props){
    super(props)
    this.state = {
      navigator: [{name: '首页', link: '/'}, {name: '个人中心', link: '/user'}]
    }
  }

  render(){
    return(
      <div className="user-page main-page">
        <Header />
        <div className="wrap">
          <div className="page-content">
            <div className="page-left">
              <Navigator data={this.state.navigator} />

              <div className="user-info">

              </div>
            </div>
          </div>

        </div>
      </div>
      )
  }
}

export default User
