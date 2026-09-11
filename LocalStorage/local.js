let musica = document.getElementById("musica")
let imagem = document.getElementById("imagem")
let adicionar = document.getElementById("adicionar")
let lista = document.getElementById("lista")
let mensagem = document.getElementById("mensagem")

let musicas = []

let musicasSalvas = localStorage.getItem("musicas")

if (musicasSalvas) {
    musicas = JSON.parse(musicasSalvas)
} else {
    musicas = []
}

adicionar.addEventListener("click", function () {

    let nomeMusica = musica.value
    let imagemMusica = imagem.value

    if (nomeMusica != "") {

        let novaMusica = {
            nome: nomeMusica,
            imagem: imagemMusica,
            favorito: false
        }

        musicas.push(novaMusica)

        localStorage.setItem("musicas", JSON.stringify(musicas))

        musica.value = ""
        imagem.value = ""

        mostrarMusicas()
    }
})

function mostrarMusicas() {

    lista.innerText = ""

    if (musicas.length == 0) {

        mensagem.innerText = "Não há músicas cadastradas."

    } else {

        mensagem.innerText = ""

        musicas.forEach(function (musicaAtual, indice) {

            let item = document.createElement("li")

            let img = document.createElement("img")

            img.src = musicaAtual.imagem
            img.alt = "Imagem da música " + musicaAtual.nome

            let nome = document.createElement("span")
            nome.innerText = musicaAtual.nome

            let favorito = document.createElement("button")

            if (musicaAtual.favorito == true) {
                favorito.innerText = "♥"
            } else {
                favorito.innerText = "♡"
            }

            favorito.addEventListener("click", function () {

                if (musicaAtual.favorito == true) {
                    musicaAtual.favorito = false
                } else {
                    musicaAtual.favorito = true
                }

                localStorage.setItem("musicas", JSON.stringify(musicas))

                mostrarMusicas()
            })

            let apagar = document.createElement("button")

            apagar.innerText = "Apagar"

            apagar.addEventListener("click", function () {

                musicas.splice(indice, 1)

                localStorage.setItem("musicas", JSON.stringify(musicas))

                mostrarMusicas()
            })

            item.appendChild(img)
            item.appendChild(nome)
            item.appendChild(favorito)
            item.appendChild(apagar)

            lista.appendChild(item)
        })
    }
}

mostrarMusicas()