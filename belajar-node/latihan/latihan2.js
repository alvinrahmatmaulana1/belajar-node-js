var gaji = 4500000
var trsp = 10000
var infak = 50000
var bpjs = 250000
var pajak = gaji * 2.5 /100
var kerja = 24
var totalpotongan= pajak + bpjs + infak
var totaltunjangan= trsp*kerja
var gajibersih= (gaji-totalpotongan) + totaltunjangan


console.log("Gaji Kotor : Rp" + gaji)
console.log("================================")
console.log("potongan pajak 2,5% : Rp" + pajak)
console.log("potongan BPJS : Rp." + bpjs)
console.log("potongan Infak : Rp." + infak)
console.log("=================================")
console.log("Total Potongan : Rp." + totalpotongan)
console.log("=================================")
console.log("Tunjangan Tranport : Rp." +trsp)
console.log("Total hari Kerja : " + kerja +" "+"hari")
console.log("=================================")
console.log("Total Tunjangan : Rp." + totaltunjangan)
console.log("=================================")
console.log("Perhitungan Gaji : ")
console.log("(Gaji Kotor - Potongan) +  tunjangan")
console.log("("+gaji + " - " + totalpotongan+")" + " + " + totaltunjangan)
console.log("=================================")
console.log("Gaji Bersih : Rp" + gajibersih)