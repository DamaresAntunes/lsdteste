function realcaElemento(elemento){
    console.log('entrei no realça');
    document.getElementById(elemento).style.background='orange';
}

function repoeElemento(elemento){
    console.log('entrei')
    document.getElementById(elemento).style.background='none';

    valor_inserido=document.getElementById(elemento).value;

        switch(elemento){
            case 'nome':{
                zona_de_erro = document.querySelector('.mensagem-aviso-nome');
                if(valor_inserido==''){
                    zona_de_erro.innerText="Preenchimento Obrigatorio do Nome";
                } else{
                    zona_de_erro.innerText="";
                }
            }break;
        

            case 'email':{
                zona_de_erro = document.querySelector('.mensagem-aviso-email');
                if(valor_inserido==''){
                    zona_de_erro.innerText="Preenchimento Obrigatorio do Email";
                } else{
                    zona_de_erro.innerText="";
                }
            } break;

            case 'morada':{
                zona_de_erro = document.querySelector('.mensagem-aviso-morada');
                if(valor_inserido==''){
                    zona_de_erro.innerText="Preenchimento Obrigatorio da Morada";
                } else{
                    zona_de_erro.innerText="";
                }
            }
        }
}
