function myDisplay(some) {
    document.getElementById('demo').textContent = some;
}

function myFirst() {
    myDisplay("hello")
}

function mySecond() {
    myDisplay("Goodbye")
}

function myCalc(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalc(7, 5, myDisplay);

// create an array
const myNumbers = [4,1,-20,-7,5,9,-6]

function removeNeg(numbers, callback){
    const myArray = [];
    for(const x of numbers){
        if(callback(x)){
            myArray.push(x);
        }
    }
    return myArray
}

const posNumber = removeNeg(myNumbers, (x) => x >= 0);

document.getElementById('demo').textContent = posNumber;

// Traditional way of writing functions
function hello(para1, para2){
    console.log('Hello');
}

//Arrow function new way of doing functions
const hello2 = (para1, para2)=>{
    console.log('Hello2');
}

hello();
hello2();

let show = function(){
    console.log('function with no name');
}

let show2 = ()=>{
    console.log('function with no name');
}