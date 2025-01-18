// s='';
// var k=5;
// for (var i=0;i<k;i++){
//     for(var j=k;j>i;j--){
//        s+='*';
//     } 
    
//     s+='\n';
// }
// console.log(s);
// // Atau dengan bentuk lain 
// var t='';
// for (var a=5;a>0;a--){
//     for (var b=0;b<a;b++){
//         t+='*'; 
//     }
//     t+='\n';
// }
// console.log(t);
var angka=prompt('masukkan angka: ');
if (angka % 2 === 0){
    alert('Angka '+angka+' adalah bilangan genap');
}else{
    alert('Angka '+angka+' adalah bilangan ganjil')
}
