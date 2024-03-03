//declaração das variaveis
let no = document.querySelector("#nao");
let si = document.querySelector("#sim");
let image = document.querySelector("#imagem");
let texto = document.querySelector(".flor");
let botao = document.querySelector(".botao");
let contaCliques = 0;

/*caso aperte sim, aparece um cachorrinho entregando a flor, 
caso aperte nao por 5 vezes o botao de sim ficara maior gradualmente
, ate que na 6 vez, aparece o cachorro chorando.
*/

no.addEventListener("click", e =>{
    contaCliques++
        if(contaCliques==1){
        botao.style.fontSize="20px";
        botao.innerHTML="TEM CERTEZA??"
        si.style.fontSize="50px";
        }
});

no.addEventListener("click", e =>{
        if(contaCliques==2){
        botao.style.fontSize="10px";
        botao.innerHTML="SÉRIO??"
        si.style.fontSize="70px";
        }
});

no.addEventListener("click", e =>{
        if(contaCliques==3){
        botao.style.fontSize="5px";
        botao.innerHTML="DÁ PRA VOLTAR ATRÁS"
        si.style.fontSize="80px";
        }
});

no.addEventListener("click", e =>{ 
        if(contaCliques==4){
        botao.style.fontSize="1px";
        botao.innerHTML="NAAAAOOOOOOO"
        si.style.fontSize="90px";
        }
});

no.addEventListener("click", e =>{ 
    if(contaCliques==5){
      window.open("paginadonao.html");
    }
});