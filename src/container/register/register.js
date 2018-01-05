import React from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,Radio,WhiteSpace,WingBlank,Button} from 'antd-mobile'
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'
import {register} from "../../redux/user.redux";

@connect(
    state=>state.user,
    {register}
)


class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user:"",
            pwd:"",
            repeatPwd:"",
            type:'genius'
        }

        this.handleRegister = this.handleRegister.bind(this)
    }

    handleRegister(){
        this.props.register(this.state)
        console.log(this.state)
    }

    handlerChange(key,val){
        this.setState({
            [key]:val
        })
    }

    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                {this.props.redirecTo?<Redirect to={{this.props.redirecTo} />:null}
                <Logo></Logo>
                <h2>注册页面</h2>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>this.handlerChange("user",v)}
                        >用户</InputItem>
                        <WhiteSpace />
                        <InputItem
                            onChange={v=>this.handlerChange("pwd",v)}
                        >密码</InputItem>
                        <WhiteSpace />
                        <InputItem
                            onChange={v=>this.handlerChange("repeatPwd",v)}
                        >确认密码</InputItem>
                        <WhiteSpace />
                        <RadioItem checked={this.state.type ==='genius'}
                                   onChange={v=>this.handlerChange("type","genius")}
                        >
                            牛人
                        </RadioItem>
                        <WhiteSpace />
                        <RadioItem checked={this.state.type ==='boss'}
                                   onChange={v=>this.handlerChange("type","boss")}
                        >
                            BOSS
                        </RadioItem>
                        <WhiteSpace />
                        <Button type='primary' onClick={this.handleRegister}>注册</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default Register