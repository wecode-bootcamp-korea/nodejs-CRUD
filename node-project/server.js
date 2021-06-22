import http from "http";
import express from "express";
import routes from "./Router/router.js";
const app = express();

app.use("/", routes);

const server = http.createServer(app);
const portNum = 8000;

server.listen(portNum, () => {
  console.log("서버가 잘 작동하고 있습니다. ✨");
});
