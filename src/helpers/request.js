const request = require("supertest");
const baseURL = "https://jsonplaceholder.typicode.com";

async function getRequest(path) {
  try {
    const response = await request(baseURL)
      .get(path)
      .expect("Content-Type", /json/)
      .expect(200);

    return response;
  } catch (error) {
    console.error(`Erro na requisição GET: ${path}`, error);
    throw error;
  }
}

async function getAllPosts() {
  return await getRequest("/posts");
}


async function getPostById(id) {
  return await getRequest(`/posts/${id}`);
}


module.exports = { getRequest, getAllPosts, getPostById };
