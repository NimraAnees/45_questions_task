let car: string= "subaru";
let age: number= 25;
let number: number[]= [1,2,3,4];


//Test 1: Equality (True)
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru')

//Test 2: Strict Equality(False)
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');


//Test 3:Inequality(True)
console.log("Is car != 'Honda'? I predict True");
console.log(car != 'Honda')

//Test 4:Strict Inequality(False)
console.log("Is car !=='subaru'? I predict False")
console.log(car !== 'subaru');

//Lowercase Function Tests

//Test 5:Lowercase Conversion(True)
console.log("Is car.tolowercase() == 'subaru'? I predict True.");
console.log(car.toLocaleLowerCase()=="subaru");

//Test 6:Lowercase Conversion(False)
console.log("Is car === car.tolowercase()? I predict False");
console.log(car=== car.toLowerCase());

//NUMERICAL TESTS**
//Test 7:Equality (True)
console.log("Is age == 25? I predict True");
console.log(age == 25);

//Test 8:Inequality(False)
console.log("Is age != 30? I predict True");
console.log(age != 30);

//Test 9:Greater Than (False)
console.log("age > 30? I predict False")
console.log(age > 30);

//Test 10:Less than or equal(True)
console.log("Is age <= 30? I predict True.");
console.log(age <= 30);

//LOGICAL OPERATORS
//Test 11: AND (True)
console.log("Is age > 20 && age < 30? I predict True.")
console.log(age >20 && age < 30);

//Test 12: OR (False)
console.log("Is age > 30 || age < 15? I predict False");
console.log(age > 30 || age < 15 );

//Test 13: In Array (True)
console.log("Is 3 in number? I predict True.")
console.log(3 in number);

//Test 14: Not in Array (False)
console.log("Is 5 in numbers? I predict True.")
console.log( 5 in number);



