//par nome/valor
const saudacao = "Opa"; // contexto léxico 1

function exec() {
  const saudacao = "Falaa"; // contexto léxico 2
  return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
