let valorTotalFinal = 0
let valorFinal = document.getElementById("valor-total")
let carrinhoAtual = document.getElementById("lista-produtos")

function adicionar() {
  //recuperar valores do formulario que são nome do produto, quantidade e valor
  let produto = document.getElementById("produto").value
  let quantidadeProduto = document.getElementById("quantidade").value
  let nomeProduto = produto.split("-")[0]
  let valorUnitario = produto.split("R$")[1]

  //calcular o preço, o nosso subtotal por produto
  let valorSubTotal = valorUnitario * quantidadeProduto

  //adicionar produto no carrinho

  carrinhoAtual.innerHTML =
    carrinhoAtual.innerHTML +
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${valorSubTotal}</span>
        </section>`

  //atualizar o valor total da compra
  valorTotalFinal = valorTotalFinal + valorSubTotal
  valorFinal.innerText = `R$ ${valorTotalFinal}`
}

function limpar() {
  carrinhoAtual.innerHTML = ""
  valorFinal.innerText = ""
  valorTotalFinal = 0
}
