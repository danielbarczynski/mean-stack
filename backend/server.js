const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req, res) => res.ge);
