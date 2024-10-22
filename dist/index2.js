"use strict";
// class Person {
//   name: string;
//   age: number;
//   hobbies: string[];
//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     (this.age = age), (this.hobbies = hobbies);
//   }
//   introduce(): string {
//     return `Hi I'am ${this.name} and I'am ${
//       this.age
//     } yrs old. I Love ${this.hobbies.join(", ")}`;
//   }
// }
// const person: Person = new Person("ali", 12, ["reading", "painting"]);
// const person1: Person = new Person("abbas", 15, ["coding", "sports"]);
// const person2: Person = new Person("sania", 18, ["reading", "coding"]);
// console.log(person, person1, person2);
// console.log(person.introduce());
// console.log(person1.introduce());
// console.log(person2.introduce());
// // Inheritance
// class Person {
//   public name: string;
//   protected age: number;
//   protected hobbies: string[];
//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
//   introduceParent(): string {
//     return `Hi I'm ${this.name} and I'm ${
//       this.age
//     } years old. I love ${this.hobbies.join(", ")}`;
//   }
// }
// class Student extends Person {
//   grade: number;
//   constructor(name: string, age: number, hobbies: string[], grade: number) {
//     super(name, age, hobbies);
//     this.grade = grade;
//   }
//   introduce(): string[] {
//     // You can return `super.introduceParent()` if you want to reuse the parent introduction
//     return this.hobbies;
//   }
// }
// const person: Person = new Person("Ali", 12, ["reading", "painting"]);
// console.log(person.introduceParent());
// const student: Student = new Student("Sania", 18, ["sports", "coding"], 10);
// console.log(student.introduce());
// shorthand Properties
// class Person {
//   constructor(
//     public name: string,
//     public age: number,
//     protected hobbies: string[]
//   ) {}
//   introduceParent(): string {
//     return `Hi I'm ${this.name} and I'm ${
//       this.age
//     } years old. I love ${this.hobbies.join(", ")}`;
//   }
// }
// class Student extends Person {
//   constructor(
//     name: string,
//     age: number,
//     hobbies: string[],
//     public grade: number
//   ) {
//     super(name, age, hobbies);
//   }
//   introduce(): string[] {
//     return this.hobbies; //if you want to reuse the parent introduction
//   }
// }
// const person: Person = new Person("Ali", 12, ["reading", "painting"]);
// console.log(person.introduceParent());
// const student: Student = new Student("Sania", 18, ["sports", "coding"], 10);
// console.log(student.introduce());
//  Todo get method doesn't take any parameters, and the set method takes only one parameter.
// class Person {
//   private _age: number | undefined;
//   constructor(public name: string, protected hobbies: string[]) {}
//   public set age(age: number) {
//     if (age > 150 || age < 0) {
//       throw new Error("age is not valid");
//     }
//     this._age = age;
//   }
//   public get age() {
//     if (this._age === undefined) {
//       throw new Error("age is not defined");
//     }
//     return this._age;
//   }
//   introduceParent(): string {
//     return `Hi I'm ${this.name} and I'm
//     ${this.age} years old. I love ${this.hobbies.join(", ")}`;
//   }
// }
// const person: Person = new Person("Ali", ["reading", "painting"]);
// person.age = 0;
// console.log(person.introduceParent());
// console.log(person.age);
// class Person {
//   private _age: number | undefined;
//   constructor(public name: string, protected hobbies: string[]) {}
//   public set age(age: number) {
//     if (age > 150 || age <= 0) {
//       throw new Error("age is not valid");
//     }
//     this._age = age;
//   }
//   public get age() {
//     if (this._age === undefined) {
//       throw new Error("age is not defined");
//     }
//     return this._age;
//   }
//   introduceParent(): string {
//     return `Hi I'm ${this.name} and I'm
//     ${this._age} years old. I love ${this.hobbies.join(", ")}`;
//   }
// }
// const person: Person = new Person("Ali", ["reading", "painting"]);
// person.age = 10;
// console.log(person.introduceParent());
// console.log(person.age);
//? Q1: Bank Account Balance
// class BankAccount {
//   private _balance: number = 0;
//   public get balance() {
//     return this._balance;
//   }
//   public set balance(newBalance) {
//     if (newBalance < 0) {
//       throw new Error("Invalid balance");
//     }
//     this._balance = newBalance;
//   }
// }
// const account = new BankAccount();
// account.balance = -10;
// console.log(account.balance);
//? Q2: Temperature Converter
// class Temperature {
//   private _celsius = 0;
//   public get celsius(): number {
//     return this._celsius;
//   }
//   public set celsius(newCelsius: number) {
//     this._celsius = newCelsius;
//   }
//   public get fahrenheit(): number {
//     return (this._celsius * 9) / 5 + 32;
//   }
//   public set fahrenheit(newFah: number) {
//     this._celsius = ((newFah - 32) * 5) / 9;
//   }
// }
// const temp = new Temperature();
// temp.celsius = 25;
// console.log(temp.fahrenheit);
// temp.fahrenheit = 77;
// console.log(temp.celsius);
//? Example: Math Operations Utility - creating a utility class to perform various mathematical operations.?
// class Mathematical {
//   public static PI = Math.PI;
//   public static add(num1: number, num2: number) {
//     return num1 + num2;
//   }
//   public static subs(num1: number, num2: number) {
//     return num1 - num2;
//   }
//   public static div(num1: number, num2: number) {
//     return num1 * num2;
//   }
//   public static mult(num1: number, num2: number) {
//     return num1 / num2;
//   }
// }
// console.log(Mathematical.PI);
// console.log(Mathematical.add(5, 10));
// console.log(Mathematical.subs(10, 5));
// console.log(Mathematical.div(5, 10));
// console.log(Mathematical.mult(10, 5));
// abstract Class PerObj {
//   name :string;
//   age:number;
// }
// class Person:PerObj {
//   name: 'ali';
//   age: 12  ;
//   }
//   class Person1:PerObj {
//   name: 'ali';
//   age: 12  ;
//   }
//   class Person2:PerObj {
//   name: 'ali';
//   age: 12  ;
//   }
// abstract class Shape {
//   constructor(protected color: string) {}
//   abstract calculateArea(): number;
//   abstract displayArea: () => void;
// }
// class Circle extends Shape {
//   constructor(protected color: string, protected radius: number) {
//     super(color);
//   }
//   public calculateArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
//   displayArea = () => {
//     console.log(`This is a ${this.color} circle with radius ${this.radius}`);
//   };
// }
// const circle = new Circle("red", 5);
// console.log("circle", circle.calculateArea());
// circle.displayArea;
// type vs interface
//? Q1: type
// type Stud = {
//   name: string;
//   age: number;
// };
// type StudAddr = {
//   city: string;
//   state: string;
// };
// type Data = Stud & StudAddr;
// const BioData: Data = {
//   name: "ali",
//   age: 12,
//   city: "Pune",
//   state: "MH",
// };
// console.log("BioData", BioData);
// ? Q1: interface
// interface Stud {
//   name: string;
//   age: number;
// }
// interface Stud {
//   city: string;
//   state: string;
// }
// interface Data extends Stud {}
// const BioData: Data = {
//   name: "ali",
//   age: 12,
//   city: "Pune",
//   state: "MH",
// };
// console.log("BioData", BioData);
// ? Q1: class
// interface Stud {
//   name: string;
//   age: number;
// }
// interface StudAddr {
//   city: string;
//   state: string;
// }
// interface Data extends Stud, StudAddr {}
// class BioData implements Data {
//   constructor(
//     public name: string,
//     public age: number,
//     public city: string,
//     public state: string
//   ) {}
// }
// const stud1 = new BioData("ali", 12, "pune", "MH");
// console.log("BioData", stud1);
//? Q1: Type Safety with Typeof Guards
const favHobbies = (hobby) => {
    // return hobby.map(() => {});
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map((curValue) => {
            return curValue;
        });
    }
    else {
        console.log(hobby);
    }
};
favHobbies("coding");
console.log(favHobbies(["coding", "games"]));
