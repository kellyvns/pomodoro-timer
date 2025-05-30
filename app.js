document.addEventListener("DOMContentLoaded", () => {
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const reset = document.getElementById("reset");
    const timer = document.getElementById("timer");

    let timeLeft = 1500; // 25 minutos em segundos
    let interval = null;

    // Atualiza o display do timer
    const updateTimer = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    // Inicia o timer
    const startTimer = () => {
        if (interval) return; // Evita múltiplos intervalos ao clicar várias vezes

        interval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimer();
            } else {
                clearInterval(interval);
                interval = null;
                alert("Time's up!");
                timeLeft = 1500; // Reinicia para 25 minutos
                updateTimer();
            }
        }, 1000);
    };

    // Para o timer
    const stopTimer = () => {
        clearInterval(interval);
        interval = null;
    };

    // Reseta o timer
    const resetTimer = () => {
        clearInterval(interval);
        interval = null;
        timeLeft = 1500;
        updateTimer();
    };

    // Adiciona os eventos aos botões
    start.addEventListener("click", startTimer);
    stop.addEventListener("click", stopTimer);
    reset.addEventListener("click", resetTimer);

    // Atualiza o timer na inicialização
    updateTimer();
});
