
function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let ate = parseInt(document.getElementById("ate").value);
    let apartir = parseInt(document.getElementById("apartir").value);

    if (apartir >= ate) {
        alert("Erro numero de inicio maior que de final")
        reiniciar()
        return
    }  

    let numerosSorteados = [];
    let numerosPossiveis = (ate-apartir)+1;
    let numero;

    if (quantidade > numerosPossiveis) {
        alert("Error! A quantidade de números é maior que o intervalo disponível!")
        reiniciar()
        return
    }

    
    for (let i = 0; i < quantidade; i++) {
        numero= geradorDeNumeros(apartir, ate);

        while (numerosSorteados.includes(numero)) {
            numero= geradorDeNumeros(apartir, ate);

        }

        numerosSorteados.push(numero);


    }
        let resposta = document.getElementById("respostaNumeros")
        resposta.innerHTML = `<h3>Numeros sorteados até agora: <span">${numerosSorteados}</span></h3>`;

        alteraçãoBotao()




    
}

function geradorDeNumeros(min, max) {

     return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alteraçãoBotao() {
    let botao = document.getElementById("Botaoreiniciar")

    if (botao.classList.contains("botao-desativado")) {

        botao.classList.remove("botao-desativado")
        botao.classList.add("botao-ativado")
        

    } else {

        botao.classList.remove("botao-ativado")
        botao.classList.add("botao-desativado")
        

    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("apartir").value = "";

    numerosSorteados =[];

    let resposta = document.getElementById("respostaNumeros")
    resposta.innerHTML = `<h3>Numeros sorteados até agora: <span">NENHUM</span></h3>`;

    alteraçãoBotao()

}








