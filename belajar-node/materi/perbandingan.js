var angka = 100;
console.log(angka == 100);//true
console.log(angka == 20);//false

var sifat = "rajin";
console.log(sifat != "malas");//true
console.log(sifat != "bandel");//true

var angka = 8;
console.log(angka == "8");//true, padahal "8" adalah string
console.log(angka === "8");//false, karena tipe data nya berbeda
console.log(angka === 8);//true

var angka = 11;
console.log(angka != "11"); //false, padahal "11" adalah string
console.log(angka !== "11"); //true, karena tipe datanya berbeda
console.log(angka !== 11); //true

var number = 17;
console.log(number < 20); //true
console.log(number > 17); //false
console.log(number >= 17); //true, karena terdapat sama dengan
console.log(number <= 20); //true