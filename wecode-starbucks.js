import http from "http";
import express from "express";
import { productData } from "./productData.js";
import { productInfo } from "./productInfo.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: " / endpoint" })
})

app.get('/products', productData)
app.get('/products/2', productInfo)

const server = http.createServer(app)

server.listen(8000, () => {
  console.log("You're now on port 8000")
});