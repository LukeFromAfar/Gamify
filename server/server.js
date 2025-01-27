const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const gameRoutes = require("./routes/gameRoutes");
const tagRoutes = require("./routes/tagRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
app.use(cookieParser());

mongoose.connect(process.env.DB_URI);

app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/games", gameRoutes);
app.use("/api/tags", tagRoutes);
app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.send(`Server running on port ${process.env.PORT}`);
});

app.listen(process.env.PORT);
