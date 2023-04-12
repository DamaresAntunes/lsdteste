function escolheNumero(numero_escolhido){

    //buscar o operador
    operador= document.querySelector("input[name=operador]").value;
    if(operador !=''){
        numero_antigo = document.querySelector("input[name=parcela2]").value;
        numero_novo= numero_antigo+numero_escolhido;
        document.querySelector("input[name=parcela2]").value=numero_novo;

    }else {

        numero_antigo = document.querySelector("input[name=parcela1]").value;
        numero_novo= numero_antigo+numero_escolhido;
        document.querySelector("input[name=parcela1]").value=numero_novo;

        
    }
    document.querySelector('.resultados').innerText += numero_escolhido;
}

function atribuiOperador(operador_escolhido){
 document.querySelector("input[name=operador]").value=operador_escolhido;
 document.querySelector('.resultados').innerText += operador_escolhido;
}

function fazConta(){
    // ir buscar parcela 1
    p1= document.querySelector("input[name=parcela1]").value;
    // ir buscar parcela 2
    p2= document.querySelector("input[name=parcela2]").value;
    // ir buscar operador
    operador= document.querySelector("input[name=operador]").value;

    p1= parseFloat(p1);
    p2= parseFloat(p2);

    switch(operador){
        case '+': {resultado= p1 + p2} break;
        case '-': {resultado= p1 - p2} break;
        case '*': {resultado= p1 * p2} break;
        case '/': {resultado= p1 / p2} break;
    }

    document.querySelector('.resultados').innerText += "=" +resultado;
}

function limpaTudo(){
    document.querySelector("input[name=parcela1]").value= "";
    document.querySelector("input[name=parcela2]").value= "";
    document.querySelector("input[name=operador]").value= "";
    document.querySelector(".resultados").innerText = "";


}