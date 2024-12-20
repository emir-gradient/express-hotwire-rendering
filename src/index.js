const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/turbo.es2017-umd.js', (req, res) => {
  const turboLibPath = path.join(process.cwd(), "node_modules/@hotwired/turbo/dist/turbo.es2017-umd.js");
  res.sendFile(turboLibPath);
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/greet', (req, res) => {
  const name = req.query.name ? req.query.name : null;
  const message = name ? `Hello ${name}!` : `Hello!`;

  res.render('greet', {
    message
  });
});

app.get('/add-name', (req, res) => {
  res.render('add-name');
});

app.get('/partial-home', (req, res) => {
  res.contentType('text/vnd.turbo-stream.html');
  res.render('partials/_home');
});

app.get('/partial-greet', (req, res) => {
  const name = req.query.name ? req.query.name : null;
  const message = name ? `Hello ${name}!` : `Hello!`;

  res.contentType('text/vnd.turbo-stream.html');
  res.render('partials/_greet', {
    message
  });
});

app.get('/partial-add-name', (req, res) => {
  res.contentType('text/vnd.turbo-stream.html');
  res.render('partials/_add-name');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
