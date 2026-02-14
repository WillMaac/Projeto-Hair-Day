import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

//Data atual para formatar o input.
const inutToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e definindo a data mínima como sendo a data atual.
selectedDate.value = inutToday;
selectedDate.min = inutToday;

form.onsubmit = (event) => {
  event.preventDefault();
  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim();
    if (!name) {
      return alert("Informe o nome do clente!");
    }

    //Recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Selecione a hora.");
    }
    //Recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":")
  //Insere a hora na data
  const when = dayjs(selectedDate.value).add(hour, "hour")
  
  //Gera um ID
  const id = new Date().getTime()

  console.log({
    id,
    name,
    when
  });
  
  
    
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
  }
};
