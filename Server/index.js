require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require("./db.js")
const port = process.env.PORT;
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
connectDB().catch(err => console.log(err));
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENTURL,
    methods: ["GET", "POST"]
  }});
io.on('connection', (socket) => {console.log(`a user of id ${socket.id} is connected`)
    socket.emit("welcome", {
    message: "welcome from the server",
    id: socket.id})
    
    socket.on('room-join', (data) => {socket.join(data.room)
      console.log(`user ${socket.id} joined room ${data.room} `)

     socket.on("sndMsg", (data) => {
    io.to(data.room).emit('msgRec', {message:data.message})
     }) 
    })

    
})



server.listen(port, () => {
    console.log(`listening on port ${port}`)
})



