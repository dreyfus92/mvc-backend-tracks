const handleHttpError = (res, message = "Algo sucedió", code = 403) => {
  res.status(code);
  res.status({ error: message });
};

module.exports = { handleHttpError };
