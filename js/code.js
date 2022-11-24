//=====DOM Manipulation with addEventListener======//

// Variable makes use of the Equal sign to create a local storage of the data //
//Typeof-Lists the DataType //
// Instanceof-Checks if an Object was made by a Constructor or Function(If a Person is a Person) //
//=======================================================================================================
// =====1st Approach=====//
// let button = document.getElementById('button');

// button.addEventListener('click', (event) => {
//         document.getElementById("para1").innerHTML = '<h1 style="color: crimson">SITH LORDS HERE MY CALL</h1>';
//         document.getElementById("para2").innerHTML = '<h1 style="color: crimson">Gray Lords Feel The Call</h1>';

// })
//=======================================================================================================
//=====2nd Approach=====//
// let btnDisplay = document.querySelector('#button');

// btnDisplay.addEventListener('click',()=>{
//     document.write('Oops IH8U-Virus_Executing...')
// })

// let output = document.getElementById('output');
// output.innerHTML = '<h1 style="color: crimson">Come Die With Us</h1>';
// console.log(output);
// document.write('Hello,World');
// console.log(window);
// console.log(alert("I Am Death"));
//=======================================================================================================
// Creating an instance-(makes use of new-keyword to create the object)//
// let num1 = new Number(16);
// End of Instance //
// let num2 = 13;
// console.log(num1 instanceof Number);
// console.log(num1);
// console.log(num2);
// BITWISE-Examples //
// AND-Operators(&),Or-Operators(|),XOR-Operators //
//=======================================================================================================
// Array-Familiarity //

// Question-1 //
// let array = [4, 6, 8, 9, 11, 14];

// let size = array.length;
// // Question-2 //
// console.log(array);
// // Question-3 //
// console.log(array[0]);
// // Question-4 //
// const evens = array.filter((num) => num % 2 === 0);
// console.log(evens);
// // Question-5 //
// if (array.includes(9)) {
//     console.log('It Does! The position Is: ' + array.indexOf(9));
// }
//=======================================================================================================