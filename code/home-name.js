let movingText = document.querySelector('#move-text');
let movingLine = document.querySelector('#move-line');
let mvVar = true

setInterval(() => {
    if (mvVar) {movingLine.style.display = 'none';}
    else {movingLine.style.display = 'block';}
    mvVar = !mvVar
}, 500);

writingText()
function writingText() {
    movingText.innerHTML = ''
    setTimeout(() => {movingText.innerHTML += 'F'}, 100);
    setTimeout(() => {movingText.innerHTML += 'r'}, 200);
    setTimeout(() => {movingText.innerHTML += 'e'}, 300);
    setTimeout(() => {movingText.innerHTML += 'e'}, 400);
    setTimeout(() => {movingText.innerHTML += '-'}, 500);
    setTimeout(() => {movingText.innerHTML += 'T'}, 600);
    setTimeout(() => {movingText.innerHTML += 'i'}, 700);
    setTimeout(() => {movingText.innerHTML += 'm'}, 800);
    setTimeout(() => {movingText.innerHTML += 'e'}, 900);
    setTimeout(() => {movingText.innerHTML += ' '}, 1000);
    setTimeout(() => {movingText.innerHTML += 'd'}, 1100);
    setTimeout(() => {movingText.innerHTML += 'e'}, 1200);
    setTimeout(() => {movingText.innerHTML += 'v'}, 1300);
    setTimeout(() => {movingText.innerHTML += 'e'}, 1400);
    setTimeout(() => {movingText.innerHTML += 'l'}, 1500);
    setTimeout(() => {movingText.innerHTML += 'o'}, 1600);
    setTimeout(() => {movingText.innerHTML += 'p'}, 1700);
    setTimeout(() => {movingText.innerHTML += 'e'}, 1800);
    setTimeout(() => {movingText.innerHTML += 'r'}, 1900);

    setTimeout(() => {writingText()}, 4000);
}