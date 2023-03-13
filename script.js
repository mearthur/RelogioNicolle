const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;

  if (min < 10) min = "0" + min;

  if (s < 10) s = "0" + s;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;

  
  if (6 <= hr && hr < 12) {
    document.body.style.background =
      "linear-gradient(216deg, rgba(34,193,195,1) 26%, rgba(126,190,132,1) 52%, rgba(206,188,77,1) 66%, rgba(253,187,45,1) 85%, rgba(253,187,45,1) 96%)";
  } else if (12 <= hr && hr < 18) {
    document.body.style.background =
    "linear-gradient(52deg, rgba(156,0,0,1) 0%, rgba(212,55,28,1) 19%, rgba(219,103,25,1) 38%, rgba(125,119,113,1) 62%, rgba(0,146,212,1) 93%)";
  } else {
    document.body.style.background =
    "linear-gradient(52deg, rgba(184,86,0,1) 0%, rgba(128,34,3,1) 26%, rgba(22,53,73,1) 46%, rgba(16,30,82,1) 66%, rgba(1,0,34,1) 86%)";
  }
});

// linear-gradient(34deg, rgba(0,8,163,1) 9%, rgba(1,3,77,1) 42%, rgba(0,0,0,1) 81%)
