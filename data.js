const nama = "pina ramanda"
let usia = 9;

function generateBiodata() {
    if(usia < 3) {
        console.log(`batita`);
    }
    else if(usia > 3 && usia <= 5) {
        console.log(`balita`);
    }
    else if(usia > 5 && usia <= 12) {
        console.log(`anak-anak`)
    }
    else if(usia > 12 && usia <= 21) {
        console.log(`remeja`);
    }
    else if(usia > 21 && usia <= 35) {
        console.log(`dewasa`);
    }
    else {
        console.log(`lanjut usia`);
    }
}

console.log(nama);
console.log(usia);

generateBiodata();