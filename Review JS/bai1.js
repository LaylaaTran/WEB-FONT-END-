// Thong bao ra man hinh dung the alert , co nhieu alert se chay tung cai mot 
// alert('Hi Js'); 

//Comment de ghi chu
//comment 1 dong trong js
/*
comment mot khoi nhieu dong
*/
/** bam / va ** la duoc */

/* Bien trong java

var fulNam = 'Thuong ';
var age = 19;
alert(fulNam);
alert(age); 
*/

/** Một số hàm built-in 
 * 1,2,3 dùng để bật lên hộp thoại
 * 1.Alert : đưa ra dòng thông báo massage
 * 2.Console kết hợp của cả 2 cái còn lại và thêm 1 ô input
 * 3.Confirm :có massage , có cancel 
 * 4.Prompt
 * 5.Set interval
*/

//console.log('Day la mot dong log'); // truyen bien vao van sd binh thuong
//confirm('Xác nhận bạn đủ tuổi') // nào học mới dùng no cung hien ra thong bao
//prompt('Xác nhận bạn đủ tuổi đi thím !');
/*
setTimeout(function () {
    alert('Thông báo')
}, 1000); // chạy 1 đoạn code sau 1 khoảng time , chạy 1 lần
*/


// setInterval(function(){
//     console.log('Day la log' + Math.random)
// }, 1000); // set interval sẽ lặp lại sau từng đó time

/**
 Toán tử trong js: 
 1:Toán tử số học - arithmetic  : + - * ** / % ++ -- 
 2:Toán tử gán- assignment "="
 3: Tt so sánh - Comparison
 4 tt logic - Logical

 */

var a = 1 + 2;
console.log(a);

var firstNam = 'Thuong';
console.log(firstNam);

// var b = 1;
// if (a > b) {
//     alert('True a> b');
// } else {
//     alert('False a < b ')
// }

// if (a > 0 && b > 0) {
//     alert('a,b > 0');
// }


// vi du 1
var lastNam = 'Tran';
console.log(firstNam + ' ' + lastNam);

//vi du 2
var name = 'Thuong';
name += 'Tran';

console.log(name);

