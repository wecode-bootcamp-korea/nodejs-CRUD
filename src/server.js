import http from 'http';
import express from 'express';
import productsRouter from './routers/productsRouter';

const app = express();
const server = http.createServer(app);

app.use('/products', productsRouter);

export default server;
