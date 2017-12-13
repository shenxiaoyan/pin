const express = require('express');
const mongoose = require('mongoose');
//链接mongo
const DB_URL = 'mongodb://yan:chaoyer43@localhost:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function () {
    console.log("mongodb connected")
})

//类似于mysql的表 Mongo里有文档，字段的概念，
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

//新增数据
User.create({
    user:'imooc',
    age:18
},function (err,doc) {
    if (!err){
        console.log(doc)
    }else{
        console.log(err)
    }
    
})

//新建app
const app = express();
app.get('/', function (req, res) {
    res.send('hello,world')
})
app.get('/data', function (req, res) {
    res.json({name: 'shan', type: 'it'})
});
app.listen(9093, function () {
    console.log('node start')
})