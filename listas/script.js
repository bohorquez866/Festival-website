const rango = document.querySelector('input[type=range]');
const valorActual = document.querySelector('#current-value');

valorActual.innerHTML = rango.value;
rango.oninput = function() {
    valorActual.textContent = `${this.value}$`;
}
rango.addEventListener('mousemove', () => {
    let rangeProgress = rango.value;

    rango.style.background = `linear-gradient(90deg, #E66616 ${rangeProgress / 100}%, #a0470f ${rangeProgress  /100}%)`;
    console.log(rangeProgress / 100 + '%');

});