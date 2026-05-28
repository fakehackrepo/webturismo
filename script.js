let fechaFinal = localStorage.getItem("fechaFinalPromo");

if(!fechaFinal){
    fechaFinal = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);
    localStorage.setItem("fechaFinalPromo", fechaFinal);
}

const contador = setInterval(() => {
    let ahora = new Date().getTime();
    let distancia = fechaFinal - ahora;

    if(distancia <= 0){
        clearInterval(contador);
        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";
        return;
    }

    let dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((distancia / (1000 * 60 * 60)) % 24);
    let minutos = Math.floor((distancia / (1000 * 60)) % 60);
    let segundos = Math.floor((distancia / 1000) % 60);

    document.getElementById("dias").textContent = String(dias).padStart(2, "0");
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");

}, 1000);