// const car = {
//   brand: "bmw",
//   model: "ym orj irdeggee",
//   year: 2025,
// };
// console.log(car);
// const person = {
//   firstName: "Budjav",
//   lastName: "Gankhuleg",
//   age: 12,
// };
// person.city = "hhl";
// person.position = "kiki";
// person.isMarried = "taa";
// person.getFullName = "Budjav Gankhuleg";
// delete person.firstName;
// delete person.lastName;
// console.log(person);
// const movie = {
//   title: "hht",
//   director: "ll",
//   year: 2015,
//   genre: "HUHU",
// };

// movie.getKeysAndValues = function (object) {
//   const keys = Object.keys(object);
//   const values = Object.values(object);
//   return { keys, values };
// };
// console.log(movie.getKeysAndValues(movie));
// const functions = {
//   street: "jiji",
//   city: "ll",
//   zipCode: 156789,
//   student: {
//     Name: "gankhueg",
//     Age: 12,
//     address: "HUD",
//   },
// };
// student.getFullAddress = "HUD";
// console.log;

// const address = {
//   street: "0",
//   city: "kiki",
//   zipCode: 11000,
// };

// const student = {
//   name: "Gankhuleg",
//   age: 13,
//   address: address,
// };

// student.getFullAddress = function () {
//   return `${this.address.street}, ${this.address.city}, ${this.address.zipCode}`;
// };

// console.log(student.getFullAddress());
// const color = ["red", "blue", "black", "orenje", "white"];
// console.log("1 --------------", color[2]);
// const animals = ["Lion", "Tiger", "Elephant", "Giraffe"];
// animals.splice(1, 1, "Panda");
// console.log("2 -------------", animals);
// const books = ["1984", "Brave New World", "Fahrenheit 451"];
// books.push("jjk 8", "rfgyhj");
// console.log("3 ---------------", books);
// const numbers = [10, 20, 30, 40, 50];
// console.log("4 ---------", numbers.indexOf(30));
// const fruits1 = ["apple", "blue", "grry"];
// const fruits2 = ["jjk", "att", "naruto"];
// const allFruitarray = fruits1.concat(fruits2);
// console.log(allFruitarray);
// const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// console.log("red");
// console.log("green");
// console.log("blue");
// console.log("yellow");
// console.log("purple");
// const array1 = ["a", "b", "c"];
// const array2 = ["a", "b", "c"];

// function haritsuulalt(a, b) {
//   if (a == b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// haritsuulalt(array1.length, array2.length);
// console.log(haritsuulalt());
// const words = ["JavaScript", "is", "a", "versatile", "language"];
// console.log(words);
// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map((num) => num * 2);
// console.log(doubled);
// let people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
//   { name: "Charlie", age: 28 },
// ];
// let plus30 = people.find((person) => person.age > 30);
// console.log(plus30);
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let peorpol = numbers.filter((num) => num % 2 === 0);
// console.log(peorpol);
// let fruits = ["apple", "banana", "cherry", "date"];
// let ganaa = fruits.some((num) => "s");
// console.log(ganaa);
// let numbers = [1, 2, 3, 4, 5];
// let ganaa = numbers.every((num) => num > 0);
// console.log(ganaa);
// let people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
//   { name: "Charlie", age: 40 },
//   { name: "Dave", age: 28 },
// ];
// let teneg = people.filter((num) => num.age > 30);
// console.log(teneg);

// let students = [
//   { name: "Alice", age: 20, grades: [70, 80, 90] },
//   { name: "Bob", age: 22, grades: [60, 65, 70] },
//   { name: "Charlie", age: 23, grades: [80, 85, 90] },
//   { name: "Dave", age: 21, grades: [50, 60, 55] },
// ];
// let taaldaa = students.find((num) => num.age);
// console.log(taaldaa);
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  greet() {
    console.log("Hello, my name is ${this.name}.");
  }
}
