const clouds = document.querySelector('.tema__nubes');
const cloudsDistortion = 'tema__nubes--distorsion';

setInterval(() => {
    clouds.classList.add(cloudsDistortion);
    setTimeout(() => {
        clouds.classList.remove(cloudsDistortion);
    }, 500);
    }
, Math.random() * 10000 + 5000);

