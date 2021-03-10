//Exercise 3 Mobile Programming
//nomor 1 Class
class Orang {
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    bekerja(){
        console.log(`${this.nama} sedang bekerja seperti biasa`);
    }
    tidur(){
        console.log(`${this.nama} sedang tidur`);
    }
    makan(){
        console.log(`${this.nama} sedang makan`);
    }
}
const user1 = new Orang ("Maria", 20);
user1.bekerja();

//nomor 2 Inheritance   
class Pelajar extends Orang{
    constructor(nama , umur, namaSekolah){
        super(nama,umur);
        this.namaSekolah  = namaSekolah;
    }
    belajar(){
        console.log(`${this.nama} sedang belajar di ${this.namaSekolah}`);
    }
}
const user = new Pelajar("John", 17, "Unklab");
user.belajar();