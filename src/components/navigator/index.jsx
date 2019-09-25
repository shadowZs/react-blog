import React, {Component} from 'react';
import './index.scss'
import {Link} from 'react-router-dom';

class Navigator extends Component{
  constructor(props){
    super(props)
  }

  renderNavigator(){
    if(this.props.data && this.props.data.length > 0){
      return (
        <div className="navigator-list-container">
          {this.props.data.map((item, i) => {
            return(
               <Link to={item.link} key={item.name} className='navigator-link'>
                 <span className='navigator-link-name'>{item.name}</span>
                 <span className='navigator-link-line'>/</span>
               </Link>
            )
          })}
        </div>
      )
    }
  }
  render(){
    return(
      <div className="navigator-container">
        {this.renderNavigator()}
      </div>
    )
  }
}

export default Navigator
