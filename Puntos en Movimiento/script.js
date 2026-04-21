const canvas = document.getElementById('miLienzo');
const ctx = canvas.getContext('2d');

// 1. Crear al menos 5 puntos con posiciones iniciales aleatorias
let puntos = [
    { x: 100, y: 100, color: '#ff0000' },
    { x: 200, y: 150, color: '#00ff00' },
    { x: 300, y: 80,  color: '#0000ff' },
    { x: 400, y: 300, color: '#ffff00' },
    { x: 50,  y: 350, color: '#ff00ff' }
];

function dibujarPuntos() {
    // 2. Limpiar el lienzo antes de redibujar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar una cuadrícula de fondo (opcional para estilo plano cartesiano)
    ctx.strokeStyle = '#222';
    ctx.beginPath();
    for(let i=0; i<canvas.width; i+=50) { ctx.moveTo(i,0); ctx.lineTo(i,canvas.height); }
    for(let i=0; i<canvas.height; i+=50) { ctx.moveTo(0,i); ctx.lineTo(canvas.width,i); }
    ctx.stroke();

    // 3. Dibujar cada punto
    puntos.forEach(punto => {
        ctx.beginPath();
        ctx.arc(punto.x, punto.y, 8, 0, Math.PI * 2); // Creamos un círculo
        ctx.fillStyle = punto.color;
        ctx.fill();
        ctx.closePath();
    });
}

function actualizarPosiciones() {
    puntos.forEach(punto => {
        // 4. Cambiar coordenadas de manera aleatoria (pequeños saltos)
        // Math.random() * 40 - 20 hace que se mueva entre -20 y +20 píxeles
        punto.x += (Math.random() * 60 - 30);
        punto.y += (Math.random() * 60 - 30);

        // Mantener los puntos dentro del canvas para que no se pierdan
        if (punto.x < 0) punto.x = 0;
        if (punto.x > canvas.width) punto.x = canvas.width;
        if (punto.y < 0) punto.y = 0;
        if (punto.y > canvas.height) punto.y = canvas.height;
    });

    dibujarPuntos();
}

// 5. Actualizar cada segundo (1000ms)
setInterval(actualizarPosiciones, 1000);

// Ejecución inicial
dibujarPuntos();