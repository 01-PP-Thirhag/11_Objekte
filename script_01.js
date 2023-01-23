/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays [[[]]]
// nested arrays [[],[]]
// arr =   [
//                  ["Ich","bin","Max"],
//                  ["Ich","bin","Moritz"]
//         ];

// // output(arr);
// // output(arr[0]);
// // output(arr[0][2]);
// // output(arr[0][1] + " " + arr[1][2]);

// // nested loop
// for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//                 output("Index i: "+i+"Index j: "+j)
//                 output(arr[i][j]);
                
//         }
// }

/***** Objekte 1 Daten/Funktionen *******/
// let person =    {
//                         firstName:"Thomas",
//                         familyName:"Korn",
//                         salary: [120000,160000],
//                         permission: true,
//                         sayHello:
//                                 function(){
//                                         return "Hello, ich bin "+
//                                         this.firstName+"!";
//                                 }
//                 };

// output(person);
// output(person.firstName);
// output(person.familyName);
// output(person.salary[1]);
// output(person.permission);
// output(person.sayHello());

// const txt =      person.sayHello() + " Ich bin " + person.firstName + " " +
//                  person.familyName +
//                  " und verdiene " +
//                  person.salary[1] + " p.a";

// output(txt);

/***** Objekte 2 - Hierarchie *****/
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
const baikal = {
        value:"10m",
        deep:{
                deeper:{
                        deepest:{
                                value:"Das Licht - auf 1642m!",
                                temperature: 4
                        }
                }
        }
};

output(baikal);
output(baikal.value);
output(baikal.deep.deeper.deepest);
output(baikal.deep.deeper.deepest.value);
output(baikal.deep.deeper.deepest.temperature);

/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}
