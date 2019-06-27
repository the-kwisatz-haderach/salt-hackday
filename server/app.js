const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();

app.use(bodyParser.json());

app.get('/api/identity', async (req, res) => {
  const identity = await api.createIdentity();
  res.send(JSON.stringify(identity));
});

module.exports = { app };
