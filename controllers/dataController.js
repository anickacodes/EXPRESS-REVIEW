const app = require('../app')
const express = require('express')
const arrayData = require('../models/data')

// GET index
app.get("/:index", (req, res) => {
    const index = req.params.index;
    res.json(data[index]);
  });
  
  app.put("/:index", (req, res, next) => {
    // const index = req.params.index
    const newPosition = req.body;
    data.push(newPosition);
  });