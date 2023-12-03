function alterarStatus(id) {
  let gameStatus = document.getElementById(`game-${id}`)
  let gameImage = gameStatus.querySelector(".dashboard__item__img")
  let gameButton = gameStatus.querySelector(".dashboard__item__button")

  if (gameImage.classList.contains("dashboard__item__img--rented")) {
    gameImage.classList.remove("dashboard__item__img--rented")
    gameButton.classList.remove("dashboard__item__button--return")
    gameButton.innerText = "Alugar"
  } else {
    gameImage.classList.add("dashboard__item__img--rented")
    gameButton.classList.add("dashboard__item__button--return")
    gameButton.innerText = "Devolver"
  }
}
