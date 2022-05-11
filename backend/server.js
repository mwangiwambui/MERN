const express = require('express');
require('dotenv').config();
const app = express();
const nodemailer = require("nodemailer");
const cors = require('cors');
const myData = require('./mydetails.model')
const menuItems = require('./menuItems.model')
const { default: mongoose } = require('mongoose');
const PORT = process.env.PORT;
const dbURI= process.env.DBURL;

//middleware
app.use(express.json());
app.use(cors())

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
})

transporter.verify((err, success) => {
  err 
  ? console.log(err)
  : console.log(`=== Server is ready to take messages : ${success}`)
})

let mailOptions = {
  from: "test@gmail.com",
  to: process.env.EMAIL,
  subject: "Nodemailer API",
  text: "Hi from your nodemailer API",
}

app.post("/send", function (req, res){
  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL,
    subject: `${req.body.mailerState.subject}`,
    text: `${req.body.mailerState.message}`,
  };

  transporter.sendMail(mailOptions, function (err, data){
    if (err){
      res.json({
        status: "fail",
      })
    }else{
      console.log("== Message Sent ==");
      res.json({ status : "success"})
    }
  });

});


mongoose
  .connect(dbURI, { useNewUrlParser : true, useUnifiedTopology : true})
  .then(() => {
    app.listen(PORT);
    console.log("Server is    running on Port: " + PORT);
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

