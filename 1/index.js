//console.log("Hi from index.js");

//require("./modules/add");
//******************************************** */

/* const add2 = require("./modules/add");
 const sum = add2(10, 25);
 console.log(sum);*/

//******************************************** */


require("./modules/student1"); //Ranganath
require("./modules/student2"); //Sachin 


//Above statements work using IIFE and will be converted like,
/*
(function (exports, require, module, __filename, __dirname) {
  const student = "Ranganath";
  console.log(student);
})();

(function () {
  const student = "Sachin";
  console.log(student);
})();
*/

/************************************************** */

