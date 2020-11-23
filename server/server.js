const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the HomePage" });
});

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})