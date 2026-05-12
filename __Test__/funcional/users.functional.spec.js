const { getRequest } = require("../../src/helpers/request.js");

describe("Teste funcional da rota /users", () => {
  it("[CT-FUNCTIONAL-001] Deve validar headers e dados da rota /users", async () => {
    const response = await getRequest("/users");

    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toContain("application/json");
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);

    const user = response.body[0];
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("username");
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("email");

    expect(typeof user.id).toBe("number");
    expect(typeof user.username).toBe("string"); 
    expect(typeof user.name).toBe("string");
    expect(typeof user.email).toBe("string");
  });
});