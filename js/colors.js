const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const show = document.querySelector('.show');
const info_show = document.querySelector('.info-show');

show.style.backgroundColor = "#000";

function showColor(red, green, blue){

    if(!red) red = 0;
    if(!green) green = 0;
    if(!blue) blue = 0;

    show.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    info_show.innerHTML = `rgb(${red}, ${green}, ${blue})`
}

red.addEventListener('input', (e) => showColor(red.value, green.value, blue.value))
green.addEventListener('input', (e) => showColor(red.value, green.value, blue.value))
blue.addEventListener('input', (e) => showColor(red.value, green.value, blue.value))