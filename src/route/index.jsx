import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Index from '@pages/index'
import Register from '@pages/register'
import Login from '@pages/login'
import List from '@pages/list'
import ArticleAdd from '@pages/articleAdd'
import ArticleDetail from '@pages/articleDetail'
import User from '@pages/user'

class BaseRoute extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/list' component={List} />
          <Route path='/articleAdd' component={ArticleAdd} />
          <Route path='/articleDetail/:id' component={ArticleDetail} />
          <Route path='/user' component={User} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default BaseRoute;
