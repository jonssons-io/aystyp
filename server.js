const { createServer } = require('http');
/** @type {typeof import('next').default} */
const next = require('next');
const { Server } = require('socket.io');
const { loadEnvConfig } = require('@next/env');

const dev = process.env.NODE_ENV !== 'production';
const env = loadEnvConfig(process.cwd(), dev).combinedEnv;
const hostname = env.HOSTNAME;
const port = env.PORT;

const app = next({ dev, hostname, port });
const requestHandler = app.getRequestHandler();
const httpServer = createServer(requestHandler);
const io = new Server(httpServer);

io.on('connection', (socket) => {});

app.prepare().then(() => {
  httpServer.listen(port, () => {
    console.log(`listening on port ${httpServer.address().port}`);
  });
});
