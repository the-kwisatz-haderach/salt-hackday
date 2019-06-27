const express = require('express');
const bodyParser = require('body-parser');
const { identityApi, userApi } = require('./api');

const app = express();

app.use(bodyParser.json());

app.get('/api/identity', async (req, res) => {
  try {
    const identity = await identityApi.createIdentity();
    res.send(JSON.stringify(identity));
  } catch(err) {
    console.error(err);
    res.end();
  }
});

app.post('/api/identity', async (req, res) => {
  try {
    await identityApi.saveIdentity('9836fa3e-2e4b-4439-b358-86a1224db113', req.body);
    res.end();
  } catch(err) {
    console.error(err);
    res.end();
  }
});

app.post('/api/user', async (req, res) => {
  try {
    const userId = await userApi.createUser();
    res.send(userId);
  } catch(err) {
    console.error(err);
    res.end();
  }
});

module.exports = { app };
