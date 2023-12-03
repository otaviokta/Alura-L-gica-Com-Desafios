const MIN_PARTICIPANTES_PARA_SORTER = 4

let amigos = document.getElementById("nome-amigo")
let listaAmigosElemento = document.getElementById("lista-amigos")
let listaSorteioElemento = document.getElementById("lista-sorteio")
let listaAmigos = []

function adicionar() {
  const nomeAmigo = amigos.value.trim()
  if (!nomeAmigo) {
    alert("O nome está incorreto ou não foi digitado!")
    return
  }
  if (listaAmigos.includes(nomeAmigo)) {
    alert("Este nome já foi cadastrado na lista de amigos!")
    return
  }
  listaAmigos.push(nomeAmigo)
  listaAmigosElemento.textContent += listaAmigosElemento.textContent
    ? `, ${nomeAmigo}`
    : nomeAmigo
  amigos.value = ""
}

function sortear() {
  if (listaAmigos.length < MIN_PARTICIPANTES_PARA_SORTER) {
    alert(
      `Para sortear precisa ter no mínimo ${MIN_PARTICIPANTES_PARA_SORTER} participantes!`
    )
    return
  }
  embaralha(listaAmigos)
  listaSorteioElemento.innerHTML = ""
  listaAmigos.forEach((amigo, indice) => {
    const proximoAmigo = listaAmigos[indice + 1] || listaAmigos[0]
    listaSorteioElemento.innerHTML += `${amigo} --> ${proximoAmigo}<br>`
  })
}

function embaralha(lista) {
  for (let indice = lista.length - 1; indice > 0; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * (indice + 1))
    ;[lista[indice], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice],
    ]
  }
}

function reiniciar() {
  listaAmigos = []
  listaSorteioElemento.innerHTML = ""
  listaAmigosElemento.textContent = ""
}
