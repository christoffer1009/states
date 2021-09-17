const handle = (err) => {
  const messages = {};
  err.errors.forEach((error) => {
    let message;
    switch (error.validatorKey) {
      case "isInt":
        message = "Deve ser um número inteiro";
        break;
      case "is_null":
        message = "Não pode ser vazio";
        break;
      case "not":
        message = "Não pode ser vazio";
        break;
      case "is":
        message = "Deve ser texto, sem números";
        break;
      case "isFloat":
        message = "Deve ser um número";
        break;
    }
    messages[error.path] = message;
  });
  return messages;
};

module.exports = handle;
