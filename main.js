const listao = document.getElementById("lista");
const lista = document.querySelector(".listjs");
const listac = document.getElementById("remove");

listao.addEventListener('click' , 
    function  (){
        lista.style.width = "250px"
        lista.style.transition = "1s"
    } )

    listac.addEventListener('click' , 
        function  (){
            lista.style.width = "0px"
        } )