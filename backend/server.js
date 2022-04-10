const express = require('express');
const app = express();
const cors = require('cors');
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
  MyData.find(function(err, mydetails){
    if(err){
      console.log(err);
    }else {
      res.json(mydetails)
    }
  });
});

