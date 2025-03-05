import "dotenv/config";
import express from "express";
import { connectDb } from "./db/config.js";
import dbInit from "./db/init.js";
import Session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import sequelize from "./db/config.js";
import allRouter from "./routes/allRouter.js";
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

connectDb();
dbInit()
  .then(() => {
    console.log("Database initialized");
  })
  .catch((error) => {
    console.log(error);
  });

// session management
const mySequelizeStore = new SequelizeStore(Session.Store);
const mySequelizeStore1 = new mySequelizeStore({ db: sequelize });
mySequelizeStore1.sync();

app.use(
  Session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mySequelizeStore1,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30, //one month expiration
    },
  })
);

app.use("/api", allRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting server:", error);
    return;
  }
  console.log(`Server is listening at http://localhost:${PORT}`);
});
