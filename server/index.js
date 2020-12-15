
// ENV
require('dotenv').config();
// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const todos = require('./routes/todos');
const employeesRouter = require('./routes/employees.js'); 
const gogiRouter = require('./routes/gogi.js'); 
const usersRouter = require('./routes/users.js');
const authenticationRouter = require('./routes/authentication.js');
var fs = require('fs');
var path = require('path');


const multer = require('multer');
const upload = multer({dest: './upload'})


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

app.use('/image',express.static('./upload'));

app.post('/api/test',upload.single('image'), (req,res)=>{
  console.log("req.file.filename : ",req.file.filename);
  let image = '/image/'+req.file.filename;
  
  console.log("image : ",image);
  console.log("req.body : ",req.body);

})

app.use('/api/employees', employeesRouter); 
app.use('/api/gogi',gogiRouter);
app.use('/api/users',usersRouter);
app.use('/api/authentication',authenticationRouter);
// app.post('/api/test',(req,res)=>{
//   console.log("req.body : ",req.body);
//   console.log("gg");
//   res.send("good");
// })

app.get('/upload', function(req, res){
  res.render('upload');
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the HomePage" });
});

//app.use('/gogi',user);
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})