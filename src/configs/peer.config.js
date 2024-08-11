import { createServer } from "http";
import { ExpressPeerServer } from "peer";

function configurePeerServer(app) {
  const server = createServer(app);
  const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: "/",
  });

  app.use("/", peerServer);

  return server;
}

export default configurePeerServer;
