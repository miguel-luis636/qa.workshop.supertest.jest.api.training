/**
 * @description Gera dados fake para criação e atualização de posts
 */

const { faker } = require("@faker-js/faker");

function fakePost() {
  return {
    userId: faker.number.int({ min: 1, max: 10 }),

    title: faker.lorem.sentence(),

    body: faker.lorem.paragraph(),
  };
}

module.exports = {
  fakePost,
};