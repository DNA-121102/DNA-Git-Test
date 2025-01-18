var lagi=true; 
while(lagi){
    //Menangkap pilihan player
    var p=prompt('pilih: gajah, semut, atau orang');

    //menangkap pilihan komputer
    //membangkitkan bilangan random
    var comp= Math.random();
    console.log(comp);

    if (comp<0.34){
        comp='gajah';
    }else if(comp>=0.34 && comp <0.67){
        comp='semut';
    }else{
        comp='orang';
    }

    // menentukan rules
    var hasil='';
    if (p == comp){
        hasil='seri!';
    }else if (p=='gajah'){
        // if (comp=='orang'){
        //     hasil='Menang!';
        // } else {
        //     hasil ='Kalah!';
        // }
    // atau dapat menggunakan operator ternary sebagai berikut.
    hasil= (comp=='orang') ? 'Menang!':'Kalah';

    }
    else if (p=='orang'){
        hasil=(comp=='gajah')? 'Kalah!':'Menang!';
    }
    else if (p=='semut'){
        hasil= (comp=='gajah')?'Menang!':'Kalah!';
    }else{
        hasil='Memasukkan pilihan yang salah';
    }
    // tampilkan hasilnya
    alert('Kamu memilih : '+p+' '+' dan komputer memilih: '+' '+comp+' \n Maka Hasilnya: Kamu'+ hasil);
    lagi= confirm ('Mau main lagi?');
}