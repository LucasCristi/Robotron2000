const controle = document.querySelectorAll("[data-controle]") //pega todos os elementos com data-controle em forma de array - TODOS OS + e -
const estatisticas = document.querySelectorAll("[data-estatistica]") //elementos data-peca - lista de estatísticas

// console.log(estatisticas) sempre testar com console se está pegando os dados

const pecas = {
    "bracos": {
        "forca": 15,
        "poder": 10,
        "energia": 0,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 15,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 5,
        "energia": 20,
        "velocidade": 5
    },
    "pernas": {
        "forca": 5,
        "poder": 0,
        "energia": 10,
        "velocidade": 15
    },
    "foguetes": {
        "forca": 0,
        "poder": 20,
        "energia": -20,
        "velocidade": -5
    },
}

controle.forEach((element) => { //forEach é usado para selecionar o array do CONTROLE
    element.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //dataset.controle seleciona todos + e -, parentNode seleciona elemento PAI = class controle no HTML
        atualizaEstatisticas(evento.target.dataset.peca)
    })                            //dataset usado para não depender de alterações em classes ou conteúdos no html
})

//(valor do controle, controle é CLASS do HTML)
function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]") //pega atributos do data-contador, soma/subtrai no value 

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }

}

function atualizaEstatisticas(peca) {
    // console.log(pecas[peca] ) //trás os valores do objeto, dados especificos do objeto (braços, pernas...) 

    estatisticas.forEach((elemento) => {
        // console.log(elemento.dataset.estatistica) //trás o nome dos elementos: força, pernas e etc
        // console.log(elemento.textContent) //numero que será atualizado
        // console.log(elemento) é a linha em que se encontra data-estatistica no html 

        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        //elemento é o valor de texto do html, pecas[peca] é o array na peça especifica que será aumentada, [elemento.dataset.estatistica] 
    })
}

const colors = document.querySelectorAll("[data-colors]")

function changeColor(cor) {

    for (let i = 0; i < colors.length; i++) {
        document.querySelector(".robo").src = "img/Robotron 2000 - " + cor + ".png";
    }

}

