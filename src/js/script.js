const clouds = document.querySelector('.tema__nubes');
const cloudsDistortion = 'tema__nubes--distorsion';

setInterval(() => {
    clouds.classList.add(cloudsDistortion);
    setTimeout(() => {
        clouds.classList.remove(cloudsDistortion);
    }, 500);
}, Math.random() * 10000 + 5000);

const nav = document.querySelector('nav');
const enlaces = document.querySelector('.enlaces');
let abierto = false;


nav.addEventListener('click', () => {
    // En el caso de que el media query se cumpla, se ejecuta el código

    if (window.matchMedia('(max-width: 768px)').matches) {
        if (!abierto) {
            enlaces.style = 'display: flex';
            abierto = true;
        } else {
            enlaces.style.display = 'none';
            abierto = false;
        }
    }
});