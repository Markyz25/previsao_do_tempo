const chave = "b52ce29f09736d8f430fdf05f38069e2"

let button = document.querySelector("#search");
button.addEventListener("click", function clicar() {
    let cidade = document.querySelector("#input").value
    if(cidade == ''){
        return
    } else {
        buscarCidade(cidade)
    }
    

})

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" + 
    "&units=metric").then(resposta => resposta.json())
    // if (dados.message == "city not found" || dados.cod == "404") {
    //     return dados
    // }

    colocarNaTela(dados)
}

function colocarNaTela(dados) {
    console.log(dados)
    let cidadeLocal = document.querySelector(".local").innerHTML = dados.name + " -"
    let teste = document.querySelector(".country").innerHTML = "- " + dados.sys.country
    let tempMin = document.querySelector(".temp-min").innerHTML = "Min: " + Math.floor(dados.main.temp_min) + "°C"
    let tempMax = document.querySelector(".temp-max").innerHTML = "Max: " + Math.floor(dados.main.temp_max) + "°C"
    let img = document.querySelector(".img-nuvem").src = "http://openweathermap.org/img/wn/" + dados.weather[0].icon + "@2x.png"
    let sky = document.querySelector(".nuvens").innerHTML = dados.weather[0].description
    let umidade = document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
}    