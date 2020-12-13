
// ENV
require('dotenv').config();
// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const todos = require('./routes/todos');
const employees = require('./routes/employees.js'); 

const app = express();
const port = process.env.PORT || 4500;

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Node.js의 native Promise 사용
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/local', { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));


//var gogiRouter = require('./routes/gogi.routes.');
// app.use('/todos', todos);
app.use('/employees', employees); 

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the HomePage" });
});

//app.use('/gogi',user);
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})