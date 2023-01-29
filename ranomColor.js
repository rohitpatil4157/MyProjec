let body = document.querySelector('body')
let colorName = document.getElementById('colorName')
let butn = document.querySelector('button')



function ranColor() {
    let symbol = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color = color + symbol[Math.floor(Math.random() * 16)]
    }
    return color
}

butn.addEventListener('click', () => {
    colorRandom = ranColor();
    colorName.innerText = colorRandom
    body.style.backgroundColor = colorRandom

})