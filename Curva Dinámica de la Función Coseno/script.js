const canvas = document.getElementById('canvasCoseno');
const ctx = canvas.getContext('2d');

let tiempo = 0; // Esta variable hará que la curva se mueva

function dibujarCurva() {
    // 1. Limpiar el lienzo
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar eje X (línea central)
    ctx.strokeStyle = '#30363d';
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // 2. Configurar estilo de la curva
    ctx.strokeStyle = '#00ff00'; // Verde tipo osciloscopio
    ctx.lineWidth = 3;
    ctx.beginPath();

    // 3. Calcular puntos de la función coseno
    for (let x = 0; x <= canvas.width; x++) {
        // y = cos(x + tiempo)
        // Ajustamos la escala: 
        // (x * 0.05) controla la frecuencia (qué tan estirada está la onda)
        // * 50 controla la amplitud (qué tan alta es la onda)
        // + tiempo controla el movimiento
        let y = Math.cos(x * 0.05 + tiempo) * 60;

        // Dibujar el punto en relación al centro del canvas
        if (x === 0) {
            ctx.moveTo(x, canvas.height / 2 + y);
        } else {
            ctx.lineTo(x, canvas.height / 2 + y);
        }
    }

    ctx.stroke();
}

function actualizar() {
    // 4. Incrementar el tiempo para que la fase cambie
    tiempo += 0.5; 
    dibujarCurva();
}

// 5. Actualizar cada segundo (según la consigna)
// Nota: Para una animación fluida se usaría 16ms, pero usaremos 1000ms como pide el ejercicio.
setInterval(actualizar, 1000);

// Dibujo inicial
dibujarCurva();