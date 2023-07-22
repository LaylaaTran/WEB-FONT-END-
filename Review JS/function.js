// tao mot ham
// quy tac ten ham : a-z A-Z 0-9 _$
//khogn dung so hoac ki tu o dau




//THAM SO TRONG JS
//showDialog(); toan tu goi ham
function writeLog(massage) { // truyen bien tham so massage
    console.log(massage);
}
zx
writeLog('Test message'); // nay la truyen doi so co nhieu kieu du lieu co the truyen
//writeLog('Toi','la'); ...
// tính private : bien su dung lam tham so trong function chi su trong duoc trong chính no
//doi tuong arguments

function showDialog(a, b, c) {
    // code cua ham 
    console.log(a, b, c);
}

showDialog('Toi', 1, ['1', '2', '3', '4']);

function wriyeLogg() {
    for (var param of arguments) {
        console.log(param);
    }
}

wriyeLogg('Log1', 'Log2', 'log3');