const express = require("express");
const app = express();
const contactModel = require("../model/contact.js");

app.post("/createContact/", async (req, res) => {
  try {
    const newContact = new contactModel(req.body);
    await newContact.save();
    res.status(200).send(newContact);
  } 
  catch (err) {
    // terminal
    console.log(err);
    // browser
    res.status(500).send("conatct not saved" + err);
  }
});

module.exports = app;
