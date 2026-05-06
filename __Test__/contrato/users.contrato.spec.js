const { getRequest } = require("../../src/helpers/request.js");
const { validateContract } = require("../../src/helpers/validarContratos.js");
const contrato = require("../../src/schema/getUsers.schema.json");
let response;

describe("Valida a lista de busca de todos os usuários", () => {
  it("[CT-CONTRATO-001] - Deve retornar a lista de todos os usuários", async () => {
    response = await getRequest("/users");
  });
  it("[CT-CONTRATO-002] - Deve validar o contrato da resposta da lista de usuários", () => {
    const isValid = validateContract(response, contrato);
    expect(isValid).toBe(true);
  });
});
