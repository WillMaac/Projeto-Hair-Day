import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

const hours = document.getElementById("hours") 



export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    //Recuperar somente a hora.
    const [scheduleHour] = hour.split(":");

    //Adicionar a hora e verificar se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
    //Define se o horário está disponível.
    console.log();
    
    return{
        hour,
        available: isHourPast,
    }
  });
  
  //Renderizar os horários.
  opening.forEach(({hour, available}) =>{
  const li = document.createElement("li")
  
  li.classList.add("hour")
  li.classList.add(available? "hour-available" : "hour-unavailable")
  li.textContent = hour
  hours.append(li)
  });
}
