const mongoose = require('mongoose');
//链接mongo
const DB_URL = 'mongodb://yan:chaoyer43@localhost:27017/imooc';
mongoose.connect(DB_URL);

const models = {
    user:{
        'user':{'type':String,'require':true},
        'pwd':{'type':String,'require':true},
        'type':{'type':String,'require':true},
        //头像
        'avatar':{'type':String},
        //个人简介
        'desc':{'type':String},
        //职位
        'title':{'type':String},
        //如果你是BOSS 还有两个字段
        'company':{'type':String},
        'money':{'type':String}
    },
    chat:{

    }
}

for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function (name) {
        return mongoose.model(name)
    }
}