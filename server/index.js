
// ENV
require('dotenv').config();
// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cowRouter = require('./routes/cow.js'); 
const pigRouter = require('./routes/pig.js'); 
const chickenRouter = require('./routes/chicken.js'); 
const reviewRouter = require('./routes/review.js'); 
const usersRouter = require('./routes/users.js');

var fs = require('fs');
var path = require('path');
const multer = require('multer');
const upload = multer({dest: './upload'});
const session = require('express-session');
const FileStore = require('session-file-store')(session); // 1

const app = express();
const port = process.env.PORT || 4500;

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'sjp@RM$1$',
  cookie: {
      maxAge: 1000*100000
  },
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}));

// Node.js의 native Promise 사용
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/local', { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

app.use('/image',express.static('./upload'));

app.post('/api/test',upload.single('image'), (req,res)=>{
  console.log("req.file.filename : ",req.file.filename);
  let image = '/image/'+req.file.filename;
  
  console.log("image : ",image);
  console.log("req.body : ",req.body);

})


app.use('/api/cow',cowRouter);
app.use('/api/pig',pigRouter);
app.use('/api/chicken',chickenRouter);
app.use('/api/review',reviewRouter);

app.use('/api/users',usersRouter);

//app.use('/api/authentication',authenticationRouter);
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


app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})