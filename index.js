const contatos = require("./contatos");

function filtrarPorAssunto(contatos, assuntoDesejado) {
  return contatos.filter((contato) => contato.assunto === assuntoDesejado);
}
const mensagens = filtrarPorAssunto(contatos, "Suporte Técnico"); // <- ALTERAR AQUI O ASSUNTO

console.log("Mensagens com Assunto: ");
mensagens.forEach((contato, index) => {
  console.log(`${index + 1}. ${contato.mensagem}`);
});

console.log(
  `\nTotal de mensagens: ${contatos.length} \n  Dúvida: ${
    filtrarPorAssunto(contatos, "Dúvida").length
  },\n  Suporte Técnico: ${
    filtrarPorAssunto(contatos, "Suporte Técnico").length
  },\n  Sugestão: ${filtrarPorAssunto(contatos, "Sugestão").length}.`
);