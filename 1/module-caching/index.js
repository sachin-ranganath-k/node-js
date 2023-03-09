/*Modules are cached after the first time they are loaded. 
This means (among other things) that every call to require('foo') 
will get exactly the same object returned, if it would resolve to the same file.
*/

const students = require("./student");
console.log(students.getName()); //Sachin

students.setName("Ranganath");
console.log(students.getName()); //Ranganath

const newStudent = require("./student");
console.log(newStudent.getName()); //Ranganath
