function volume_kubus(a,b,c){
    volume=a*b*c;
    return volume;
}
a=parseInt(prompt('Masukkan Nilai sisi a kubus:'));
b=parseInt(prompt('Masukkan Nilai sisi b kubus:'));
c=parseInt(prompt('Masukkan Nilai sisi c kubus:'));
alert('Volume kubus adalah: '+' '+volume_kubus(a,b,c));