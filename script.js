let score = 0;
const player = document.getElementById('player');
player.addEventListener('click', () => {
    score++;
    document.getElementById('score').innerText = score;
    player.style.top = Math.random() * 250 + 'px';
    player.style.left = Math.random() * 250 + 'px';
});
