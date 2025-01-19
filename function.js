// Contoh Menghubungkan fungsi, atau fungsi komposisi.
function tambah(a,b){
    return a+b;
}
function kali(a,b){
    return a*b;
}
a=parseInt(prompt('Masukkan nilai a:'));
b=parseInt(prompt('Masukkan nilai b:'));
c=parseInt(prompt('Masukkan nilai c:'));
d=parseInt(prompt('Masukkan nilai d:'));
hasil =kali(tambah(a,b),tambah(c,d));
alert ('Hasil perkalian dari penjumlahan bilangan a,b dan c,d adalah'+' '+hasil)