/** keyword : JAVASCRIPT NUMBER
 Kieu so number 
 1.Tao gia tri number 
 2 .Lam viec voi number :
 to string
 to fixed
 */

 // tao bien
 // cach 1 - nen dung
var age = 19;
var Pi = 3.1465;
// cach 2 - it dung
var otherNumber = new Number(9); 
// console.log(typeof otherNumber); // check ra oject

var result = 20 / 'ABC'; 
console.log(result);  /// in ra NAN: dai dien so khong hop le
//check mot so khong hop le : khong duc dung toan tu so  sahn dau a
// ham check la isNaN :
console.log(isNaN(result));

// bang cosole: so thi mau xash, string thi mau den , thuong su dung type of de check
console.log(age.toString()); //chuyen tuuoi =19 => age='19'
//truyen mot bien moi
var myString = age.toString();

// to fixed lam tron so thap phan
console.log(Pi.toFixed(2)); // chuyen ve kieu du lieu string khong tin thi check data type
