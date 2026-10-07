require('dotenv').config()
console.log("chai or code");
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('paridotcom');
});
app.get('/login', (req, res) => {
  res.send('<h1> please login to my website <h1>');
});

app.get('/YouTube', (req, res) => {
  res.send('<h1> welcome to pari and keshav channel<h1>');
});


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
