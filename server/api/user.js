const uuidv4 = require('uuid/v4');
const fsPromises = require('fs').promises;
const path = require('path');

const dbPath = path.resolve(__dirname, '../db');

const createUser = async () => {
  const userId = uuidv4();
  const identities = { identities: [] };
  await fsPromises.writeFile(path.join(dbPath, userId + '.json'), JSON.stringify(identities));
  return userId;
}

module.exports = { createUser };