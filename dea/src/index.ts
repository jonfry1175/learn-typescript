// // // let myName: string = "Dea";
// // // let username : number = 123;
// // // let isDead: boolean = false;

// // // // any = tipedata bebas
// // // let pacarSaya:any;
// // // pacarSaya = 5;
// // // pacarSaya = "5 bro";
// // // pacarSaya = true;

// // // // console.log({myName}); dia bakal ngebuat object dengan key myName

// // // let pacarLu : number | string  ;
// // // pacarLu = 5;
// // // pacarLu = "5 bro";

// // // // array biasa, bisa pake any
// // // const namaMurid: string[] = ["Dea", "Dea1", "Dea2"];
// // // console.log({namaMurid});

// // // // tupple array = ngikutin tipedata array
// // // const namaMurid2: [string, string, string, number] = ["Thomas", "Dea1", "Dea2", 10];

// // // console.log({namaMurid2});

// // // isDead = true;
// // // console.log({myName});
// // // console.log({username});
// // // console.log({isDead});
// // // console.log({pacarSaya});
// // // console.log({pacarLu});

// // // // tipedata custom
// // // // pake "?" jika ingin opsional/tidak diisi
// // // type TemanType = {
// // //     name: string;
// // //     age: number;
// // //     isDead: boolean;
// // //     isMarried?: boolean;
// // // }

// // // const teman: TemanType = {
// // //     name: "Dea",
// // //     age: 10,
// // //     isDead: false,
// // //     // isMarried: true
// // // }

// // // console.log({teman});

// // // FUNCTION

// // // tipedata return
// // function create (): string {
// //     return "Dea";
// // }
// // console.log({create:create()});

// // // pake void jika function tidak return
// // const create2 = (): void => {
// //      const a = 1;
// //     const b = 2;
// //     const c = a + b;
// //     console.log("Dea", c);
// // };
// // create2();

// // const sum = (a: number, b: number): void => {
// //     // expected result c = number
// //     const c: number = a + b;
// //     console.log("hasil jumlah sum: ", c);
// // }

// // sum(1, 2);

// // const sum2 = (a: number, b: number): string => `${a} + ${b} = ${a + b}`;

// // const resultSum2 = sum2(10, 2);
// // console.log({resultSum2});

// // LANJUTAN TIPE DATA CUSTOM

// type Wanita = string
// type Pria = boolean

// type Gender = Wanita | Pria

// let sayaManusia: Gender;
// sayaManusia = true;

// console.log({sayaManusia});

//  INTERFACE
// interface sama seperti object
// | = atau
type CoreCount = 2 | 4 | 6 | 8 | 12 | "dualCore" | "quadCore";
type CoreName = "dualCore" | "quadCore";

interface IProcessor {
  brand: string;
  baseModel: string;
  modelName: string;
  coreTotal: CoreCount | CoreName // bisa juga pake "&", tapi wajib ada keduanya
}

// menambahkan ke interface sebelumnya
interface IProcessor {
  clockSpeed: number;

}

// extends untuk spread
interface Intel extends IProcessor {
    turboBoost: boolean;
}

interface AMD extends IProcessor {
    // ? = opsional
    precisionBoost?: boolean;
}

const createIntel = (processor: Intel): void => {
  // destructuring
  const { brand, baseModel, modelName, clockSpeed, turboBoost } = processor;
  console.log(
    `terimakasih ${brand} Berhasil membuat processor dengan detail sebagai berikut:

    nama base model: ${baseModel}
    nama model: ${modelName}
    kecepat clock: ${clockSpeed}
    turbo boost enabled? ${turboBoost}
    total core: ${processor.coreTotal}
        `
  );
};

const createAMD = (processor: AMD): void => {
    // destructuring
    const { brand, baseModel, modelName, clockSpeed, precisionBoost } = processor;
    console.log(
      `terimakasih ${brand} Berhasil membuat processor dengan detail sebagai berikut:
  
      nama base model: ${baseModel}
      nama model: ${modelName}
      kecepat clock: ${clockSpeed}
      precision boost enabled? ${precisionBoost ? precisionBoost : "tidak ada"}
      total core: ${processor.coreTotal}
          `
    );
  };

const coreI5: Intel = {
  brand: "Intel",
  baseModel: "Core i5",
  modelName: "i5-4460",
  clockSpeed: 3,
  turboBoost: false,
  coreTotal: 12,
};

const ryzen3: AMD = {
    brand: "AMD",
    baseModel: "Ryzen 3",
    modelName: "Ryzen 3 3200G",
    clockSpeed: 3,
    // precisionBoost: false,
    coreTotal: "dualCore"
    
  };

createIntel(coreI5);

createAMD(ryzen3);
