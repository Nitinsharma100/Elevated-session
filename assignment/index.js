
// Datatypes and variable
let f1=function(){
    const a=20
    const b=20
    return a+b
}
console.log(f1());

// operators
console.log(10+20);
console.log(10-20);
console.log(10/20);
console.log(10*20);
console.log(10**2);
console.log(10==20);
console.log(10===20);
console.log(10&20);
console.log(10|20);
console.log(10!=20);

// functions
let f2=function(){
    return 10*2
}

console.log("Function "+f2());
const f3 =()=>{
    console.log("Arrow Function");
    
}
f3();
// IIFE Function
(
    function (){
        console.log("IIFE Function");
        
    }
)()

// Objects
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    get() {
        return (`The name of the bike is ${this.engine}.`)
    }
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
 
console.log(bike1.name);    // Hayabusa
console.log(bike2.maker);   // Kawasaki
console.log(bike2.get());


// Array
const arr = [0,1,2,3,4,5,6,7,true,false,"sharmaji"]

arr.pop()
console.log(arr);

const arr1=new Array(1,2,3,4)
arr1.push(15)
arr1.unshift(9)
arr1.shift()
console.log(arr1);


console.log(arr.includes(5));
console.log(arr.indexOf(3));

const arr3=arr.join()
console.log(arr3);
console.log(typeof arr3);


console.log(arr);
console.log("A=",arr.slice(1,3));



console.log(arr1);
console.log("B=",arr1.splice(1,2));
console.log(arr1);


// loop
let i=16
do {
    console.log(i);
    i+=2
    
} while (i<=10);


for (let i = 0; i <10; i++) {
    for (let j = 0; j < 5;  j++) {
        console.log(j);
        
    }
    console.log("\n");
}





// Condition




const balance=100
// if(balance > 50) console.log("hello");
if(balance <50){
    console.log("less than");
}else if(balance<70){
    console.log('less than 70');
}else if(balance<90){
    console.log('less than 90');
}else{
    console.log('greater than ');
}

