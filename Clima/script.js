let input = document.getElementById("input")
let buscar = document.getElementById("buscar")
let resultado = document.getElementById("resultado")

function traduzirClima(codigo) {
    if (codigo === 0) {
        return { texto: "Céu Limpo", icone: "🌞" }
    }
    if (codigo >= 1 && codigo <= 3) {
        return { texto: "Nublado", icone: "🌥️" }
    }
    if ((codigo >= 51 && codigo <= 67) || (codigo >= 80 && codigo <= 82)) {
        return { texto: "Chuva", icone: "🌦️" }
    }
    if (codigo >= 71 && codigo <= 77 || codigo === 85 || codigo === 86) {
        return { texto: "Neve", icone: "❄️" }
    }
    if (codigo >= 95 && codigo <= 99) {
        return { texto: "Trovoada", icone: "⛈️" }
    }
    return { texto: "Desconhecido", icone: "❓" }
}

function mostrarClima(dadosClima, cidade) {
    let atual = dadosClima.current
    let clima = traduzirClima(atual.weather_code)
    let titulo = document.createElement("h2")
    titulo.innerText = clima.icone + " " + clima.texto
    let temperatura = document.createElement("p")
    temperatura.innerText = "Temperatura: " + atual.temperature_2m + " °C"

    let tituloCidade = document.createElement("h2")
    tituloCidade.innerText = "Cidade: " + cidade.name
    resultado.appendChild(tituloCidade)
    resultado.appendChild(titulo)
    resultado.appendChild(temperatura)
}

function mostrarPrevisao(dadosClima) {
    let dia = dadosClima.daily
    let previsao = document.createElement("ul")
    for (let [indice, data] of dia.time.entries()) {
        let clima = traduzirClima(dia.weather_code[indice])
        let minima = dia.temperature_2m_min[indice]
        let maxima = dia.temperature_2m_max[indice]

        let item = document.createElement("li")
        item.innerText = data + ": " + clima.icone + " " + minima + " °C / " + maxima + " °C"
        previsao.appendChild(item)
    }
    resultado.appendChild(previsao)
}

async function buscarClima(cidadeNome) {
    let nomePesquisado = cidadeNome.trim()
    if (!nomePesquisado) {
        resultado.innerText = "Digite o nome de uma cidade"
        return
    }

    resultado.innerText = "Buscando previsão..."

    try {
        let parametrosBusca = new URLSearchParams({ name: nomePesquisado, count: "1", language: "pt", format: "json" })
        let geolocalizacao = await fetch("https://geocoding-api.open-meteo.com/v1/search?" + parametrosBusca)
        if (!geolocalizacao.ok) {
            throw new Error("Falha ao buscar a cidade")
        }
        let dados = await geolocalizacao.json()

        if (!dados.results || dados.results.length === 0) {
            resultado.innerText = "Cidade não encontrada"
            return
        }

        let cidade = dados.results[0]
        let parametrosClima = new URLSearchParams({
            latitude: cidade.latitude,
            longitude: cidade.longitude,
            current: "temperature_2m,relative_humidity_2m,weather_code,apparent_temperature",
            daily: "temperature_2m_max,temperature_2m_min,weather_code",
            timezone: "auto"
        })
        let resposta = await fetch("https://api.open-meteo.com/v1/forecast?" + parametrosClima)
        if (!resposta.ok) {
            throw new Error("Falha ao buscar a previsão")
        }
        let dadosClima = await resposta.json()

        resultado.innerHTML = ""
        mostrarClima(dadosClima, cidade)
        mostrarPrevisao(dadosClima)
    }
    catch (erro) {
        resultado.innerText = "Falha ao conectar com o serviço de previsão"
        console.error(erro)
    }
}

buscar.addEventListener("click", function () {
    buscarClima(input.value)
})