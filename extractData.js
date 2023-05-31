import { daysOfWeek } from "./days.js";

function extractData() {
    const inputName = document.getElementById("name")
    const alumnName = inputName.value;
    const attendanceDays = [];
    for (const day of daysOfWeek) {
        const inputDay = document.getElementById(day.id);
        // como el input tiene un atributo type="checkbox" se usará la propiedad ".checked"
        if (inputDay.checked) {
            attendanceDays.push(day.label);
        }

    }
    return { alumnName, attendanceDays }
}

export { extractData };