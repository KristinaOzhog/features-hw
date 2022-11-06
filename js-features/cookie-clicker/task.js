const imgCookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

imgCookie.onclick = () => {
    if (Number(counter.textContent) % 2 === 1) {
        imgCookie.height -= 20;
        imgCookie.width -= 20;
    } else {
        imgCookie.height += 20;
        imgCookie.width += 20;
    }

    counter.textContent = Number(counter.textContent) + 1;
}