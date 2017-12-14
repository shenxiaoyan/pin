const LOGIN ='LOGIN'
const LOGOUT ='LOGOUT'

export function auth(state={isAuth=false,user:'shen'},action) {
    switch (action.type){
        case LOGIN:
            return {..state,isAuth:true}
        case LOGOUT:
                return {..state,isAuth:true}
        default:
            return state
    }
}

//action
export function login() {
    return {type:LOGIN}
}
export function logout() {
    return {type:LOGOUT}
}