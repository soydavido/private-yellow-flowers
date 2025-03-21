const florContenedor = document.querySelector('.flor-contenedor');
const cantidadFlores = 50; // Ajusta la cantidad
const flores = ['yellow-flowers.svg', 'yellow-flowers-2.svg', 'yellow-flowers-3.svg']; // Rutas de los SVGs

for (let i = 0; i < cantidadFlores; i++) {
    const flor = document.createElement('img');
    flor.classList.add('flor');

    // Selecciona aleatoriamente uno de los SVGs
    flor.src = flores[Math.floor(Math.random() * flores.length)];

    // Posición aleatoria horizontal
    flor.style.left = Math.random() * 100 + 'vw';

    // Duración de la animación aleatoria (entre 3 y 7 segundos)
    const duracion = Math.random() * 4 + 3;
    flor.style.animationDuration = duracion + 's';

    // Retraso de la animación aleatorio (para que no empiecen todas a la vez)
    flor.style.animationDelay = Math.random() * 2 + 's';

    florContenedor.appendChild(flor);
}