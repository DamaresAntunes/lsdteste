function encontraNumero(lista){
    console.log("entrei na funcao")
    menor = lista [0];
    tamanho = lista.length;
    

    for( i=0; i< tamanho; i=i+1){
        numeroLido=lista[i];
        if(numeroLido < menor){

            menor = numeroLido;
        }
    }
    return menor;
}


function calculaMedia(lista){
    soma=0
    tamanho = lista.length;
    console.log("o tamanho é"+tamanho)
    for(i=0; i<tamanho; i=i+1){
        numero_lido = lista[i];
        console.log(numero_lido);

        soma = soma+ numero_lido;
    }
    console.log("a soma é:"+ soma);
    
    media = soma / tamanho;
    //document.write("A média é: "+media);
    return media;
}

function fazAccaoDoBotao(){
    alert("carreguei no botao")

    var dado_inserido = document.getElementById("lista_de_numeros").value;
    console.log(dado_inserido);

    var dado_inserido_convertido= dado_inserido.split(",");
    console.log(dado_inserido_convertido);

    resultado = calculaMedia(dado_inserido_convertido);
    alert(resultado);
}