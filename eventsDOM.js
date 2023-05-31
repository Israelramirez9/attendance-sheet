import { extractData } from "./extractData.js";
import { clearDOM } from "./clearDOM.js";
import { addStudent, getStudents, removeStudents} from "./students.js"


function showResults() {
    const students = getStudents();
    const showResults = document.getElementById("show");

    showResults.innerHTML="";

    for (const student of students) {
        showResults.innerHTML += `<p> 
                                ${student.alumnName} 
                                asistió los días 
                                ${student.attendanceDays.join(" ")} 
                                </p>`
    }
    /*se vacía el array y de esta manera students 
    vuelve a cargarse al momento se hacer click en agregar otro alumno
    */
    removeStudents();
    
}
function handleEventFinish() {
    handleEventChangeStudent();
    showResults();

}
/*esta funcion será invocada cada vez que se dé click sobre el botón "Agregar otro alumno" */
function handleEventChangeStudent() {

    addStudent(extractData());
    clearDOM();

}


function addEventToFinish() {
    const button = document.getElementById("finish");
    button.addEventListener("click", handleEventFinish);

}

/* los evenetos no se llaman,
se ejecutaran al momento de ejercerce la acción predefinida, es decir se pueden autoinvocar en cualquier parte del código donde están creados*/

function addEventToChangeStudent() {
    const button = document.getElementById("change-student");
    /*esta es una manera para asignar un evento siempre asignando la función, NO INVOCARLA, NO ESCRIBIRLA EN PARENTESIS */
    button.onclick = handleEventChangeStudent;
    /* otra manera sería 
    button.addEventListener("click",handleEventChangeStudent)
    NO INVOCARLA, NO ESCRIBIRLA EN PARENTESIS
     */

}

function addEventsToDOM() {
    addEventToChangeStudent();
    addEventToFinish();
}


export { addEventsToDOM };