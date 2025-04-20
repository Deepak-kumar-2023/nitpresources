// // Description: This is a simple Express server that serves an EJS template.
var express = require('express');
var app = express();

require("dotenv").config();


// // set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/uploads', express.static('uploads'));
app.use(express.static(__dirname));
app.use(express.static('public'));



// index page
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/upload', (req, res) => {
  res.render('upload');
});
app.get('/download', (req, res) => {
  res.render('index');
});




const PORT = process.env.PORT ||   8080;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
