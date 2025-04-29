const express = require("express");
const mongoose = require("mongoose");
const contactRoute = require("./routes/contactRoute");
const cors = require("cors");
const session = require("express-session");
const itemRoute = require("./routes/ItemRoute.js");
const path = require("path");

const app = express();
app.use(cors(
  {
  credentials: true,
origin: "http://localhost:3000",
exposedHeaders: ["set-cookie"],
  }
));
app.use(
  session({
    secret: "this will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);
app.use(express.json({ limit: "1000mb", extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));
mongoose
  .connect(
    "mongodb+srv://eneaburimi4:enea12@cluster0.2qyjstb.mongodb.net/projekt?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));

app.use(contactRoute);

app.use(itemRoute);

// app.use("/", (req, res) => {
//   res.send("heloo");
// });

app.listen("5000", () => {
  console.log("hello");
});
