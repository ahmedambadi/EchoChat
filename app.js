const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.get('/about', (req, res) => {
  res.send('About this application');
});
app.post('/data', (req, res) => {
  const data = req.body.user01.age; 
    res.json({ received: data });
});

module.exports = app;