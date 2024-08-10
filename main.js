const social = document.querySelector(".social");
const socialopen = document.querySelector("#logo-socilao");
const logoout = document.querySelector(".logo-bmw");
const socialclose = document.querySelector("#logo-socilac");
socialopen.addEventListener('click',function(){
    socialopen.style.display = "none"
    socialclose.style.display = "inline"
    social.style.display = "flex"
    
})
socialclose.addEventListener('click',function(){
    socialopen.style.display = "inline"
    socialclose.style.display = "none"
    social.style.display = "none"
})



