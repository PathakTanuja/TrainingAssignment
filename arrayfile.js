//create array 

// arrayname = [] ;

const employee = [];
employee.push("Rahul");   // add value
employee.push("Ajay");  
employee.push("Sita");  
employee.push("Radha");  
console.log(employee);
if(employee.length > 1) {   // arrayname.length  // length of array 
    employee.pop();    // arrayname.pop()  // remove last element
console.log(employee);
 employee.shift();  // arrayname.shift()   // remove first element
 console.log(employee);
 employee.unshift("Mohan"); // arrayname.unshift()  //add new element in the first position
 console.log(employee);
}
else {
    console.log("no element in the array");
    employee.unshift("Mohan"); // arrayname.unshift()  //add new element in the first position
    console.log(employee);
}

// function

function calculateEmployeeSalary(perDaySalary, totalWorkingDay){
    return console.log(perDaySalary*totalWorkingDay);
}
calculateEmployeeSalary(5000, 25);  // call function
// lambda function
const myFun = (a,b) => {
 return a*b;
}
console.log(myFun(200,30));





