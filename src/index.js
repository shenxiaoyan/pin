
import React from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './App'
// import { counter,addGUN,removeGUN,addGunAsync } from './index.redux'
import { BrowserRouter,Router,Link,Redirect,Switch } from 'react-router-dom'
import { counter } from './index.redux'
import Auth from './Auth'
import Dashboard from './Dashboard'

const store = createStore(counter,applyMiddleware(thunk))

// function render() {
//     ReactDom.render(<App store = {store} addGUN={addGUN} removeGUN={removeGUN} addGunAsync={addGunAsync} />,document.getElementById('root'))
// }
// render();
// store.subscribe(render)
function er() {
    return <h1>二</h1>
}
function san() {
    return <h1>三</h1>
}
 ReactDom.render(
     (<Provider store={store}>
         <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <link to="/" />一
                    </li>
                    <li>
                        <link to="/er" />二
                    </li>
                    <li>
                        <link to="/san" />三
                    </li>
                </ul>
                <Router path='/' exact component={App}></Router>
                <Router path='/er' exact component={er}></Router>
                <Router path='/san' exact component={san}></Router>
            </div>
         </BrowserRouter>
     </Provider>),
     document.getElementById('root')
)



