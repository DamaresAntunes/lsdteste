function validaIdade(){


  idade_inserida= document.getElementById("idade").value;
    
    
    if(idade_inserida <18){
        document.getElementById("zona-de-erro").innerText="Idade não permite";
        return false;
    }else {
        return true
    }

}