"use strict";
// type PersonInfo = readonly [string, number, boolean];
// const displayPersonInfo = (person: PersonInfo) => {
//   const [name, age, hasDriverLicense] = person;
//   console.log(
//     `Name: ${name}, Age: ${age}, Driver's License: ${
//       hasDriverLicense ? "Yes" : "No"
//     }`
//   );
// };
// const person1: PersonInfo = ["M", 17, false];
// const person2: PersonInfo = ["ali", 16, true];
// // person1.push("coding");
// // console.log(person1);
// displayPersonInfo(person1);
// displayPersonInfo(person2);
// Tuples in Typescript
//! Question 1:
//! You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements?
//* Product name (string)
//* Price (number)
//* Quantity in stock (number)
//* Create two product instances using this tuple type and display their information.
// type ProductInfo = [string, number, number];
// const displayProductInfo = (person: ProductInfo) => {
//   const [name, price, quantity] = person;
//   console.log(`Product Name: ${name}, Price: ${price}, Quantity: ${quantity}`);
// };
// const product1: ProductInfo = ["Apple iPhone", 100, 2];
// const product2: ProductInfo = ["Samsung Tv", 100, 2];
// displayProductInfo(product1);
// displayProductInfo(product2);
//! Question 2:
//? You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:
//* Subject name (string)
//*Grade (number)
//* Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.
//! Question 3:
//? You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:
//* City name (string)
//* Temperature in Celsius (number)
//* Weather condition (string)
//* Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.
// function inputValue(value: string | boolean | number) {}
// inputValue(55);
// inputValue("hello world");
// inputValue(true);
// function userInput(value: number | string) {
//   if (typeof value === "number") {
//     return value * 2;
//   } else if (typeof value === "string") {
//     return value.toUpperCase();
//   } else {
//     throw new Error("Invalid input data");
//   }
// }
// console.log(userInput(5));
// console.log(userInput("ali"));
// type Person = {
//   name: string;
//   age: number;
// };
// type Employee = {
//   emp_id: number;
//   department: string;
// };
// type EmployeeDetails = Employee & Person;
// const employee: EmployeeDetails = {
//   name: "ali",
//   age: 20,
//   emp_id: 1,
//   department: "IT",
// };
// const myPersonalInfo = {
//   name: "ali",
//   age: 20,
// };
// type User = {
//   name: string;
//   age: number;
// };
// type MyLocation = {
//   city: string;
//   country: string;
// };
// const user: User = { name: "ali", age: 40 };
// const myLocation: MyLocation = { city: "Pune", country: "India" };
// const createUserProfile = (user: User, myLocation: MyLocation) => {
//   //   return `my name is ${user.name} and I am living in city: ${myLocation.city}`;
//   return { ...user, ...myLocation };
// };
// const myCompleteInfo: User & MyLocation = createUserProfile(user, myLocation);
// console.log(myCompleteInfo);
// TODO 1: Write a program to add two numbers?
// TODO 2: How to catch Error & solve it?
// TODO 3: TS Configuration File
//* function define
// @ts-ignore
// const sum = (a: number, b: number): number => {
//   return a + b + b;
// };
// //* function call
// console.log(sum(5, 10)); // Output: 15
// let invalidValue: number = Math.sqrt(16);
// console.log(invalidValue);
// let nanValue: number = NaN;
// console.log(nanValue);
// let myFullName = "M aAhmed";
// let myFirstName = "M";
// let myLastName = "Ahmed";
// console.log(myFullName);
//! Question: Check Even Number
// const isEven = (a: number): boolean => {
//   return a % 2 === 0 && a % 8 === 0 ? true : false;
// };
// //* function call
// console.log(isEven(16));
// const naxNumber = Number.MAX_SAFE_INTEGER;
// console.log(naxNumber);
// let bigNumber: bigint = 9007199254740991n;
// console.log(bigNumber);
// let anotherBigNumber = BigInt("90071992547409915");
// console.log(anotherBigNumber);
// let sum = bigNumber + anotherBigNumber;
// console.log(sum);
// let myFavNum: any = 5;
// myFavNum = "vinod";
// myFavNum = true;
// console.log(myFavNum);
// let num2: unknown;
// num2 = 5;
// num2 = "M.";
// // num2 = true;
// if (typeof num2 === "number") {
//   console.log(num2 + 5);
// } else if (typeof num2 === "string") {
//   console.log(num2 + "Ali");
// } else if (typeof num2 === "boolean") {
//   console.log(num2);
// }
// const fetchData = async (): Promise<unknown> => {
//   const response = await fetch("https://fakestoreapi.com/products/1");
//   const data = await response.json();
//   return data;
// };
// const processData = async () => {
//   const response = await fetchData();
//   if (typeof response === "object") {
//     console.log(response);
//   } else {
//     console.log("api data", response);
//   }
// };
// console.log(1);
// function greet(name: string, id: number):string {
//   console.log(`Welcome ${name}and your id is ${id}`);
// }
// greet("vinod", 4);
// const greet = (name: string, id: number): string =>
//   `Welcome ${name} and your id is ${id}`;
// console.log(greet("vinod", 4));
// function isPalindrome(palin: string):boolean {
//   let myPalin = palin.split("").reverse().join('');
//   return myPalin === palin
// }
// console.log(isPalindrome("12321"));
// const greet2 = (name: string, id?: number): string => {
//   if (id) {
//     return `Welcome, ${name} and ur id is ${id}`;
//   } else {
//     return `Welcome, ${name}`;
//   }
// };
// const emp1 = greet2("ahmed");
// console.log(emp1);
// const fruits: string[] = ["apple", "banana", "orange", "mango"];
// const newUpdatedFruits = fruits.push("kiwi", "grapes");
// console.log(newUpdatedFruits);
// console.log(fruits);
// const lastData = fruits.pop();
// console.log(lastData);
// console.log(fruits);
// for (let i = 0; i < fruits.length; i++) {
//   console.log(i);
//   console.log(fruits[i]);
// }
// for (let fruit of fruits) {
//   console.log(fruit);
// }
// for (let fruit in fruits) {
//   console.log(fruit);
// }
// fruits.forEach((curElem: string) => console.log(curElem));
// const numbers: number[] = [1, 2, 3, 4, 5];
// const doubleData: number[] = numbers.map((curVal) => curVal * 2);
// console.log(doubleData);
// const numberToString: string[] = numbers.map((curVal: number) => curVal.toString());
// console.log(numberToString);
// const numberToString = numbers.map((curVal: number) => curVal >3);
// console.log(numberToString);
//! Filter Method
//? Filtering eve number
// const evenNumbers:number[] = numbers.filter((curElem: number) => curElem % 2 === 0);
// console.log(evenNumbers)
//? Filtering numbers greater then 3
// const numberGreaterThenThree: number[] = numbers.filter(
//   (curElem: number) => curElem > 3
// );
// console.log(numberGreaterThenThree);
// const person: {
//   name: string;
//   age: number;
//   isStudent: Boolean;
//   address: {
//     city: string;
//     country: string;
//   };
// } = {
//   name: "DEEPANSHU_NAG",
//   age: 27,
//   isStudent: true,
//   address: {
//     city: "pune",
//     country: "India",
//   },
// };
// Todo Accessing the object data
// console.log(person.address.country);
// Todo Updating object properties
// person.address.country = 123;
// console.log(person.address.country);
// type Person = {
//   name: string;
//   age: number;
//   class?: string; //* optional Property
//   isStudent: Boolean;
//   address: {
//     city: string;
//     country: string;
//   };
// };
// const person1: Person = {
//   name: "DEEPANSHU_NAG",
//   age: 27,
//   isStudent: true,
//   address: {
//     city: "pune",
//     country: "India",
//   },
// };
// const person2: Person = {
//   name: "DEEPANSHU_NAG",
//   age: 27,
//   isStudent: true,
//   address: {
//     city: "pune",
//     country: "India",
//   },
// };
// const person3: Person = {
//   name: "DEEPANSHU_NAG",
//   age: 27,
//   isStudent: true,
//   address: {
//     city: "pune",
//     country: "India",
//   },
// };
// const person4: Person = {
//   name: "DEEPANSHU_NAG",
//   age: 27,
//   isStudent: true,
//   address: {
//     city: "pune",
//     country: "India",
//   },
// };
//todo Create a Product Object
// type Product = {
//   name: string;
//   price: number;
//   quantity: number;
// };
// const product: Product = {
//   name: "Laptop",
//   price: 1000,
//   quantity: 5,
// };
//! Calculate Total Price:
// const calculateTotalPrice = (product: Product) => {
//   return `${product.name} total cost ${product.price * product.quantity}`;
// };
// console.log(calculateTotalPrice(product));
// const calculateTotalPrice1 = (product: Product) => {
//   console.log(`${product.name} total cost ${product.price * product.quantity}`);
//   return `total cost ${product.price * product.quantity}`;
// };
// console.log(calculateTotalPrice1(product));
// type Student = {
//   name: string;
//   age: number;
//   gender?: string;
//   greet: (country: string) => string;
// };
// const student1: Student = {
//   name: "ahmed",
//   age: 25,
//   greet: function (country): string {
//     return `Welcome! My name is ${student1.name}, I am ${student1.age} yrs old & I am from ${country}`;
//   },
// };
// const student2: Student = {
//   name: "Sara",
//   age: 22,
//   greet: function (country): string {
//     return `Welcome! My name is ${this.name}, I am ${this.age} yrs old & I am from ${country}`;
//   },
// };
// // Call the greet function with student1
// console.log(student1.greet("India"));
// // Call the greet function with student2
// console.log(student2.greet("Dubai"));
// enum Roles {
//   user,
//   admin,
// }
// type LoginDetails = {
//   name?: string;
//   email: string;
//   password: string;
//   role: Roles;
// };s
// const user1: LoginDetails = {
//   email: "ahmed@gmail.com",
//   password: "123s",
//   role: Roles.admin,
// };
// const user2: LoginDetails = {
//   email: "ali@gmail.com",
//   password: "124s",
//   role: Roles.admin,
// };
// const isAdmin = (user: LoginDetails): string => {
//   const { role, email } = user;
//   return role === Roles.admin
//     ? `${email}is allow to edit the website`
//     : `${email} is not allow to edit the website`;
// };
// // Test the function
// console.log(isAdmin(user1)); // Output: "User is allowed to edit the website"
// console.log(isAdmin(user2)); // Output: "User is not allowed to edit the website"
// function logAndReturn(value: number | string): number | string {
//   console.log(value);
//   return value;
// }
// const numberResult: string | number = logAndReturn(42);
// const stringResult: string | number = logAndReturn("Hello, Generics");
// const BooleanResult: string | number | boolean = logAndReturn(true);
// console.log(numberResult);
// console.log(stringResult);
// console.log(BooleanResult);
// function logAndReturn<T>(value: T): T {
//   console.log(value);
//   return value;
// }
// const numberResult = logAndReturn<number>(42);
// const stringResult = logAndReturn<string>("Hello, Generics");
// const BooleanResult = logAndReturn<boolean>(true);
// console.log(numberResult);
// console.log(stringResult);
// console.log(BooleanResult);
// const number = 5;
// function add(a: number, b: string): number;
// function add(a: string, b: string): string;
// function add(a: number, b: number) {
//   return a + b;
// }
// function add<T, U>(a: T, b: U, c: boolean): void {
//   console.log(typeof a);
//   console.log(typeof b);
//   console.log(typeof c);
// }
// const result1 = add(5, "hello", false);
// const result2 = add("Hello, ", 10, true);
// interface Product {
//   name: string;
//   price: number;
//   quantity: number;
// }
// const product: Product = {
//   name: "Product 1",
//   price: 1000,
//   quantity: 5,
// };
// const calculateTotalPrice = (product: Product): number => {
//   const { price, quantity } = product;
//   return price * quantity;
// };
// console.log(calculateTotalPrice(product));
