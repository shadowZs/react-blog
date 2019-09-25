import React, {Component} from 'react'
import ReactDOM from 'react-dom';

import Header from '@components/header';
import List from '@components/list';
import FloatRight from '@components/floatRight'
import './index.scss'
import { Button } from 'antd';
class Index extends Component{

  render(){
    return (
      <div className='index-page page'>
          <Header />
          <div className="main-page ">
            <div className="wrap clear">
              <div className="main-page-left fl">
                <List history={this.props.history}/>
              </div>
              <div className="main-page-right fl">
                <FloatRight />
              </div>
            </div>

          </div>
      </div>
    )
  }
}

// ReactDOM.render(<Index />, mountNode);
export default Index;
