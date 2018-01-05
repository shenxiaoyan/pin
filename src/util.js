import axios from "axios"

const REGISTER_SUCESS = "REGISTER_SUCESS"
const ERROR_MSG = "ERROR_MSG"

const initState = {
    redirecTo:'',
    msg: '',
    isAuth: false,
    user: "",
    pwd: "",
    type: ""
}

// reducer
export function getRedirectPath() {
    //根据用户信息,返回跳转地址
    //user.type  /boss /genius
    //user.avatar  /bossinfo /geniusinfo

    let url = (type === 'boss')?'/boss':'/genius'

    if(!avatar){
        url += 'info'
    }
    return url
}

