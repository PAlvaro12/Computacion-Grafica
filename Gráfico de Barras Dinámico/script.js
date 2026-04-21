// Seleccionamos todas las barras
const bars = document.querySelectorAll('.bar');

// Función para actualizar valores
function updateChart() {
    bars.forEach(bar => {
        // Generar valor aleatorio entre 10 y 100
        const randomValue = Math.floor(Math.random() * 91) + 10;
        
        // Aplicar altura
        bar.style.height = randomValue + "%";
        
        // Mostrar el número
        bar.textContent = randomValue;

        // Cambiar color dinámicamente según el valor
        if (randomValue > 75) {
            bar.style.backgroundColor = "#e74c3c"; // Rojo (Crítico)
        } else {
            bar.style.backgroundColor = "#3498db"; // Azul (Normal)
        }
    });
}

// Ejecutar cada 1000ms (1 segundo)
setInterval(updateChart, 1000);

// Ejecución inicial
updateChart();