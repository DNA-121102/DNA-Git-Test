// var myarr1=['teks',2,true,[1,2,3,4,5]];
// console.log(myarr1[3][4]);
//Manipulasi array.
// var arr=['DNA',1,false];
// console.log(arr);
// 1.Menambahkan isi array
// var a=[];
// arr[0]='D';
// arr[1]='A';
// arr[2]='N';
// arr[3]='I';
// console.log(arr);
// 2. Menghapus isi array
// var arr=['DNA',1,false];
// arr[1]=undefined;
// console.log(arr);
// 3.Menampilkan isi array
var arr=['Dadang','Diding','Dudung'];
for (var i=0; i<arr.length; i++){
    console.log('Mahasiswa ke - '+[i+1]+' adalah '+arr[i]);

}
alert(arr.find('Dadang'));
