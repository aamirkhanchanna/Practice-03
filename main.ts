// // your first typescript program
// let massage = "Hello World";
// console.log(massage);

// // variable in programming
// let favouriteColor = "Blue";
// console.log(favouriteColor);
// favouriteColor = "Black";
// console.log(favouriteColor);

// // here are some basic data type in typescript
// let userName: string = "Aamir Khan";
// console.log(userName)
// let myAge: number = 26;
// console.log(myAge)
// let married: boolean = true;
// console.log(married)
// let randomValue: any = "https://github.com/aamirkhanchanna";
// console.log(randomValue)

// // strongly typed syntax
// let a : boolean = "Pakistan";
// let b : number = 9;
// let c : boolean = true;

// // type inference
// let e = "USA";
// let f = "10.9";
// let g = "false";

// // const & let in typerscript
// let currentBalance = 1000;
// const accountnumber = "1234567890"  // this value can change, this value remains constant
// currentBalance = 500 // this is allowed
// // accountnumber = "0987654321";   // error: cannot assign to 'accountnumber' because it is a constant

// // String concatenation
// let firstName: string = 'Aamir';
// let lastName: string = 'Khan';
// let fullName: string = firstName + ' ' + lastName;
// console.log(fullName)

// // template literals
// let firstName: string = 'Aamir';
// let lastName: string = 'Khan';
// let fullName: string = `${firstName} ${lastName}`;
// console.log(fullName);

// // operators in typescript
// // 1 Addition (+)
// let num1 = 50;
// let num2 = 50;
// let cart: number = num1 + num2;
// console.log(cart);

// // 2 subtraction (-)
// let num1 = 100;
// let num2 = 50;
// let cart: number num1 - num2;
// console.log(cart);

// // 3 multiplication (*)
// let bags: number = 4;
// let apple: number = 5;
// let totalApple: number = bags * apple;
// console.log(totalApple);

// // 4 division (/)
// let totalApple: number = 20;
// let bags: number = 4;
// let eachBags: number = totalApple / bags
// console.log(eachBags)

// // 5 exponentiation (**)
// let layer = 5;
// let apple = 5;
// let power = layer ** 2;
// console.log(power);

// // 6 modulus (%)
// let pencil = 5;
// let student = 2;
// let reminder = pencil % student;
// console.log(reminder);

// // Unary Operators (++) (--)
// let a=5;
// let b=2;
// a++; // a becomes 6
// b--; // a becomes 1

// let a=5;
// let b=2;
// ++a; // a becomes 6
// --b; // a becokmes 1

// // Home Work
// let a: number = 5;
// let b: number = 2;
// let c: number;
// c = ++a + a++ + --b + b-- + a + b++ + b;
// console.log(a); // 7

// // Combining Operators
// let result = 3 + 4 * 5;
// result ++
// console.log(result); // answer will be 23 or 24 or 35 or 36 or ??

// // Addition Calculater
// import inquirer from "inquirer";
// const input1 = await inquirer.prompt({
//     name: "num1",
//     type: "number",
//     message: "kindly enter your first no:"
// });
// const input2 = await inquirer.prompt({
//     name: "num2",
//     type: "number",
//     message: "kindly enter your first no:"
// });
// let total: number = input1.num1 + input2.num2
// console.log(total);

// // BMI Calculater
// let weightInKg = 70;  //  70kg
// let hieghtInMeters = 1.75;  //  1.75m
// let bmi = weightInKg / (hieghtInMeters * hieghtInMeters)
// console.log(`Your BMI is ${bmi}`);

// // Assignment Operators (=)
// let c = 10;
// c += 5;
// console.log(c);  // equivalent to c = c + 5, c is now 15

// // Comparision Operator
// let a=5
// let b=2
// let isEqual = (a == b); // False
// let isNotEqual = (a != b); //True
// let isGreaterThan = (a > b); // True
// let isLessThan = (a < b); // False

// // logical Operators
// let a=5
// let b=2
// let LogicalAnd = (a > 0) && (b > 0); // True
// let LogicalOr = (a < 0) || (b > 0); // True
// let logicalNot = !(a > 0); // False

// // Logic Statemenmt
// // if and if-else
// let isRaining = true;
// if(isRaining){
//     console.log("Wear a Raincoat.");
// }else[
//     console.log("Wear Sunglasses.")
// ]

// let isRaining = false;
// if(isRaining){
//     console.log("Wear a Raincoat.");
// }else[
//     console.log("Wear Sunglasses.")
// ]

// // Else if Statement
// let Weather = "Cloudy";
// if (Weather === "Raining") {
//     console.log("Wear a Raincot.");
// } else if (Weather === "Cloudy") {
//     console.log("Wear a Light Jacket." );
// } else {
//     console.log("Wear a Sunglasses.");
// }

// // // Conditional Ternary Operators
// let isHungry = true;
// let snack = isHungry ? "apple" : "water";
// console.log(`You Should Have Some ${snack}.`);





