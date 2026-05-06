/**
 * @description Este arquivo gera dados de usuários fake no formato da JSONPlaceholder
 */

import { faker } from "@faker-js/faker";

export function criarUsuario() {
  return {
    name: faker.person.fullName(),
    username: faker.internet.username(),
    email: faker.internet.email(),

    address: {
      street: faker.location.street(),
      suite: `Apt. ${faker.number.int({ min: 1, max: 999 })}`,
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      geo: {
        lat: faker.location.latitude().toString(),
        lng: faker.location.longitude().toString(),
      },
    },

    phone: faker.phone.number(),
    website: faker.internet.domainName(),

    company: {
      name: faker.company.name(),
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.buzzPhrase(),
    },
  };
}

// /**
//  * @description gera múltiplos usuários fakes
//  */
// export const users = faker.helpers.multiple(criarUsuario, {
//   count: 5,
// });

console.log(criarUsuario());