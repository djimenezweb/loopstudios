const menuIconElement = document.getElementById('menu-icon');
const menuElement = document.getElementById('menu');
const logoElement = document.getElementById('logo');

menuIconElement.addEventListener('click', (event) => {

    if (event.target.dataset.icon === 'hamburger') {
        menuIconElement.src = './assets/images/icon-close.svg';
        menuIconElement.dataset.icon = 'close';
        menuElement.classList.add('menu--show');
    }
    else {
        menuIconElement.src = './assets/images/icon-hamburger.svg';
        menuIconElement.dataset.icon = 'hamburger';
        menuElement.classList.remove('menu--show');
    }
}
)