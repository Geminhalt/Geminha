var pessoas = [];
var profissoes = [];

function adicionarPessoa() {
  var nome = document.getElementById("nomeInput").value;
  var profissao = document.getElementById("profissaoInput").value;

  pessoas.push(nome);
  profissoes.push(profissao);

  console.log("Pessoa adedonha:", nome, profissao);
}

function removerPessoa() {
  var nome = document.getElementById("nomeInput").value;
  var index = pessoas.indexOf(nome);

  if (index !== -1) {
    pessoas.splice(index, 1);
    profissoes.splice(index, 1);
    console.log("Pessoa excomungada:", nome);
  } else {
    console.log("Não achei a pessoa:", nome);
  }
}