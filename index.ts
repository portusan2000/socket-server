import Server from "./classes/server";
import router from "./routes/router";
import express from 'express';
import cors from 'cors';

const server = new Server();
const port = server.port;

// Middlewares
server.app.use(cors({origin: true, credentials: true}))
server.app.use(express.urlencoded({extended: true}));
server.app.use(express.json());

// Routes
server.app.use('/', router);

server.start( () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
})