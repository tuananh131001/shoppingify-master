require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
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
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const categoryRoutes = require("./routes/categoryRoutes");
app.use("/api/categories", categoryRoutes);

const itemsRoutes = require("./routes/itemRoutes.js");
app.use("/api/items", itemsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
