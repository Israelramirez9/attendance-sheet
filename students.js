let students=[];

function getStudents(){
    return students;
}

function addStudent(student){
    students.push(student)
}

function removeStudents(){
    students=[];
}

export{ getStudents, addStudent, removeStudents};

/* este archivo de js se comporta como una clousure
el cual esta encasulado por otro archivo y la unica manera de alterar 
las variables locales de este archivo es trabajando sobre el mismo */