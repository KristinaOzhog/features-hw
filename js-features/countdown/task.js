const timer = document.getElementById('timer');


let timerId = setInterval(function toTimer () {
    timer.textContent = Number(timer.textContent) - 1;
}, 1000);

setTimeout(() => {clearInterval(timerId); alert('Вы победили в конкурсе!'); }, 59000);
