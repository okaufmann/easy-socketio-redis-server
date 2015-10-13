var fs = require('fs');

var app = require('http').createServer();
var io = require('socket.io')(app);

var Redis = require('ioredis');
var redis = new Redis();

app.listen(80, function() {
    console.log('Server is running!');
});

function handler(req, res) {
    res.writeHead(200);
    res.end('');
}

io.on('connection', function(socket) {
    //
});

redis.psubscribe('*', function(err, count) {
    //
});

redis.on('pmessage', function(subscribed, channel, message) {
    console.log('Message received');
    message = JSON.parse(message);
    io.emit(channel + ':' + message.event, message.data);
});