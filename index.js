const contatos = require("./contatos");
 


// filtrar mensagens com base no assunto

const resultado = contatos.filter(filtrar_assunto);

function filtrar_assunto(contato) {
  return contato.assunto = "sugestão";
}


console.log(resultado);

