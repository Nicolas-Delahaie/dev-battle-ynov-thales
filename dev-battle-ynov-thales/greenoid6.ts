"use strict";
// https://tainix.fr/sandbox/play/GREENOID_6

(() => {
  // NE PAS TOUCHER
  const flux: string[] = ["V1A:1526", "V1B:2208", "V1C:1343"];
  const network: string[] = [
    "V1A:V2D,V2B",
    "V1B:V2A,V2D",
    "V1C:V2A,V2D",
    "V2A:V3F,V3D,V3A",
    "V2B:V3C,V3E,V3G,V3B",
    "V2C:V3F,V3G,V3B",
    "V2D:V3F,V3C,V3D",
    "V3A:V4F,V4I,V4E,V4G,V4K,V4L",
    "V3B:V4L,V4K,V4I,V4A,V4B",
    "V3C:V4K,V4C,V4E,V4D",
    "V3D:V4F,V4C,V4G,V4D,V4K",
    "V3E:V4E,V4K,V4H,V4G,V4L,V4I",
    "V3F:V4D,V4E,V4K,V4H",
    "V3G:V4E,V4C,V4I,V4D,V4H,V4K",
  ];
  // NE PAS TOUCHER

  class Node {
    name: string;
    childs: Node[] = [];
    depth: number;
    intensity: number;

    constructor(name: string, intensity?: number) {
      this.name = name;
      this.intensity = intensity;
    }

    setDepthRecursive(depth: number) {
      this.depth = depth;
      this.childs.forEach((child) => {
        child.setDepthRecursive(depth + 1);
      });
    }

    find(name: string): Node | null {
      if (this.name === name) return this;

      for (let child of this.childs) {
        const res = child.find(name);
        if (res !== null) return res;
      }
      return null;
    }
  }

  const rootNode = new Node("root");

  flux.forEach((string) => {
    const [name, intensityStr] = string.split(":");
    rootNode.childs.push(new Node(name, parseInt(intensityStr)));
  });

  network.forEach((string) => {
    const [name, childsStr] = string.split(":");
    const childs = childsStr.split(",");
    let node = rootNode.find(name);
    if (!node) {
      node = new Node(name);
      rootNode.childs.push(node);
    }

    childs.forEach((childName) => {
      const child = rootNode.find(childName);
      node.childs.push(child ?? new Node(childName));
    });
  });

  rootNode.setDepthRecursive(0);

  console.log(rootNode);
  console.log(rootNode.find("V1A"));

  console.log("coucou");
})();
