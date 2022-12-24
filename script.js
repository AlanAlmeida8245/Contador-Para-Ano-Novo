

const Dia = document.getElementById("diaD")
const Horas = document.getElementById("horasD")
const Minutos = document.getElementById("minutosD")
const Segundos = document.getElementById("segundosD")

const anoNovo = "1 jan 2022"
onpageshow

function countdown(){

    const anoNovoData = new Date(anoNovo)
    const dataCorrent = new Date();

    const totalSeconds = (anoNovoData - dataCorrent) / 1000;
     
    const diasC = Math.floor(totalSeconds /  3600 )  / 24;

    const horas = Math.floor(totalSeconds / 3600) % 24;
    const  minutos = Math.floor(totalSeconds / 60) % 60;

    const segundos = Math.floor(totalSeconds) % 60;

    Dia.innerHTML = diasC;
    Horas.innerHTML = formatTime(horas)
    Minutos.innerHTML = formatTime(minutos)
    Segundos.innerHTML =  formatTime(segundos)

}




function formatTime(time){
    return time < 10 ? `0${time}` : time;

}



setInterval(countdown, 1000);

