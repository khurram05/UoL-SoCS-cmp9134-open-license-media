import "dotenv/config";
import express from "express";
import { connectDb } from "./db/config.js";
import dbInit from "./db/init.js";

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

app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting server:", error);
    return;
  }
  console.log(`Server is listening at http://localhost:${PORT}`);
});
