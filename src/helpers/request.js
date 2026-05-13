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

async function postRequest(path, body) {
  try {
    const response = await request(baseURL)
      .post(path)
      .send(body)
      .expect("Content-Type", /json/)
      .expect(201);

    return response;
  } catch (error) {
    console.error(`Erro na requisição POST: ${path}`, error);

    throw error;
  }
}

async function putRequest(path, body) {
  try {
    const response = await request(baseURL)
      .put(path)
      .send(body)
      .expect("Content-Type", /json/)
      .expect(200);

    return response;
  } catch (error) {
    console.error(`Erro na requisição PUT: ${path}`, error);

    throw error;
  }
}

async function patchRequest(path, body) {
  try {
    const response = await request(baseURL)
      .patch(path)
      .send(body)
      .expect("Content-Type", /json/)
      .expect(200);

    return response;
  } catch (error) {
    console.error(`Erro na requisição PATCH: ${path}`, error);

    throw error;
  }
}

async function deleteRequest(path, statusCode = 200) {
  try {
    const response = await request(baseURL).delete(path).expect(statusCode);

    return response;
  } catch (error) {
    console.error(`Erro na requisição DELETE: ${path}`, error);

    throw error;
  }
}

async function getAllPosts() {
  return await getRequest("/posts");
}

async function getPostById(id) {
  return await getRequest(`/posts/${id}`);
}

module.exports = {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  getAllPosts,
  getPostById,
  deleteRequest,
};
