require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors")


app.use(
    cors({
        origin: "*"
    })
)
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then((res) => console.log("CONNECT SUCCESS"))
  .catch((err) => console.log("ERROR"));


app.use(express.json());
const itemsRouter = require("./routes/items");
app.use("/api/items", itemsRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
