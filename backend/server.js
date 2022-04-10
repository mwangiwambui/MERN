const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const myData = require('./mydetails.model')
const menuItems = require('./menuItems.model')
const { default: mongoose } = require('mongoose');
const PORT = process.env.PORT;
const dbURI= process.env.DBURL;


mongoose
  .connect(dbURI, { useNewUrlParser : true, useUnifiedTopology : true})
  .then(() => {
    app.listen(PORT);
    console.log("Server is running on Port: " + PORT);
  })
  .catch((err) => {
    console.log(err);
  })

  // setting up our server endpoints
  // app.use("/mydetails", myDetailsRoutes)

app.get('/mydetails', function(req, res){
  myData.find(function(err, mydetails){
    if(err){
      console.log(err);
    }else {
      res.json(mydetails)
    }
  });
});

app.get('/menuItems', function(req, res){
  menuItems.find(function(err, mydetails){
    if(err){
      console.log(err);
    }else {
      res.json(mydetails)
    }
  });
});

