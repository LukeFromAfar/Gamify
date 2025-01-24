const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const gameRoutes = require("./routes/gameRoutes");
const tagRoutes = require("./routes/tagRoutes");

const app = express();

mongoose.connect(process.env.DB_URI);

app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/games", gameRoutes);
app.use("/api/tags", tagRoutes);

app.get("/", (req, res) => {
  res.send(`Server running on port ${process.env.PORT}`);
});

app.listen(process.env.PORT);
