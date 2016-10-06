var express = require ('express');
var app = express(); //保证app的路由功能

var bodyParser=require('body-parser');//为的是调用req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.post('/posts',function(req,res){

  console.log(req.body);//打印客户端的data


//  console.log(req) 打印客户端的请求，客户端的请求中有一个字段为body，他的内容是客户端提交的数据对象


})

app.listen(3000,function(){
  console.log('running on port 3000...plz visit http://localhost:3000')
})
