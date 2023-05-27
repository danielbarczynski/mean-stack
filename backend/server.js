const express = require('express');
const cors = require('cors');
const { getUsers, createUser, deleteUser } = require('./controllers/UserController');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  getUsers().then(data => res.send(data));
});

app.post('/users/create'), (rq, res) => {
  const { user } = { name: req.params.name, age: req.params.age };
  createUser(user);
}
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  deleteUser(id);
})