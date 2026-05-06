const request = require("supertest");

const baseURL = "https://jsonplaceholder.typicode.com";

async function getRequest(path) {
  try {
    const response = await request(baseURL)
      .get(path)
      .expect("Content-Type", /json/)
      .expect(200);

    return console.log(response.body);
  } catch (error) {
    console.error(`Erro na requisição GET: ${path}`, error);
    throw error;
  }
}

module.exports = {
  getRequest,
};
