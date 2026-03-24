const users = [
  {
    id: 1,
    name: "Bat",
    age: 20,
    salary: 1200000,
    isActive: true,
    department: "IT",
    email: "bat@gmail.com",
    address: { city: "Ulaanbaatar", district: "Bayanzurkh" },
  },
  {
    id: 2,
    name: "Bold",
    age: 17,
    salary: 800000,
    isActive: false,
    department: "HR",
    email: "bold@gmail.com",
    address: { city: "Darkhan", district: "Center" },
  },
  {
    id: 3,
    name: "Saraa",
    age: 25,
    salary: 1500000,
    isActive: true,
    department: "Finance",
    email: "saraa@gmail.com",
    address: { city: "Ulaanbaatar", district: "Sukhbaatar" },
  },
  {
    id: 4,
    name: "Bat",
    age: 30,
    salary: 2000000,
    isActive: false,
    department: "IT",
    email: "bat2@gmail.com",
    address: { city: "Erdenet", district: "Center" },
  },
  {
    id: 5,
    name: "Anu",
    age: 22,
    salary: 1100000,
    isActive: true,
    department: "Marketing",
    email: "anu@gmail.com",
    address: { city: "Ulaanbaatar", district: "Chingeltei" },
  },
  {
    id: 6,
    name: "Temuulen",
    age: 28,
    salary: 1800000,
    isActive: true,
    department: "IT",
    email: "temuulen@gmail.com",
    address: { city: "Darkhan", district: "New" },
  },
  {
    id: 7,
    name: "Naraa",
    age: 19,
    salary: 900000,
    isActive: false,
    department: "HR",
    email: "naraa@gmail.com",
    address: { city: "Ulaanbaatar", district: "Songino" },
  },
  {
    id: 8,
    name: "Bataa",
    age: 35,
    salary: 2500000,
    isActive: true,
    department: "Finance",
    email: "bataa@gmail.com",
    address: { city: "Erdenet", district: "Center" },
  },
];
// console.log(users); ------1------
// const con = {
//   age: function (a, b, r, t, y, u, i, f) {
//     return a + b + r + t + y + u + i + f;
//   },
// };
// console.log(con.age(20, 17, 25, 30, 22, 28, 19, 35));------2----
// const lolo = users.map((person) => person > 30);
// console.log(lolo);--------3-------
let lolo = users.map((person) => person + 0);
console.log(lolo);
