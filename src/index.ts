import express from "express";
import mongoose from "mongoose";
import apiRouter from "./routes/api";

const dbUrl = `mongodb+srv://tetraspace:g7mz99cWjm9iKs1o@tcatcc.smq3d.mongodb.net/tcatcc?retryWrites=true&w=majority`;
mongoose.connect(dbUrl);
const db = mongoose.connection;

const app = express();
const port = 3001;

app.use(express.json());
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
