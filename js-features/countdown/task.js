const timer = document.getElementById('timer');

function toTimer () {
    if (Number(timer.textContent) > 0) {
        timer.textContent = Number(timer.textContent) - 1;
    } else {
        return alert('Вы победили в конкурсе!');  
    }
}



setInterval(toTimer, 1000);