let a = 1000;
let b = 600;
let c = 900;

//Operators

//1.and - &&
// 2.or - ||
//3.not - !
//4.equal - ==
//5.equal (strictly equal) - ===
//6.ternary operator - ? :

if(a>b && a>c){
    console.log('a is greater');
}else if(b>a && b>c){
    console.log('b is greater');
}else{
    console.log('c is greater');
}



let x = 10
if (x>9 || x>60){
    console.log('Hai');
}

let y = 9
if(y !== 90){
    console.log('equal');
}

let d =8
let s='8'
if(d === s){
    console.log('equal')
}else{
    console.log('not equal');
}

let h = 9
let q = h>20 ? 'good' : 'bad'
console.log(q);

let age = -5
if (age>18){
    console.log("You are an adult");
}
else if (age<0){
    console.log("Its not possible");
}
else{
    console.log("You are a kid");
}

let grade="A";
switch (grade) {
    case "A":
       console.log("You are awesome"); 
        break;
    case "B":
        console.log("You did great");
        break;
     case "C":
        console.log("You just passed");
        break;
    case "D":
        console.log("You just failed"); 
        break;
    default:
        console.log(grade,"is not a letter grade");      
}


console.log("Hii");
console.log("Hello");
console.log("How are you doing?");
console.log("Hope everything is good ");

function example() {
    console.log("Hii");
    console.log("Hello");
    console.log("How are you doing");
    console.log("Hope everything is good ");
}
example();
example();
example();

const i =10;
if (i%2 == 0){
    console.log(x);
    console.log("Its a even number");
}
    console.log(i);


const grocery = ["milk","bread","banana","egg"]
console.log(grocery[2]);


grocery[0] = "brocoli" ;
console.log(grocery); 
console.log(grocery.length);


grocery.push("apple","walnut"); // push helps to add an element
console.log(grocery); 


grocery.pop(); // will remove last element
console.log(grocery); 

grocery.unshift("cookies"); // unshift will add the element to the beginning of array
console.log(grocery);

grocery.shift();  // remove the beginning of the element 
console.log(grocery);

    
for (let counter = 0; counter <5; counter++) {
   console.log(counter);
}

const animals = ["grizzly bear", "sloth", "sea lion"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);   
}

let result = "";
let f=0;

do{
    f = f + 1;
    result = result + f;
}while (f<5){
    console.log(result);
}

const array = ["a", "b", "c"];  // .forEach method
array.forEach(element => console.log(element));

const array1 = [1,4,9,16]; // .map method 
const map1 = array1.map(x =>x*2);
console.log(map1);


// .filter method creates a new array with all elements to test and pass the function
const words = ["spray","limit","elite","exuberant","destruction","present"];
const result1 = words.filter(word => word.length>6);
console.log(result1);

// .reduce method - reduces an array to a single value 
const array2 = [1,2,3,4];
const initialValue = 0; 
const sumWithInitial = array2.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
console.log(sumWithInitial);

console.log(3>2>1);


let aa=60
let bb=70

if (aa>bb){
    console.log("bigger")
}
else{
    console.log("not")
}

let aaa=60
let bbb=70

// Syntax:
// let variable = (condition) ? true: false
// console.log(variable)

console.log(50%10)