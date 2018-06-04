const http = require("http");
const app = require("./app/index");
const port = process.env.port || 3000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log("Listening on %j", server.address());
});