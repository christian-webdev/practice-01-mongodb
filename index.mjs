import express from "express";
import "./loadEnvironment.mjs";
import posts from "./routes/posts.mjs";

const PORT = process.env.PORT;
const app = express();

app.use("/posts", posts);
app.use((err, req, res, next) => {
  res.status(500).send("error here");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
