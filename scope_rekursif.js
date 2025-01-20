// global scope/window scope, contohnya:
var a=1;//ketika memanggil a diconsole akan keluar nilai 1.
function tampilangka(n){
    if (n===0){
        return;
    }
    console.log(n);
    return tampilangka(n-1);
}
tampilangka(10);
// Contoh faktorial menggunakan rekursif
function faktorial(n){
    if (n===0) {
        return 1;
    }
    return n*faktorial(n-1);
}
console.log(faktorial(5));