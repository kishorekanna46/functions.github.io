// ARROW FUNCTION 
  
 // SINGLE STATEMENT 
   
 const square = x => x * x;

 console.log(square(4));  


 // MULTI STATEMENT
   
 const multiplyAndLog = (a, b) => {
    const result = a * b;
    console.log(`The result of ${a} * ${b} is ${result}`);
    return result;
};

const output = multiplyAndLog(5, 3);  
console.log(output);  



  // CALLBACK 


  const numbers = [1, 2, 3, 4, 5];

  // Using an arrow function as a callback in .map()
  const squares = numbers.map(num => num * num);
  
  console.log(squares);  



  // RETURNING AN OBJECT 


  const createPerson = (name, age) => ({
    name: name,
    age: age
});

const person = createPerson("kishore", 21);
console.log(person);  

  

 