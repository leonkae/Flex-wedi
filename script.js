console.log("I am script number 275");
// alert("Hello from script 275!");
// prompt("Please enter your name:", "Guest");

let x = 10;
var y = 20; 
const result = x + y;

//string interpolation is calling variables or expressions or functions inside a string
console.log (`the value of ${x} and ${y} after addition is ${result}`);

function add(a,b){
    console.log(`${a}+${b}=${a+b}`);
}

add(5,10);
add(443489438989348,239489238492384);
add(-234234, 234234);
add(0.1, 0.2);

// comparison operators
function compareValues(val1, val2){
    console.log(`${val1} == ${val2} : ${val1 == val2}`);
    console.log(`${val1} === ${val2} : ${val1 === val2}`);
    console.log(`${val1} != ${val2} : ${val1 != val2}`);
    console.log(`${val1} !== ${val2} : ${val1 !== val2}`);
    console.log(`${val1} > ${val2} : ${val1 > val2}`);
    console.log(`${val1} < ${val2} : ${val1 < val2}`);
    console.log(`${val1} >= ${val2} : ${val1 >= val2}`);
    console.log(`${val1} <= ${val2} : ${val1 <= val2}`);
}

compareValues(5, '5');