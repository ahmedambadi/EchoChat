const server = require("http").server();
const io = require("socket.io")(server)

io.on('connection', client => {
    client.on('message', data={})
    


})

server.listen(5000);