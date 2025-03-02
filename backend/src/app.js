import "dotenv/config";
import express from "express";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting server:", error);
    return;
  }
  console.log(`Server is listening at http://localhost:${PORT}`);
});
