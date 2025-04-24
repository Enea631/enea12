const express = require("express");
const mongoose = require("mongoose");
const contactRoute = require("./routes/contactRoute");
const cors = require("cors");
const session = require("express-session");

const app = express();
app.use(cors());
app.use(
  session({
    secret: "this will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);
app.use(express.json({ limit: "1000mb", extended: true }));
mongoose
  .connect(
    "mongodb+srv://eneaburimi4:enea12@cluster0.2qyjstb.mongodb.net/projekt?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

app.use(contactRoute);

// app.use("/", (req, res) => {
//   res.send("heloo");
// });

app.listen("5000", () => {
  console.log("hello");
});
