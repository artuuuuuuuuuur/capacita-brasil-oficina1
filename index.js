const contatos = require("./contatos");

function filtrarPorAssunto(contatos, assuntoDesejado) {
  return contatos.filter((contato) => contato.assunto === assuntoDesejado);
}
const mensagens = filtrarPorAssunto(contatos, "Suporte Técnico"); // <- ALTERAR AQUI O ASSUNTO

// Filtrar mensagens com base no assunto
console.log("Mensagens com Assunto: ");
mensagens.forEach((contato, index) => {
  console.log(`${index + 1}. ${contato.mensagem}`);
});

// Listar os contatos classificados por assunto
console.log("\nContatos por Assunto:");
mensagens.forEach((contato, index) => {
  console.log(`${index + 1}. ${contato.nome} (${contato.email})`);
})


// Exibir uma mensagem de quantas mensagens existem em cada categoria
console.log(
  `\nTotal de mensagens: ${contatos.length} \n  Dúvida: ${
    filtrarPorAssunto(contatos, "Dúvida").length
  },\n  Suporte Técnico: ${
    filtrarPorAssunto(contatos, "Suporte Técnico").length
  },\n  Sugestão: ${filtrarPorAssunto(contatos, "Sugestão").length}.`
);

