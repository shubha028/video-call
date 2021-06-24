
let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let stream = require('./ws/stream');
let path = require('path');
app.use('/assets', express.static(path.join(__dirname, 'assets')));



app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/ss', (req, res)=>{
    res.render('./hi.html');
});
app.get('/auth', (req, res)=>{

    res.render(Auth);
});


io.of('/stream').on('connection', stream);

server.listen(3000);