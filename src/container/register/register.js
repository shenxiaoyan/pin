import React from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,Radio,WingBlank,WhiteSpace,Button} from 'antd-mobile'

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type:"genuis",
        }
    }
    register(){
        this.props.history.push('/register')
    }

    render(){
        const RadioItem = Radio.Component
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem>用户：</InputItem>
                    <WhiteSpace />
                    <InputItem>密码：</InputItem>
                    <WhiteSpace />
                    <InputItem>确认密码：</InputItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type =='genuis'}>
                        牛人
                    </RadioItem>
                    <RadioItem checked={this.state.type =='boss'}>
                        老板
                    </RadioItem>
                    <WhiteSpace />
                    <Button type='primary'>注册</Button>
                </List>
                <h2>注册页</h2>
                <WingBlank>
                    <Button type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
        }
    }

export default Register