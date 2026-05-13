const { fakePost } = require("../../src/data/post-faker.js");
const {
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
} = require("../../src/helpers/request.js");

const { validateContract } = require("../../src/helpers/validarContratos.js");
const postWriteSchema = require("../../src/schema/post.write.schema.json");

describe("Valida o contrato das rotas de escrita em /posts", () => {
  const payload = fakePost();

  it("[CT-CONTRATO-005] - Deve validar o contrato de criação de post via POST /posts", async () => {
    const response = await postRequest("/posts", payload);
    expect(response.status).toBe(201);
    validateContract(postWriteSchema, response.body);
  });


    it("[CT-CONTRATO-006] - Deve validar o contrato de atualização completa via PUT /posts/1", async () => {
    const response = await putRequest("/posts/1", payload);
 
    expect(response.status).toBe(200);
    validateContract(postWriteSchema, response.body);
  });
 

  it("[CT-CONTRATO-007] - Deve validar o contrato de atualização parcial via PATCH /posts/1", async () => {
    const payload = { title: fakePost().title }; 
    const response = await patchRequest("/posts/1", payload);
 
    expect(response.status).toBe(200);
    validateContract(postWriteSchema, response.body);
  });
 
  it("[CT-CONTRATO-008] - Deve validar que DELETE /posts/1 retorna objeto vazio", async () => {
    const response = await deleteRequest("/posts/1");
 
    expect(response.status).toBe(200);
    expect(response.body).toEqual({});
  });


});
