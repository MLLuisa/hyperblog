//esercizio 1 
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");


function myFunction(name, lastName, nickname) {
    return "Mi nombre es " + name + lastName + " pero prefiero que me digas " + nickname + "."; 
}
console.log(myFunction("Juan David ","Castro Gallego","Juandc"));

//esercizio 2
//const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else (tipoDeSuscripcion === "ExpertPlus"); {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
console.log(tipoDeSuscripcion);

//esercizio 3

var i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

var i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

let respuesta = prompt("Cual es el resulatado de 2 + 2?");
    if(respuesta === 4) {
        console.log("Congratulations, the asnwer is correct");
    } else {
        console.log("Sorry, the answer isn't correct. Try again");
    }

function myFunction(array) {
    console.log(array[0]);
};

var sports = ["basketball","football","judo","volleyball"];
    sports.forEach(function(sport){
        console.log(sport);
    });

var person = {nameL: "Luca",surnameL:"Rossi", age: 21};
        for (var key in person) {
            console.log(`${key}: ${person[key]}`);
        }

    