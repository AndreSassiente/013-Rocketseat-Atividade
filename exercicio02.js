let students = [
    {
        name: "André",
        grade1: 10,
        grade2: 5,
    },

    {
        name: "Dharana",
        grade1: 8,
        grade2: 9,
    },

    {
        name: "Elvis",
        grade1: 5,
        grade2: 4,
    },
];

function makeAverage(grade1, grade2) {
    let average = (grade1 + grade2) / 2;
    return average;
};

for (let i = 0; i < students.length; i++) {
    let average = makeAverage(students[i].grade1, students[i].grade2);

    if (average < 7) {

        alert(`

        A média do aluno(a) ${students[i].name} foi de ${average.toFixed(2)}
        Não foi dessa vez, ${students[i].name}! Tente novamente!

        `)

    }   else {

            alert(`
            
            A média do aluno(a) ${students[i].name} foi de ${average.toFixed(2)}
            Parabéns, ${students[i].name}! Você foi aprovado(a) no concurso!
            
            `)
    }
}