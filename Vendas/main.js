const mobileNavBar = document.getElementById('mobile-nav-bar')
const bars = document.getElementById('bars')
const close = document.getElementById('close')

function showMobileNavBar(){
    mobileNavBar.style.display = 'flex'
    bars.style.display = 'none'
    close.style.display = 'block'
}
function hideMobileNavBar(){
    mobileNavBar.style.display = 'none'
    bars.style.display = 'block'
    close.style.display = 'none'
}

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   

    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 50 * i)

    });
}
const titulo = document.querySelector('.animation');
typeWrite(titulo);
