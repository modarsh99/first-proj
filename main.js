document.querySelector('.mobail-bar-list-opean').addEventListener('click',function(){
    document.querySelector('.mobile-list').style.cssText = "transition: 0.4s;translate: 0px 0px;"
})
document.querySelector('.mobail-bar-list-clouse').addEventListener('click',function(){
    document.querySelector('.mobile-list').style.cssText = "transition: 1s;translate: 0px -1000px;"
})
document.querySelector('#open-social').addEventListener('click',function(){
    document.querySelector('#open-social').style.cssText = "scale: 0.0001;transition: 1s;"
    document.querySelector('.social-media-icon').style.cssText = "transition: 1s;translate: 0px 0px;"
})

document.querySelector('#close-social').addEventListener('click',function(){
    document.querySelector('.social-media-icon').style.cssText = "transition: 1s;translate: -100px 0px;"
    document.querySelector('#open-social').style.cssText = "scale: 1;transition: 1s;"

})
