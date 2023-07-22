//Tao Array cach 1
var languages = ['JAVA',
    'PHP',
    'RUBY',
    'Dart',
    // null,
    // undefined,
    // function () {
        
    // }
];
// o mang se tu dong danh tu so, mang co the chua tat ca cac datat type
console.log(languages);

// Cach 2 - khong khuyen dung
var languagesA = new Array(
    'JAVA',
    'Conlon',
    'Concho',
    'Conmeo',
    // null,
    // undefined,
    // function () {
        
    // }
);

console.log(languagesA);

//kiem tra co phai Array hay khong , khogn dung typeOf vif car [] vaf {} ddeeuf trar ve object
console.log(Array.isArray(languages));

// truy xuat do dai mang : languages.length

//lay ra phan tu thu 2 cua mang
console.log(languages[2]);


// Làm việc với Array
 
 // to String  luon co dau phay khi chuyen qua chuoi
console.log(languages.toString());

//neu muon khong co dau phay thi dung join
console.log(languages.join(' - '));// ngan cach bang dau chuyen vao join

console.log(languages.pop()); // xoa elemment phan tu cuoi mang
// cuoi mang va tra ve phan tu da xoa

console.log(languages);

//push : them phan tu vao mang

console.log(languages.push('Thuong')); // tra ve gia tri chieu dai
console.log(languages);//mang da thanh 4 phan tu

//Shift nguowjc lai voi pop : xoa di phan tu dau mang va tra ve phan tu da xoa
console.log(languages.shift());

//Unshift them 1 hoac nhieu phan tu vao dau mang
console.log(languages.unshift('Dat', 'Thuong'));
console.log(languages)

// dung splicing dung de xoa , chen vơi cvi tri va so luong theo y minh muon

languages.splice(1, 2 , 'DUNG','HUYEN'); // vi tri dau là vị trí bắt đầu xoá , 2 số lượng xoá từ vị tri hồi nãy
//khong muon xoa thi truyen vao 1, 0 ;
//ô thứ 3 dùng để chèn vào vị trí đầu tiên sẽ chèn
console.log(languages);


//concat : dung de noi chuoi
console.log(languages.concat(languagesA)); // hợp nhát vào languages

//languages.forEach()

// for...in : dùng cho object , số lượng ovngf lặp tương đương đến số lượng thuộc tính của object
/**
 
 */


// for ..of :

// arrow function