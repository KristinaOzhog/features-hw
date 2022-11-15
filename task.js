const timer = document.getElementById('timer');


// let timerId = setInterval(function toTimer () {
//     timer.textContent = Number(timer.textContent) - 1;
// }, 1000);

// setTimeout(() => {clearInterval(timerId); alert('Вы победили в конкурсе!'); }, 59000);


let toTimer = setInterval (() => {
    if (Number(timer.textContent) > 0) {
      timer.textContent = Number(timer.textContent) - 1;
    } else {
        clearInterval(toTimer)
        return alert('Вы победили в конкурсе!');
    }
}, 1000)
