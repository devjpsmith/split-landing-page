const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

function leftMouseEnter() {
    container.classList.add('hover-left');
}

function leftMouseLeave() {
    container.classList.remove('hover-left');
}

function rightMouseEnter() {
    container.classList.add('hover-right');
}

function rightMouseLeave() {
    container.classList.remove('hover-right');
}