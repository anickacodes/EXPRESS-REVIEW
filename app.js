const express = require("express");
const app = express();
const dataController = require('./controllers/dataController')

app.use(express.json());
app.use('/Squaaad', dataController)
// GET all
app.get("/", (req, res) => {
  res.json(data);
});


module.exports = app;
