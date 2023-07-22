/**
 1.du lieu nguyen thuy - Primitive Data
 -Number
 -String
 -Boolean
 -Underfined
 -NUll
 -Symbol
2.Du lieu phuc tap -Cpmplex Data

-function
-object
 */


// nemuber type
var a = 1;
var b = 1.2;

//String type
var fulName = 'Thuong Tran';

console.log(fulName);

//boolean

//undefined type 
var age;

//NULL

var isNull = null; // null khong co gi

//Symbol 
var id = Symbol('id');// co tinh unique
var id2 = Symbol('id'); //unique;
console.log(id == id2);

// function

var myFunction = function () {
    alert('Hi. Hello everyone.')
}

//Object types

var myObject = {
    name: 'Tran Thuong', // key value kt = ,
    age: 19,
    add: 'Ha Noi',
    myFunction: function () {
        
    }
}
console.log('myObject', myObject)

// var myArray = [
//     'JavaScript',
//     'PHP',
//     'RUBY',
// ];

