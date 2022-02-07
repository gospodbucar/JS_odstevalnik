const dniE1 = document.getElementById('dni');
const ureE1 = document.getElementById('ure');
const minuteE1 = document.getElementById('minute');
const sekundeE1 = document.getElementById('sekunde');




const novMotor = "1 Jan 2022";

function countdown(){

    const novMotorDatum = new Date(novMotor);
    const TrenutniDatum = new Date();

    const sekunde = new Date(novMotorDatum - TrenutniDatum) / 1000;

    const dni = Math.floor(sekunde / 3600 / 24);
    const ure = Math.floor(sekunde / 3600) % 24;
    const minute = Math.floor(sekunde / 60) % 60;
    const ostaleSekunde = Math.floor(sekunde) % 60;

    dniE1.innerHTML = dni;
    ureE1.innerHTML = ure;
    minuteE1.innerHTML = minute;
    sekundeE1.innerHTML = ostaleSekunde;

    console.log(dni, ure, minute, ostaleSekunde);
}


//notranji klic
countdown();

setInterval(countdown, 1000);