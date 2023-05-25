const express = require('express');
const cors = require('cors');
const { getUsers } = require('./controllers/UserController');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  getUsers().then(data => res.send(data));
});