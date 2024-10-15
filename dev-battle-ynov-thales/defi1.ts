"use strict";
// https://tainix.fr/sandbox/play/GREENOID_1

(() => {
  // NE PAS TOUCHER
  const serial: string = "984826233687";
  // NE PAS TOUCHER

  const res = serial
    .split("")
    .map((letter) => {
      if (parseInt(letter, 10) % 2 == 0) return "R";
      else return "L";
    })
    .join("");

  console.log(res);
})();
