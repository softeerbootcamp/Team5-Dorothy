document.addEventListener('click', (e) => {
    const dice = document.querySelector('.cube');
    const diceButton = e.target.closest('.dice-button');
    if (diceButton) {
        dice.style.transform = `rotate3d(${Math.random()},${Math.random()},${Math.random()},${Math.floor(
            Math.random() * 360,
        )}deg)`;
    }
});
