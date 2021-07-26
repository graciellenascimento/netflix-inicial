const abrir = document.getElementById('play');
const video_container = document.getElementById('video_container');
const fechar = document.getElementById('fechar');
const info = document.getElementById('info');
const info_container = document.getElementById('info_container');
const fechar2 = document.getElementById('fechar2');

abrir.addEventListener('click', () => {
    video_container.classList.add('show');
})

info.addEventListener('click', () => {
    info_container.classList.add('show');
})

fechar.addEventListener('click', () => {
    video_container.classList.remove('show');
})

fechar2.addEventListener('click', () => {
    info_container.classList.remove('show');
})




