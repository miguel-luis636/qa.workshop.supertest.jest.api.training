const { getAllPosts } = require("../../src/helpers/request.js");
const { getPostById } = require("../../src/helpers/request.js");
const { validateContract } = require("../../src/helpers/validarContratos.js");
const schemaPosts = require("../../src/schema/getPosts.schema.json");
const schemaPostById = require("../../src/schema/getPostById.schema.json");
 
describe("Valida o contrato da rota /posts", () => {
  let postIdDinamico;
  it("[CT-CONTRATO-003] - Deve validar o contrato da lista de posts", async () => {
    const response = await getAllPosts();
 
    expect(response.status).toBe(200);
 
    postIdDinamico = response.body[0].id;
 
    validateContract(schemaPosts, response.body);
  });
 
  it("[CT-CONTRATO-004] - Deve validar o contrato de um post pelo id dinâmico", async () => {
  
    expect(postIdDinamico).toBeDefined();
 
    const response = await getPostById(postIdDinamico);
 
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(postIdDinamico);
 
    validateContract(schemaPostById, response.body);
  });
});
 
