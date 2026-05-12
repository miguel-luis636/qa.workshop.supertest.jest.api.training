const { getAllPosts } = require("../../src/helpers/request.js");
const { getPostById } = require("../../src/helpers/request.js");

describe("Teste funcional da rota /posts", () => {
  let postId;
  it("[CT-FUNCTIONAL-001] Deve validar headers e dados da rota /posts", async () => {
    const response = await getAllPosts();

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toContain("application/json");

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);

    const post = response.body[0];
    expect(post).toHaveProperty("userId");
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("body");

    expect(typeof post.userId).toBe("number");
    expect(typeof post.id).toBe("number");
    expect(typeof post.title).toBe("string");
    expect(typeof post.body).toBe("string");

    postId = post.id;
  });

  it("[CT-FUNCTIONAL-002] Deve buscar um post pelo id obtido dinamicamente", async () => {
    expect(postId).toBeDefined();
    const response = await getPostById(postId);

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toContain("application/json");

    expect(Array.isArray(response.body)).toBe(false);
    expect(typeof response.body).toBe("object");

    expect(response.body).toHaveProperty("userId");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("title");
    expect(response.body).toHaveProperty("body");

    expect(typeof response.body.userId).toBe("number");
    expect(typeof response.body.id).toBe("number");
    expect(typeof response.body.title).toBe("string");
    expect(typeof response.body.body).toBe("string");

    expect(response.body.id).toBe(postId);
  });
});
