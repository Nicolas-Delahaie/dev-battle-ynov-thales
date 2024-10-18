"use strict";
// https://tainix.fr/sandbox/play/GREENOID_4

(() => {
  // NE PAS TOUCHER
  const co2: number[] = [62, 73, 53, 51, 74, 90, 83, 57, 86, 82, 63, 60];
  const water: number[] = [406, 536, 656, 758, 904, 638, 863, 851, 883, 473, 732];
  const deforestation: number[] = [6505, 8857, 9385, 9353, 8411, 5002, 8759, 9543];
  const agricultural: number[] = [12, 9, 15, 9, 12, 13, 14, 5, 5];
  const plastic: number[] = [3100, 2504, 2232, 1926, 2428, 849, 2086, 2994, 2304];
  const renewable: number[] = [14, 14, 17, 18, 5, 7, 18, 11, 12, 17];
  // NE PAS TOUCHER

  function popMinMax(measures: number[]) {
    measures.sort((a, b) => a - b);
    measures.shift();
    measures.pop();

    return measures;
  }

  function moy(measures: number[]) {
    measures = popMinMax(measures);

    let total = 0;
    measures.forEach((val) => {
      total += val;
    });

    return Math.floor(total / measures.length);
  }

  let co2Moy = moy(co2);
  let waterMoy = moy(water);
  let deforestationMoy = moy(deforestation);
  let agriculturalMoy = moy(agricultural);
  let plasticMoy = moy(plastic);
  let renewableMoy = moy(renewable);

  const p = Math.floor(((co2Moy + plasticMoy / 1000) / 2) * (1 - renewableMoy / 100));
  const r = Math.floor((100 - waterMoy / 10 + (100 - deforestationMoy / 100) + agriculturalMoy + renewableMoy) / 4);

  console.log(p + "_" + r);
})();
