// "data": {
//   "id": 2,
//   "email": "janet.weaver@reqres.in",
//   "first_name": "Janet",
//   "last_name": "Weaver",
//   "avatar": "https://reqres.in/img/faces/2-image.jpg"
// }

/**
 * @description Este arquivo gera dados de usuarios fake para a criação e alteração do usuario
 */

import { faker } from "@faker-js/faker";

export function criarUsuario() {
  return {
    nome: faker.person.firstName(),
    sobrenome: faker.person.lastName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
}

/**
 * @description gera multiplos usuarios fakes
 */

// export const users = faker.helpers.multiple(criarUsuario, {
//   count: 5,
// });

  console.log(criarUsuario());
