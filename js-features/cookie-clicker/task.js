const imgCookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

imgCookie.onclick = () => {
    imgCookie.width = ++counter.textContent % 2 === 1? 250 : 200;
}