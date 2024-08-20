"use strict";
// let myName: string = "Dea";
// let username : number = 123;
// let isDead: boolean = false;
// // any = tipedata bebas
// let pacarSaya:any;
// pacarSaya = 5;
// pacarSaya = "5 bro";
// pacarSaya = true;
// // console.log({myName}); dia bakal ngebuat object dengan key myName
// let pacarLu : number | string  ;
// pacarLu = 5;
// pacarLu = "5 bro";
// // array biasa, bisa pake any
// const namaMurid: string[] = ["Dea", "Dea1", "Dea2"];
// console.log({namaMurid});
// // tupple array = ngikutin tipedata array
// const namaMurid2: [string, string, string, number] = ["Thomas", "Dea1", "Dea2", 10];
// console.log({namaMurid2});
// isDead = true;
// console.log({myName});
// console.log({username});
// console.log({isDead});
// console.log({pacarSaya});
// console.log({pacarLu});
// // tipedata custom
// // pake "?" jika ingin opsional/tidak diisi
// type TemanType = {
//     name: string;
//     age: number;
//     isDead: boolean;
//     isMarried?: boolean;
// }
// const teman: TemanType = {
//     name: "Dea",
//     age: 10,
//     isDead: false,
//     // isMarried: true
// }
// console.log({teman});
// FUNCTION
// tipedata return
function create() {
    return "Dea";
}
console.log({ create: create() });
// pake void jika function tidak return
const create2 = () => {
    const a = 1;
    const b = 2;
    const c = a + b;
    console.log("Dea", c);
};
create2();
const sum = (a, b) => {
    // expected result c = number
    const c = a + b;
    console.log("hasil jumlah sum: ", c);
};
sum(1, 2);
const sum2 = (a, b) => `${a} + ${b} = ${a + b}`;
const resultSum2 = sum2(10, 2);
console.log({ resultSum2 });
