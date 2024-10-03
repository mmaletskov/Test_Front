const burgerMenu = document.getElementById("burgerMenu");
const navMenu = document.getElementById("navMenu");
burgerMenu.onclick = function() {
    navMenu.classList.toggle('active');

    if(navMenu.classList.contains('active')){
        burgerMenu.src = './assets/images/icons/cancel.svg';
    }
    else{
        burgerMenu.src = './assets/images/icons/burger.svg';
    }
}