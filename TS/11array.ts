let array_name = ['val1','val2','valn',123,true];
console.log(array_name);
console.log(array_name[0]);

var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);

var arr = ["orange", "mango", "banana", "sugar", "tea"];  
var removed = arr.splice(2, 0, "water");  
// console.log("After adding 1: " + arr );  
// console.log("removed is: " + removed); 
        
removed = arr.splice(3, 1);  
console.log("After removing 1: " + arr );  
console.log("removed is: " + removed);