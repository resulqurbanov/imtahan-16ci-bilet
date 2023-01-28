const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());

const { Schema } = mongoose;

const userSchema = Schema({
  imageUrl: { type: String },
  description: { type: String },
  title: { type: String },
});

const Users = mongoose.model("categorie", userSchema);

app.get("/", (req, res) => {
  res.send("started");
});

`get metod`

app.get("/categorie", (req, res) => {
  Users.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(404).json({ message: err });
    }
  });
});

app.get("/categorie/:id", (req, res) => {
  const { id } = req.params;
  Users.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
      }
    } else {
      res.status(404).json({ message: err });
    }
  });
});

`delete metod`

app.delete("/categorie/:id", (req, res) => {
  const { id } = req.params;

  Users.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      res.send("Succesfully deleted");
    } else {
      res.status(404).json({ message: err });
    }
  });
});

`post metod`

app.post("/categorie", (req, res) => {
  const obj = {
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    title: req.body.title,
  };
  console.log(obj);
  let user = new Users(obj);
  user.save();

  res.send({ message: " Succesfully added" });
});

const PORT = process.env.PORT;

const url = process.env.URL.replace("<password>", process.env.PASSWORD);
mongoose.set("strictQuery", true);

mongoose.connect(url, (err) => {
  if (!err) {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log("Server start");
    });
  }
});