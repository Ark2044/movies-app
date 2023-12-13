const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const userRouter = require("./routes/user-routes");
const adminRouter = require("./routes/admin-routes");
const movieRouter = require("./routes/movie-routes");
const bookingRouter = require("./routes/booking-routes");

dotenv.config();

const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST", "PUT", "DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

//middleware section
app.use(express.json());
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/movies", movieRouter);
app.use("/booking", bookingRouter);

mongoose
  .connect(MONGO_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database Connected");
    })
  )
  .catch((e) => console.log(e));

// Serve static files from the 'frontend/build' directory
app.use(express.static(path.join(__dirname, '../movies/build')));

// Handle other routes and return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../movies/build', 'index.html'));
});
