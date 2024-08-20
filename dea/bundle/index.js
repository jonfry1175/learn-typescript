"use strict";
// // // let myName: string = "Dea";
// // // let username : number = 123;
// // // let isDead: boolean = false;
const createIntel = (processor) => {
    // destructuring
    const { brand, baseModel, modelName, clockSpeed, turboBoost } = processor;
    console.log(`terimakasih ${brand} Berhasil membuat processor dengan detail sebagai berikut:

    nama base model: ${baseModel}
    nama model: ${modelName}
    kecepat clock: ${clockSpeed}
    turbo boost enabled? ${turboBoost}
    total core: ${processor.coreTotal}
        `);
};
const createAMD = (processor) => {
    // destructuring
    const { brand, baseModel, modelName, clockSpeed, precisionBoost } = processor;
    console.log(`terimakasih ${brand} Berhasil membuat processor dengan detail sebagai berikut:
  
      nama base model: ${baseModel}
      nama model: ${modelName}
      kecepat clock: ${clockSpeed}
      precision boost enabled? ${precisionBoost ? precisionBoost : "tidak ada"}
      total core: ${processor.coreTotal}
          `);
};
const coreI5 = {
    brand: "Intel",
    baseModel: "Core i5",
    modelName: "i5-4460",
    clockSpeed: 3,
    turboBoost: false,
    coreTotal: 12,
};
const ryzen3 = {
    brand: "AMD",
    baseModel: "Ryzen 3",
    modelName: "Ryzen 3 3200G",
    clockSpeed: 3,
    precisionBoost: false,
    coreTotal: "dualCore"
};
createIntel(coreI5);
createAMD(ryzen3);
