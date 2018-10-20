import http from 'http';
import app from './app/index';
const port = process.env.port || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log('Listening on %j', server.address());
});
