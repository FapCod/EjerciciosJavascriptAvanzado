/*
 cuanto tiempo
 falta para que acabe algun evento
 */
const fechaFinal = new Date('2023-10-24');

const as_year = 1000 * 60 * 60 * 24 * 365;
const as_month = 1000 * 60 * 60 * 24 * 30;
const as_day = 1000 * 60 * 60 * 24;
const as_hour = 1000 * 60 * 60;
const as_minute = 1000 * 60;
const as_second = 1000;

function tiempoRestante(fechaFinal) {
    const fechaActual = new Date();
    const diferencia = fechaFinal - fechaActual;
    const years = Math.floor(diferencia / as_year);
    const months = Math.floor((diferencia % as_year) / as_month);
    const days = Math.floor((diferencia % as_month) / as_day);
    const hours = Math.floor((diferencia % as_day) / as_hour);
    const minutes = Math.floor((diferencia % as_hour) / as_minute);
    const seconds = Math.floor((diferencia % as_minute) / as_second);
    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };
}
setInterval(() => {
    console.clear();
    console.log(tiempoRestante(fechaFinal));
}, 1000);
