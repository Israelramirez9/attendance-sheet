import { daysOfWeek } from "./days.js";


function addInputRadioToDOM(ID, label) {
    const newElement = `
        <input type="checkbox" id="${ID}">
        <label for="${ID}"> ${label} </label> <br>
    `
    const daysContainer = document.getElementById("days-of-week");
    daysContainer.innerHTML += newElement;
}
function addDayOfWeekToDOM() {
    const daysContainer = document.getElementById("days-of-week");
    daysContainer.innerHTML = ""; // esto es para hacer una limpieza y despues imprimo los dias

    for (const day of daysOfWeek) {
        addInputRadioToDOM(day.id, day.label);
    }
}

export { addDayOfWeekToDOM };