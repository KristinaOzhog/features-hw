const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    const getHole = document.getElementById(`hole${i}`);

    getHole.onclick = () => {
        if (getHole.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }

        if (Number(dead.textContent) === 10) {
            alert('Вы выиграли');
            dead.textContent = 0;
            lost.textContent = 0;
            return;
        } else if (Number(lost.textContent) === 5) {
            alert('Вы проиграли');
            dead.textContent = 0;
            lost.textContent = 0;
            return;
        }
    } 
}