const { fakePost } = require("../../src/data/post-faker.js");
const {
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
} = require("../../src/helpers/request.js");

describe("Teste funcional das rotas de escrita em /posts", () => {
  const payload = fakePost();
  it("[CT-FUNCTIONAL-004] Deve criar um post via POST /posts", async () => {
    const response = await postRequest("/posts", payload);

    expect(response.status).toBe(201);
    expect(response.headers["content-type"]).toContain("application/json");

    const body = response.body;
    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("userId");
    expect(body).toHaveProperty("title");
    expect(body).toHaveProperty("body");

    expect(typeof body.id).toBe("number");
    expect(typeof body.userId).toBe("number");
    expect(typeof body.title).toBe("string");
    expect(typeof body.body).toBe("string");

    expect(body.userId).toBe(payload.userId);
    expect(body.title).toBe(payload.title);
    expect(body.body).toBe(payload.body);
  });

  it("[CT-FUNCTIONAL-005] Deve atualizar um post completo via PUT /posts/1", async () => {
    const response = await putRequest("/posts/1", payload);

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toContain("application/json");

    const body = response.body;
    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("userId");
    expect(body).toHaveProperty("title");
    expect(body).toHaveProperty("body");

    expect(typeof body.id).toBe("number");
    expect(typeof body.userId).toBe("number");
    expect(typeof body.title).toBe("string");
    expect(typeof body.body).toBe("string");

    expect(body.userId).toBe(payload.userId);
    expect(body.title).toBe(payload.title);
    expect(body.body).toBe(payload.body);
  });

  it("[CT-FUNCTIONAL-006] Deve atualizar parcialmente um post via PATCH /posts/1", async () => {
    const response = await patchRequest("/posts/1", payload);

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toContain("application/json");

    const body = response.body;
    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("title");

    expect(typeof body.id).toBe("number");
    expect(typeof body.title).toBe("string");

    expect(body.title).toBe(payload.title);
  });

  it("[CT-FUNCTIONAL-007] Deve deletar um post via DELETE /posts/1", async () => {
    const response = await deleteRequest("/posts/1");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({});
  });
});
