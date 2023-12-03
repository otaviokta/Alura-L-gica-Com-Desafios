let listaAmigos = []
let amigos = document.getElementById("nome-amigo")
let lista = document.getElementById("lista-amigos")
let listaSorteio = document.getElementById("lista-sorteio")

function adicionar() {
  if (amigos.value == "") {
    alert("O nome está incorreto ou não foi digitado!")
    return
  }
  if (listaAmigos.includes(amigos.value)) {
    alert("Este nome já foi cadastrado na lista de amigos!")
    return
  }
  listaAmigos.push(amigos.value)
  if (lista.textContent == "") {
    lista.textContent = amigos.value
  } else {
    lista.textContent = lista.textContent + ", " + amigos.value
  }
  amigos.value = ""
}

function sortear() {
  embaralha(listaAmigos)
  if (listaAmigos.length < 4) {
    alert("Para sortear precisa ter no mínimo 04 participantes!")
    return
  }
  for (let i = 0; i < listaAmigos.length; i++) {
    if (i == listaAmigos.length - 1) {
      listaSorteio.innerHTML =
        listaSorteio.innerHTML +
        listaAmigos[i] +
        " --> " +
        listaAmigos[0] +
        "<br>"
    } else {
      listaSorteio.innerHTML =
        listaSorteio.innerHTML +
        listaAmigos[i] +
        " --> " +
        listaAmigos[i + 1] +
        "<br>"
    }
  }
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice)

    ;[lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ]
  }
}

function reiniciar() {
  listaAmigos = []
  listaSorteio.innerHTML = ""
  lista.textContent = ""
}
