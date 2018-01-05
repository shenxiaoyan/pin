import axios from "axios"
import {getRedirectPath} from "../util";

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
export function user(state = initState, action) {

    switch (action.type) {
        case REGISTER_SUCESS:
            return {...state, isAuth: true, msg: "",redirecTo:getRedirectPath(action.payload), ...action.payload}
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.msg}
        default:
            return state
    }

    return state
}

function errorMsg(msg) {
    // 或return {msg:msg, type: ERROR_MSG}
    return {msg, type: ERROR_MSG}
}

function registerSuccess(data) {
    return {type: REGISTER_SUCESS, payload: data}
}

export function register({user, pwd, repeatPwd, type}) {
    console.log(user)
    if (!user || !pwd) {
        return errorMsg("用户名密码必须输入")
    }

    if (pwd !== repeatPwd) {
        return errorMsg("两次密码不相同")
    }

    return dispatch => {
        axios.post("/user/register", {user, pwd, type})
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(registerSuccess({user, pwd, type}))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }

}