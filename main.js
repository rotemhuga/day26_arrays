//1
const z  = [1, 2, 3, 4, 5]
const double = z.map((number) => number + number)
console.log(double);

//2 
const ages = [30, 23, 25, 13]
const newArray = ages.map((x) => x.toString () )
console.log(newArray);

//3 
const employees = [
        {name: 'John', age: 25},
        {name: 'Jane', age: 30},
        {name: 'Bob', age: 35}   
]
const capLetters = employees.map ((x) => x.name.toUpperCase () )
console.log (capLetters)

// just practice
// const employees = [
//     theBest =  [ 
//         {name: 'John', age: 25},
//         {name: 'Jane', age: 30},
//         {name: 'Bob', age: 35}   
//     ],
//     notGood = [
//         {name: 'dani', age: 25},
//         {name: 'Jane', age: 30},
//         {name: 'Bob', age: 35}   
//     ]
//     ];
// const capLetters = employees[1].map ((x) => x.name.toUpperCase () )
// console.log (capLetters)

//4
const numbers = [5, 1, 25, 16]
const multiply = numbers.map ((x, index) => x * index)
console.log(multiply)

//5 
const input1 = [
    {
        name:"John",
        age: 13,
    },
    {
        name: "Mark", 
        age: 56,
    },
    {
        name: "Rachel", 
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jenffier",
        age: 65,
    },   
]
const arrDif = input1.map((x) => x.age )
console.log (arrDif)
const newArr = [Math.max(...arrDif), Math.min(...arrDif), Math.max(...arrDif) - Math.min(...arrDif)]
console.log(newArr)

//EX3 -1 
const nums = [7, 2, 5]
let total = 0;
const numsSum = nums.forEach((x) => total += x ) 
// return total;
console.log(total)

//2
//by map
const y = [5,1,2,3,10]
const doubleMap = y.map((number) => number + number)
console.log(doubleMap);

//by ForEach 
// const E = [5,1,2,3,10]
// const ampty = []
// const doubleEach = E.forEach((x) => ampty.push(x * 2))
// console.log(doubleEach);

//map is better - return an array and not a string

//3
// function replaceVowels(arr) {
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// arr.forEach((string, index) => {
//     let newString = '';
//     for (let i = 0; i < string.length; i++) {
//         if (vowels.includes(string[i].toLowerCase())) {
//           newString += 'X';
//         } else {
//           newString += string[i];
//         }
//       }
//       arr[index] = newString;
//     });
//     return arr;
//   }
//   replaceVowels ("dan", "amit", "noam");

//4-A - checkage 
const employeesAge = [
    { name: "John", age: 30 },
    { name: "Jane", age: 15 },
    { name: "Bob", age: 35 },
   ];
const checkAge = (employees_arr) => {
    employeesAge.forEach ((x, i) => {
        if(x.age < 20) {
            console.log(`The person at index ${i} is too young.`)
        } else return "" 
    })
}
checkAge (employeesAge)

//4 -B
// const employeesAge = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 15 },
//     { name: "Bob", age: 35 },
//    ];
// const checkAge = (employees_arr) => {
//     employeesAge.forEach ((x, i) => {
//         if(x.age > 25) {
//         x.push("isAdult:true")    
//         }
//     })
// }
// checkAge (employeesAge)

//EX3- Filter 
//1
const arrCheck = [3, 5, 8, 2]
const onlyEven = arrCheck.filter(x => {
    return x % 2 === 0;
});
console.log(onlyEven);

//2 
const checkString = ["hello", "today", "no", "evening"]  
const onlyFive = checkString.filter(x => {
    return x.length > 4
})

console.log(onlyFive)

//3
const clubMembers = [
    { name: "Angelina Jolie", isClubMember: true },
    { name: "Eric Jones", isClubMember: false },
    { name: "Paris Hilton", isClubMember: true },
    { name: "Kayne West", isClubMember: false },
    { name: "Bob Ziroll", isClubMember: true }
]
const onlyMembers = clubMembers.filter ((x) =>
x.isClubMember === true)
console.log(onlyMembers)

//EX3-find Practice
//1
const array1 = [5, 12, 8, 130, 44]
const less = array1.find((x) => x > 10)
console.log(less)

//2 - A
const students = [ 
    { name: 'John', age: 22 },
    { name: 'Jane', age: 23 },
    { name: 'Bob', age: 24 },
    { name: 'Alice', age: 25 }
]
const specific = students.find((x) => x.name === "John")
    // return specific
    console.log(specific)

//2 -B 
const students1 = [ 
    { name: 'John', age: 22 },
    { name: 'Jane', age: 23 },
    { name: 'Bob', age: 24 },
    { name: 'Alice', age: 25 }
]
const older = students.find((x) => x.age > 23)
    // return older
    console.log(older)

//EX3 - reduce practice 
//1
const input = [1, -4, 12, 0, -3, 29, -150]
const positive = input.filter((x) => x > 0)
if (positive === []){
    console.log(0) 
}