var data = []
var subjects = [];
var students = [];

function procesarLista() {
    
    var student = document.getElementById("students").value;
    var subject = document.getElementById("subjects").value;

    subjects = subject.split(',').map(item => item.trim());
    students = student.split(',').map(item => item.trim());


    students.forEach(student => {
         data = [];
        data.push(student);
        subjects.forEach(subject=>{
            let number = (Math.random()*10).toFixed(2);
            data.push(number);
        })
        console.log("Datos procesados");
    });

   
    
}

function mostrarDatos(){
    let titulo =" ";
    let alumnosT = '<th>'+"Alumnos"+'</th>';
    let media = '<th>'+"Media"+'</th>';
    let alumnos =" ";

    for(i=0; i<subjects.length; i++){
       titulo+= `<th>${subjects[i]}</th>`;
    }

    for(i=0; i<students.length; i++){

        alumnos+=`<tr><td>${students[i]}</td</tr>`;

    }

 document.getElementById("tabla").innerHTML+= ` 
 <table border="solid">
    <tr>
        ${alumnosT+titulo+media}
    </tr>
    <tr>
        ${alumnos};
    </tr>
    </table>
    `
}
