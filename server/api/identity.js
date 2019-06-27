const faker = require('faker');
const uuidv4 = require('uuid/v4');
const fsPromises = require('fs').promises;
const path = require('path');

const dbPath = path.resolve(__dirname, '../db');

const createIdentity = () => {
  return new Promise((resolve, reject) => {
    const identity = {
      id: uuidv4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      birthdate: faker.date.past().toUTCString(),
      birthplace: faker.fake("{{address.city}}, {{address.country}}"),
      city: faker.address.city(),
      jobTitle: faker.name.title(),
      spouseName: faker.fake("{{name.firstName}} {{name.lastName}}"),
      amountKids: Math.floor(Math.random() * 10),
      petName: faker.fake("{{name.firstName}} {{name.lastName}}, {{name.suffix}}"),
      petPhoto: `${faker.image.animals()}?s=${Math.ceil(Math.random() * 1000)}`
    }
    resolve(identity);
  })
}

const saveIdentity = async (userId, identityObj) => {
  try {
    const userFile = await fsPromises.readFile(path.join(dbPath, userId + '.json'));
    const newData = JSON.parse(userFile);
    newData.identities.push(identityObj);
    fsPromises.writeFile(path.join(dbPath, userId + '.json'), JSON.stringify(newData));
  } catch(err) {
    if (err.code === 'ENOENT') {
      const identities = { identities: [identityObj] };
      fsPromises.writeFile(path.join(dbPath, userId + '.json'), JSON.stringify(identities));
      return;
    }
    console.error(err);
    return new Error(err);
  }
}

const getUserIdentities = async userId => {
  try {
    const userFile = await fsPromises.readFile(path.join(dbPath, userId + '.json'));
    return JSON.parse(userFile);
  } catch(err) {
    console.error(err);
    return new Error(err);
  }
}

module.exports = { createIdentity, saveIdentity, getUserIdentities };