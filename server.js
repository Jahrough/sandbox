const http = require("http");
const app = require("./api/index");
const port = process.env.port || 300;
const server = http.createServer(app);

server.listen(post);