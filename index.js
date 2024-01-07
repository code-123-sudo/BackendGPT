import express from 'express';
import bodyParser from 'body-parser';
import client from './config.js';

import {addChat,getChat,getAllChats,updateChat,updateManyChats,deleteChat} from './controllers/chats-controller.js';

const app  = express();

app.use(function(req, res, next) {
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE')
        if (req.method === 'OPTIONS') return res.send(200)
    }
    next()
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/chat',addChat);
app.get('/chat',getChat);
app.get('/chats',getAllChats);
app.put('/chat',updateChat);
app.put('/chats',updateManyChats)
app.delete('/chat',deleteChat);


var server=app.listen(8000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("server running at port" + port + "and host " + host);
})



