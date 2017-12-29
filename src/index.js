
import React from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter,Router,Link,Redirect,Switch } from 'react-router-dom'

import Login from './container/login/login'
import Register from './container/register/register'
import reducers from './reducer'
import './config'

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))
 ReactDom.render(
     (<Provider store={store}>
         <BrowserRouter>
            <Router path='/login' component={Login}></Router>
            <Router path='/register' component={Register}></Router>
         </BrowserRouter>
     </Provider>),
     document.getElementById('root')
)



