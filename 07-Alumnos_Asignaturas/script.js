function procesarLista() {
    var subjects = [];
    var students = [];

    var student = document.getElementById("students").value;
    var subject = document.getElementById("subjects").value;

    subjects = subject.split(',').map(item => item.trim());
    students = student.split(',').map(item => item.trim());


    students.forEach(student => {
        let data = [];
        data.push(student);
        subjects.forEach(subject=>{
            let number = (Math.random()*10).toFixed(2);
            data.push(number);
        })
        console.log(data);
    });

   
    
}

function mostrarDatos(){


}