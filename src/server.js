const express = require('express');

const connect = require('./config/db');

const userController = require('./controllers/user.controller');

const app = express();
app.use(express.json());

app.use('/users', userController);

app.listen(3000, async function () {
  await connect();
  console.log('Listening to port 3000');
});
