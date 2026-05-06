const Validator = require("jsonschema").Validator;
const assert = require("assert");

const v = new Validator();

function validateContract(response, contrato) {
  const resultado = v.validate(response, contrato);

  if (resultado.valid) {
    console.log("Contrato válido");
  } else {
    console.error("Contrato inválido", resultado.errors);

    resultado.errors.forEach((error) => {
      console.error(`Erro: ${error.stack}`);
    });

    assert.fail("Contrato JSON inválido");
  }
  return resultado.valid;
}

module.exports = {
  validateContract,
};
