function comprar() {
  const tipoIngresso = document.getElementById("tipo-ingresso").value
  const quantidadeIngresso = parseInt(document.getElementById("qtd").value)

  switch (tipoIngresso) {
    case "inferior":
      atualizarQuantidade("qtd-inferior", quantidadeIngresso)
      break
    case "superior":
      atualizarQuantidade("qtd-superior", quantidadeIngresso)
      break
    case "pista":
      atualizarQuantidade("qtd-pista", quantidadeIngresso)
      break
    default:
      alert("Tipo de ingresso é inválido!")
  }
}

function atualizarQuantidade(id, quantidadeComprada) {
  const quantidadeAtual = parseInt(document.getElementById(id).textContent)
  if (quantidadeAtual >= quantidadeComprada) {
    document.getElementById(id).textContent =
      quantidadeAtual - quantidadeComprada
  } else {
    alert("Quantidade de ingressos insuficiente!")
  }
}
