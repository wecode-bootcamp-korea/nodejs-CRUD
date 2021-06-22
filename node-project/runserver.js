import http from "http";
import express from "express";
import routes from "./Router/router.js";
const app = express();

app.use("/", routes);

const server = http.createServer(app);
const portNum = 8000;

server.listen(portNum, () => {
  console.log("서버 is 따봉 ✨");
});
