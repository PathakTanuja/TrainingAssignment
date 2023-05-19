
//Primitive Type
    var stringTypeVariable = "Hello";
    var numberTypeVariable = 23;
    var booleanTypeVariable = true;
    
    var undefinedTypeVariable ;
    var nullTypeVariable = null;
    
    console.log("stringTypeVariable " +stringTypeVariable );
    
    console.log("numberTypeVariable " +numberTypeVariable );
    
    console.log("booleanTypeVariable " +booleanTypeVariable );
    
    console.log("undefinedTypeVariable " +undefinedTypeVariable );
    
    console.log("nullTypeVariable " +nullTypeVariable );
      
//Undefine Vs Null

// Declare the variable
var variable;
console.log(variable);   //undefined
variable =  10;
console.log(variable);  //10

//Declare the varible and assign the null value

var variable1 = null;
console.log(variable1);    //null

//typeof
var name = "Ram";
var age = 25;
var status = true;
var type = null;
var id ;

console.log(typeof name);        //string
console.log(typeof age);         //number
console.log(typeof status );      // boolean
console.log(typeof type);         // object
console.log(typeof id);            // undefined
console.log(typeof "23");


//Type coercion
const  var_1 = "10"
const var_2 = 10 ;
var result = var_1 + var_2 ;
console.log("expected result: 10+10 = 20");

console.log("actual result is : " + result);    //1010
var result1 = Number(var_1) + var_2 ;
console.log("Now actual result is : " + result1);  //20

// concept of ""=== "" operator 
   
    if ( var_1 == var_2){    // == only check value 
        console.log("Both are equal");
    }
    else 
    console.log("not equal");
    
   
    if ( var_1 === var_2){   // === check value and also check type of variable
        console.log("Both are equal");
    }
    else 
    console.log("not equal");

    var variablecheck = 10;
    if(variablecheck) {
        console.log("True")}
        else 
        console.log("false");

        //Object
        const userObject = {};
        userObject.name = "Sonali";
        userObject.company = "XYZ";
        userObject.location = "Pune";
        userObject.workType = "Private";
        console.log(userObject);

        // another way to create object
        const userObject1 = {"name" : "Aaditya" ,"company": "XYZ","location" :"Pune","workType":"Govt"};
        console.log(userObject1);

        //access the object attribute

        console.log(userObject1.name);

        //create object inside another object
        const userObject2= {
            "name" : "Aaditya" ,
            "company": "XYZ",
            "location" :"Pune",
            "workType":"Govt",
            "address" : { "city" : "pune" , "state": "Maharashtra"}
        };
    
        console.log(userObject2);

// the dot and bracket notation : to access the property 
   console.log(userObject2.address);   //use dot notation
   console.log(userObject2["workType"]);  //use bracket notation

     checkObject = {
        "1" : "Description ",
        "2" : "Bracket notation used"
     };
      
     // console.log(checkObject.1);     // dot notation used only with leggal property name
     console.log(checkObject["1"]);

   
 






