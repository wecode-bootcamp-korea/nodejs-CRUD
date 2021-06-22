import http from "http";
import express from "express";
import { productList } from "./productList.js";
import { productDetail } from "./productDetail.js";

const app = express()

app.get('/', (req, res) => {
    res.json({ message: '/ endpoint' })
})
app.get('/products', productList)
app.get('/products/2', productDetail)

const server = http.createServer(app)


server.listen(8000, () => {
    console.log("server is listening on port 8000")
});