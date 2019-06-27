const faker = require('faker');

const createIdentity = () => {
  return new Promise((resolve, reject) => {
    const identity = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      birthdate: faker.date.past().toUTCString(),
      birthplace: faker.fake("{{address.city}}, {{address.country}}"),
      city: faker.address.city(),
      spouseName: faker.fake("{{name.firstName}} {{name.lastName}}"),
      amountKids: Math.floor(Math.random() * 10),
      petName: faker.fake("{{name.firstName}} {{name.lastName}}, {{name.suffix}}"),
      petPhoto: faker.image.animals(),
    }
    resolve(identity);
  })
}

module.exports.createIdentity = createIdentity;