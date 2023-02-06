const hamburgerbtn = document.body.querySelector('.hamburger');
const navbar = document.body.querySelector('.nav');

hamburgerbtn.addEventListener('click', (e) => {
    if (hamburgerbtn.classList.contains('menuon')) {
        navbar.classList.toggle('menuon');
        setTimeout(() => {
            hamburgerbtn.classList.toggle('menuon');
        }, 250);
    } else {
        hamburgerbtn.classList.toggle('menuon');
        setTimeout(() => {
            navbar.classList.toggle('menuon');
        }, 250);
    }
});
