function mostraConteudoMenu(){

    if( document.getElementById("itens-mobile").style.display=="none")
    {
        document.getElementById("texto-menu").innerHTML='<i class="fa-solid fa-xmark icon-menu-principal"></i>';
        document.getElementById("itens-mobile").style.display="block";
    } else{
        document.getElementById("texto-menu").innerHTML='<i class="fa-sharp fa-solid fa-bars icon-menu-principal"></i>';
        document.getElementById("itens-mobile").style.display="none";
    }
}

function normalizaMenuMobile(){
    largura = window.innerWidth;
    if (largura > 850){
    document.getElementById("texto-menu").innerHTML='<i class="fa-sharp fa-solid fa-bars icon-menu-principal"></i>';
    document.getElementById("itens-mobile").style.display="none";
    }
}