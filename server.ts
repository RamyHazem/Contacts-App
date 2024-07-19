import express from "express";
import contactRouter from "./routes/contacts";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use("/contacts", contactRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Running on Port: ${PORT}`);
});
