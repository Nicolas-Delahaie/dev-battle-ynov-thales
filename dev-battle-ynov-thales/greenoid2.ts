"use strict";
// https://tainix.fr/sandbox/play/GREENOID_2

(() => {
  // NE PAS TOUCHER
  const positionX: number = 98;
  const positionY: number = 72;
  const logs: string = "WPNHEEEWNNSNWDSSSENNWWNHSEEDENEHESNWENDEW";
  // NE PAS TOUCHER

  let coords = { x: positionX, y: positionY };
  const mappings = {
    E: { direction: "x", addend: -1 },
    W: { direction: "x", addend: +1 },
    N: { direction: "y", addend: -1 },
    S: { direction: "y", addend: +1 },
  };

  logs
    .split("")
    .reverse()
    .forEach((letter) => {
      const mapping = mappings[letter];

      if (mapping) {
        // Letter is a direction// Letter is a direction
        coords[mapping.direction] += mapping.addend;
      }
    });
  console.log(coords.x + "_" + coords.y);
})();
