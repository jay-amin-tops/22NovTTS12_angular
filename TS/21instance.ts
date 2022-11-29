class PersonClass{ } 
var objPresonClass = new PersonClass() 
var isPerson = objPresonClass instanceof PersonClass; 
console.log(" obj is an instance of Person " + isPerson);



var Person = (function () {
    function Person() {
    }
    return Person;
 }());
 
 var obj = new Person();
 var isPerson = obj instanceof Person;
 console.log(" obj is an instance of Person " + isPerson);