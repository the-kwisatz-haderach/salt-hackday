const https = require('https');
const app = require('./app');

const PORT = process.env.PORT || 8000;

https.createServer(app).listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));