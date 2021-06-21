import http from 'http';
import express from 'express';
import { sendPostsList } from './sendPostsList.js';
import { sendPostsDetail } from './sendPostsDetail.js';

const app = express()

app.get('/', (req, res) => {
  res.json({ message: '/ endpoint' })
})

app.get('/products', sendPostsList)
app.get('/products/2', sendPostsDetail)

const server = http.createServer(app)

server.listen(3000, () => {
  console.log('server is listening on PORT 3000')
})