var input = document.querySelector("#inputTexto")
var imagemSaida = document.querySelector("#saida-dados-imagem")
var textosSaida = document.querySelector("#saida-dados-textos")

var matrizCode = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
]

function criptografar(stringCriptografada){
    for(i = 0; i < matrizCode.length; i++){
        if (stringCriptografada.includes(matrizCode[i][0])){ 
            //o metodo includes retorna um valor procurado em uma string, nesse caso são os valores da posição 01 no indice matriz code.
            stringCriptografada = stringCriptografada.replaceAll(matrizCode[i][0],matrizCode[i][1]); //o metodo replace substitui um trecho da uma string por outra.             
        }
    }
    return stringCriptografada;
}

function descriptografar(stringDescriptograda){
    for (i = 0; i < matrizCode.length; i++){
        if (stringDescriptograda.includes(matrizCode[i][1])){
            stringDescriptograda = stringDescriptograda.replaceAll(matrizCode[i][1],matrizCode[i][0]);
        }
    }
    return stringDescriptograda;
}

function apagaDadosSaida(){
    imagemSaida.style.cssText = "display: none"    
}

function btnCriptografar(){    
    var textoCriptografado = criptografar(input.value);  
    if (textoCriptografado.match(/[A-Z]/) || textoCriptografado.match(/[áàãâäéèêëíìïîóòöôõúùûü]/)){
        apagaDadosSaida();
        textosSaida.value = mensagemErro();
        input.value="";
    } else {
        apagaDadosSaida();
        textosSaida.value = textoCriptografado;    
        input.value="";
    }  
    }
    

function btnDescriptografar(){
    var textoDescriptografado = descriptografar(input.value);   
    apagaDadosSaida();
    textosSaida.value = textoDescriptografado;
    input.value=""; 
}

function mensagemErro(){
    var mensagemErro = "Por favor digitar Apenas letras minusculas e sem acento!"
    return mensagemErro;
}
