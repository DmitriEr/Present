let btn = document.querySelector('.press')
let background = document.querySelector('.background')

btn.onclick = function() {
    background.classList.toggle('gun');
    background.classList.toggle('together');
}

let list = document.querySelector('.list');

list.onclick = function() {
    background.classList.toggle('bird');
    background.classList.toggle('together');
}