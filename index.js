import express from 'express';
import bodyParser from 'body-parser';
import client from './config.js';

import {addChat,getChat,getAllChats,updateChat,deleteChat} from './controllers/chats-controller.js';
import {addChatInfo,getChatInfo,getAllChatsInfo,updateChatInfo,deleteChatInfo} from './controllers/chatsInfo-controller.js';

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

app.post('/addChat',addChat);
app.get('/getChat',getChat);
app.get('/getAllChats',getAllChats);
app.put('/updateChat',updateChat);
app.delete('/deleteChat',deleteChat);

app.post('/addChatInfo',addChatInfo);
app.get('/getChatInfo',getChatInfo);
app.get('/getAllChatsInfo',getAllChatsInfo);
app.put('/updateChatInfo',updateChatInfo);
app.delete('/deleteChatInfo',deleteChatInfo);

var server=app.listen(8000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("server running at port" + port + "and host " + host);
})



