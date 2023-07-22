//cach 1
var fulName = 'Thuong Tran \' xin chao \''; // nhay don nhay kep la giong nhau trong js
console.log(fulName); // chekc dtate type : typeof fulName
// cach 2 var name = new String('Tran Thuong');

console.log(fulName.length); // check length of string

// khi mot chuoi qua dai nen lam nhu the nay

var myName = "   Tran Thi Thuong Tran Thi Huyen    ";

//console.log( typeof myName);
//Phuong thuc search chi tim kiem duoc ma k truyen vi tri bat dau tim duoc


// cach noi vao console : 
console.log(`Toi la : ${fulName} ${myName}`); /// template string = 'Toi la ' +fylName+'' + myName;

// lam viec voi chuoi : Mot so phuong thuc hay dung
//keywword : Js string methods
 //1 .length
 // console.log(myNam.length) ;


 // 2.Find index  : indexOf('kitu');
console.log(myName.indexOf('Th')); // tra -1 neu k tim thay
//indexOf tra ve vi tri dau tien cua cai minh tim
console.log(myName.indexOf('Th', 8)); // truyen them vi tri bat dau tim
// tim vi tri cuoi cung
console.log(myName.lastIndexOf('Th'));

 // Cut string
// cat tu trai sang phai
console.log(myName.slice(5, 9)); // cat tu vi tri 5-9 lay ra tu Thi
console.log(myName.slice(5)); // cat tu vi tri thu 5 den het
//cat tu phai sang trai 
console.log(myName.slice(-10, -6)); 


// Replace
console.log(myName.replace('Thi', 'THI')); // neu co nhie chu Thi thi no chi thay the tu dau tien
console.log(myName.replace(/Thi/g, 'THII')) // thay the tat ca Thi bang THII dung bieu thuc chinh quy

//Convert to upper case , lower case
console.log(myName.toUpperCase()); // chuyen tat ca thanh chu hoa
console.log(myName.toLowerCase());

//Trim // laoi bo ki tu 2 khoang trang hai dau
console.log(myName.trim() + myName.length);


//Split // cat mot chuoi thanh mot array
var languages = 'Js, PHP, Ruby, Java';
console.log(languages.split(', '));

//neu no la mot tu vd 
var languagesA = 'Javascript'
console.log(languagesA.split(''));


///get a cheracter by index 
const myString = 'Tran Thi Thuong';
console.log(myString.charAt(7));