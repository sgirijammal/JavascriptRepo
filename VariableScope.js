

// x, name, salary, BONUS are Global variable, its visible outside and inside a function\block 


let x =20;
console.log(x); // Will be printed

let name;
let salary = 10000;
const BONUS = 2000;

//Finalsalary is a variable with scope inside the function alone.
function calculateFinalSalary()
{
    let finalsalary = salary + BONUS;
    console.log(finalsalary); // Will be printed
}

//City is a variable with scope inside the bloack alone.
{
    let city = 'Banglore';

}
calculateFinalSalary();

console.log(name); //If a variable is not initiallized it will contain the value "Undefined". Will be printed
console.log(salary); // Will be printed
console.log(finalsalary); //Its a function variable, hence not in scope  
console.log(city); //Its a block variable, hence not in scope 