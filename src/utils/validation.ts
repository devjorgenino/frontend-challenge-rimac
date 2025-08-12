export const validateDocumentNumber = (documentNumber: string) => {
  const regexDocumentNumber = /^\d+$/;
  return regexDocumentNumber.test(documentNumber);
};

export const validatecelular = (celular: string) => {
  const regexcelular = /^\+?\d+$/;
  return regexcelular.test(celular);
};
