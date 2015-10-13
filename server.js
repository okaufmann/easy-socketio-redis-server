var fs = require('fs');

// Add SSL Support
//var options = {
//    key: fs.readFileSync(__dirname + '/server.key'),
//    cert: fs.readFileSync(__dirname + '/server.crt')
//};

// use https for ssl
var app = require('http').createServer(options, handler);
var io = require('socket.io')(app);

var Redis = require('ioredis');
var redis = new Redis();

//listen on port 443 for SSL
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