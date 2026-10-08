function validarCorreo(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

function validarPassword(password) {
  // Mínimo 8 caracteres
  return password.length >= 8;
}

function validarNumeroControl(numero) {
  return /^\d{6}$/.test(numero);
}