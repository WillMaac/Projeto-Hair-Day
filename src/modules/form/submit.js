import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//Data atual para formatar o input.
const inutToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e definindo a data mínima como sendo a data atual.
selectedDate.value = inutToday;
selectedDate.min = inutToday;

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("ENVIADO!");
};
