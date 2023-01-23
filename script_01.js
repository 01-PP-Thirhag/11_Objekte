
// /***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// // nested arrays  - Prinzip [[[]]]
// // nested arrays - hier  [[],[]]
// arr =   [
//                  ["Ich","bin","Max"],
//                  ["Ich","bin","Moritz"]
//          ];

// // output(arr);
// // output(arr[0]);
// // output(arr[0][2][3]);
// // output(arr[0][1])

// // nested loop 


// for (let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr[0].length; j++){
//                 output("index i:" +i+ "Index J:" + j)
//                 output(arr[i][j]);
//         }
// }
/***** Objekte 1 Daten/Funktionen *******/
let person = {

                firstName:"Miezs",
                familyName:"Miau",
                salary: [120000,160000],
                permission: true,
                sayHello:
                        function(){
                                return "Hello!";
                        }     
        };

        


output(person);
output(person.firstName);
output(person.permission);
output(person.salary[1]);

person.familyName =  "Miau";
output(person.sayHello());

const =     "Ich bin " + person.firstName +" "+
                person.familyName +
                "und verdiene" 


/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}