// Union | (OR)

// Using the | we are saying our parameter is a string or number:
// Example
// function printStatusCode(code: string | number) {
//   console.log(`My status code is ${code}.`)
// }

// Kesalahan yang Anda dapatkan disebabkan oleh fakta bahwa TypeScript tidak tahu apakah variabel code bertipe string atau number pada saat runtime. Metode toUpperCase() hanya tersedia pada tipe string, bukan number. Karena code memiliki tipe gabungan (string | number), TypeScript tidak bisa menjamin bahwa code selalu bertipe string, dan karenanya memberikan error.
// Solusi: Menggunakan Type Guard

// Anda bisa menggunakan type guard untuk memeriksa tipe dari code sebelum memanggil metode toUpperCase():

function printStatusCode(code: string | number) {
    if (typeof code === "string") {
      console.log(`My status code is ${code.toUpperCase()}.`);
    } else {
      console.log(`My status code is ${code}.`);
    }
  }
  
  printStatusCode("ok"); // Output: My status code is OK.
  printStatusCode(200);  // Output: My status code is 200.
  
printStatusCode(404);
printStatusCode('404');

// Penjelasan:

//     Type Guard (typeof):
//         if (typeof code === "string") memastikan bahwa code bertipe string sebelum memanggil metode toUpperCase().
//         Jika code bertipe number, blok else akan menangani kasus tersebut tanpa mencoba memanggil toUpperCase().

// Dengan menggunakan type guard, Anda memastikan bahwa kode Anda aman dan TypeScript tidak akan memberikan error karena metode yang tidak ada pada tipe tertentu.