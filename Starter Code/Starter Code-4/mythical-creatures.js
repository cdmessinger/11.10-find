const mythicalCreatures = [
     { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
     { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
     { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
     { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
     { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];

// use find to find the first water type creature and log its name

const findWaterCreature = mythicalCreatures.find(function (creature) {
     if (creature.type === "Water") {
          return creature;
     }
});

// use findIndex to locate the idx of Griffin

const findGriffinIdx = mythicalCreatures.findIndex(function (creature) {
     if (creature.name === "Griffin") {
          return creature;
     }
});

// use find to locate the first creature last seen in the "enchanted forest"

const findForestCreature = mythicalCreatures.find(function (creature) {
     if (creature.lastSeen === "Enchanted Forest") {
          return creature;
     }
});
