import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

@withRouter
class AuthRoute extends React.Component {
    componentDidMount() {
        const publickList = ['/login', '/register']
        const pathName = this.props.location.pathname
        console.log(this.props)
        if (publickList.includes(pathName)) {
            return null;
        }
        //获取用户信息
        axios.get('/user/info').then(res => {
            if (res.status == 200) {
                if (res.data.code == 1) {

                } else {
                    console.log(this.props)
                    this.props.history.push('/login')
                }
                console.log(res.data)
            }
        })
    }

    render() {
        return null
    }
}

export default AuthRoute