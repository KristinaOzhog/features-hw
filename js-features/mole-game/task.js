const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function toNull(say) {
    alert(say);

    dead.textContent = 0;
    lost.textContent = 0;
}

for (let i = 1; i < 10; i++) {
    const getHole = document.getElementById(`hole${i}`);

    getHole.onclick = () => {
        if (getHole.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }

        if (Number(dead.textContent) === 10) {
            toNull('Вы выиграли')
            return;
        } else if (Number(lost.textContent) === 5) {
            toNull('Вы проиграли')
            return;
        }
    } 
}