const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();

app.use(bodyParser.json());

app.get('/api/identity', async (req, res) => {
  try {
    const identity = await api.createIdentity();
    res.send(JSON.stringify(identity));
  } catch(err) {
    console.error(err);
    res.end();
  }
});

app.post('/api/identity', async (req, res) => {
  try {
    await api.saveIdentity('9836fa3e-2e4b-4439-b358-86a1224db113', req.body);
    res.end();
  } catch(err) {
    console.error(err);
    res.end();
  }
});

module.exports = { app };
