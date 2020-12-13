
// ENV
require('dotenv').config();
// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 4500;
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Node.js의 native Promise 사용
mongoose.Promise = global.Promise;

console.log(process.env.MONGO_URI);

// mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })
//   .then(() => console.log('Successfully connected to mongodb'))
//   .catch(e => console.error(e));


// var gogiRouter = require('./routes/gogi.routes.');
// app.use('/todos', require('./routes/todos'));

// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to the HomePage" });
// });

// app.use('/gogi',user);
// app.listen(port, ()=>{
//     console.log(`express is running on ${port}`);
// })