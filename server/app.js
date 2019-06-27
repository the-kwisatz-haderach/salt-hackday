const express = require('express');
const bodyParser = require('body-parser');
const { identityApi } = require('./api');

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

app.get('/api/identity/:id', async (req, res) => {
  try {
    const { identities } = await identityApi.getUserIdentities(req.params.id);
    res.json(identities);
  } catch(err) {
    console.error(err);
    res.end();
  }
});

module.exports = { app };
