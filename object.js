// Membuat object
// 1. Object Literal.
var mhs={
    nama: "Dani Novrian",//variabel didalam
    umur: 23,//object ini disebut variabel
    ips:[3.39,3.82,3.34,3.44,3.88],//atau properti
    alamat:{//atribut alamat merupakan contoh object dalam object.
        jalan:"Kiwi 16",
        kota:"Medan",
        provinsi:"Sumatera Utara"

    }
};
// 2. Function Declaration.
function objectmhs(nama,nim,email,jurusan){
    var mhs={};//declarasikan objectnya
    mhs.nama =nama;//isi atributnya sesuai parameter
    mhs.nim=nim;
    mhs.email=email;
    mhs.jurusan=jurusan;
    return mhs;
}
var mhs1 = objectmhs('Dani Novrian','2250904071110455','abc@gmail.com','Matematika');//isikan argument sesuai urutan parameter dan atribut yang mau disikan.
// 3. Constructor (Mirip dengan membuat function declaration,
//khusus untuk membuat object, function constructor yang akan sering dipakai kedepannya)
function Mahasiswa(nama,nim,email,jurusan){
    this.nama=nama;//yang membedakan constructor dan function declaration
    this.nim=nim;//penulisan atributnya menggunakan this.
    this.email=email;
    this.jurusan=jurusan;
}
var mhs2=new Mahasiswa('Dani Novrian','2250904071110455','abc@gmail.com','Matematika');//untuk memanggil objectnya
//perbedaan function declaration dan constructor yaitu dibagian deklarasi object dan pemanggilannya.

//this: adalah sebuah keyword spesial yang secara otomatis didefinisikan untuk semua function. Di scope global this adalah window.
// a=15
// console.log(this.a);
// this mengembalikan object global

// cara 1-function declaration
// function halo(){
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// pada function declaration this mengembalikan object global

//cara 2-object literal
// var obj= {a:10,b:11,c:12};
// obj.halo= function(){
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3-constructor
function Halo(){
    console.log(this);
    console.log('YA');

}
var obj1=new Halo();
var obj2=new Halo();
//this mengembalikan object yang baru dibuat
