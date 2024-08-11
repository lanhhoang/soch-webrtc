import express from "express";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";

import { isDevelopment } from "./env.config.js";

function configureExpress() {
  const app = express();

  // CORS
  app.use(cors());
  app.options("*", cors());

  // Middlewares
  if (isDevelopment) {
    app.use(morgan("dev"));
  } else {
    app.use(compression());
  }

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  return app;
}

export default configureExpress;
