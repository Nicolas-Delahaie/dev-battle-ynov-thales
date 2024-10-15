"use strict";
// https://tainix.fr/sandbox/play/GREENOID_5

(() => {
  // NE PAS TOUCHER
  const sequences = [
    "DHDDDHDCPDH",
    "CHHHCDPHHC",
    "PDHPHDPHPCDP",
    "PPHHDCPCPHC",
    "DPCHPCHHCPC",
    "DPDDDPCHPCD",
    "PDCDHHCPCCP",
    "DHDPDDCPHDD",
    "PPHCDHCCCCC",
    "DCCDHDDCCHD",
  ];
  const storages = ["DDCCC", "HPPHPH", "PPHCCC", "PCPHC", "HCHD"];
  // NE PAS TOUCHER


  const mapping = {
    P: 1,
    H: 2,
    C: 3,
    D: 4,
  };

  function getTotalDuration(seq: string) {
    let total = 0;
    seq.split("").forEach((val) => {
      total += mapping[val];
    });
    return total;
  }

  function getMax(sequences: string[]) {
    let max = { index: 0, duration: 0 };
    sequences.forEach((seq, index) => {
      const duration = getTotalDuration(seq);
      if (duration > max.duration) {
        max = { index, duration };
      }
    });

    return max;
  }
  const maxSequence = getMax(sequences);
  const maxStorage = getMax(storages);

  const res =
    sequences[maxSequence.index] + storages[maxStorage.index] + "_" + (maxSequence.duration + maxStorage.duration);

  console.log(res);
})();
