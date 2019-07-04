const https = require('https');
const fs = require('fs');
const path = require('path');
const { app } = require('./app');

const PORT = process.env.PORT || 8000;

const certificates = {
  key: fs.readFileSync(path.join(__dirname, 'certificates', 'server.key')),
  cert: fs.readFileSync(path.join(__dirname,'certificates', 'server.crt')),
  passphrase: 'smalltalker'
}

https.createServer(certificates, app).listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));