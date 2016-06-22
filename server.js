var fs = require('fs');

var app = require('http').createServer();
var io = require('socket.io')(app);

var Redis = require('ioredis');
var redis = new Redis();

app.listen(8080, function() {
    console.log('Server is running!');
});

function handler(req, res) {
    res.writeHead(200);
    res.end('');
}

var usersInRoom = [];

io.on('connection', function(socket) {
    console.log("new connection" /*, socket */);
    socket.on('join', function(data) {

        var user = data.userId;
        var room = data.room;

        console.log("user ", user , "join room "+ room);
        socket.join(room);

        io.sockets.in( room ).emit('joined', { user:user });

        socket.on('disconnect', function() {
            // this returns a list of all rooms this user is in
            var rooms = io.sockets.adapter.rooms;
            for(var room in rooms) {
               console.log("user leave room", room);
               io.sockets.in(room).emit('leaved');
               socket.leave(room);
            }
        });
    });
});

redis.psubscribe('*', function(err, count) {
    console.log("blub?")
});

redis.on('pmessage', function(subscribed, channel, message) {
    console.log('Message received channel:=', channel, ", message := ", message);
    message = JSON.parse(message);
    io.emit(channel + ':' + message.event, message.data);
});