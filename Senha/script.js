console.log(Math.random())
let letras = "abcdefghijklmnopqrstuvwxyz"
let aleatorio = Math.floor(Math.random() * letras.length)
console.log(letras[aleatorio])

// ----------------------------------------------

let maiusculas = "ABCDEFGHIIJKLMNOPQRSTUVWXYZ"
let minusculas = "abcdefghijklmnopqrstuvwxyz"
let numeros = "0123456789"
let simbolos = "!@#$%&*()_-+="

function gerarSenha(tamanho, banco) {
    let senha = ""
    for (let i = 0; i < tamanho; i++) {
        let indice = Math.floor(Math.random() * banco.length)
        senha += banco[indice]
    }
    return senha
}
console.log(gerarSenha(8, maiusculas + minusculas + numeros + simbolos))

let tamanhoInput = document.getElementById("tamanho")
let gerar = document.getElementById("gerar")
let resultado = document.getElementById("resultado")

gerar.addEventListener("click", function () {
    let tamanho = tamanhoInput.value
    let banco = montarBanco()
    if (banco == "") {
        resultado.innerText = "Selecione pelo menos um tipo de caracter"
        return
    }
    let senha = gerarSenha(tamanho, banco)

    resultado.innerText = senha
})

let checkMaiusculas = document.getElementById("maiusculas")
let checkMinusculas = document.getElementById("minusculas")
let checkNumeros = document.getElementById("numeros")
let checkSimbolos = document.getElementById("simbolos")

function montarBanco() {
    let banco = ""
    if (checkMaiusculas.checked) {
        banco += maiusculas
    }
    if (checkMinusculas.checked) {
        banco += minusculas
    }
    if (checkNumeros.checked) {
        banco += numeros
    }
    if (checkSimbolos.checked) {
        banco += simbolos
    }
    return banco
}

let copiar = document.getElementById("copiar")
copiar.addEventListener("click", async function () {
    let senhaAtual = resultado.textContent

    if (senhaAtual == "") {
        alert("Nenhuma senha gerada")
        return
    }
    await navigator.clipboard.writeText(senhaAtual)
    // espere o navegador . copiar . o texto da variável (variável)
    copiar.innerText = "Senha Copiada!"
    setTimeout(function() {
        copiar.innerText = "Copiar Senha"
    }, 2000) // 2 segundos
})