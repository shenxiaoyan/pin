
import React from 'react'
import { connect } from 'react-redux'
import { addGUN,removeGUN,addGunAsync } from './index.redux'
// import ReactDom from 'react-dom'
// import { createStore } from 'src/index'
// import { addGUN } from './index.redux'
// import { removeGUN } from './index.redux'

class App extends React.Component{
    render (){
        // const store = this.props.store;
        // const num = this.props.num;
        // const addGUN = this.props.addGUN;
        // const removeGUN = this.props.removeGUN;
        // const addGunAsync = this.props.addGunAsync;
        // const num = store.getState();
        return (
            <div>
                <h1>now{this.props.num}</h1>
                {/*<button onClick={()=>store.dispatch(addGUN())}>add</button>*/}
                {/*<button onClick={()=>store.dispatch(removeGUN())}>remove</button>*/}
                {/*<button onClick={()=>store.dispatch(addGunAsync())}>delay</button>*/}

                <button onClick={this.props.addGUN}>add</button>
                <button onClick={this.props.removeGUN}>remove</button>
                <button onClick={this.props.addGunAsync}>delay</button>

            </div>
        )


    }
}
const mapStatetoProps = (state) =>{
    return {num:state}
}
const actionCreators = { addGUN,removeGUN,addGunAsync }
App = connect(mapStatetoProps,actionCreators)(App)
export default App