import React from 'react'
import {Link,Route} from 'react-router-dom'
import App from './App'

function er() {
    return <h1>二</h1>
}
function san() {
    return <h1>三</h1>
}
class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <ul>
                    <li>
                        <link to="/Dashboard/" />一
                    </li>
                    <li>
                        <link to="/Dashboard/er" />二
                    </li>
                    <li>
                        <link to="/Dashboard/san" />三
                    </li>
                </ul>
                <Route path='/Dashboard' exact component={App}></Route>
                <Route path='/Dashboard/er' component={er}></Route>
                <Route path='/Dashboard/san' component={san}></Route>
            </div>
        )
    }
}

export default Dashboard