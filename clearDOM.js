import { addDayOfWeekToDOM } from "./loadDays.js";

function clearDOM(){
    const inputName=document.getElementById("name");
    inputName.value=""; 
    /*el ".value" es usado como el textContent pero es usado para la etiqueta de input y textarea */
    addDayOfWeekToDOM();
}

export { clearDOM };


