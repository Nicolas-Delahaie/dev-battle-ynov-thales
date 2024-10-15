"use strict";
// NE PAS TOUCHER
const john: number = 55;
const ennemis: number[] = [
  63, 87, 82, 95, 74, 53, 41, 52, 65, 45, 94, 88, 56, 58, 81, 42, 69, 92, 78, 48, 83, 96, 77, 75, 60, 90, 99, 72, 98,
];
// NE PAS TOUCHER

// Die hard (https://tainix.fr/sandbox/play/NOEL_2023_3)

const NB_ETAGES = 100;
const MAX_COMBATS = 4;
let etage = john;

let etages: number[] = [];

for (let etage = 1; etage <= NB_ETAGES; etage++) {
  const nbEnemisSurEtage = ennemis.filter((ennemi) => ennemi === etage).length;
  etages.push(nbEnemisSurEtage);
}

function chuterEnemis(etages: number[], etage: number): void {
  const etageChutes = 0;
  while (etage < NB_ETAGES && etageChutes < 3) {
    etageChutes++;
  }
  if (nbEnemis > 0) {
    return chuterEnemis(etage + 1, nbEnemis - 1);
  }
}
