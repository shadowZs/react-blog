import React, {Component} from 'react';
import './index.scss';

class Header extends Component{
  render(){
    return(
      <div className='header'>
        <div className="wrap clear">
          <div className="header-title fl">BBC</div>
          <div className="header-btns fr clear">
            <i className='icon-phone-2x icon-img fl'></i>
            <span className='fl'>用户</span>
          </div>
        </div>

      </div>
    )
  }
}


export default Header;
