
// /***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// // nested arrays - Prinzip: [[[]]]
// // nested arrays  - hier: [[],[]]
// arr =   [
//                 ["Ich","bin","Max"],
//                 ["Ich","bin","Moritz"]
//         ];

// output(arr);
// output(arr[0]);
// output(arr[0][0]+ " " + arr[1][2]);
// output(arr[1][0]);

// // nested loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);       
//     }
// }

/***** Objekte 1 Daten/Funktionen *******/
let person = {

                firstName:"Miez",
                familyName:"Miau",
                salary: [120000,160000],
                permission: true,
                sayHello:
                        function(){
                                return "Hello, i am " + person.firstName + "!";
                        }     
        };

output(person);
output(person.firstName);
output(person.permission);
output(person.salary[1]);

person.familyName =  "Miau";

const txt =     "Ich bin " + this.firstName +" "+ 
                person.familyName + "und verdiene " + 
                person.salary[1] + "p.a. ";
output(txt);
output(person.sayHello());

/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}

