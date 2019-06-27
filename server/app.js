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
  const { userId } = req.body;
  const { identity } = req.body;
  try {
    await identityApi.saveIdentity(userId, identity);
    res.end();
  } catch(err) {
    console.error(err);
    res.end();
  }
});

module.exports = { app };
