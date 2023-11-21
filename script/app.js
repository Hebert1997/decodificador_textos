var input = document.querySelector("#inputTexto")
var outputText = document.querySelector("#outputTexto")
var saidaDados = document.querySelector("#saida-dados")

var matrizCode = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]

function btnCriptografar(){
    var textoCriptografado = input.value;   
    criptografar(textoCriptografado);
}

function criptografar(textoCriptografado){
    for(i = 0; i < matrizCode.length; i++){
        if (textoCriptografado.includes(matrizCode[i][0])){ 
            //o metodo includes retorna um valor procurado em uma string, nesse caso são os valores da posição 01 no indice matriz code.
            var novoTexto = textoCriptografado.replaceAll(matrizCode[i][0],matrizCode[i][1]);             
        }
    }
}

function apagaQuadro(){
    saidaDados.style.cssText = 
    "display: none";
}
