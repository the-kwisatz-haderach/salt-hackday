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

const saveIdentity = async identityObj => {
  await fsPromises.writeFile(path.join(dbPath, identityObj.id, '.json'), JSON.stringify(identityObj));
  return identityObj.id;
}

// saveIdentity(testId);

module.exports = { createIdentity, saveIdentity };