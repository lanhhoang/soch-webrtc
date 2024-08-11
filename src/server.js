import env from "./configs/env.config.js";
import configureExpress from "./configs/express.config.js";
import configurePeerServer from "./configs/peer.config.js";

const { PORT } = env;

const app = configureExpress();
const server = configurePeerServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
