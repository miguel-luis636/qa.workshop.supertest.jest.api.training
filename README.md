# 📌 QA Workshop - Supertest + Jest API Automation

Este repositório foi desenvolvido durante o workshop da **Priscila Caime (Qualiters Club)** com o objetivo de aprender automação de testes de API utilizando:

* Jest
* Supertest
* JSON Schema Validation
* Faker (dados fake)
* Arquitetura de testes de API

---

# 🚀 Objetivo do Projeto

O projeto simula uma estrutura real de automação de testes de API, cobrindo:

* Testes funcionais (status, headers, dados)
* Testes de contrato (schema JSON)
* Testes de rotas GET, POST, PUT, PATCH, DELETE
* Geração de massa de dados fake
* Organização por camadas (helpers, schema, data, tests)

---

# 🌐 API utilizada

Este projeto utiliza a API pública:

👉 [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

Endpoints utilizados:

* GET /posts
* GET /posts/{id}
* POST /posts
* PUT /posts/{id}
* PATCH /posts/{id}
* DELETE /posts/{id}
* GET /users

---

# 📦 Tecnologias utilizadas

* Jest
* Supertest
* Faker
* JSON Schema
* Node.js
* Babel

---

# 📁 Estrutura do projeto

```
qa.workshop.supertest.jest.api.training/
│
├── __Test__/
│   ├── contrato/
│   └── funcional/
│
├── src/
│   ├── data/
│   │   └── post-faker.js
│   ├── helpers/
│   │   ├── request.js
│   │   └── validarContratos.js
│   ├── schema/
│   │   ├── post.write.schema.json
│   │   ├── posts.schema.json
│   │   └── users.schema.json
│
├── jest.config.js
├── babel.config.js
└── package.json
```

---

# ⚙️ Instalação do projeto

## 1. Inicializar projeto Node

```bash
npm init -y
```

---

## 2. Instalar Jest

```bash
npm install --save-dev jest
```

---

## 3. Configurar Jest

```bash
npx jest --init
```

---

## 4. Instalar Supertest

```bash
npm install supertest
```

---

## 5. Instalar Babel (necessário para compatibilidade)

```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

---

## 6. Instalar JSON Schema validator

```bash
npm install jsonschema
```

---

## 7. Instalar Faker (dados fake)

```bash
npm install @faker-js/faker
```

---

# ⚠️ IMPORTANTE (Ponto crítico do projeto)

## Jest + CommonJS

Este projeto utiliza:

```json
"type": "commonjs"
```

Então o padrão correto é:

```js
require()
module.exports
```

---

## ⚠️ Atenção com Faker

A biblioteca:

```js
@faker-js/faker
```

na versão mais recente usa **ES Modules (import/export)**.

### ❌ Pode quebrar com:

```js
require("@faker-js/faker")
```

---

### ✔️ Soluções:

### Opção 1 (RECOMENDADO para este projeto)

Instalar versão compatível:

```bash
npm install @faker-js/faker@8
```

---

### Opção 2 (avançada)

Migrar projeto inteiro para ESM:

```json
"type": "module"
```

E usar:

```js
import { faker } from "@faker-js/faker";
```

---

# 🧪 Tipos de testes implementados

## 📌 Testes funcionais

Validam:

* Status code
* Headers
* Estrutura do response
* Dados da API

Exemplo:

```js
expect(response.status).toBe(200);
expect(response.headers["content-type"]).toContain("application/json");
```

---

## 📌 Testes de contrato

Validam o formato da resposta com JSON Schema:

* Estrutura do objeto
* Tipos de dados
* Campos obrigatórios

---

## 📌 Testes de API (CRUD)

Cobrem ciclo completo:

* POST → criação
* GET → leitura
* PUT → atualização total
* PATCH → atualização parcial
* DELETE → remoção

---

# 🧠 Arquitetura do projeto

## 🔹 Helpers (request layer)

Centraliza chamadas HTTP:

* getRequest
* postRequest
* putRequest
* patchRequest
* deleteRequest

👉 Evita duplicação de código

---

## 🔹 Data (mock/fake data)

Geração de massa de dados:

* fakePost()
* faker users/posts

---

## 🔹 Schema

Validação de contrato:

* post schema
* users schema
* posts schema

---

## 🔹 Tests

Separados por camada:

* contrato/
* funcional/

---

# 🔁 Ciclo de vida de testes de API

Este projeto cobre etapas reais do ciclo:

1. Criação de dados (faker)
2. Execução da requisição (supertest)
3. Validação funcional (jest)
4. Validação estrutural (json schema)
5. Cleanup (delete)
6. Reexecução em pipeline (CI/CD)

---

# 🧪 Exemplo de execução

```bash
npm run test
```
---

# ⚠️ Problemas comuns

## ❌ Jest não encontra testes

```bash
Invalid testPattern
```

✔ Solução:

* verificar nome da pasta (`__Test__`)
* ajustar `jest.config.js`

---

## ❌ Faker quebra import

✔ Resolver com:

* versão 8
* ou migração ESM

---

## ❌ Content-type mismatch

✔ Usar:

```js
.expect("Content-Type", /json/)
```

# 👨‍💻 Autor

Projeto desenvolvido para estudo de:

* Automação de API
* QA Backend
* Jest + Supertest
* Arquitetura de testes modernos
