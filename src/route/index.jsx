import React, {Component} from 'react'
import {BrowerRoute, Switch, Route} from 'react-route-dom'

import Index from ''
class BaseRoute extends Component{
  render(){
    return(
      <BrowerRoute>
        <Switch>
          <Route path='/' ,compnent={Index}>
        </Switch>
      </BrowerRoute>
    )
  }
}
