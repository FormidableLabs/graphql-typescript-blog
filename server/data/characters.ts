export interface Character {
  id: number;
  name: string;
  isFemale: boolean;
  culture?: string;
  titles?: string[];
  aliases?: string[];
  born?: string;
  died?: string;
  fatherId?: number;
  motherId?: number;
  spouseId?: number;
  childrenIds?: number[];
  allegiances?: number[];
  bookIds?: number[];
  playedBy?: string[];
  tvSeries?: string[];
}

export const characters: Character[] = [
  {
    id: 1,
    name: "",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: ["The Daughter of the Dusk"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2,
    name: "Walder",
    isFemale: false,
    
    titles: [],
    aliases: ["Hodor"],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Kristian Nairn"],
    tvSeries: ["Season 1", "Season 2", "Season 3", "Season 4", "Season 6"]
  },
  {
    id: 3,
    name: "",
    isFemale: false,
    
    titles: [],
    aliases: ["Lamprey"],
    
    

    childrenIds: [],
    allegiances: [15],
    bookIds: [3]
  },
  {
    id: 4,
    name: "",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: ["The Merling Queen"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 5,
    name: "",
    isFemale: false,
    
    titles: [],
    aliases: ["Old Crackbones"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 6,
    name: "",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: ["The Poetess"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 7,
    name: "",
    isFemale: true,
    
    titles: [],
    aliases: ["Porridge"],
    
    

    childrenIds: [],
    allegiances: [15],
    bookIds: [3]
  },
  {
    id: 8,
    name: "",
    isFemale: false,
    
    titles: [],
    aliases: ["Quickfinger"],
    
    

    childrenIds: [],
    allegiances: [23],
    bookIds: [6]
  },
  {
    id: 9,
    name: "",
    isFemale: true,
    
    titles: [],
    aliases: ["the Sailor's Wife"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 10,
    name: "",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: ["The Veiled Lady"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 11,
    name: "",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: ["The waif"],
    born: "In 263 AC or 264 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8],

    playedBy: ["Faye Marsay"],
    tvSeries: ["Season 5", "Season 6"]
  },
  {
    id: 12,
    name: "Balon Greyjoy",
    isFemale: false,
    
    titles: [
      "Iron King",
      "King of the Isles and the North",
      "King of Salt and Rock",
      "Son of the Sea Wind",
      "Lord Reaper of Pyke",
      "The Greyjoy",
      "Captain of the Great Kraken"
    ],
    aliases: [
      "Balon the Brave",
      "Balon the Blessed",
      "Balon the Twice Crowned",
      "Balon the Widowmaker",
      "The Kraken King"
    ],
    
    died: "299 AC, at Pyke",
    fatherId: 836,

    spouseId: 66,
    childrenIds: [913, 718, 150, 1022],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Patrick Malahide"],
    tvSeries: ["Season 2", "Season 3", "Season 6"]
  },
  {
    id: 13,
    name: "Chayle",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3]
  },
  {
    id: 14,
    name: "Gillam",
    isFemale: false,
    
    titles: ["Brother"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 15,
    name: "High Septon",
    isFemale: false,
    
    titles: [
      "High Septon",
      "His High Holiness",
      "Father of the Faithful",
      "Voice of the Seven on Earth"
    ],
    aliases: ["The High Sparrow"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8],

    playedBy: ["Jonathan Pryce"],
    tvSeries: ["Season 5", "Season 6"]
  },
  {
    id: 16,
    name: "Margaery Tyrell",
    isFemale: true,
    culture: "Westeros",
    titles: ["Queen of the Seven Kingdoms"],
    aliases: ["The Little Queen", "The Little Rose", "Maid Margaery"],
    born: "In 283 AC, at Highgarden",
    

    spouseId: 862,
    childrenIds: [],
    allegiances: [398],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Natalie Dormer"],
    tvSeries: ["Season 2", "Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 17,
    name: "Melicent",
    isFemale: true,
    
    titles: ["Septa"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 18,
    name: "Meribald",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    born: "In 247 AC or 248 AC, at the riverlands",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 19,
    name: "Moelle",
    isFemale: true,
    
    titles: ["Septa"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 20,
    name: "Mordane",
    isFemale: true,
    
    titles: ["Septa"],
    aliases: [],
    
    died: "In 298 AC, at King's Landing",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3],

    playedBy: ["Susan Brown"],
    tvSeries: ["Season 1"]
  },
  {
    id: 21,
    name: "Nysterica",
    isFemale: true,
    
    titles: ["Septa"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 22,
    name: "Ollidor",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 23,
    name: "Osmynd",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 24,
    name: "Raynard",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 25,
    name: "Scolera",
    isFemale: true,
    
    titles: ["Septa"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 26,
    name: "Torbert",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 27,
    name: "Tywin Lannister",
    isFemale: false,
    
    titles: [
      "Lord of Casterly Rock",
      "Shield of Lannisport",
      "Warden of the West",
      "Hand of the King",
      "Savior of the City (of King's Landing)"
    ],
    aliases: [
      "The Lion of Lannister",
      "The Old Lion",
      "The Great Lion of the Rock"
    ],
    born: "In 242 AC",
    died: "In 300 AC, at King's Landing",

    spouseId: 562,
    childrenIds: [],
    allegiances: [229],
    bookIds: [1, 2, 3, 5, 8, 11],

    playedBy: ["Charles Dance"],
    tvSeries: ["Season 1", "Season 2", "Season 3", "Season 4"]
  },
  {
    id: 28,
    name: "Unella",
    isFemale: true,
    
    titles: ["Septa"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8],

    playedBy: ["Hannah Waddingham"],
    tvSeries: ["Season 5", "Season 6"]
  },
  {
    id: 29,
    name: "Abelar Hightower",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [195],
    bookIds: [4]
  },
  {
    id: 30,
    name: "Addam Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [7]
  },
  {
    id: 31,
    name: "Addam Marbrand",
    isFemale: false,
    
    titles: ["Ser", "Commander of the City Watch"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [258],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["B.J. Hogg"],
    tvSeries: ["Season 1"]
  },
  {
    id: 32,
    name: "Addam Osgrey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 183 AC or 184 AC",
    died: "In 196 AC, at Redgrass Field",

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 33,
    name: "Addam Velaryon",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Ser"],
    aliases: ["Addam of Hull"],
    born: "In 114 AC, at Hull",
    died: "In 130 AC, at Tumbleton",

    childrenIds: [],
    allegiances: [407, 378],
    bookIds: [11, 9]
  },
  {
    id: 34,
    name: "Addison Hill",
    isFemale: false,
    
    titles: ["Ser", "Lord Commander of the Kingsguard"],
    aliases: ["The Bastard of Cornfield"],
    born: "At Cornfield",
    

    childrenIds: [],
    allegiances: [374],
    bookIds: [11, 5]
  },
  {
    id: 35,
    name: "Aegon Blackfyre",
    isFemale: false,
    culture: "Valyrian",
    titles: [],
    aliases: [],
    born: "In 184 AC",
    died: "In 196 AC, at Redgrass Field",

    childrenIds: [],
    allegiances: [23],
    bookIds: [6, 7, 3]
  },
  {
    id: 36,
    name: "Aegon Frey",
    isFemale: false,
    
    titles: [],
    aliases: ["Jinglebell"],
    born: "In 249 AC (roughly)",
    died: "In 299 AC, at the Twins",

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 37,
    name: "Aegon Frey",
    isFemale: false,
    
    titles: [],
    aliases: ["Aegon Bloodborn"],
    born: "In or between 253 AC and 272 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 38,
    name: "Aegon I",
    isFemale: false,
    
    titles: [
      "King of All Westeros",
      "Shield of His People",
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm",
      "Lord of Dragonstone"
    ],
    aliases: [
      "Aegon the Conqueror",
      "Aegon the Dragon",
      "Aegon the Dragonlord"
    ],
    born: "27 BC, at Dragonstone",
    died: "37 AC, at Dragonstone",
    fatherId: 59,
    motherId: 1070,
    spouseId: 2071,
    childrenIds: [57, 694],
    allegiances: [],
    bookIds: [11, 9, 4, 6, 7, 1, 2, 3, 5, 8]
  },
  {
    id: 39,
    name: "Aegon II",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    aliases: ["Aegon the Elder", "Aegon the Usurper"],
    born: "107 AC, at King's Landing",
    died: "131 AC, at King's Landing",
    fatherId: 1076,
    motherId: 76,
    spouseId: 488,
    childrenIds: [1528, 1527, 696],
    allegiances: [],
    bookIds: [11, 10, 9, 1, 3, 5]
  },
  {
    id: 40,
    name: "Aegon III",
    isFemale: false,
    culture: "Valyrian",
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    aliases: [
      "Aegon the Younger",
      "Aegon the Dragonbane",
      "Aegon the Unlucky",
      "The Broken King"
    ],
    born: "120 AC, at Dragonstone",
    died: "157 AC, at King's Landing",
    fatherId: 269,
    motherId: 874,
    spouseId: 1527,
    childrenIds: [273, 160, 270, 872, 1358],
    allegiances: [],
    bookIds: [11, 10, 9, 4, 1, 3]
  },
  {
    id: 41,
    name: "Aegon IV",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    aliases: ["Aegon the Unworthy"],
    born: "135 AC, at King's Landing",
    died: "184 AC, at King's Landing",

    spouseId: 779,
    childrenIds: [274, 271, 267, 47, 1242, 1944],
    allegiances: [],
    bookIds: [11, 4, 7, 1, 3]
  },
  {
    id: 42,
    name: "Aegon Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: [],
    aliases: ["Young Griff"],
    born: "In 281 AC or 282 AC, at Dragonstone",
    died: "In 283 AC (Supposedly), at King's Landing",

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 1, 2, 3, 5, 8]
  },
  {
    id: 43,
    name: "Aegon Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Prince"],
    aliases: [],
    born: "In 26 AC",
    died: "In 43 AC, at Gods Eye",

    spouseId: 873,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11]
  },
  {
    id: 44,
    name: "Aegon Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Prince"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [11]
  },
  {
    id: 45,
    name: "Aegon Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Prince"],
    aliases: [],
    born: "In or between 50 AC and 59 AC",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [11]
  },
  {
    id: 46,
    name: "Aegon V",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    aliases: [
      "Aegon the Unlikely",
      "Aegon the Fortunate",
      "The Prince Who Was An Eggg"
    ],
    born: "200 AC, at King's Landing",
    died: "259 AC, at Summerhall",
    fatherId: 695,
    motherId: 334,
    spouseId: 195,
    childrenIds: [330, 527, 971, 870],
    allegiances: [],
    bookIds: [4, 6, 7, 11, 1, 2, 3, 5, 8]
  },
  {
    id: 47,
    name: "Aegor Rivers",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Bittersteel"],
    born: "In 172 AC",
    died: "In 241 AC, at the Disputed Lands",

    spouseId: 226,
    childrenIds: [],
    allegiances: [37, 23],
    bookIds: [6, 7, 5, 8, 11]
  },
  {
    id: 48,
    name: "Aelinor Penrose",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Queen"],
    aliases: [],
    
    

    spouseId: 61,
    childrenIds: [],
    allegiances: [300, 378],
    bookIds: [11, 6]
  },
  {
    id: 49,
    name: "Aemma Arryn",
    isFemale: true,
    
    titles: ["Queen"],
    aliases: [],
    born: "In 82 AC",
    died: "In 105 AC",

    spouseId: 1076,
    childrenIds: [],
    allegiances: [7, 378],
    bookIds: [11, 10, 9]
  },
  {
    id: 50,
    name: "Aemon Blackfyre",
    isFemale: false,
    culture: "Valyrian",
    titles: [],
    aliases: [],
    born: "In 184 AC",
    died: "In 196 AC, at Redgrass Field",

    childrenIds: [],
    allegiances: [23],
    bookIds: [6, 7, 3]
  },
  {
    id: 51,
    name: "Aemon Costayne",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [83],
    bookIds: [3]
  },
  {
    id: 52,
    name: "Aemon Estermont",
    isFemale: false,
    culture: "Stormlands",
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [117],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 53,
    name: "Aemon Rivers",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 54,
    name: "Aemon Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Maester"],
    aliases: ["Aemon Targaryen", "Maester Aemon", "Uncle Maester"],
    born: "In 198 AC, at King's Landing",
    died:
      "In 300 AC, at the Cinnamon Wind, off the coast of Dorne, at the Summer Sea",

    childrenIds: [],
    allegiances: [],
    bookIds: [4, 6, 7, 1, 2, 3, 5, 8],

    playedBy: ["Peter Vaughan"],
    tvSeries: ["Season 1", "Season 3", "Season 4", "Season 5"]
  },
  {
    id: 55,
    name: "Aemond Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Prince", "Protector of the Realm", "Prince Regent"],
    aliases: ["Aemond One-Eye Aemond the Kinslayer"],
    born: "In 110 AC",
    died: "In 130 AC, at the Gods Eye",

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 10, 9, 8]
  },
  {
    id: 56,
    name: "Aenys Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 240 AC and 247 AC",
    died: "In 300 AC, at Near Winterfell",

    spouseId: 1045,
    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 57,
    name: "Aenys I",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    aliases: [],
    born: "7 AC, at Dragonstone",
    died: "42 AC, at Dragonstone",
    fatherId: 38,
    motherId: 1874,
    spouseId: 110,
    childrenIds: [873, 43, 526, 105],
    allegiances: [],
    bookIds: [11, 1]
  },
  {
    id: 58,
    name: "Aerion Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Prince"],
    aliases: [
      "Brightflame",
      "Aerion the Monstrous",
      "The Bright Prince",
      "The Prince Who Thought He Was a Dragon"
    ],
    born: "In or between 191 AC and 194 AC",
    died: "In 232 AC",

    spouseId: 272,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 4, 6, 7, 2, 3, 8]
  },
  {
    id: 59,
    name: "Aerion Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Lord of Dragonstone"],
    aliases: [],
    born: "At Dragonstone",
    died: "At Dragonstone",

    spouseId: 1070,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11]
  },
  {
    id: 60,
    name: "Aeron Greyjoy",
    isFemale: false,
    culture: "Ironborn",
    titles: [
      "Priest of the Drowned God",
      "Captain of the Golden Storm (formerly)"
    ],
    aliases: ["The Damphair", "Aeron Damphair"],
    born: "In or between 269 AC and 273 AC, at Pyke",
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [1, 2, 3, 8],

    playedBy: ["Michael Feast"],
    tvSeries: ["Season 6"]
  },
  {
    id: 61,
    name: "Aerys I",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar, and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    aliases: [],
    born: "or between 172 AC and 176 AC, at King's Landing",
    died: "221 AC",
    fatherId: 274,
    motherId: 709,
    spouseId: 48,
    childrenIds: [],
    allegiances: [],
    bookIds: [11, 4, 6, 7, 1]
  },
  {
    id: 62,
    name: "Aerys II",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    aliases: ["The Mad King", "King Scab"],
    born: "244 AC, at King's Landing",
    died: "283 AC, at the Red Keep in King's Landing",
    fatherId: 527,
    motherId: 971,
    spouseId: 869,
    childrenIds: [867, 1079, 1303],
    allegiances: [],
    bookIds: [11, 1, 2, 3, 5, 8],

    playedBy: ["David Rintoul"],
    tvSeries: ["Season 6"]
  },
  {
    id: 63,
    name: "Aglantine",
    isFemale: true,
    
    titles: ["Septa"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 64,
    name: "Aladale Wynch",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Ser"],
    aliases: [],
    
    died: "In 300 AC, at Bridge of Skulls",

    childrenIds: [],
    allegiances: [439],
    bookIds: [2, 3]
  },
  {
    id: 65,
    name: "Alan",
    isFemale: false,
    
    titles: [],
    aliases: ["Alan o' the Oak", "The Blind Bowman"],
    born: "In Age of Heroes",
    

    childrenIds: [],
    allegiances: [443],
    bookIds: [11]
  },
  {
    id: 66,
    name: "Alannys Harlaw",
    isFemale: true,
    culture: "Ironborn",
    titles: ["Queen of the Iron Islands"],
    aliases: ["Lanny"],
    
    

    spouseId: 12,
    childrenIds: [],
    allegiances: [169, 178],
    bookIds: [1, 2, 5, 8]
  },
  {
    id: 67,
    name: "Albar Royce",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [329],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 68,
    name: "Alekyne Florent",
    isFemale: false,
    
    titles: ["Lord of Brightwater (attainted)"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [133],
    bookIds: [2, 3, 5]
  },
  {
    id: 69,
    name: "Alerie Hightower",
    isFemale: true,
    
    titles: ["Lady of Highgarden"],
    aliases: [],
    born: "In or between 257 AC and 263 AC, at Oldtown",
    

    spouseId: 691,
    childrenIds: [],
    allegiances: [195, 398],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 70,
    name: "Alesander Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 265 AC and 281 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 71,
    name: "Alesander Staedmon",
    isFemale: false,
    
    titles: ["Lord of Broad Arch"],
    aliases: ["the Pennylover"],
    
    

    childrenIds: [],
    allegiances: [360],
    bookIds: [2, 3, 5]
  },
  {
    id: 72,
    name: "Alester Florent",
    isFemale: false,
    
    titles: ["Lord of Brightwater", "Hand of the King"],
    aliases: [],
    born: "At Brightwater Keep",
    died: "In 300 AC, at Dragonstone",

    spouseId: 738,
    childrenIds: [],
    allegiances: [133],
    bookIds: [2, 3, 8]
  },
  {
    id: 73,
    name: "Alester Norcross",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 290 AC or 291 AC",
    

    childrenIds: [],
    allegiances: [281],
    bookIds: [2, 3, 5]
  },
  {
    id: 74,
    name: "Alester Oakheart",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At Prince's Pass",

    childrenIds: [],
    allegiances: [286],
    bookIds: [5]
  },
  {
    id: 75,
    name: "Alester Tyrell",
    isFemale: false,
    culture: "Andal",
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [398, 145],
    bookIds: [11]
  },
  {
    id: 76,
    name: "Alicent Hightower",
    isFemale: true,
    
    titles: ["Lady", "Queen", "Dowager Queen"],
    aliases: [],
    born: "In 88 AC",
    died: "In 133 AC",

    spouseId: 1076,
    childrenIds: [],
    allegiances: [195, 378],
    bookIds: [11, 10, 9]
  },
  {
    id: 77,
    name: "Alla Tyrell",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In or around 286 AC (roughly)",
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5, 8]
  },
  {
    id: 78,
    name: "Allar Deem",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at The Narrow Sea",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3]
  },
  {
    id: 79,
    name: "Alliser Thorne",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In 248 AC (roughly)",
    

    childrenIds: [],
    allegiances: [386],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Owen Teale"],
    tvSeries: ["Season 1", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 80,
    name: "Allyria Dayne",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [99],
    bookIds: [3]
  },
  {
    id: 81,
    name: "Alyce Graceford",
    isFemale: true,
    
    titles: ["Lady"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [159],
    bookIds: [3, 5, 8]
  },
  {
    id: 82,
    name: "Alyn Ambrose",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [4],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 83,
    name: "Alyn Cockshaw",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    died: "In 211 AC, at Whitewalls",

    childrenIds: [],
    allegiances: [74, 23],
    bookIds: [11, 7]
  },
  {
    id: 84,
    name: "Alyn Connington",
    isFemale: false,
    
    titles: ["Ser", "Lord Commander of the Kingsguard"],
    aliases: ["The Pale Griffin"],
    
    

    childrenIds: [],
    allegiances: [80],
    bookIds: [3, 5]
  },
  {
    id: 85,
    name: "Alyn Estermont",
    isFemale: false,
    culture: "Stormlands",
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [117],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 86,
    name: "Alyn Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 295 AC or 296 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 87,
    name: "Alyn Haigh",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 256 AC or 291 AC",
    

    childrenIds: [],
    allegiances: [172],
    bookIds: [2, 3, 5]
  },
  {
    id: 88,
    name: "Alyn Hunt",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [206],
    bookIds: [5]
  },
  {
    id: 89,
    name: "Alyn Stackspear",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [359],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 90,
    name: "Alyn Tarbeck",
    isFemale: false,
    
    titles: ["Lord of Tarbeck Hall"],
    aliases: [],
    
    died: "In 43 AC, at Gods Eye",

    spouseId: 560,
    childrenIds: [],
    allegiances: [377],
    bookIds: [11]
  },
  {
    id: 91,
    name: "Alyn Velaryon",
    isFemale: false,
    culture: "Valyrian",
    titles: [
      "Lord of the Tides",
      "Master of Driftmark",
      "Admiral",
      "Master of ships"
    ],
    aliases: ["Alyn of Hull", "The Oakenfist", "Lord Oakenfist"],
    born: "In 115 AC or later, at Hull, Driftmark",
    died: "In or between 171 AC and 176 AC, at sea",

    spouseId: 154,
    childrenIds: [],
    allegiances: [407, 378],
    bookIds: [11, 9, 5, 8]
  },
  {
    id: 92,
    name: "Alys Arryn",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In or between 218 AC and 249 AC",
    

    spouseId: 373,
    childrenIds: [],
    allegiances: [7, 417],
    bookIds: [5]
  },
  {
    id: 93,
    name: "Alys Arryn",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 868,
    childrenIds: [],
    allegiances: [7, 378],
    bookIds: [11]
  },
  {
    id: 94,
    name: "Alys Beesbury",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 624,
    childrenIds: [],
    allegiances: [18],
    bookIds: [3, 5]
  },
  {
    id: 95,
    name: "Alys Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 535,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 96,
    name: "Alys Karstark",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "In 284 AC or 285 AC, at Karhold",
    

    spouseId: 980,
    childrenIds: [],
    allegiances: [215, 385],
    bookIds: [3, 5, 8]
  },
  {
    id: 97,
    name: "Alys Karstark",
    isFemale: true,
    culture: "Northmen",
    titles: ["Lady of Winterfell"],
    aliases: [],
    
    

    spouseId: 207,
    childrenIds: [],
    allegiances: [215, 362],
    bookIds: [11]
  },
  {
    id: 98,
    name: "Alys Karstark",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    spouseId: 143,
    childrenIds: [],
    allegiances: [215, 362],
    bookIds: [11]
  },
  {
    id: 99,
    name: "Alysane Mormont",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: ["The Young She-Bear"],
    born: "In or between ~273 AC and 278 AC",
    

    childrenIds: [],
    allegiances: [271],
    bookIds: [5, 8]
  },
  {
    id: 100,
    name: "Alysanne Bulwer",
    isFemale: true,
    
    titles: ["Lady of Blackcrown"],
    aliases: [],
    born: "In 291 AC",
    

    childrenIds: [],
    allegiances: [52],
    bookIds: [3, 5, 8]
  },
  {
    id: 101,
    name: "Alysanne Farman",
    isFemale: true,
    
    titles: ["Lady"],
    aliases: [],
    
    

    spouseId: 422,
    childrenIds: [],
    allegiances: [120, 229],
    bookIds: [11]
  },
  {
    id: 102,
    name: "Alysanne Hightower",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 141,
    childrenIds: [],
    allegiances: [195, 4],
    bookIds: [5]
  },
  {
    id: 103,
    name: "Alysanne Lefford",
    isFemale: true,
    
    titles: ["Lady of Golden Tooth"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [234],
    bookIds: [5, 8]
  },
  {
    id: 104,
    name: "Alysanne Osgrey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 188 AC or 189 AC",
    died: "In 209 AC, at King's Landing",

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 105,
    name: "Alysanne Targaryen",
    isFemale: true,
    
    titles: ["Queen"],
    aliases: ["Good Queen Alysanne"],
    born: "36 AC",
    died: "99 AC or 100 AC",
    fatherId: 57,
    motherId: 110,
    spouseId: 526,
    childrenIds: [45, 109, 157, 265, 951],
    allegiances: [],
    bookIds: [11, 10, 3]
  },
  {
    id: 106,
    name: "Alysanne Tarth",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [380],
    bookIds: [5]
  },
  {
    id: 107,
    name: "Alyssa Arryn",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [7],
    bookIds: [1]
  },
  {
    id: 108,
    name: "Alyssa Blackwood",
    isFemale: true,
    
    titles: ["Lady"],
    aliases: [],
    born: "In 253 AC or before",
    died: "In or between 269 AC and 278 AC",

    spouseId: 1093,
    childrenIds: [],
    allegiances: [27, 143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 109,
    name: "Alyssa Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess"],
    aliases: [],
    born: "In or between 51 AC and 60 AC",
    

    spouseId: 157,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11]
  },
  {
    id: 110,
    name: "Alyssa Velaryon",
    isFemale: true,
    culture: "Valyrian",
    titles: [
      "Lady",
      "Queen",
      "Dowager Queen",
      "Queen Regent",
      "Lady of Storm's End"
    ],
    aliases: [],
    born: "In 7 AC",
    

    spouseId: 57,
    childrenIds: [],
    allegiances: [407, 378, 17],
    bookIds: [11]
  },
  {
    id: 111,
    name: "Alyx Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 282 AC",
    
    fatherId: 1004,
    motherId: 1217,

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 112,
    name: "Amarei Crakehall",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 245 AC or before",
    died: "In 264 AC",

    spouseId: 1093,
    childrenIds: [],
    allegiances: [86, 143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 113,
    name: "Ambrose Butterwell",
    isFemale: false,
    
    titles: ["Lord of Whitewalls", "Hand of the King"],
    aliases: ["Old Milkblood", "The lord of cows", "Lord Butterbutt"],
    born: "In 160 AC or 161 AC",
    

    spouseId: 2054,
    childrenIds: [],
    allegiances: [55],
    bookIds: [6, 7]
  },
  {
    id: 114,
    name: "Amerei Frey",
    isFemale: true,
    
    titles: ["Lady of Darry"],
    aliases: ["Gatehouse Ami"],
    born: "In 282 AC",
    

    spouseId: 1799,
    childrenIds: [],
    allegiances: [143, 230],
    bookIds: [2, 3, 5]
  },
  {
    id: 115,
    name: "Amory Lorch",
    isFemale: false,
    
    titles: ["Ser", "Castellan of Harrenhal"],
    aliases: ["The Manticore"],
    
    died: "In 299 AC, at Harrenhal",

    childrenIds: [],
    allegiances: [245, 229],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Fintan McKeown"],
    tvSeries: ["Season 2"]
  },
  {
    id: 116,
    name: "Andar Royce",
    isFemale: false,
    culture: "Valemen",
    titles: ["Ser"],
    aliases: [],
    born: "At Runestone",
    

    childrenIds: [],
    allegiances: [328],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 117,
    name: "Anders Yronwood",
    isFemale: false,
    
    titles: ["Lord of Yronwood", "The Bloodroyal", "Warden of the Stone Way"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [444],
    bookIds: [3, 5, 8]
  },
  {
    id: 118,
    name: "Andrew Estermont",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [117],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 119,
    name: "Andrey Charlton",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at the Riverlands",

    childrenIds: [],
    allegiances: [68],
    bookIds: [2]
  },
  {
    id: 120,
    name: "Andros Brax",
    isFemale: false,
    
    titles: ["Lord of Hornvale"],
    aliases: [],
    
    died: "In 298 AC, at Riverrun",

    childrenIds: [],
    allegiances: [40],
    bookIds: [1, 3]
  },
  {
    id: 121,
    name: "Androw Ashford",
    isFemale: false,
    culture: "Reach",
    titles: ["Ser"],
    aliases: [],
    born: "At Ashford",
    

    childrenIds: [],
    allegiances: [8],
    bookIds: [4]
  },
  {
    id: 122,
    name: "Androw Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 295 AC or 296 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 123,
    name: "Annara Farring",
    isFemale: true,
    
    titles: ["Lady"],
    aliases: [],
    
    

    spouseId: 1093,
    childrenIds: [],
    allegiances: [121, 143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 124,
    name: "Antario Jast",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    

    spouseId: 616,
    childrenIds: [],
    allegiances: [212],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 125,
    name: "Anya Waynwood",
    isFemale: true,
    
    titles: ["Lady of Ironoaks"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [417],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Paola Dionisotti"],
    tvSeries: ["Season 4"]
  },
  {
    id: 126,
    name: "Archibald Yronwood",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Big Man", "Ser Greenguts"],
    
    

    childrenIds: [],
    allegiances: [444],
    bookIds: [8]
  },
  {
    id: 127,
    name: "Ardrian Celtigar",
    isFemale: false,
    
    titles: ["Lord of Claw Isle"],
    aliases: ["the Red Crab"],
    born: "In 229 AC or later",
    

    childrenIds: [],
    allegiances: [65],
    bookIds: [2, 3]
  },
  {
    id: 128,
    name: "Argella Durrandon",
    isFemale: true,
    
    titles: ["Princess", "Storm Queen", "Lady of Storm's End"],
    aliases: [],
    
    

    spouseId: 797,
    childrenIds: [],
    allegiances: [109, 17],
    bookIds: [11, 1]
  },
  {
    id: 129,
    name: "Argilac Durrandon",
    isFemale: false,
    
    titles: ["Storm King"],
    aliases: ["Argilac the Arrogant"],
    
    died: "2 BC, at south of Bronzegate in the Last Storm",

    childrenIds: [128],
    allegiances: [],
    bookIds: [11, 1]
  },
  {
    id: 130,
    name: "Arianne Martell",
    isFemale: true,
    culture: "Dornish",
    titles: ["Princess of Dorne"],
    aliases: [],
    born: "In 276 AC, at Sunspear",
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [1, 2, 3, 8]
  },
  {
    id: 131,
    name: "Arianne Tarth",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [380],
    bookIds: [5]
  },
  {
    id: 132,
    name: "Arlan of Pennytree",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 149 AC and 153 AC, at Pennytree",
    died: "In 209 AC, at the Reach",

    childrenIds: [],
    allegiances: [],
    bookIds: [4, 6, 7]
  },
  {
    id: 133,
    name: "Armond Caswell",
    isFemale: false,
    
    titles: ["Lord of Bitterbridge"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [63],
    bookIds: [7]
  },
  {
    id: 134,
    name: "Arnolf Karstark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Castellan of Karhold"],
    aliases: ["Lord Arnolf"],
    born: "At Karhold",
    

    childrenIds: [],
    allegiances: [215],
    bookIds: [5, 8]
  },
  {
    id: 135,
    name: "Aron Santagar",
    isFemale: false,
    culture: "Dornish",
    titles: ["Ser", "Master-at-arms of the Red Keep"],
    aliases: [],
    
    died: "In 299 AC, at King's Landing",

    childrenIds: [],
    allegiances: [337],
    bookIds: [1, 2, 5]
  },
  {
    id: 136,
    name: "Arra Norrey",
    isFemale: true,
    culture: "Northern mountain clans",
    titles: ["Lady of Winterfell"],
    aliases: [],
    
    

    spouseId: 259,
    childrenIds: [],
    allegiances: [282, 362],
    bookIds: [11]
  },
  {
    id: 137,
    name: "Arrec Durrandon",
    isFemale: false,
    
    titles: ["Storm King"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 1]
  },
  {
    id: 138,
    name: "Arron Qorgyle",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [311],
    bookIds: [3, 5]
  },
  {
    id: 139,
    name: "Arstan Selmy",
    isFemale: false,
    culture: "Westeros",
    titles: ["Lord of Harvest Hall"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [341],
    bookIds: [8]
  },
  {
    id: 140,
    name: "Arthor Karstark",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [215],
    bookIds: [8]
  },
  {
    id: 141,
    name: "Arthur Ambrose",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    

    spouseId: 102,
    childrenIds: [],
    allegiances: [4],
    bookIds: [3, 5, 8]
  },
  {
    id: 142,
    name: "Arthur Dayne",
    isFemale: false,
    
    titles: ["Ser", "Sword of the Morning"],
    aliases: [],
    
    died: "In 283 AC, at the Tower of Joy",

    childrenIds: [],
    allegiances: [99],
    bookIds: [1, 2, 3, 5, 8, 11],

    playedBy: ["Luke Roberts"],
    tvSeries: ["Season 6"]
  },
  {
    id: 143,
    name: "Artos Stark",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: ["Artos the Implacable"],
    
    

    spouseId: 98,
    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 2, 8]
  },
  {
    id: 144,
    name: "Artys I Arryn",
    isFemale: false,
    culture: "Andal",
    titles: ["King of Mountain and Vale", "Ser"],
    aliases: ["Falcon Knight", "Winged Knight"],
    born: ", at Giant's Lance",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 145,
    name: "Arwood Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 263 AC and 281 AC",
    
    fatherId: 501,
    motherId: 173,
    spouseId: 948,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 146,
    name: "Arwyn Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 285 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 147,
    name: "Arwyn Oakheart",
    isFemale: true,
    
    titles: ["Lady of Old Oak"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [286],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 148,
    name: "Arya Stark",
    isFemale: true,
    culture: "Northmen",
    titles: ["Princess"],
    aliases: [
      "Arya Horseface",
      "Arya Underfoot",
      "Arry",
      "Lumpyface",
      "Lumpyhead",
      "Stickboy",
      "Weasel",
      "Nymeria",
      "Squan",
      "Saltb",
      "Cat of the Canaly",
      "Bets",
      "The Blind Girh",
      "The Ugly Little Girl",
      "Mercedenl",
      "Mercye"
    ],
    born: "In 289 AC, at Winterfell",
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [],

    playedBy: ["Maisie Williams"],
    tvSeries: [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ]
  },
  {
    id: 149,
    name: "Arys Oakheart",
    isFemale: false,
    culture: "Reach",
    titles: ["Ser"],
    aliases: [],
    born: "At Old Oak",
    died: "In 300 AC, at the Greenblood",

    childrenIds: [],
    allegiances: [286],
    bookIds: [1, 2, 3, 8]
  },
  {
    id: 150,
    name: "Asha Greyjoy",
    isFemale: true,
    culture: "Ironborn",
    titles: [
      "Princess",
      "Captain of the Black Wind",
      "Conqueror of Deepwood Motte"
    ],
    aliases: ["Esgred", "The Kraken's Daughter"],
    born: "In 275 AC or 276 AC, at Pyke",
    

    spouseId: 1372,
    childrenIds: [],
    allegiances: [169, 210],
    bookIds: [1, 2],

    playedBy: ["Gemma Whelan"],
    tvSeries: ["Season 2", "Season 3", "Season 4"]
  },
  {
    id: 151,
    name: "Ashara Dayne",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    died: "In 283 AC, at Starfall",

    childrenIds: [],
    allegiances: [99],
    bookIds: [1, 2, 3, 8]
  },
  {
    id: 152,
    name: "Aubrey Ambrose",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [4],
    bookIds: [6]
  },
  {
    id: 153,
    name: "Axell Florent",
    isFemale: false,
    
    titles: ["Ser", "Hand of the Queen (self-styled)"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [133],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 154,
    name: "Baela Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Lady"],
    aliases: [],
    born: "In 116 AC, at Pentos",
    

    spouseId: 91,
    childrenIds: [],
    allegiances: [378, 407],
    bookIds: [11, 10, 9]
  },
  {
    id: 155,
    name: "Baelon Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: [],
    aliases: [],
    born: "At Dragonstone",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [11]
  },
  {
    id: 156,
    name: "Baelon Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Prince"],
    aliases: ["Heir for a Day"],
    born: "In 105 AC, at King's Landing",
    died: "In 105 AC, at King's Landing",

    childrenIds: [],
    allegiances: [378],
    bookIds: [10]
  },
  {
    id: 157,
    name: "Baelon Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Prince of Dragonstone", "Hand of the King"],
    aliases: ["Baelon the Brave", "The Spring Prince"],
    born: "In or between 53 AC and 64 AC",
    died: "In 101 AC",

    spouseId: 109,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 10, 9]
  },
  {
    id: 158,
    name: "Baelor Blacktyde",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Blacktyde", "Captain of the Nightflyer"],
    aliases: [],
    
    died: "In 300 AC, at Old Wyk",

    childrenIds: [],
    allegiances: [26],
    bookIds: [2, 3, 5]
  },
  {
    id: 159,
    name: "Baelor Hightower",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Baelor Brightsmile", "Baelor Breakwind"],
    born: "At Oldtown",
    

    spouseId: 880,
    childrenIds: [],
    allegiances: [195],
    bookIds: [3, 5]
  },
  {
    id: 160,
    name: "Baelor I",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    aliases: [
      "Baelor the Beloved",
      "Baelor the Blessed",
      "Baelor the Befuddled"
    ],
    born: "144 AC, at King's Landing",
    died: "171 AC, at King's Landing",
    fatherId: 40,
    motherId: 1302,
    spouseId: 270,
    childrenIds: [],
    allegiances: [],
    bookIds: [11, 6, 1, 3, 5, 8]
  },
  {
    id: 161,
    name: "Baelor Targaryen",
    isFemale: false,
    
    titles: [
      "Prince of Dragonstone",
      "Protector of the Realm",
      "Hand of the King"
    ],
    aliases: ["Baelor Breakspear", "The Hammer"],
    born: "In 170 AC",
    died: "In 209 AC, at Ashford",

    spouseId: 546,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 4, 6, 7, 3]
  },
  {
    id: 162,
    name: "Balman Byrch",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 300 AC, at Stokeworth",

    spouseId: 392,
    childrenIds: [],
    allegiances: [56],
    bookIds: [3, 5, 8]
  },
  {
    id: 163,
    name: "Balon Botley",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [36],
    bookIds: [5]
  },
  {
    id: 164,
    name: "Balon Swann",
    isFemale: false,
    culture: "Stormlands",
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [373],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 165,
    name: "Barba Bracken",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 155 AC",
    

    childrenIds: [],
    allegiances: [37],
    bookIds: [8, 11]
  },
  {
    id: 166,
    name: "Barbrey Dustin",
    isFemale: true,
    culture: "Northmen",
    titles: ["Lady of Barrowton"],
    aliases: [],
    
    

    spouseId: 1110,
    childrenIds: [],
    allegiances: [335, 111],
    bookIds: [5, 8]
  },
  {
    id: 167,
    name: "Barre",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 168,
    name: "Barristan Selmy",
    isFemale: false,
    culture: "Westeros",
    titles: ["Ser", "Hand of the Queen"],
    aliases: [
      "Barristan the Bold",
      "Arstan Whitebeard",
      "Ser Grandfather",
      "Barristan the Old",
      "Old Ser"
    ],
    born: "In 237 AC",
    

    childrenIds: [],
    allegiances: [341, 378],
    bookIds: [11, 1, 2, 3, 5],

    playedBy: ["Ian McElhinney"],
    tvSeries: ["Season 1", "Season 3", "Season 4", "Season 5"]
  },
  {
    id: 169,
    name: "Barth",
    isFemale: false,
    
    titles: ["Septon", "Hand of the King"],
    aliases: [],
    
    died: "In 99 AC",

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 10, 3, 5, 8]
  },
  {
    id: 170,
    name: "Barthogan Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Winterfell", "Warden of the North"],
    aliases: ["Barth Blacksword"],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 2]
  },
  {
    id: 171,
    name: "Bass",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 172,
    name: "Bayard Norcross",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [281],
    bookIds: [5, 8]
  },
  {
    id: 173,
    name: "Bellena Hawick",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 501,
    childrenIds: [],
    allegiances: [187, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 174,
    name: "Ben Bushy",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Big Ben"],
    
    died: "In 299 AC, at the Blackwater Rush",

    childrenIds: [],
    allegiances: [54],
    bookIds: [5]
  },
  {
    id: 175,
    name: "Ben Plumm",
    isFemale: false,
    
    titles: ["Commander of the Second Sons"],
    aliases: ["Brown Ben Plumm"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 176,
    name: "Benedar Belmore",
    isFemale: false,
    
    titles: ["Lord of Strongsong"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [19],
    bookIds: [5, 8]
  },
  {
    id: 177,
    name: "Benedict Broom",
    isFemale: false,
    
    titles: ["Ser", "Master-at-arms at Casterly Rock"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [46, 229],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 178,
    name: "Benedict I Justman",
    isFemale: false,
    culture: "Rivermen",
    titles: ["Ser", "King of the Trident"],
    aliases: ["Benedict Rivers", "Benedict the Bold", "Benedict the Just"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 179,
    name: "Benfred Tallhart",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "In After 281 AC",
    died: "In 299 AC, at Stony Shore",

    childrenIds: [],
    allegiances: [376],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 180,
    name: "Benfrey Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 271 AC and 279 AC",
    died: "In 299 AC, at the Twins",

    spouseId: 602,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 181,
    name: "Benjen Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["First Ranger"],
    aliases: ["The Wolf Pup", "Ben Stark"],
    born: "In 267 AC or later, at Winterfell",
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Joseph Mawle", "Matteo Elezi"],
    tvSeries: ["Season 1", "Season 6"]
  },
  {
    id: 182,
    name: "Benjen Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North", "Lord of Winterfell"],
    aliases: ["Benjen the Bitter"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 183,
    name: "Benjen Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North", "Lord of Winterfell"],
    aliases: ["Benjen the Sweet"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 184,
    name: "Bennard Brune",
    isFemale: false,
    
    titles: ["Ser", "The Knight of Brownhollow"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [48],
    bookIds: [5]
  },
  {
    id: 185,
    name: "Bennarion Botley",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [36],
    bookIds: [5]
  },
  {
    id: 186,
    name: "Bennis",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Bennis of the Brown Shield", "Bennis Brownstench"],
    
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 187,
    name: "Beony Beesbury",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 854,
    childrenIds: [],
    allegiances: [18, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 188,
    name: "Beren Tallhart",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "In 289 AC",
    

    childrenIds: [],
    allegiances: [376],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 189,
    name: "Berena Hornwood",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    spouseId: 625,
    childrenIds: [],
    allegiances: [202, 376],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 190,
    name: "Beric Dondarrion",
    isFemale: false,
    
    titles: ["Lord of Blackhaven"],
    aliases: ["The lightning lord", "The Lord of Corpses", "Lord Derik"],
    born: "In 276 AC or 277 AC, at Blackhaven",
    died: "In 300 AC (his seventh and final death), at the riverlands",

    childrenIds: [],
    allegiances: [102],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["David Michael Scott", "Richard Dormer"],
    tvSeries: ["Season 1", "Season 3", "Season 4", "Season 6"]
  },
  {
    id: 191,
    name: "Beron Blacktyde",
    isFemale: false,
    
    titles: [],
    aliases: ["Blind Beron Blacktyde"],
    
    

    childrenIds: [],
    allegiances: [26],
    bookIds: [5, 8]
  },
  {
    id: 192,
    name: "Beron Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Winterfell", "Warden of the North"],
    aliases: [],
    
    

    spouseId: 648,
    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 7, 2]
  },
  {
    id: 193,
    name: "Bertram Beesbury",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [18],
    bookIds: [3]
  },
  {
    id: 194,
    name: "Beth Cassel",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "In about 289 AC, at Winterfell",
    

    childrenIds: [],
    allegiances: [61],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 195,
    name: "Betha Blackwood",
    isFemale: true,
    
    titles: ["Lady", "Queen"],
    aliases: ["Black Betha"],
    born: "At Raventree Hall",
    

    spouseId: 46,
    childrenIds: [],
    allegiances: [27, 378],
    bookIds: [11]
  },
  {
    id: 196,
    name: "Bethany Bolton",
    isFemale: true,
    culture: "Northmen",
    titles: ["Lady of the Dreadfort"],
    aliases: [],
    
    

    spouseId: 933,
    childrenIds: [],
    allegiances: [34, 335],
    bookIds: [5, 8]
  },
  {
    id: 197,
    name: "Bethany Bracken",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 156 AC or later",
    died: "In 178 AC",

    childrenIds: [],
    allegiances: [37],
    bookIds: [11]
  },
  {
    id: 198,
    name: "Bethany Redwyne",
    isFemale: true,
    
    titles: ["Lady of Goldengrove"],
    aliases: [],
    
    

    spouseId: 731,
    childrenIds: [],
    allegiances: [317, 326],
    bookIds: [1]
  },
  {
    id: 199,
    name: "Bethany Rosby",
    isFemale: true,
    
    titles: ["Lady"],
    aliases: [],
    born: "In 265 AC or before",
    died: "In or between 282 AC and 284 AC",

    spouseId: 1093,
    childrenIds: [],
    allegiances: [325, 143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 200,
    name: "Bonifer Hasty",
    isFemale: false,
    
    titles: ["Ser", "Castellan of Harrenhal"],
    aliases: ["Bonifer the Good", "Baelor Butthole"],
    
    

    childrenIds: [],
    allegiances: [186],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 201,
    name: "Boremund Harlaw",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Master of Harridan Hill"],
    aliases: ["Boremund the Blue"],
    
    

    childrenIds: [],
    allegiances: [180],
    bookIds: [5, 8]
  },
  {
    id: 202,
    name: "Boros Blount",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Boros the Belly"],
    
    

    childrenIds: [],
    allegiances: [29],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 203,
    name: "Bowen Marsh",
    isFemale: false,
    
    titles: ["Lord Steward", "First Steward"],
    aliases: ["Old Pomegranate"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Michael Condron"],
    tvSeries: ["Season 5"]
  },
  {
    id: 204,
    name: "Bradamar Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 289 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 205,
    name: "Brandon Norrey",
    isFemale: false,
    culture: "Northern mountain clans",
    titles: ["The Norrey", "Lord Norrey"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [282],
    bookIds: [5, 8]
  },
  {
    id: 206,
    name: "Brandon Stark",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: ["The Wild Wolf"],
    born: "In 262 AC, at Winterfell",
    died: "In 282 AC, at King's Landing",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 8]
  },
  {
    id: 207,
    name: "Brandon Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Winterfell", "Warden of the North"],
    aliases: [],
    
    

    spouseId: 97,
    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 2]
  },
  {
    id: 208,
    name: "Brandon Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Prince of Winterfell"],
    aliases: ["Bran", "Bran the Broken", "The Winged Wolf"],
    born: "In 290 AC, at Winterfell",
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [5],

    playedBy: ["Isaac Hempstead-Wright"],
    tvSeries: ["Season 1", "Season 2", "Season 3", "Season 4", "Season 6"]
  },
  {
    id: 209,
    name: "Brandon Stark",
    isFemale: false,
    culture: "First Men",
    titles: ["King of Winter"],
    aliases: ["Bran the Builder"],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 5, 8, 11]
  },
  {
    id: 210,
    name: "Brandon Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North", "Lord of Winterfell"],
    aliases: ["Brandon the Bad"],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 211,
    name: "Brandon Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North", "Lord of Winterfell"],
    aliases: ["Brandon the Burner"],
    
    
    fatherId: 213,

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2]
  },
  {
    id: 212,
    name: "Brandon Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Winterfell", "Warden of the North"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 213,
    name: "Brandon Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North", "Lord of Winterfell"],
    aliases: ["Brandon the Shipwright"],
    
    

    childrenIds: [211],
    allegiances: [],
    bookIds: [1, 2]
  },
  {
    id: 214,
    name: "Brandon Tallhart",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "In 284 AC or 285 AC",
    

    childrenIds: [],
    allegiances: [376],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 215,
    name: "Branston Cuy",
    isFemale: false,
    
    titles: ["Lord of Sunflower Hall"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [91],
    bookIds: [5]
  },
  {
    id: 216,
    name: "Brienne of Tarth",
    isFemale: true,
    
    titles: [],
    aliases: ["The Maid of Tarth", "Brienne the Beauty", "Brienne the Blue"],
    born: "In 280 AC",
    

    childrenIds: [],
    allegiances: [380, 17, 362],
    bookIds: [2, 3, 8],

    playedBy: ["Gwendoline Christie"],
    tvSeries: ["Season 2", "Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 217,
    name: "Bronn",
    isFemale: false,
    
    titles: ["Ser", "Lord Protector of Stokeworth"],
    aliases: ["Ser Bronn of the Blackwater", "Lord Stokeworth"],
    born: "In or between 264 AC and 268 AC",
    

    spouseId: 638,
    childrenIds: [],
    allegiances: [364],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Jerome Flynn"],
    tvSeries: ["Season 1", "Season 2", "Season 3", "Season 4", "Season 6"]
  },
  {
    id: 218,
    name: "Bryan Fossoway",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at Blackwater Rush",

    childrenIds: [],
    allegiances: [139],
    bookIds: [2]
  },
  {
    id: 219,
    name: "Bryan Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 281 AC and 291 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 220,
    name: "Bryce Caron",
    isFemale: false,
    
    titles: ["Lord of Nightsong", "Lord of the Marches"],
    aliases: ["Bryce the Orange"],
    
    died: "In 299 AC, at the Blackwater Rush",

    childrenIds: [],
    allegiances: [60, 15],
    bookIds: [1, 2, 8]
  },
  {
    id: 221,
    name: "Bryen Caron",
    isFemale: false,
    
    titles: ["Lord of the Marches", "Lord of Nightsong"],
    aliases: [],
    
    died: "In 289 AC",

    childrenIds: [],
    allegiances: [60],
    bookIds: [5]
  },
  {
    id: 222,
    name: "Bryen Farring",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at the wolfswood",

    childrenIds: [],
    allegiances: [121],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 223,
    name: "Brynden Tully",
    isFemale: false,
    culture: "Rivermen",
    titles: [
      "Ser",
      "Warden of the Southern Marches",
      "Knight of the Gate (formerly)"
    ],
    aliases: ["Blackfish", "Ser Brynden the Blackfish", "Brynden Blackfish"],
    born: "In or between 242 AC and 245 AC",
    

    childrenIds: [],
    allegiances: [395, 7],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Clive Russell"],
    tvSeries: ["Season 3", "Season 4", "Season 6"]
  },
  {
    id: 224,
    name: "Buford Bulwer",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["The Old Ox"],
    
    

    childrenIds: [],
    allegiances: [52],
    bookIds: [7]
  },
  {
    id: 225,
    name: "Burton Crakehall",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at the Riverlands",

    childrenIds: [],
    allegiances: [86],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 226,
    name: "Calla Blackfyre",
    isFemale: true,
    culture: "Valyrian",
    titles: [],
    aliases: [],
    
    

    spouseId: 47,
    childrenIds: [],
    allegiances: [23],
    bookIds: [11]
  },
  {
    id: 227,
    name: "Carellen Smallwood",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [355],
    bookIds: [3, 5]
  },
  {
    id: 228,
    name: "Carolei Waynwood",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 417,
    childrenIds: [],
    allegiances: [417],
    bookIds: [2, 3, 5]
  },
  {
    id: 229,
    name: "Casper Wylde",
    isFemale: false,
    
    titles: ["Lord of the Rain House"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [438],
    bookIds: [8]
  },
  {
    id: 230,
    name: "Cassana Estermont",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    died: "In 278 AC, at Shipbreaker Bay, near Storm's End",

    spouseId: 986,
    childrenIds: [],
    allegiances: [117, 17],
    bookIds: [2, 3, 8]
  },
  {
    id: 231,
    name: "Cassella Vaith",
    isFemale: true,
    culture: "Dornish",
    titles: ["Lady of Vaith"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [403],
    bookIds: [11, 6]
  },
  {
    id: 232,
    name: "Catelyn Stark",
    isFemale: true,
    culture: "Rivermen",
    titles: ["Lady of Winterfell"],
    aliases: [
      "Catelyn Tully",
      "Lady Stoneheart",
      "The Silent Sistet",
      "Mother Mercilesr",
      "The Hangwomans"
    ],
    born: "In 264 AC, at Riverrun",
    died: "In 299 AC, at the Twins",

    spouseId: 339,
    childrenIds: [],
    allegiances: [395, 362],
    bookIds: [5, 8],

    playedBy: ["Michelle Fairley"],
    tvSeries: ["Season 1", "Season 2", "Season 3"]
  },
  {
    id: 233,
    name: "Cedric Payne",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 298 AC, at Riverlands",

    childrenIds: [],
    allegiances: [295],
    bookIds: [5]
  },
  {
    id: 234,
    name: "Cedrik Storm",
    isFemale: false,
    
    titles: [],
    aliases: ["the Bastard of Bronzegate"],
    
    

    childrenIds: [],
    allegiances: [50],
    bookIds: [3]
  },
  {
    id: 235,
    name: "Cerenna Lannister",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [11, 1, 2, 3, 5, 8]
  },
  {
    id: 236,
    name: "Cerissa Brax",
    isFemale: true,
    
    titles: ["Lady of Casterly Rock"],
    aliases: [],
    
    

    spouseId: 283,
    childrenIds: [],
    allegiances: [40, 229],
    bookIds: [11]
  },
  {
    id: 237,
    name: "Cersei Frey",
    isFemale: true,
    
    titles: [],
    aliases: ["the Little Bee"],
    born: "In 292 AC or 293 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 238,
    name: "Cersei Lannister",
    isFemale: true,
    culture: "Westerman",
    titles: [
      "Light of the West",
      "Queen Dowager",
      "Protector of the Realm",
      "Lady of Casterly Rock",
      "Queen Regent"
    ],
    aliases: ["Brotherfuckerthe bitch queen"],
    born: "In 266 AC, at Casterly Rock",
    

    spouseId: 901,
    childrenIds: [],
    allegiances: [229],
    bookIds: [1, 2, 3],

    playedBy: ["Lena Headey"],
    tvSeries: [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ]
  },
  {
    id: 239,
    name: "Ceryse Hightower",
    isFemale: true,
    
    titles: ["Lady", "Queen"],
    aliases: [],
    born: "In 2 AC",
    died: "In 45 AC, at King's Landing",

    spouseId: 694,
    childrenIds: [],
    allegiances: [195, 378],
    bookIds: [11]
  },
  {
    id: 240,
    name: "Clarence Charlton",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [68],
    bookIds: [7]
  },
  {
    id: 241,
    name: "Clarence Crabb",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Clarence the Short"],
    
    

    childrenIds: [],
    allegiances: [85],
    bookIds: [5]
  },
  {
    id: 242,
    name: "Clarent Crakehall",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "At Crakehall",
    died: "In 130 AC, at Gods Eye",

    childrenIds: [],
    allegiances: [86],
    bookIds: [9]
  },
  {
    id: 243,
    name: "Clayton Suggs",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [15],
    bookIds: [5, 8]
  },
  {
    id: 244,
    name: "Clement Crabb",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [85],
    bookIds: [11, 5]
  },
  {
    id: 245,
    name: "Clement Piper",
    isFemale: false,
    culture: "Rivermen",
    titles: ["Lord of Pinkmaiden"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [302],
    bookIds: [1, 3, 5, 8]
  },
  {
    id: 246,
    name: "Cletus Yronwood",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 300 AC, at Disputed Lands",

    childrenIds: [],
    allegiances: [444],
    bookIds: [5, 8]
  },
  {
    id: 247,
    name: "Cley Cerwyn",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Cerwyn"],
    aliases: [],
    born: "In 284 AC or 285 AC, at Cerwyn",
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [66],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 248,
    name: "Cleyton Caswell",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [63],
    bookIds: [6]
  },
  {
    id: 249,
    name: "Colen of Greenpools",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [17],
    bookIds: [2]
  },
  {
    id: 250,
    name: "Colin Florent",
    isFemale: false,
    
    titles: ["Ser", "Castellan of Brightwater Keep"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [133],
    bookIds: [2, 3, 5]
  },
  {
    id: 251,
    name: "Colmar Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 288 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 252,
    name: "Corenna Swann",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 994,
    childrenIds: [],
    allegiances: [373, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 253,
    name: "Corlys Velaryon",
    isFemale: false,
    culture: "Valyrian",
    titles: [
      "Lord of the Tides",
      "Master of Driftmark",
      "Hand of the Queen",
      "Lord Regent",
      "Master of ships"
    ],
    aliases: ["The Sea Snake"],
    born: "In 53 AC",
    died: "In 132 AC",

    spouseId: 875,
    childrenIds: [],
    allegiances: [407],
    bookIds: [11, 10, 9]
  },
  {
    id: 254,
    name: "Cortnay Penrose",
    isFemale: false,
    
    titles: ["Ser", "Castellan of Storm's End"],
    aliases: [],
    born: "At Parchments",
    died: "In 299 AC, at Storm's End",

    childrenIds: [],
    allegiances: [300],
    bookIds: [2, 3]
  },
  {
    id: 255,
    name: "Corwyn Corbray",
    isFemale: false,
    
    titles: ["Ser", "Lord Regent"],
    aliases: [],
    
    died: "In 134 AC, at Runestone",

    spouseId: 871,
    childrenIds: [],
    allegiances: [81],
    bookIds: [11]
  },
  {
    id: 256,
    name: "Corwyn Corbray",
    isFemale: false,
    culture: "Andal",
    titles: ["Ser", "Lord of the Five Fingers"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [81],
    bookIds: [11]
  },
  {
    id: 257,
    name: "Crake",
    isFemale: false,
    
    titles: [],
    aliases: ["Crake the Boarkiller"],
    born: "In Age of Heroes",
    

    childrenIds: [],
    allegiances: [86],
    bookIds: [11]
  },
  {
    id: 258,
    name: "Cregan Karstark",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "In 249 AC (roughly), at Karhold",
    

    childrenIds: [],
    allegiances: [215],
    bookIds: [8]
  },
  {
    id: 259,
    name: "Cregan Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Winterfell", "Warden of the North", "Hand of the King"],
    aliases: ["The Old Man of the North"],
    
    died: "In or after 157 AC",

    spouseId: 136,
    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 9, 1, 2]
  },
  {
    id: 260,
    name: "Creighton Longbough",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 240 AC and 249 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 261,
    name: "Creighton Redfort",
    isFemale: false,
    culture: "Valemen",
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [316],
    bookIds: [5, 8]
  },
  {
    id: 262,
    name: "Cynthea Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 290 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 263,
    name: "Cyrenna Swann",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 236 AC or before",
    died: "In or between 249 AC and 257 AC",

    spouseId: 1093,
    childrenIds: [],
    allegiances: [373, 143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 264,
    name: "Dacey Mormont",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "In or between 252 AC or 277 AC",
    died: "In 299 AC, at the Twins",

    childrenIds: [],
    allegiances: [271],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 265,
    name: "Daella Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess", "Lady of the Eyrie"],
    aliases: [],
    born: "In or between 54 AC and 66 AC",
    died: "In 82 AC",

    spouseId: 1884,
    childrenIds: [],
    allegiances: [378, 7],
    bookIds: [11, 10]
  },
  {
    id: 266,
    name: "Daella Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess"],
    aliases: [],
    born: "In 199 AC",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 6]
  },
  {
    id: 267,
    name: "Daemon Blackfyre",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Ser", "Protector of the Ream (claimant)"],
    aliases: [
      "Daemon Waters",
      "The Black Dragon",
      "The King Who Bore the Sword",
      "The Pretender"
    ],
    born: "In 170 AC, at King's Landing",
    died: "In 196 AC, at Redgrass Field",

    spouseId: 920,
    childrenIds: [],
    allegiances: [23],
    bookIds: [11, 6, 7, 3, 8]
  },
  {
    id: 268,
    name: "Daemon II Blackfyre",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men (claimant)",
      "Protector of the Realm (claimant)"
    ],
    aliases: ["Ser John the Fiddler", "The Brown Dragon"],
    born: "In 188 AC or 189 AC",
    died: "In or between 211 AC and 219 AC",

    childrenIds: [],
    allegiances: [23],
    bookIds: [11, 7]
  },
  {
    id: 269,
    name: "Daemon Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: [
      "Prince",
      "Commander of the City Watch",
      "Master of coin",
      "Master of laws",
      "King of the Stepstones and the Narrow Sea",
      "Protector of the Realm"
    ],
    aliases: ["Prince of the City", "Lord Flea Bottom", "The Rogue Prince"],
    born: "In 81 AC",
    died: "In 130 AC, at the Gods Eye",

    spouseId: 878,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 10, 9]
  },
  {
    id: 270,
    name: "Daena Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess"],
    aliases: ["Daena the Defiant"],
    born: "In 145 AC, at King's Landing",
    
    fatherId: 40,
    motherId: 1302,
    spouseId: 160,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 5]
  },
  {
    id: 271,
    name: "Daenerys Targaryen",
    isFemale: true,
    
    titles: ["Princess"],
    aliases: [],
    born: "In 172 AC",
    

    spouseId: 719,
    childrenIds: [],
    allegiances: [378, 285],
    bookIds: [11, 6, 8]
  },
  {
    id: 272,
    name: "Daenora Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess"],
    aliases: [],
    
    

    spouseId: 58,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11]
  },
  {
    id: 273,
    name: "Daeron I",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    aliases: ["The Young Dragon", "The Boy King"],
    born: "143 AC, at King's Landing",
    died: "161 AC, at Dorne",
    fatherId: 40,
    motherId: 1302,

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 6, 1, 3, 5, 8]
  },
  {
    id: 274,
    name: "Daeron II",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms"
    ],
    aliases: ["Daeron the Good", "Daeron the Falseborn"],
    born: "153 AC, at King's Landing",
    died: "209 AC, at King's Landing",
    fatherId: 41,
    motherId: 779,
    spouseId: 709,
    childrenIds: [161, 61, 868, 695],
    allegiances: [],
    bookIds: [11, 4, 6, 7, 1, 2, 3, 5, 8]
  },
  {
    id: 275,
    name: "Daeron Targaryen",
    isFemale: false,
    
    titles: ["Prince", "Ser"],
    aliases: ["Daeron the Daring"],
    born: "In 114 AC",
    died: "In 130 AC, at Tumbleton",

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 10, 9]
  },
  {
    id: 276,
    name: "Daeron Targaryen",
    isFemale: false,
    
    titles: ["Prince of Dragonstone", "Prince of Summerhall"],
    aliases: ["Daeron the Drunken"],
    born: "In 190 AC or 191 AC",
    died: "In or between 221 AC and 233 AC",

    spouseId: 1589,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 4, 7, 2, 5]
  },
  {
    id: 277,
    name: "Daeron Vaith",
    isFemale: false,
    culture: "Dornish",
    titles: ["Lord of the Red Dunes"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [403],
    bookIds: [5, 8]
  },
  {
    id: 278,
    name: "Dagon Greyjoy",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Pyke"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [6, 7, 5, 8]
  },
  {
    id: 279,
    name: "Dagos Manwoody",
    isFemale: false,
    
    titles: ["Lord of Kingsgrave"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [257],
    bookIds: [3, 5, 8]
  },
  {
    id: 280,
    name: "Dalbridge",
    isFemale: false,
    
    titles: [],
    aliases: ["Squire Dalbridge"],
    born: "In 254 AC or before",
    died: "In 299 AC, at Skirling Pass",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 281,
    name: "Dale Drumm",
    isFemale: false,
    
    titles: [],
    aliases: ["Dale the Dread"],
    
    

    childrenIds: [],
    allegiances: [106],
    bookIds: [5]
  },
  {
    id: 282,
    name: "Damion Lannister",
    isFemale: false,
    
    titles: ["Ser", "Castellan of Casterly Rock"],
    aliases: [],
    born: "In or between 257 AC and 272 AC",
    

    spouseId: 973,
    childrenIds: [],
    allegiances: [229],
    bookIds: [3, 5, 8, 11]
  },
  {
    id: 283,
    name: "Damon Lannister",
    isFemale: false,
    culture: "Westerman",
    titles: [
      "Lord of Casterly Rock",
      "Shield of Lannisport",
      "Warden of the West"
    ],
    aliases: ["The Grey Lion"],
    
    died: "In 210 AC",

    spouseId: 236,
    childrenIds: [],
    allegiances: [229],
    bookIds: [4, 7]
  },
  {
    id: 284,
    name: "Damon Lannister",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 244 AC or 245 AC",
    

    spouseId: 363,
    childrenIds: [],
    allegiances: [229],
    bookIds: [11]
  },
  {
    id: 285,
    name: "Damon Marbrand",
    isFemale: false,
    
    titles: ["Lord of Ashemark"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [258],
    bookIds: [3, 5, 8]
  },
  {
    id: 286,
    name: "Damon Paege",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [293],
    bookIds: [2, 3, 5]
  },
  {
    id: 287,
    name: "Damon Shett",
    isFemale: false,
    
    titles: ["the Knight of Gull Tower", "Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [350],
    bookIds: [5]
  },
  {
    id: 288,
    name: "Damon Vypren",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In 265 AC or later",
    

    childrenIds: [],
    allegiances: [410],
    bookIds: [2, 3, 5]
  },
  {
    id: 289,
    name: "Danelle Lothston",
    isFemale: true,
    
    titles: ["Lady of Harrenhal"],
    aliases: ["Mad Danelle"],
    
    

    childrenIds: [],
    allegiances: [246],
    bookIds: [11, 7, 5]
  },
  {
    id: 290,
    name: "Danos Slynt",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [354],
    bookIds: [3]
  },
  {
    id: 291,
    name: "Danwell Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 252 AC and 261 AC",
    

    spouseId: 1125,
    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 292,
    name: "Darlessa Marbrand",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 1049,
    childrenIds: [],
    allegiances: [258, 229],
    bookIds: [1, 2, 3, 8]
  },
  {
    id: 293,
    name: "Daryn Hornwood",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at the Whispering Wood",

    childrenIds: [],
    allegiances: [202],
    bookIds: [1, 2, 8]
  },
  {
    id: 294,
    name: "Daven Lannister",
    isFemale: false,
    culture: "Westerman",
    titles: ["Ser", "Warden of the West"],
    aliases: [],
    born: "In 273 AC (roughly)",
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 295,
    name: "Deana Hardyng",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 1100,
    childrenIds: [],
    allegiances: [176, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 296,
    name: "Delena Florent",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 500,
    childrenIds: [],
    allegiances: [133, 281],
    bookIds: [2, 3, 5]
  },
  {
    id: 297,
    name: "Della Frey",
    isFemale: true,
    
    titles: [],
    aliases: ["Deaf Della"],
    born: "In 296 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 298,
    name: "Delonne Allyrion",
    isFemale: true,
    culture: "Dornish",
    titles: ["Lady of Godsgrace"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [2],
    bookIds: [3, 5, 8]
  },
  {
    id: 299,
    name: "Dennis Plumm",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [303],
    bookIds: [3, 5]
  },
  {
    id: 300,
    name: "Denys Arryn",
    isFemale: false,
    
    titles: ["Ser", "Keeper of the Gates of the Moon"],
    aliases: ["The Darling of the Vale"],
    
    died: "In 283 AC, at Stoney Sept",

    childrenIds: [],
    allegiances: [7],
    bookIds: [3, 5]
  },
  {
    id: 301,
    name: "Denys Darklyn",
    isFemale: false,
    
    titles: ["Lord of Duskendale"],
    aliases: [],
    
    

    spouseId: 967,
    childrenIds: [],
    allegiances: [95],
    bookIds: [5]
  },
  {
    id: 302,
    name: "Denys Drumm",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [106],
    bookIds: [5]
  },
  {
    id: 303,
    name: "Denys Mallister",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In 245 AC or before, at Seagard",
    

    childrenIds: [],
    allegiances: [254],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 304,
    name: "Denys Redwyne",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [317],
    bookIds: [5]
  },
  {
    id: 305,
    name: "Denyse Hightower",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 307,
    childrenIds: [],
    allegiances: [195],
    bookIds: [5]
  },
  {
    id: 306,
    name: "Desmond Grell",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 237 AC and 240 AC (roughly)",
    

    childrenIds: [],
    allegiances: [166],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 307,
    name: "Desmond Redwyne",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 305,
    childrenIds: [],
    allegiances: [317],
    bookIds: [5]
  },
  {
    id: 308,
    name: "Devan Seaworth",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 287 AC",
    

    childrenIds: [],
    allegiances: [340, 15],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 309,
    name: "Deziel Dalt",
    isFemale: false,
    
    titles: ["The Knight of Lemonwood"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [92],
    bookIds: [3, 5, 8]
  },
  {
    id: 310,
    name: "Dick Follard",
    isFemale: false,
    
    titles: [],
    aliases: ["Deaf Dick Follard"],
    
    died: "In 299 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 311,
    name: "Dickon Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 294 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 312,
    name: "Dickon Manwoody",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [257],
    bookIds: [3, 5]
  },
  {
    id: 313,
    name: "Dickon Tarly",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 287 AC and 290 AC",
    

    spouseId: 359,
    childrenIds: [],
    allegiances: [379],
    bookIds: [1, 5, 8],

    playedBy: ["Freddie Stroma"],
    tvSeries: ["Season 6"]
  },
  {
    id: 314,
    name: "Domeric Bolton",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 279 AC and 281 AC (roughly)",
    died: "In 297 AC",

    childrenIds: [],
    allegiances: [34],
    bookIds: [2, 5, 8]
  },
  {
    id: 315,
    name: "Donal Noye",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 244 AC and 252 AC",
    died: "In 300 AC, at The Wall, near Castle Black",

    childrenIds: [],
    allegiances: [17],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 316,
    name: "Donel Greyjoy",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [5]
  },
  {
    id: 317,
    name: "Donella Hornwood",
    isFemale: true,
    culture: "Northmen",
    titles: ["Lady of Hornwood"],
    aliases: [],
    born: "In or before 249 AC",
    died: "In 299 AC, at Hornwood",

    spouseId: 463,
    childrenIds: [],
    allegiances: [255, 202],
    bookIds: [2, 8]
  },
  {
    id: 318,
    name: "Donnel",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [4, 5]
  },
  {
    id: 319,
    name: "Donnel Drumm",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [106],
    bookIds: [5]
  },
  {
    id: 320,
    name: "Donnel Haigh",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 255 AC and 282 AC",
    

    childrenIds: [],
    allegiances: [172],
    bookIds: [2, 3, 5]
  },
  {
    id: 321,
    name: "Donnel Locke",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at the Twins",

    childrenIds: [],
    allegiances: [239],
    bookIds: [2, 3, 5]
  },
  {
    id: 322,
    name: "Donnel Swann",
    isFemale: false,
    culture: "Stormlands",
    titles: ["Ser"],
    aliases: ["Ser Donnel the Constant"],
    
    

    childrenIds: [],
    allegiances: [373],
    bookIds: [2, 3]
  },
  {
    id: 323,
    name: "Donnor Saltcliffe",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [336],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 324,
    name: "Donnor Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Winterfell", "Warden of the North"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 2]
  },
  {
    id: 325,
    name: "Dontos Hollard",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Dontos the Red", "Dontos the Drunk", "Florian"],
    born: "In or between 261 AC and 263 AC, at near Duskendale",
    died: "In 300 AC, at Blackwater Bay",

    childrenIds: [],
    allegiances: [198],
    bookIds: [1, 2, 3, 5],

    playedBy: ["Tony Way"],
    tvSeries: ["Season 2", "Season 4"]
  },
  {
    id: 326,
    name: "Doran Martell",
    isFemale: false,
    culture: "Dornish",
    titles: ["Prince of Dorne"],
    aliases: [],
    born: "In 247 AC or 248 AC, at Sunspear",
    

    spouseId: 1697,
    childrenIds: [],
    allegiances: [285],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Alexander Siddig"],
    tvSeries: ["Season 5", "Season 6"]
  },
  {
    id: 327,
    name: "Dorna Swyft",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 605,
    childrenIds: [],
    allegiances: [374],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 328,
    name: "Dorren Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 329,
    name: "Duncan",
    isFemale: false,
    
    titles: ["Ser", "Lord Commander of the Kingsguard"],
    aliases: [
      "Dunk",
      "Duncan the Tall",
      "Dunk the Lunk",
      "Ser Giant",
      "The Gallows Knight"
    ],
    born: "In 191 AC, 192 AC or 193 AC, at King's Landing",
    died: "In 259 AC, at Summerhall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8, 11]
  },
  {
    id: 330,
    name: "Duncan Targaryen",
    isFemale: false,
    
    titles: ["Prince"],
    aliases: ["Prince Duncan the Small", "Prince of Dragonflies"],
    born: "In or between 220 AC and 224 AC",
    died: "In 259 AC, at Summerhall",

    spouseId: 1539,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 3, 5, 8]
  },
  {
    id: 331,
    name: "Dunstan Drumm",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Old Wyk", "Captain of the Thunderer"],
    aliases: ["The Drumm", "The Bone Hand"],
    born: "In 212 AC or later, at Old Wyk",
    

    childrenIds: [],
    allegiances: [106],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 332,
    name: "Duram Bar Emmon",
    isFemale: false,
    
    titles: ["Lord of Sharp Point"],
    aliases: [],
    born: "In 284 AC",
    

    childrenIds: [],
    allegiances: [14],
    bookIds: [2, 3, 5]
  },
  {
    id: 333,
    name: "Durran",
    isFemale: false,
    culture: "First Men",
    titles: ["Storm King"],
    aliases: ["Durran Godsgrief", "The Godsgrief", "King of a Thousand Years"],
    born: "Age of Heroes",
    

    spouseId: 1361,
    childrenIds: [],
    allegiances: [],
    bookIds: [11, 2]
  },
  {
    id: 334,
    name: "Dyanna Dayne",
    isFemale: true,
    
    titles: ["Lady"],
    aliases: [],
    
    died: "In or between 201 AC and 209 AC",

    spouseId: 695,
    childrenIds: [],
    allegiances: [99, 378],
    bookIds: [11]
  },
  {
    id: 335,
    name: "Dykk Harlaw",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [178],
    bookIds: [2]
  },
  {
    id: 336,
    name: "Ebben",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Skirling Pass",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 337,
    name: "Eddara Tallhart",
    isFemale: true,
    culture: "Northmen",
    titles: ["Lady of Torrhen's Square"],
    aliases: [],
    born: "In 289 AC or 290 AC",
    

    childrenIds: [],
    allegiances: [376],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 338,
    name: "Eddard Karstark",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: ["Edd"],
    born: "At Karhold",
    died: "In 298 AC, at the Whispering Wood",

    childrenIds: [],
    allegiances: [215],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 339,
    name: "Eddard Stark",
    isFemale: false,
    culture: "Northmen",
    titles: [
      "Lord of Winterfell",
      "Warden of the North",
      "Hand of the King",
      "Protector of the Realm",
      "Regent"
    ],
    aliases: ["Ned", "The Ned", "The Quiet Wolf"],
    born: "In 263 AC, at Winterfell",
    died: "In 299 AC, at Great Sept of Baelor in King's Landing",

    spouseId: 232,
    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 2, 3, 5, 8],

    playedBy: ["Sean Bean", "Sebastian Croft", "Robert Aramayo"],
    tvSeries: ["Season 1", "Season 6"]
  },
  {
    id: 340,
    name: "Edderion Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North", "Lord of Winterfell"],
    aliases: ["Ederrion the Bridegroom"],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 341,
    name: "Eddison Tollet",
    isFemale: false,
    culture: "Valemen",
    titles: [],
    aliases: ["Dolorous Edd"],
    
    

    childrenIds: [],
    allegiances: [388],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Ben Crompton"],
    tvSeries: ["Season 2", "Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 342,
    name: "Eden Risley",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [321],
    bookIds: [7]
  },
  {
    id: 343,
    name: "Edgerran Oakheart",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: ["Edgerran the Open-Handed"],
    
    

    childrenIds: [],
    allegiances: [286],
    bookIds: [5]
  },
  {
    id: 344,
    name: "Edmund Ambrose",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [4],
    bookIds: [5]
  },
  {
    id: 345,
    name: "Edmund Waxley",
    isFemale: false,
    
    titles: ["The Knight of Wickenden", "Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [415],
    bookIds: [5, 8]
  },
  {
    id: 346,
    name: "Edmure Tully",
    isFemale: false,
    culture: "Rivermen",
    titles: ["Ser", "Lord of Riverrun (lost to Emmon Frey)"],
    aliases: [],
    born: "In or between 267 AC and 274 AC",
    

    spouseId: 937,
    childrenIds: [],
    allegiances: [395],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Tobias Menzies"],
    tvSeries: ["Season 3", "Season 6"]
  },
  {
    id: 347,
    name: "Edmyn Tully",
    isFemale: false,
    culture: "Rivermen",
    titles: [
      "Lord of Riverrun",
      "Lord Paramount of the Trident",
      "Hand of the King"
    ],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [395],
    bookIds: [11, 1, 3]
  },
  {
    id: 348,
    name: "Edric Dayne",
    isFemale: false,
    
    titles: ["Lord of Starfall"],
    aliases: ["Ned"],
    born: "In 287 AC, at Starfall",
    

    childrenIds: [],
    allegiances: [99],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 349,
    name: "Edrick Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North", "Lord of Winterfell"],
    aliases: ["Edrick Snowbeard"],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 2, 8]
  },
  {
    id: 350,
    name: "Edwyd Fossoway",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at Blackwater Rush",

    childrenIds: [],
    allegiances: [139],
    bookIds: [2]
  },
  {
    id: 351,
    name: "Edwyle Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Winterfell", "Warden of the North"],
    aliases: [],
    
    

    spouseId: 716,
    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 2]
  },
  {
    id: 352,
    name: "Edwyn Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 259 AC and 278 AC",
    

    spouseId: 534,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 353,
    name: "Edwyn Osgrey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 196 AC, at the Redgrass Field",

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 354,
    name: "Edwyn Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North", "Lord of Winterfell"],
    aliases: ["The Spring King"],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 355,
    name: "Eglantine",
    isFemale: true,
    
    titles: ["Septa"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [16],
    bookIds: [5]
  },
  {
    id: 356,
    name: "Elbert Arryn",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 282 AC, at King's Landing",

    childrenIds: [],
    allegiances: [7],
    bookIds: [2, 5]
  },
  {
    id: 357,
    name: "Eldon Estermont",
    isFemale: false,
    culture: "Stormlands",
    titles: ["Ser", "Lord of Greenstone"],
    aliases: [],
    born: "In or between 228 AC and 232 AC",
    

    spouseId: 999,
    childrenIds: [],
    allegiances: [117],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 358,
    name: "Eldred Codd",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [75],
    bookIds: [5]
  },
  {
    id: 359,
    name: "Eleanor Mooton",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 286 AC or 287 AC",
    

    spouseId: 313,
    childrenIds: [],
    allegiances: [269, 379],
    bookIds: [5, 8]
  },
  {
    id: 360,
    name: "Eleyna Westerling",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 287 AC, at Crag",
    

    childrenIds: [],
    allegiances: [425],
    bookIds: [3, 5]
  },
  {
    id: 361,
    name: "Elia Martell",
    isFemale: true,
    
    titles: ["Princess"],
    aliases: ["Elia of Dorne"],
    born: "In 256 AC or 257 AC",
    died: "In 283 AC, at King's Landing",

    spouseId: 867,
    childrenIds: [],
    allegiances: [285, 378],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 362,
    name: "Elinor Tyrell",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 286 AC (roughly)",
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5, 8]
  },
  {
    id: 363,
    name: "Ella Lannister",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 284,
    childrenIds: [],
    allegiances: [229],
    bookIds: [11]
  },
  {
    id: 364,
    name: "Ellaria Sand",
    isFemale: true,
    culture: "Dornish",
    titles: [],
    aliases: ["The serpent's whore"],
    
    

    spouseId: 1770,
    childrenIds: [],
    allegiances: [400, 285],
    bookIds: [3, 5, 8],

    playedBy: ["Indira Varma"],
    tvSeries: ["Season 4", "Season 5"]
  },
  {
    id: 365,
    name: "Ellery Vance",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [404],
    bookIds: [3, 5]
  },
  {
    id: 366,
    name: "Ellyn Ever Sweet",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [18],
    bookIds: [11]
  },
  {
    id: 367,
    name: "Ellyn Reyne",
    isFemale: true,
    
    titles: ["Lady of Tarbeck Hall"],
    aliases: [],
    born: "At Castamere",
    died: "In 261 AC, at Tarbeck Hall",

    spouseId: 1026,
    childrenIds: [],
    allegiances: [319, 229, 377],
    bookIds: [5, 11]
  },
  {
    id: 368,
    name: "Elmar Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 290 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 369,
    name: "Elwood Meadows",
    isFemale: false,
    culture: "Reach",
    titles: ["Lord of Grassy Vale"],
    aliases: [],
    born: "In 278 AC or 279 AC",
    

    childrenIds: [],
    allegiances: [261, 15],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 370,
    name: "Elyana Vypren",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In or between 264 AC and 282 AC",
    

    spouseId: 587,
    childrenIds: [],
    allegiances: [410, 438],
    bookIds: [2, 3, 5]
  },
  {
    id: 371,
    name: "Elyas Willum",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [429],
    bookIds: [2]
  },
  {
    id: 372,
    name: "Elyn Norridge",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 665,
    childrenIds: [],
    allegiances: [283, 398],
    bookIds: [3, 5]
  },
  {
    id: 373,
    name: "Elys Waynwood",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 92,
    childrenIds: [],
    allegiances: [417],
    bookIds: [5]
  },
  {
    id: 374,
    name: "Elys Westerling",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [425],
    bookIds: [3]
  },
  {
    id: 375,
    name: "Emberlei Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 296 AC or 297 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 376,
    name: "Emmon Cuy",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Emmon the Yellow"],
    born: "At Sunflower Hall",
    died: "In 299 AC, at near Storm's End",

    childrenIds: [],
    allegiances: [91],
    bookIds: [2]
  },
  {
    id: 377,
    name: "Emmon Frey",
    isFemale: false,
    
    titles: ["Lord of Riverrun"],
    aliases: ["Emm"],
    born: "In 237 AC or 238 AC",
    

    spouseId: 415,
    childrenIds: [],
    allegiances: [142, 229],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 378,
    name: "Emphyria Vance",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [405],
    bookIds: [5]
  },
  {
    id: 379,
    name: "Endrew Tarth",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at Bridge of Skulls",

    childrenIds: [],
    allegiances: [380],
    bookIds: [1, 2, 3]
  },
  {
    id: 380,
    name: "Eon Hunter",
    isFemale: false,
    
    titles: ["Lord of Longbow Hall"],
    aliases: ["Old Lord Hunter"],
    born: "In 220 AC or before (roughly)",
    died: "In +/- 300 AC",

    childrenIds: [],
    allegiances: [207],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 381,
    name: "Erena Glover",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "In 297 AC or 298 AC",
    

    childrenIds: [],
    allegiances: [150],
    bookIds: [2, 3, 5]
  },
  {
    id: 382,
    name: "Ermesande Hayford",
    isFemale: true,
    
    titles: ["Lady of Hayford"],
    aliases: [],
    born: "In 298 AC",
    

    spouseId: 1051,
    childrenIds: [],
    allegiances: [189, 229],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 383,
    name: "Erren Florent",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [133],
    bookIds: [2, 3, 5]
  },
  {
    id: 384,
    name: "Ethan Glover",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    died: "In 283 AC, at the Tower of Joy",

    childrenIds: [],
    allegiances: [150],
    bookIds: [1, 2]
  },
  {
    id: 385,
    name: "Euron Greyjoy",
    isFemale: false,
    culture: "Ironborn",
    titles: [
      "Iron King",
      "King of the Isles and the North  King of Salt and Rock",
      "Son of the Sea Wind",
      "Lord Reaper of Pyke",
      "Captain of the Silence"
    ],
    aliases: ["Crow's Eye", "Euron Crow's Eye"],
    born: "or before 267 AC",
    
    fatherId: 836,

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 386,
    name: "Eustace",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [10, 9]
  },
  {
    id: 387,
    name: "Eustace Hunter",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [207],
    bookIds: [5, 8]
  },
  {
    id: 388,
    name: "Eustace Osgrey",
    isFemale: false,
    
    titles: ["Knight and Master of Standfast", "Lord of Coldmoat"],
    aliases: ["The Knight of Standfast"],
    born: "At Standfast",
    

    spouseId: 1891,
    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 389,
    name: "Eyron Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North", "Lord of Winterfell"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 390,
    name: "Ezzelyno",
    isFemale: false,
    culture: "Braavosi",
    titles: ["Red Priest"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 391,
    name: "Falena Stokeworth",
    isFemale: true,
    
    titles: ["Lady of Harrenhal"],
    aliases: [],
    born: "In 125 AC",
    

    spouseId: 656,
    childrenIds: [],
    allegiances: [364, 246],
    bookIds: [11]
  },
  {
    id: 392,
    name: "Falyse Stokeworth",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 265 AC or before",
    died: "In 300 AC, at the Black Cells, Red Keep, King's Landing",

    spouseId: 162,
    childrenIds: [],
    allegiances: [364, 56],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 393,
    name: "Flement Brax",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 765,
    childrenIds: [],
    allegiances: [40],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 394,
    name: "Forley Prester",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [306],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 395,
    name: "Foss the Archer",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [139],
    bookIds: [11]
  },
  {
    id: 396,
    name: "Frankyln Fowler",
    isFemale: false,
    culture: "Dornish",
    titles: ["Lord of Skyreach", "Warden of the Prince's Pass"],
    aliases: ["The Old Hawk"],
    
    

    childrenIds: [],
    allegiances: [141],
    bookIds: [5, 8]
  },
  {
    id: 397,
    name: "Galbart Glover",
    isFemale: false,
    culture: "Northmen",
    titles: ["Master of Deepwood Motte"],
    aliases: [],
    born: "At Deepwood Motte",
    

    childrenIds: [],
    allegiances: [150],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Mark Coney"],
    tvSeries: ["Season 1"]
  },
  {
    id: 398,
    name: "Galladon Tarth",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In either 275 AC, 276 AC or 277 AC",
    died: "In either 284 AC or 285 AC",

    childrenIds: [],
    allegiances: [380],
    bookIds: [5]
  },
  {
    id: 399,
    name: "Galtry the Green",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 400,
    name: "Gared",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 231 AC and 246 AC",
    died: "In 297 AC, at Beyond the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2],

    playedBy: ["Dermot Keaney"]
  },
  {
    id: 401,
    name: "Garlan Tyrell",
    isFemale: false,
    
    titles: ["Ser", "Lord of Brightwater Keep"],
    aliases: ["Garlan the Gallant", "Renly's ghost"],
    born: "In 277 AC, at Highgarden",
    

    spouseId: 1618,
    childrenIds: [],
    allegiances: [397],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 402,
    name: "Garrett Paege",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [293],
    bookIds: [5, 8]
  },
  {
    id: 403,
    name: "Garrison Prester",
    isFemale: false,
    
    titles: ["Lord of Feastfires"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [306],
    bookIds: [5, 8]
  },
  {
    id: 404,
    name: "Garse Goodbrook",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "At the Twins, in 299 AC",

    spouseId: 609,
    childrenIds: [],
    allegiances: [151],
    bookIds: [2, 3, 5]
  },
  {
    id: 405,
    name: "Garth Greenfield",
    isFemale: false,
    culture: "Westerman",
    titles: ["The Knight of Greenfield", "Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [163],
    bookIds: [1, 3, 5, 8]
  },
  {
    id: 406,
    name: "Garth Greyfeather",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Beyond the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 407,
    name: "Garth Hightower",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Garth Greysteel"],
    born: "At Oldtown",
    

    childrenIds: [],
    allegiances: [195],
    bookIds: [5]
  },
  {
    id: 408,
    name: "Garth Tyrell",
    isFemale: false,
    
    titles: ["Lord Seneschal"],
    aliases: ["Garth the Gross"],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 409,
    name: "Garth XII Gardener",
    isFemale: false,
    
    titles: ["King of the Reach"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 410,
    name: "Garth the Gardener",
    isFemale: false,
    culture: "First Men",
    titles: ["King of the Reach"],
    aliases: [],
    
    
    fatherId: 1411,

    childrenIds: [],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 411,
    name: "Gawen Glover",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "In 295 AC or 296 AC",
    

    childrenIds: [],
    allegiances: [150],
    bookIds: [2, 3, 5]
  },
  {
    id: 412,
    name: "Gawen Swann",
    isFemale: false,
    
    titles: ["Lord of Stonehelm"],
    aliases: [],
    born: "In 152 AC or before, at Stonehelm",
    

    childrenIds: [],
    allegiances: [373],
    bookIds: [4]
  },
  {
    id: 413,
    name: "Gawen Westerling",
    isFemale: false,
    culture: "Westerman",
    titles: ["Lord of the Crag"],
    aliases: [],
    
    

    spouseId: 997,
    childrenIds: [],
    allegiances: [425],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 414,
    name: "Gawen Wylde",
    isFemale: false,
    
    titles: ["Ser", "Master-at-arms at Storm's End"],
    aliases: [],
    
    died: "In 283 AC, at Storm's End",

    childrenIds: [],
    allegiances: [438],
    bookIds: [2]
  },
  {
    id: 415,
    name: "Genna Lannister",
    isFemale: true,
    
    titles: ["Lady"],
    aliases: [],
    born: "In 245 AC",
    

    spouseId: 377,
    childrenIds: [],
    allegiances: [229, 142],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 416,
    name: "Gerald Gower",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [158],
    bookIds: [3, 5, 8]
  },
  {
    id: 417,
    name: "Geremy Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In 263 AC",
    died: "In or between 289 AC and 299 AC",

    spouseId: 228,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 418,
    name: "Gerion Lannister",
    isFemale: false,
    
    titles: [],
    aliases: ["Gery"],
    born: "In 255 AC",
    died: "In circa 291 AC",

    childrenIds: [],
    allegiances: [229],
    bookIds: [11, 1, 2, 3, 5, 8]
  },
  {
    id: 419,
    name: "Germund Botley",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Lordsport"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [36],
    bookIds: [5, 8]
  },
  {
    id: 420,
    name: "Gerold Grafton",
    isFemale: false,
    
    titles: ["Lord of Gulltown"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [160],
    bookIds: [5, 8]
  },
  {
    id: 421,
    name: "Gerold Hightower",
    isFemale: false,
    
    titles: ["Ser", "Lord Commander of the Kingsguard"],
    aliases: ["The White Bull"],
    
    died: "In 283 AC, at Tower of Joy",

    childrenIds: [],
    allegiances: [195],
    bookIds: [1, 2, 3],

    playedBy: ["Eddie Eyre"],
    tvSeries: ["Season 6"]
  },
  {
    id: 422,
    name: "Gerold Lannister",
    isFemale: false,
    culture: "Westerman",
    titles: [
      "Lord of Casterly Rock",
      "Shield of Lannisport",
      "Warden of the West"
    ],
    aliases: ["Gerold the Golden"],
    
    died: "In 244 AC",

    spouseId: 101,
    childrenIds: [],
    allegiances: [229],
    bookIds: [6, 11]
  },
  {
    id: 423,
    name: "Gevin Harlaw",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [178],
    bookIds: [2, 3]
  },
  {
    id: 424,
    name: "Gilbert Farring",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [121],
    bookIds: [3, 5, 8]
  },
  {
    id: 425,
    name: "Gilbert of the Vines",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [317],
    bookIds: [11]
  },
  {
    id: 426,
    name: "Gilwood Hunter",
    isFemale: false,
    
    titles: ["Ser", "Lord of Longbow Hall"],
    aliases: ["Young Lord Hunter"],
    born: "In or between 250 AC and 254 AC",
    

    childrenIds: [],
    allegiances: [207],
    bookIds: [3, 5, 8]
  },
  {
    id: 427,
    name: "Gladden Wylde",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 298 AC, at the Mummer's Ford",

    childrenIds: [],
    allegiances: [438],
    bookIds: [1]
  },
  {
    id: 428,
    name: "Glendon Flowers",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [
      "Glendon Ball",
      "The Knight of the Pussywillows",
      "Glendon the Bastard"
    ],
    born: "In 196 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 429,
    name: "Godric Borrell",
    isFemale: false,
    culture: "Sistermen",
    titles: [
      "Lord of Sweetsister",
      "Shield of Sisterton",
      "Master of Breakwater Castle",
      "Keeper of the Night Lamp"
    ],
    aliases: [],
    born: "At Sweetsister",
    

    childrenIds: [],
    allegiances: [35],
    bookIds: [5, 8]
  },
  {
    id: 430,
    name: "Godry Farring",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Godry the Giantslayer"],
    
    

    childrenIds: [],
    allegiances: [121, 15],
    bookIds: [5, 8]
  },
  {
    id: 431,
    name: "Gormon Peake",
    isFemale: false,
    
    titles: [
      "Lord of Starpike, Dunstonbury (stripped) and Whitegrove (stripped)"
    ],
    aliases: ["Gormy"],
    
    died: "In 211 AC, at Whitewalls",

    childrenIds: [],
    allegiances: [296],
    bookIds: [11, 6, 7]
  },
  {
    id: 432,
    name: "Gormond Drumm",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Gormond the Oldfather"],
    
    

    childrenIds: [],
    allegiances: [106],
    bookIds: [5]
  },
  {
    id: 433,
    name: "Gormond Goodbrother",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    born: "In 282 AC or 283 AC",
    

    childrenIds: [],
    allegiances: [155],
    bookIds: [5]
  },
  {
    id: 434,
    name: "Gorold Goodbrother",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Hammerhorn"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [155],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 435,
    name: "Gowen Baratheon",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 1044,
    childrenIds: [],
    allegiances: [17],
    bookIds: [1]
  },
  {
    id: 436,
    name: "Gran Goodbrother",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [155],
    bookIds: [5]
  },
  {
    id: 437,
    name: "Grance Morrigen",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [272],
    bookIds: [4]
  },
  {
    id: 438,
    name: "Grazdan mo Eraz",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: [],
    born: "At Yunkai",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 439,
    name: "Grenn",
    isFemale: false,
    culture: "Westeros",
    titles: [],
    aliases: ["Aurochs"],
    born: "In 281 AC or 282 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Mark Stanley"],
    tvSeries: ["Season 1", "Season 2", "Season 3", "Season 4"]
  },
  {
    id: 440,
    name: "Greydon Goodbrother",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [155],
    bookIds: [5]
  },
  {
    id: 441,
    name: "Gulian Qorgyle",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [311],
    bookIds: [5]
  },
  {
    id: 442,
    name: "Gulian Swann",
    isFemale: false,
    
    titles: ["Lord of Stonehelm"],
    aliases: [],
    born: "In 259 AC or before",
    

    childrenIds: [],
    allegiances: [373],
    bookIds: [2, 3]
  },
  {
    id: 443,
    name: "Guncer Sunglass",
    isFemale: false,
    
    titles: ["Lord of Sweetport Sound"],
    aliases: [],
    born: "At Sweetport Sound",
    died: "In 299 AC, at Dragonstone",

    childrenIds: [],
    allegiances: [372],
    bookIds: [2, 3]
  },
  {
    id: 444,
    name: "Gunthor Hightower",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 552,
    childrenIds: [],
    allegiances: [195],
    bookIds: [5]
  },
  {
    id: 445,
    name: "Guthor Grimm",
    isFemale: false,
    
    titles: ["Lord of Greyshield"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [171],
    bookIds: [5, 8]
  },
  {
    id: 446,
    name: "Guyard Morrigen",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Guyard the Green"],
    born: "In or between 278 AC and 283 AC, at Crows Nest",
    died: "In 299 AC, at King's Landing",

    childrenIds: [],
    allegiances: [272],
    bookIds: [2, 8]
  },
  {
    id: 447,
    name: "Gwayne Corbray",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [81],
    bookIds: [6, 5]
  },
  {
    id: 448,
    name: "Gwayne Gaunt",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "At Duskendale",

    childrenIds: [],
    allegiances: [148],
    bookIds: [3]
  },
  {
    id: 449,
    name: "Gwayne Hightower",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 88 AC and 96 AC",
    died: "In 130 AC, at King's Landing",

    childrenIds: [],
    allegiances: [195],
    bookIds: [9]
  },
  {
    id: 450,
    name: "Gwin Goodbrother",
    isFemale: true,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [155],
    bookIds: [5]
  },
  {
    id: 451,
    name: "Gwynesse Harlaw",
    isFemale: true,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [178],
    bookIds: [5]
  },
  {
    id: 452,
    name: "Gwyneth Yronwood",
    isFemale: true,
    culture: "Dornish",
    titles: [],
    aliases: [],
    born: "In 287 AC or 288 AC",
    

    childrenIds: [],
    allegiances: [444],
    bookIds: [8]
  },
  {
    id: 453,
    name: "Gylbert Farwynd",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of the Lonely Light"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [123],
    bookIds: [3, 5, 8]
  },
  {
    id: 454,
    name: "Gyles",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Gyles Greycloak"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 455,
    name: "Gyles Farwynd",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [123],
    bookIds: [5]
  },
  {
    id: 456,
    name: "Gyles Grafton",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [160],
    bookIds: [5]
  },
  {
    id: 457,
    name: "Gyles III Gardener",
    isFemale: false,
    
    titles: ["King of the Reach"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 6]
  },
  {
    id: 458,
    name: "Gyles Rosby",
    isFemale: false,
    
    titles: ["Lord of Rosby", "Lord Treasurer", "Master of Coin"],
    aliases: ["The Cougher"],
    
    died: "In 300 AC, at King's Landing",

    childrenIds: [],
    allegiances: [325],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 459,
    name: "Gysella Goodbrother",
    isFemale: true,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [155],
    bookIds: [5]
  },
  {
    id: 460,
    name: "Halleck Hoare",
    isFemale: false,
    
    titles: ["King of the Isles and the Rivers"],
    aliases: [],
    
    
    fatherId: 484,

    childrenIds: [475, 494],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 461,
    name: "Hallis Mollen",
    isFemale: false,
    culture: "Northmen",
    titles: ["Captain of the guards for Winterfell"],
    aliases: ["Hal"],
    
    

    childrenIds: [],
    allegiances: [267, 362],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 462,
    name: "Halmon Paege",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [293],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 463,
    name: "Halys Hornwood",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of the Hornwood"],
    aliases: [],
    
    died: "In 298 AC, at the Green Fork",

    spouseId: 317,
    childrenIds: [],
    allegiances: [202],
    bookIds: [1, 2, 5]
  },
  {
    id: 464,
    name: "Harbert Paege",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [293],
    bookIds: [7]
  },
  {
    id: 465,
    name: "Harlan Grandison",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 281 AC, at King's Landing",

    childrenIds: [],
    allegiances: [161],
    bookIds: [3]
  },
  {
    id: 466,
    name: "Harlan Hunter",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [207],
    bookIds: [1, 5, 8]
  },
  {
    id: 467,
    name: "Harlen Tyrell",
    isFemale: false,
    culture: "Reach",
    titles: [
      "High Steward of Highgarden",
      "Lord Paramount of the Mander",
      "Lord of Highgarden",
      "Warden of the South"
    ],
    aliases: ["Harlan Tyrell"],
    
    died: "In 5 AC, at Dorne",

    childrenIds: [],
    allegiances: [398],
    bookIds: [11, 1]
  },
  {
    id: 468,
    name: "Harlon Botley",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [36],
    bookIds: [5]
  },
  {
    id: 469,
    name: "Harlon Greyjoy",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    died: "At Pyke",

    childrenIds: [],
    allegiances: [169],
    bookIds: [5]
  },
  {
    id: 470,
    name: "Harmen Uller",
    isFemale: false,
    
    titles: ["Lord of Hellholt"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [400],
    bookIds: [3, 5, 8]
  },
  {
    id: 471,
    name: "Harmond Umber",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of the Last Hearth"],
    aliases: ["The Drunken Giant"],
    
    

    childrenIds: [],
    allegiances: [401],
    bookIds: [11, 8]
  },
  {
    id: 472,
    name: "Harrag Hoare",
    isFemale: false,
    culture: "Ironborn",
    titles: ["High King of the Iron Isles"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 5]
  },
  {
    id: 473,
    name: "Harras Harlaw",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Ser", "Master of Grey Garden", "Lord of Greyshield"],
    aliases: ["The Knight of Grey Garden"],
    
    

    childrenIds: [],
    allegiances: [177],
    bookIds: [5, 8]
  },
  {
    id: 474,
    name: "Harren Botley",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Moat Cailin",

    childrenIds: [],
    allegiances: [36],
    bookIds: [5]
  },
  {
    id: 475,
    name: "Harren Hoare",
    isFemale: false,
    culture: "Ironborn",
    titles: ["King of the Isles and the Rivers"],
    aliases: ["Harren the Black", "Black Harren"],
    
    died: "2 BC, at Harrenhal",
    fatherId: 460,

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 11]
  },
  {
    id: 476,
    name: "Harrion Karstark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Karhold"],
    aliases: ["Harry"],
    born: "At Karhold",
    

    childrenIds: [],
    allegiances: [215],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 477,
    name: "Harrold Hardyng",
    isFemale: false,
    culture: "Valemen",
    titles: ["Ser"],
    aliases: ["Harry the Heir", "The Young Falcon", "Harry the Arse"],
    born: "In 281 AC or 282 AC",
    

    childrenIds: [],
    allegiances: [176, 7],
    bookIds: [5, 8]
  },
  {
    id: 478,
    name: "Harrold Osgrey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "At the Redgrass Field",

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 479,
    name: "Harrold Westerling",
    isFemale: false,
    culture: "Westerman",
    titles: ["Ser", "Lord Commander of the Kingsguard"],
    aliases: [],
    
    died: "In 112 AC",

    childrenIds: [],
    allegiances: [425],
    bookIds: [10]
  },
  {
    id: 480,
    name: "Harry Strickland",
    isFemale: false,
    
    titles: ["Captain-General"],
    aliases: ["Homeless Harry Strickland"],
    
    

    childrenIds: [],
    allegiances: [368],
    bookIds: [8]
  },
  {
    id: 481,
    name: "Harwin Strong",
    isFemale: false,
    
    titles: ["Ser", "Captain"],
    aliases: ["Breakbones", "Brokenbones"],
    born: "In 90 AC or before",
    died: "In 120 AC, at Harrenhal",

    childrenIds: [],
    allegiances: [369],
    bookIds: [10, 9, 11]
  },
  {
    id: 482,
    name: "Harwood Fell",
    isFemale: false,
    
    titles: ["Lord of Felwood"],
    aliases: [],
    
    died: "In 300 AC, at Wolfswood",

    childrenIds: [],
    allegiances: [124],
    bookIds: [5, 8]
  },
  {
    id: 483,
    name: "Harwood Stout",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Goldgrass"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [367, 111],
    bookIds: [5, 8]
  },
  {
    id: 484,
    name: "Harwyn Hoare",
    isFemale: false,
    
    titles: ["King of the Iron Islands", "King of the Isles and the Rivers"],
    aliases: ["Harwyn Hardhand", "The Hardhand"],
    
    
    fatherId: 833,

    childrenIds: [460],
    allegiances: [],
    bookIds: [1, 11]
  },
  {
    id: 485,
    name: "Harwyn Plumm",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Hardstone"],
    
    

    childrenIds: [],
    allegiances: [303],
    bookIds: [3, 5]
  },
  {
    id: 486,
    name: "Harys Haigh",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 254 AC and 282 AC",
    

    childrenIds: [],
    allegiances: [172, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 487,
    name: "Harys Swyft",
    isFemale: false,
    
    titles: [
      "Knight of Cornfield",
      "Hand of the Kinr",
      "Master of coig",
      "Lord treasurern"
    ],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [374],
    bookIds: [11, 1, 2, 3, 5, 8]
  },
  {
    id: 488,
    name: "Helaena Targaryen",
    isFemale: true,
    
    titles: ["Queen"],
    aliases: [],
    born: "In 109 AC",
    died: "In 130 AC, at King's Landing",

    spouseId: 39,
    childrenIds: [],
    allegiances: [378],
    bookIds: [10, 9, 11]
  },
  {
    id: 489,
    name: "Helicent Uffering",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 171 AC (roughly)",
    

    childrenIds: [],
    allegiances: [399],
    bookIds: [6]
  },
  {
    id: 490,
    name: "Helman Tallhart",
    isFemale: false,
    culture: "Northmen",
    titles: ["Ser", "Master of Torrhen's Square"],
    aliases: [],
    born: "At Torrhen's Square",
    died: "In 299 AC, at Duskendale",

    childrenIds: [],
    allegiances: [376],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 491,
    name: "Herbert Bolling",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [33],
    bookIds: [5]
  },
  {
    id: 492,
    name: "Herrock Kenning",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Kayce"],
    aliases: ["Herrock the Whoreson"],
    
    

    childrenIds: [],
    allegiances: [218, 219],
    bookIds: [11]
  },
  {
    id: 493,
    name: "Hilmar Drumm",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Hilmar the Cunning"],
    
    

    childrenIds: [],
    allegiances: [106],
    bookIds: [5]
  },
  {
    id: 494,
    name: "Hoare",
    isFemale: false,
    
    titles: ["Lord Commander of the Night's Watch"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [196],
    bookIds: [1]
  },
  {
    id: 495,
    name: "Hoarfrost Umber",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of the Last Hearth"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [401],
    bookIds: [8]
  },
  {
    id: 496,
    name: "Hobber Redwyne",
    isFemale: false,
    culture: "Reach",
    titles: ["Ser"],
    aliases: ["Slobber"],
    born: "At the Arbor",
    

    childrenIds: [],
    allegiances: [317],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 497,
    name: "Hooded Man",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In Age of Heroes",
    

    childrenIds: [],
    allegiances: [13],
    bookIds: [11]
  },
  {
    id: 498,
    name: "Horas Redwyne",
    isFemale: false,
    culture: "Reach",
    titles: ["Ser"],
    aliases: ["Horror"],
    born: "At the Arbor",
    

    childrenIds: [],
    allegiances: [317],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 499,
    name: "Horton Redfort",
    isFemale: false,
    culture: "Valemen",
    titles: ["Lord of Redfort"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [316],
    bookIds: [3, 5, 8]
  },
  {
    id: 500,
    name: "Hosman Norcross",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 296,
    childrenIds: [],
    allegiances: [281],
    bookIds: [2, 3, 5]
  },
  {
    id: 501,
    name: "Hosteen Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Ser Stupid"],
    born: "In or between 250 AC and 258 AC",
    

    spouseId: 173,
    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 502,
    name: "Hoster Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 287 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 503,
    name: "Hoster Tully",
    isFemale: false,
    culture: "Rivermen",
    titles: ["Lord Paramount of the Trident", "Lord of Riverrun"],
    aliases: [],
    born: "In or between 237 AC and 240 AC",
    died: "In 299 AC, at Riverrun",

    spouseId: 755,
    childrenIds: [],
    allegiances: [395],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 504,
    name: "Hother Umber",
    isFemale: false,
    culture: "Northmen",
    titles: ["Castellan of Last Hearth"],
    aliases: ["Hother Whoresbane", "Whoresbane Umber"],
    born: "In 241 AC or before, at Last Hearth",
    

    childrenIds: [],
    allegiances: [401],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 505,
    name: "Hotho Harlaw",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Master of the Tower of Glimmering"],
    aliases: ["Hotho Humpback"],
    
    

    childrenIds: [],
    allegiances: [181],
    bookIds: [5, 8]
  },
  {
    id: 506,
    name: "Howland Reed",
    isFemale: false,
    culture: "Crannogmen",
    titles: ["Lord of Greywater Watch"],
    aliases: [],
    born: "In or between 260 AC and 265 AC, at Greywater Watch",
    

    spouseId: 1572,
    childrenIds: [],
    allegiances: [318],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Leo Woodruff"],
    tvSeries: ["Season 6"]
  },
  {
    id: 507,
    name: "Hubard Rambton",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at Dragonstone",

    childrenIds: [],
    allegiances: [313],
    bookIds: [2, 3]
  },
  {
    id: 508,
    name: "Hugh",
    isFemale: false,
    culture: "Valemen",
    titles: ["Ser"],
    aliases: ["Ser Hugh of the Vale"],
    
    died: "In 298 AC, at King's Landing",

    childrenIds: [],
    allegiances: [7],
    bookIds: [1]
  },
  {
    id: 509,
    name: "Hugh Beesbury",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [18],
    bookIds: [5]
  },
  {
    id: 510,
    name: "Hugh Grandison",
    isFemale: false,
    
    titles: ["Lord of Grandview"],
    aliases: ["Greybeard"],
    
    

    childrenIds: [],
    allegiances: [161],
    bookIds: [5, 8]
  },
  {
    id: 511,
    name: "Hugo Vance",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [404],
    bookIds: [3, 5]
  },
  {
    id: 512,
    name: "Hugo Wull",
    isFemale: false,
    culture: "Northern mountain clans",
    titles: ["Big Bucket", "The Wull"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [435],
    bookIds: [5, 8]
  },
  {
    id: 513,
    name: "Humfrey Beesbury",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 209 AC, at Ashford",

    childrenIds: [],
    allegiances: [18],
    bookIds: [4, 6]
  },
  {
    id: 514,
    name: "Humfrey Hardyng",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 209 AC, at Ashford",

    childrenIds: [],
    allegiances: [176],
    bookIds: [4, 6]
  },
  {
    id: 515,
    name: "Humfrey Hewett",
    isFemale: false,
    
    titles: ["Lord of Oakenshield"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [194],
    bookIds: [5, 8]
  },
  {
    id: 516,
    name: "Humfrey Swyft",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [374],
    bookIds: [5, 8]
  },
  {
    id: 517,
    name: "Humfrey Wagstaff",
    isFemale: false,
    
    titles: ["Ser", "Castellan of Grandview"],
    aliases: [],
    born: "In 230 AC, 231 AC or 232 AC",
    

    childrenIds: [],
    allegiances: [413, 161],
    bookIds: [5]
  },
  {
    id: 518,
    name: "Hyle Hunt",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [206],
    bookIds: [5]
  },
  {
    id: 519,
    name: "Igon Vyrwel",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [411, 398],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 520,
    name: "Illifer",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Illifer the Penniless"],
    born: "In 240 AC or before",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 521,
    name: "Ilyn Payne",
    isFemale: false,
    culture: "Westeros",
    titles: ["Ser King's Justice"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [295],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Wilko Johnson"],
    tvSeries: ["Season 1", "Season 2"]
  },
  {
    id: 522,
    name: "Imry Florent",
    isFemale: false,
    
    titles: ["Ser", "Lord High Captain"],
    aliases: ["The Fool of Florent"],
    
    died: "In 299 AC, at the Blackwater Rush",

    childrenIds: [],
    allegiances: [133],
    bookIds: [2, 3, 5],

    playedBy: ["Gordon Mahon (listed as Gordan Mahon)"],
    tvSeries: ["Season 2"]
  },
  {
    id: 523,
    name: "Jacelyn Bywater",
    isFemale: false,
    
    titles: [
      "Ser",
      "Captain of the Mud Gate",
      "Commander of the City Watch",
      "Lord"
    ],
    aliases: ["Ironhand"],
    
    died: "In 299 AC, at King's Landing",

    childrenIds: [],
    allegiances: [57],
    bookIds: [2, 3, 5]
  },
  {
    id: 524,
    name: "Jack Bulwer",
    isFemale: false,
    
    titles: ["First Ranger"],
    aliases: ["Black Jack Bulwer"],
    
    died: "In 300 AC, at Beyond the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 525,
    name: "Jack Musgood",
    isFemale: false,
    culture: "Stormlands",
    titles: ["Lord Commander of the Night's Watch"],
    aliases: ["Jolly Jack", "Sleepy Jack"],
    
    

    childrenIds: [],
    allegiances: [276],
    bookIds: [11, 8]
  },
  {
    id: 526,
    name: "Jaehaerys I",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    aliases: ["The Conciliator", "The Wise", "The Old King"],
    born: "34 AC, at King's Landing",
    died: "103 AC, at King's Landing",
    fatherId: 57,
    motherId: 110,
    spouseId: 105,
    childrenIds: [45, 109, 157, 265, 951],
    allegiances: [],
    bookIds: [11, 10, 9, 1, 3, 5, 8]
  },
  {
    id: 527,
    name: "Jaehaerys II",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    aliases: [],
    born: "225 AC, at King's Landing",
    died: "262 AC, at King's Landing",
    fatherId: 46,
    motherId: 195,
    spouseId: 971,
    childrenIds: [62, 869],
    allegiances: [],
    bookIds: [11, 1, 3, 8]
  },
  {
    id: 528,
    name: "Jaime Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 299 AC or 300 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [5]
  },
  {
    id: 529,
    name: "Jaime Lannister",
    isFemale: false,
    culture: "Westerlands",
    titles: [
      "Ser",
      "Lord Commander of the Kingsguard",
      "Warden of the East (formerly)"
    ],
    aliases: [
      "The Kingslayer",
      "The Lion of Lannister",
      "The Young Lion",
      "Cripple"
    ],
    born: "In 266 AC, at Casterly Rock",
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [1, 2],

    playedBy: ["Nikolaj Coster-Waldau"],
    tvSeries: ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5"]
  },
  {
    id: 530,
    name: "Jammos Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In 266 AC or 267 AC",
    

    spouseId: 952,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 531,
    name: "Janei Lannister",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 296 AC or 297 AC",
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 532,
    name: "Janna Tyrell",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 577,
    childrenIds: [],
    allegiances: [398, 140],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 533,
    name: "Janos Slynt",
    isFemale: false,
    
    titles: ["Commander of the City Watch Lord of Harrenhal"],
    aliases: [],
    born: "In or between 278 AC and 260 AC, at King's Landing",
    died: "In 300 AC, at Castle Black",

    childrenIds: [],
    allegiances: [354],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Dominic Carter"],
    tvSeries: ["Season 1", "Season 2", "Season 4", "Season 5"]
  },
  {
    id: 534,
    name: "Janyce Hunter",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 352,
    childrenIds: [],
    allegiances: [207, 143],
    bookIds: [2, 3]
  },
  {
    id: 535,
    name: "Jared Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In 248 AC or 249 AC",
    died: "In 300 AC (suspected)",

    spouseId: 95,
    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 536,
    name: "Jaremy Rykker",
    isFemale: false,
    
    titles: ["Seracting First Ranger"],
    aliases: [],
    
    died: "In 298 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 8]
  },
  {
    id: 537,
    name: "Jarman Buckwell",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 300 AC (supposedly)",

    childrenIds: [],
    allegiances: [51],
    bookIds: [2, 3, 8]
  },
  {
    id: 538,
    name: "Jason Lannister",
    isFemale: false,
    
    titles: [
      "Ser",
      "Lord of Casterly Rock",
      "Shield of Lannisport",
      "Warden of the West"
    ],
    aliases: [],
    
    died: "In 130 AC, at the Red Fork",

    spouseId: 568,
    childrenIds: [],
    allegiances: [229],
    bookIds: [11, 10, 9]
  },
  {
    id: 539,
    name: "Jason Mallister",
    isFemale: false,
    
    titles: ["Lord of Seagard"],
    aliases: [],
    born: "At Seagard",
    

    childrenIds: [],
    allegiances: [254],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 540,
    name: "Jasper Arryn",
    isFemale: false,
    
    titles: ["Lord of the Eyrie Defender of the Vale", "Warden of the East"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [7],
    bookIds: [5]
  },
  {
    id: 541,
    name: "Jasper Redfort",
    isFemale: false,
    culture: "Valemen",
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [316],
    bookIds: [5, 8]
  },
  {
    id: 542,
    name: "Jasper Waynwood",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [417],
    bookIds: [5]
  },
  {
    id: 543,
    name: "Jasper Wylde",
    isFemale: false,
    
    titles: ["Lord of the Rain House", "Master of laws"],
    aliases: ["Ironrod"],
    
    died: "In 130 AC, at King's Landing",

    childrenIds: [],
    allegiances: [438],
    bookIds: [9]
  },
  {
    id: 544,
    name: "Jeffory Mallister",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At King's Landing",

    childrenIds: [],
    allegiances: [254],
    bookIds: [2]
  },
  {
    id: 545,
    name: "Jeffory Norcross",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Neveryield"],
    
    

    childrenIds: [],
    allegiances: [281],
    bookIds: [5]
  },
  {
    id: 546,
    name: "Jena Dondarrion",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 161,
    childrenIds: [],
    allegiances: [102, 378],
    bookIds: [11]
  },
  {
    id: 547,
    name: "Jeor Mormont",
    isFemale: false,
    culture: "Northmen",
    titles: [
      "Lord of Bear Island (formerly)",
      "Lord Commander of the Night's Watch"
    ],
    aliases: ["The Old Bear"],
    born: "In 230 AC",
    died: "In 299 AC, at Craster's Keep",

    childrenIds: [],
    allegiances: [271],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["James Cosmo"],
    tvSeries: ["Season 1", "Season 2", "Season 3"]
  },
  {
    id: 548,
    name: "Jeyne Arryn",
    isFemale: true,
    culture: "Valemen",
    titles: [
      "Lady of the Eyrie",
      "Defender of the Vale",
      "Warden of the East",
      "Lady Regent"
    ],
    aliases: ["The Maiden of the Vale"],
    
    died: "In 134 AC, at Gulltown",

    childrenIds: [],
    allegiances: [7],
    bookIds: [11, 10, 9]
  },
  {
    id: 549,
    name: "Jeyne Beesbury",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 866,
    childrenIds: [],
    allegiances: [18, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 550,
    name: "Jeyne Darry",
    isFemale: true,
    culture: "Westeros",
    titles: [],
    aliases: [],
    
    

    spouseId: 1275,
    childrenIds: [],
    allegiances: [97],
    bookIds: [3, 5]
  },
  {
    id: 551,
    name: "Jeyne Farman",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 1403,
    childrenIds: [],
    allegiances: [120, 73],
    bookIds: [5]
  },
  {
    id: 552,
    name: "Jeyne Fossoway",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 444,
    childrenIds: [],
    allegiances: [140],
    bookIds: [5]
  },
  {
    id: 553,
    name: "Jeyne Goodbrook",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 293 AC",
    

    childrenIds: [],
    allegiances: [151],
    bookIds: [2, 3, 5]
  },
  {
    id: 554,
    name: "Jeyne Lothston",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 164 AC",
    

    childrenIds: [],
    allegiances: [246],
    bookIds: [11]
  },
  {
    id: 555,
    name: "Jeyne Lydden",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 994,
    childrenIds: [],
    allegiances: [250],
    bookIds: [2, 3, 5]
  },
  {
    id: 556,
    name: "Jeyne Marbrand",
    isFemale: true,
    
    titles: ["Lady of Casterly Rock"],
    aliases: [],
    
    died: "In 255 AC",

    spouseId: 1057,
    childrenIds: [],
    allegiances: [258, 229],
    bookIds: [11]
  },
  {
    id: 557,
    name: "Jeyne Poole",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: ["Arya Stark"],
    born: "At Winterfell",
    

    spouseId: 849,
    childrenIds: [],
    allegiances: [305],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 558,
    name: "Jeyne Royce",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 572,
    childrenIds: [],
    allegiances: [328, 7],
    bookIds: [1]
  },
  {
    id: 559,
    name: "Jeyne Swann",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [373],
    bookIds: [3]
  },
  {
    id: 560,
    name: "Jeyne Westerling",
    isFemale: true,
    
    titles: ["Queen", "Black Bride"],
    aliases: [],
    born: "In 27 AC or before",
    died: "In 47 AC or 48 AC",

    spouseId: 90,
    childrenIds: [],
    allegiances: [425, 377, 378],
    bookIds: [11, 3]
  },
  {
    id: 561,
    name: "Jeyne Westerling",
    isFemale: true,
    culture: "Westerman",
    titles: ["Queen", "Lady of Winterfell"],
    aliases: [],
    born: "In 283 AC, at the Crag",
    

    spouseId: 1880,
    childrenIds: [],
    allegiances: [425, 362],
    bookIds: [3, 5]
  },
  {
    id: 562,
    name: "Joanna Lannister",
    isFemale: true,
    culture: "Westerman",
    titles: ["Lady of Casterly Rock"],
    aliases: [],
    born: "In or between 245 AC and 250 AC, at Casterly Rock",
    died: "In 273 AC",

    spouseId: 27,
    childrenIds: [],
    allegiances: [229],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 563,
    name: "Joanna Swyft",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [374],
    bookIds: [3, 5]
  },
  {
    id: 564,
    name: "Jocelyn Swyft",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [374],
    bookIds: [5, 8]
  },
  {
    id: 565,
    name: "Joffrey Baratheon",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    aliases: [
      "Joffrey the Illborn",
      "The Young Usurper",
      "Aerys the Third",
      "Joffrey-called-Baratheon"
    ],
    born: "286 AC, at King's Landing",
    died: "300 AC, at Red Keep, King's Landing",
    fatherId: 901,
    motherId: 238,
    spouseId: 16,
    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Jack Gleeson"],
    tvSeries: ["Season 1", "Season 2", "Season 3", "Season 4"]
  },
  {
    id: 566,
    name: "Joffrey Caswell",
    isFemale: false,
    
    titles: ["Lord of Bitterbridge"],
    aliases: [],
    born: "In 190 AC or 191 AC",
    

    childrenIds: [],
    allegiances: [63],
    bookIds: [7]
  },
  {
    id: 567,
    name: "Joffrey Lonmouth",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Knight of Kisses"],
    born: "In 99 AC or before",
    died: "In 114 AC, at King's Landing",

    childrenIds: [],
    allegiances: [244],
    bookIds: [10]
  },
  {
    id: 568,
    name: "Johanna Lannister",
    isFemale: true,
    
    titles: ["Lady of Casterly Rock"],
    aliases: [],
    born: "At the Crag",
    

    spouseId: 538,
    childrenIds: [],
    allegiances: [425, 229],
    bookIds: []
  },
  {
    id: 569,
    name: "Johanna Swann",
    isFemale: true,
    
    titles: [],
    aliases: ["The Black Swan"],
    
    

    childrenIds: [],
    allegiances: [373],
    bookIds: [10]
  },
  {
    id: 570,
    name: "John the Oak",
    isFemale: false,
    
    titles: [],
    aliases: ["The First Knight"],
    
    

    childrenIds: [],
    allegiances: [286],
    bookIds: [11]
  },
  {
    id: 571,
    name: "Jojen Reed",
    isFemale: false,
    culture: "Crannogmen",
    titles: [],
    aliases: ["Little Grandfather"],
    born: "In 286 AC, at Greywater Watch",
    

    childrenIds: [],
    allegiances: [318],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Thomas Brodie-Sangster"],
    tvSeries: ["Season 3", "Season 4"]
  },
  {
    id: 572,
    name: "Jon Arryn",
    isFemale: false,
    culture: "Valemen",
    titles: [
      "Lord of the Eyrie",
      "Defender of the Vale",
      "Warden of the East",
      "Hand of the King"
    ],
    aliases: [],
    born: "In or between 217 AC and 220 AC (roughly), at the Eyrie",
    died: "In 298 AC, at King's Landing",

    spouseId: 558,
    childrenIds: [],
    allegiances: [7],
    bookIds: [11, 1, 2, 3, 5, 8],

    playedBy: ["John Standing"],
    tvSeries: ["Season 1"]
  },
  {
    id: 573,
    name: "Jon Bettley",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Beardless Jon"],
    
    

    childrenIds: [],
    allegiances: [20],
    bookIds: [5, 8]
  },
  {
    id: 574,
    name: "Jon Brax",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 296 AC",
    

    childrenIds: [],
    allegiances: [40],
    bookIds: [2, 3, 5]
  },
  {
    id: 575,
    name: "Jon Bulwer",
    isFemale: false,
    
    titles: ["Lord of Blackcrown"],
    aliases: [],
    
    

    spouseId: 1073,
    childrenIds: [],
    allegiances: [52],
    bookIds: [3, 5]
  },
  {
    id: 576,
    name: "Jon Connington",
    isFemale: false,
    culture: "Stormlands",
    titles: [
      "Lord of Griffin's Roost",
      "Hand of the King",
      "Hand of the True King"
    ],
    aliases: ["Griffthe Mad King's Hand"],
    born: "In or between 263 AC and 265 AC",
    

    childrenIds: [],
    allegiances: [80, 378],
    bookIds: [11, 3, 5]
  },
  {
    id: 577,
    name: "Jon Fossoway",
    isFemale: false,
    culture: "Reach",
    titles: ["The Knight of New Barrel", "Ser"],
    aliases: [],
    
    

    spouseId: 532,
    childrenIds: [],
    allegiances: [140],
    bookIds: [2]
  },
  {
    id: 578,
    name: "Jon Hollard",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [198],
    bookIds: [5]
  },
  {
    id: 579,
    name: "Jon Lynderly",
    isFemale: false,
    
    titles: ["Lord of the Snakewood"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [251],
    bookIds: [5, 8]
  },
  {
    id: 580,
    name: "Jon Myre",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Pinchface Jon"],
    
    

    childrenIds: [],
    allegiances: [278],
    bookIds: [3, 5, 8]
  },
  {
    id: 581,
    name: "Jon Penrose",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [300],
    bookIds: [4]
  },
  {
    id: 582,
    name: "Jon Redfort",
    isFemale: false,
    culture: "Valemen",
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [316],
    bookIds: [5, 8]
  },
  {
    id: 583,
    name: "Jon Snow",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord Commander of the Night's Watch"],
    aliases: [
      "Lord Snow",
      "Ned Stark's Bastard",
      "The Snow of Winterfell",
      "The Crow-Come-Over",
      "The 998th Lord Commander of the Night's Watch",
      "The Bastard of Winterfell",
      "The Black Bastard of the Wall",
      "Lord Crow"
    ],
    born: "In 283 AC",
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [5],

    playedBy: ["Kit Harington"],
    tvSeries: [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ]
  },
  {
    id: 584,
    name: "Jon Stark",
    isFemale: false,
    
    titles: ["King in the North"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 11]
  },
  {
    id: 585,
    name: "Jon Umber",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of the Last Hearth"],
    aliases: ["The Greatjon", "Greatjon Umber"],
    born: "At the Last Hearth",
    

    childrenIds: [],
    allegiances: [401],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Clive Mantle"],
    tvSeries: ["Season 1"]
  },
  {
    id: 586,
    name: "Jon Umber",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: ["The Smalljon", "Smalljon Umber"],
    
    died: "In 299 AC, at the Twins",

    childrenIds: [],
    allegiances: [401],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Dean Jagger"],
    tvSeries: ["Season 6"]
  },
  {
    id: 587,
    name: "Jon Wylde",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 370,
    childrenIds: [],
    allegiances: [438],
    bookIds: [2, 3, 5]
  },
  {
    id: 588,
    name: "Jonelle Cerwyn",
    isFemale: true,
    culture: "Northmen",
    titles: ["Lady of Cerwyn"],
    aliases: [],
    born: "In 267 AC, at Cerwyn",
    

    childrenIds: [],
    allegiances: [66],
    bookIds: [1, 3, 5, 8]
  },
  {
    id: 589,
    name: "Jonnel Stark",
    isFemale: false,
    
    titles: ["Lord of Winterfell", "Warden of the North"],
    aliases: ["One-Eye"],
    
    

    spouseId: 911,
    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 2]
  },
  {
    id: 590,
    name: "Jonos Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 291 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 591,
    name: "Jonos Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North", "Lord of Winterfell"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 592,
    name: "Jonothor Darry",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Jon Darry"],
    
    died: "In 283 AC, at the Trident",

    childrenIds: [],
    allegiances: [97],
    bookIds: [3, 5]
  },
  {
    id: 593,
    name: "Jorah Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North", "Lord of Winterfell"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 594,
    name: "Jorelle Mormont",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: ["Jory"],
    born: "In or between 278 AC and 289 AC",
    

    childrenIds: [],
    allegiances: [271],
    bookIds: [5, 8]
  },
  {
    id: 595,
    name: "Jory Cassel",
    isFemale: false,
    culture: "Northmen",
    titles: ["Captain of the guard"],
    aliases: [],
    born: "At Winterfell",
    died: "In 298 AC, at King's Landing",

    childrenIds: [],
    allegiances: [61],
    bookIds: [1, 2, 3, 8],

    playedBy: ["Jamie Sives"],
    tvSeries: ["Season 1"]
  },
  {
    id: 596,
    name: "Joseth Mallister",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [254],
    bookIds: [4]
  },
  {
    id: 597,
    name: "Josmyn Peckledon",
    isFemale: false,
    
    titles: [],
    aliases: ["Peck"],
    born: "In 284 AC or 285 AC",
    

    childrenIds: [],
    allegiances: [299],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 598,
    name: "Josua Willum",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [429],
    bookIds: [2]
  },
  {
    id: 599,
    name: "Jothos Slynt",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [354],
    bookIds: [3]
  },
  {
    id: 600,
    name: "Joyeuse Erenford",
    isFemale: true,
    
    titles: ["Lady of the Crossing"],
    aliases: [],
    born: "In 282 AC or 283 AC",
    

    spouseId: 1093,
    childrenIds: [],
    allegiances: [115, 143],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Kelly Long"],
    tvSeries: ["Season 1", "Season 3"]
  },
  {
    id: 601,
    name: "Justin Massey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["The Smiler"],
    
    

    childrenIds: [],
    allegiances: [260, 15],
    bookIds: [5, 8]
  },
  {
    id: 602,
    name: "Jyanna Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 180,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 603,
    name: "Karlon Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Karl's Hold"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362, 215],
    bookIds: [3]
  },
  {
    id: 604,
    name: "Karyl Vance",
    isFemale: false,
    
    titles: ["Ser", "Lord of Wayfarer's Rest"],
    aliases: [],
    born: "At Wayfarer's Rest",
    

    childrenIds: [],
    allegiances: [405],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 605,
    name: "Kevan Lannister",
    isFemale: false,
    
    titles: ["Ser", "Master of laws", "Lord Regent", "Protector of the Realm"],
    aliases: [],
    born: "In 244 AC",
    died: "In 300 AC, at King's Landing",

    spouseId: 327,
    childrenIds: [],
    allegiances: [229],
    bookIds: [1, 2, 3, 5],

    playedBy: ["Ian Gelder"],
    tvSeries: ["Season 1", "Season 2", "Season 5", "Season 6"]
  },
  {
    id: 606,
    name: "Kirth Vance",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [404],
    bookIds: [3, 5]
  },
  {
    id: 607,
    name: "Kyle Condon",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [78],
    bookIds: [3]
  },
  {
    id: 608,
    name: "Kyle Royce",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At King's Landing",

    childrenIds: [],
    allegiances: [328],
    bookIds: [2]
  },
  {
    id: 609,
    name: "Kyra Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In or between 262 AC and 277 AC",
    

    spouseId: 404,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 610,
    name: "Laena Velaryon",
    isFemale: true,
    culture: "Valyrian",
    titles: [],
    aliases: [],
    born: "In 93 AC",
    died: "In 120 AC, at Driftmark",

    spouseId: 269,
    childrenIds: [],
    allegiances: [407, 378],
    bookIds: [11, 10, 9]
  },
  {
    id: 611,
    name: "Laenor Velaryon.",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Ser"],
    aliases: [],
    born: "In 94 AC",
    died: "In 120 AC, at Spicetown",

    spouseId: 874,
    childrenIds: [],
    allegiances: [407, 378],
    bookIds: [11, 10, 9]
  },
  {
    id: 612,
    name: "Lambert Turnberry",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [396],
    bookIds: [5, 8]
  },
  {
    id: 613,
    name: "Lancel Lannister",
    isFemale: false,
    
    titles: ["Ser", "Lord of Darry"],
    aliases: [],
    born: "In 282 AC",
    

    spouseId: 114,
    childrenIds: [],
    allegiances: [229, 230],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Eugene Simon"],
    tvSeries: ["Season 1", "Season 2", "Season 5"]
  },
  {
    id: 614,
    name: "Lancel V Lannister",
    isFemale: false,
    
    titles: ["King of the Rock"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [6]
  },
  {
    id: 615,
    name: "Lann",
    isFemale: false,
    
    titles: [],
    aliases: ["Lann the Clever"],
    born: "In Age of Heroes",
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [11, 1]
  },
  {
    id: 616,
    name: "Lanna Lannister",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In or between 271 AC and 286 AC",
    

    spouseId: 124,
    childrenIds: [],
    allegiances: [229, 212],
    bookIds: [3, 5, 8, 11]
  },
  {
    id: 617,
    name: "Larence Snow",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "In 286 AC",
    

    childrenIds: [],
    allegiances: [202],
    bookIds: [2, 3, 5]
  },
  {
    id: 618,
    name: "Larys Strong",
    isFemale: false,
    
    titles: ["Lord of Harrenhal", "Master of whisperers"],
    aliases: ["Larys Clubfoot"],
    born: "In 91 AC or before",
    

    childrenIds: [],
    allegiances: [369],
    bookIds: [10, 9]
  },
  {
    id: 619,
    name: "Leana Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 299 AC or 300 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [5]
  },
  {
    id: 620,
    name: "Lenwood Tawney",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Little Lenwood Tawney"],
    
    

    childrenIds: [],
    allegiances: [381],
    bookIds: [5]
  },
  {
    id: 621,
    name: "Leo Blackbar",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 783,
    childrenIds: [],
    allegiances: [22],
    bookIds: [3, 5]
  },
  {
    id: 622,
    name: "Leo Lefford",
    isFemale: false,
    
    titles: ["Lord of the Golden Tooth"],
    aliases: [],
    
    died: "In 299 AC, at Trident",

    childrenIds: [],
    allegiances: [234],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 623,
    name: "Leo Tyrell",
    isFemale: false,
    culture: "Reach",
    titles: [
      "Lord Paramount of the Mander",
      "Lord of Highgarden",
      "Defender of the Marches",
      "High Marshal of the Reach",
      "Warden of the South"
    ],
    aliases: ["Leo Longthorn"],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [11, 4, 7, 3]
  },
  {
    id: 624,
    name: "Leo Tyrell",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 94,
    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 625,
    name: "Leobald Tallhart",
    isFemale: false,
    culture: "Northmen",
    titles: ["Castellan of Torrhen's Square"],
    aliases: [],
    born: "At Torrhen's Square",
    died: "In 299 AC, at Winterfell",

    spouseId: 189,
    childrenIds: [],
    allegiances: [376],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 626,
    name: "Leona Tyrell",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 627,
    name: "Leona Woolfield",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 1122,
    childrenIds: [],
    allegiances: [434, 255],
    bookIds: [5, 8]
  },
  {
    id: 628,
    name: "Leonella Lefford",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 649,
    childrenIds: [],
    allegiances: [234, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 629,
    name: "Leslyn Haigh",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 819,
    childrenIds: [],
    allegiances: [172],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 630,
    name: "Lester Morrigen",
    isFemale: false,
    
    titles: ["Lord of Crows Nest"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [272],
    bookIds: [3, 5, 8]
  },
  {
    id: 631,
    name: "Lewyn Martell",
    isFemale: false,
    culture: "Dornish",
    titles: ["Prince", "Ser"],
    aliases: [],
    
    died: "In 283 AC, at the Trident",

    childrenIds: [],
    allegiances: [285],
    bookIds: [1, 3, 5, 8]
  },
  {
    id: 632,
    name: "Lewys Lydden",
    isFemale: false,
    
    titles: ["Lord of the Deep Den"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [250],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 633,
    name: "Lewys Piper",
    isFemale: false,
    culture: "Rivermen",
    titles: [],
    aliases: ["Little Lew"],
    
    

    childrenIds: [],
    allegiances: [302],
    bookIds: [5, 8]
  },
  {
    id: 634,
    name: "Leyla Hightower",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 1553,
    childrenIds: [],
    allegiances: [195],
    bookIds: [5]
  },
  {
    id: 635,
    name: "Leyton Hightower",
    isFemale: false,
    
    titles: [
      "Lord of the Hightower",
      "Lord of the Port",
      "Voice of Oldtown",
      "Defender of the Citadel",
      "Beacon of the South"
    ],
    aliases: ["Old Man of Oldtown"],
    
    

    spouseId: 877,
    childrenIds: [],
    allegiances: [195],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 636,
    name: "Lia Serry",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 1019,
    childrenIds: [],
    allegiances: [343, 398],
    bookIds: [3, 5]
  },
  {
    id: 637,
    name: "Liane Vance",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [405],
    bookIds: [5]
  },
  {
    id: 638,
    name: "Lollys Stokeworth",
    isFemale: true,
    
    titles: ["Lady of Stokeworth"],
    aliases: ["Lollys Lackwit"],
    born: "In 265 AC",
    

    spouseId: 217,
    childrenIds: [],
    allegiances: [364],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 639,
    name: "Lomas Estermont",
    isFemale: false,
    culture: "Stormlands",
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [117],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 640,
    name: "Loras Tyrell",
    isFemale: false,
    culture: "Reach",
    titles: ["Ser", "Lord Commander of the Rainbow Guard"],
    aliases: ["The Knight of Flowers", "Knight o' Pansies", "Ser Daisy"],
    born: "In 282 AC, at Highgarden",
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Finn Jones"],
    tvSeries: [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ]
  },
  {
    id: 641,
    name: "Lord Ashford",
    isFemale: false,
    culture: "Reach",
    titles: ["Lord of Ashford"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [8],
    bookIds: [4]
  },
  {
    id: 642,
    name: "Lord Caswell",
    isFemale: false,
    
    titles: ["Lord of Bitterbridge", "Defender of the Fords"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [63],
    bookIds: [8]
  },
  {
    id: 643,
    name: "Lord Staunton",
    isFemale: false,
    
    titles: ["Lord of Rook's Rest"],
    aliases: [],
    
    died: "In 129 AC, at Rook's Rest",

    childrenIds: [],
    allegiances: [363],
    bookIds: [9]
  },
  {
    id: 644,
    name: "Lorent Caswell",
    isFemale: false,
    
    titles: ["Lord of Bitterbridge", "Defender of the Fords"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [63],
    bookIds: [2, 8]
  },
  {
    id: 645,
    name: "Lorent Lorch",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [245],
    bookIds: [5, 8]
  },
  {
    id: 646,
    name: "Lorent Marbrand",
    isFemale: false,
    culture: "Westerman",
    titles: ["Ser", "Lord Commander of the Queensguard"],
    aliases: [],
    
    died: "In 130 AC, at King's Landing",

    childrenIds: [],
    allegiances: [258],
    bookIds: [9]
  },
  {
    id: 647,
    name: "Lorent Tyrell",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 648,
    name: "Lorra Royce",
    isFemale: true,
    
    titles: ["Lady of Winterfell"],
    aliases: [],
    
    

    spouseId: 192,
    childrenIds: [],
    allegiances: [328, 362],
    bookIds: [11]
  },
  {
    id: 649,
    name: "Lothar Frey",
    isFemale: false,
    culture: "Rivermen",
    titles: ["Steward of the Twins"],
    aliases: ["Lame Lothar"],
    born: "In 265 AC or 266 AC, at Twins",
    

    spouseId: 628,
    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Tom Brooke"],
    tvSeries: ["Season 3"]
  },
  {
    id: 650,
    name: "Lothar Mallery",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    died: "In 298 AC, at Mummer's Ford",

    childrenIds: [],
    allegiances: [253],
    bookIds: [1, 3]
  },
  {
    id: 651,
    name: "Lothor Brune",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Lothor Apple-Eater"],
    
    

    childrenIds: [],
    allegiances: [48, 10],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 652,
    name: "Lucamore Strong",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Lucamore the Lusty"],
    
    

    childrenIds: [],
    allegiances: [369],
    bookIds: [5]
  },
  {
    id: 653,
    name: "Lucas Codd",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Left-Hand Lucas"],
    
    

    childrenIds: [],
    allegiances: [75],
    bookIds: [5, 8]
  },
  {
    id: 654,
    name: "Lucas Corbray",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [81],
    bookIds: [5, 8]
  },
  {
    id: 655,
    name: "Lucas Inchfield",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Lucas the Longinch"],
    
    died: "In 211 AC, at the Chequy Water",

    childrenIds: [],
    allegiances: [209, 419],
    bookIds: [6, 7]
  },
  {
    id: 656,
    name: "Lucas Lothston",
    isFemale: false,
    
    titles: ["Lord of Harrenhal", "Hand of the King"],
    aliases: [],
    
    

    spouseId: 391,
    childrenIds: [],
    allegiances: [246],
    bookIds: [11]
  },
  {
    id: 657,
    name: "Lucas Roote",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at the Riverlands",

    childrenIds: [],
    allegiances: [324],
    bookIds: [3]
  },
  {
    id: 658,
    name: "Lucas Tyrell",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 659,
    name: "Luceon Frey",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    born: "In or between 249 AC and 257 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 660,
    name: "Lucias Vypren",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    

    spouseId: 690,
    childrenIds: [],
    allegiances: [410],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 661,
    name: "Lucimore Botley",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [36],
    bookIds: [5]
  },
  {
    id: 662,
    name: "Lucion Lannister",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 270 AC and 285 AC",
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [3, 5, 8, 11]
  },
  {
    id: 663,
    name: "Lucos Chyttering",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: ["Little Lucos"],
    born: "In 283 AC",
    

    childrenIds: [],
    allegiances: [71],
    bookIds: [3, 5]
  },
  {
    id: 664,
    name: "Luthor Tyrell",
    isFemale: false,
    culture: "Reach",
    titles: [
      "Lord Paramount of the Mander",
      "Lord of Highgarden",
      "Defender of the Marches",
      "High Marshal of the Reach",
      "Warden of the South"
    ],
    aliases: [],
    born: "At Highgarden",
    

    spouseId: 784,
    childrenIds: [],
    allegiances: [398],
    bookIds: [3]
  },
  {
    id: 665,
    name: "Luthor Tyrell",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 372,
    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 666,
    name: "Luthor Tyrell",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 667,
    name: "Lyanna Mormont",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "In 290 AC",
    

    childrenIds: [],
    allegiances: [271],
    bookIds: [5, 8],

    playedBy: ["Bella Ramsey"],
    tvSeries: ["Season 6"]
  },
  {
    id: 668,
    name: "Lyarra Stark",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    spouseId: 887,
    childrenIds: [],
    allegiances: [362],
    bookIds: [11]
  },
  {
    id: 669,
    name: "Lyessa Flint",
    isFemale: true,
    culture: "Northmen",
    titles: ["Lady of Widow's Watch"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [132],
    bookIds: [2, 3, 5]
  },
  {
    id: 670,
    name: "Lyle Crakehall",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Strongboar"],
    born: "At Crakehall",
    

    childrenIds: [],
    allegiances: [86],
    bookIds: [2, 3, 5]
  },
  {
    id: 671,
    name: "Lyman Beesbury",
    isFemale: false,
    
    titles: ["Lord", "Master of coin"],
    aliases: [],
    born: "In 48 AC or 49 AC",
    died: "In 129 AC, at King's Landing",

    childrenIds: [],
    allegiances: [18],
    bookIds: [9]
  },
  {
    id: 672,
    name: "Lyman Darry",
    isFemale: false,
    
    titles: ["Lord of Darry"],
    aliases: [],
    born: "In 290 AC or 291 AC",
    died: "In 299 AC, at Darry",

    childrenIds: [],
    allegiances: [97],
    bookIds: [1, 2]
  },
  {
    id: 673,
    name: "Lymond Goodbrook",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [151],
    bookIds: [3, 5, 8]
  },
  {
    id: 674,
    name: "Lymond Lychester",
    isFemale: false,
    culture: "Rivermen",
    titles: ["Lord of Castle Lychester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [249],
    bookIds: [3, 5]
  },
  {
    id: 675,
    name: "Lymond Mallister",
    isFemale: false,
    
    titles: ["Lord of Seagard"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [254],
    bookIds: [10]
  },
  {
    id: 676,
    name: "Lymond Vikary",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [408],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 677,
    name: "Lyn Corbray",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "At Heart's Home",
    

    childrenIds: [],
    allegiances: [81],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 678,
    name: "Lynesse Hightower",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 1560,
    childrenIds: [],
    allegiances: [195],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 679,
    name: "Lyonel Baratheon",
    isFemale: false,
    
    titles: [
      "Ser  Lord of Storm's End Lord Paramount of the Stormlands  Storm King (briefly)"
    ],
    aliases: ["The Laughing Storm"],
    
    died: "In or between 239 AC and 245 AC",

    childrenIds: [],
    allegiances: [17],
    bookIds: [11, 4]
  },
  {
    id: 680,
    name: "Lyonel Bentley",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 130 AC, at between Stokeworth and Duskendale",

    childrenIds: [],
    allegiances: [],
    bookIds: [9]
  },
  {
    id: 681,
    name: "Lyonel Corbray",
    isFemale: false,
    
    titles: ["Lord of Heart's Home"],
    aliases: [],
    born: "In 260 AC (roughly), at Heart's Home",
    

    childrenIds: [],
    allegiances: [81],
    bookIds: [5, 8]
  },
  {
    id: 682,
    name: "Lyonel Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 259 AC and 283 AC",
    

    spouseId: 741,
    childrenIds: [],
    allegiances: [142],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 683,
    name: "Lyonel Selmy",
    isFemale: false,
    
    titles: ["Ser", "Knight of Harvest Hall"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [341],
    bookIds: [3]
  },
  {
    id: 684,
    name: "Lyonel Strong",
    isFemale: false,
    
    titles: ["Lord of Harrenhal", "Master of laws", "Hand of the King"],
    aliases: [],
    
    died: "In 120 AC, at Harrenhal",

    childrenIds: [],
    allegiances: [369],
    bookIds: [10]
  },
  {
    id: 685,
    name: "Lyonel Tyrell",
    isFemale: false,
    culture: "Reach",
    titles: [
      "Lord Paramount of the Mander",
      "Lord of Highgarden",
      "Defender of the Marches",
      "High Marshal of the Reach",
      "Warden of the South"
    ],
    aliases: [],
    
    died: "In 159 AC or 160 AC, at Sandstone",

    childrenIds: [],
    allegiances: [398],
    bookIds: [11, 9]
  },
  {
    id: 686,
    name: "Lyonel Tyrell",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 687,
    name: "Lyra Mormont",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "In or between 277 AC and 288 AC",
    

    childrenIds: [],
    allegiances: [271],
    bookIds: [5, 8]
  },
  {
    id: 688,
    name: "Lysa Arryn",
    isFemale: true,
    
    titles: ["Lady of the Vale"],
    aliases: ["Lysa Tully"],
    born: "In 266 AC or 267 AC, at Riverrun",
    died: "In 300 AC, at the Eyrie",

    spouseId: 572,
    childrenIds: [],
    allegiances: [395, 7, 11],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Kate Dickie"],
    tvSeries: ["Season 1", "Season 4"]
  },
  {
    id: 689,
    name: "Lysa Meadows",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 785,
    childrenIds: [],
    allegiances: [261, 398],
    bookIds: [3, 5]
  },
  {
    id: 690,
    name: "Lythene Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 251 AC and 259 AC",
    

    spouseId: 660,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 691,
    name: "Mace Tyrell",
    isFemale: false,
    
    titles: [
      "Lord of Highgarden",
      "Defender of the Marches",
      "High Marshal of the Reach",
      "Warden of the South",
      "Hand of the King",
      "Master of ships (formerly)"
    ],
    aliases: ["Lord Oaf", "The Fat Flower", "Lord Puff Fish"],
    born: "In After 256 AC",
    

    spouseId: 69,
    childrenIds: [],
    allegiances: [398],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Roger Ashton-Griffiths"],
    tvSeries: ["Season 4", "Season 5", "Season 6"]
  },
  {
    id: 692,
    name: "Maege Mormont",
    isFemale: true,
    culture: "Northmen",
    titles: ["Lady of Bear Island"],
    aliases: ["The She-Bear"],
    born: "In or between 239 AC and 257 AC",
    

    childrenIds: [],
    allegiances: [271],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Elizabeth Barrett"],
    tvSeries: ["Season 1"]
  },
  {
    id: 693,
    name: "Maegelle Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In or between 249 AC and 266 AC",
    

    spouseId: 1305,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 694,
    name: "Maegor I",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm",
      "Hand of the King",
      "Ser"
    ],
    aliases: ["Maegor the Cruel"],
    born: "12 AC",
    died: "48 AC, at King's Landing",
    fatherId: 38,
    motherId: 2071,
    spouseId: 239,
    childrenIds: [],
    allegiances: [],
    bookIds: [11, 10, 9, 1, 3]
  },
  {
    id: 695,
    name: "Maekar I",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm",
      "Prince of Summerhall"
    ],
    aliases: ["The Anvil"],
    born: "or between 174 AC and 178 AC, at King's Landing",
    died: "233 AC, at Starpike",
    fatherId: 274,
    motherId: 709,
    spouseId: 334,
    childrenIds: [276, 58, 266, 46, 865],
    allegiances: [],
    bookIds: [11, 4, 6, 7, 1]
  },
  {
    id: 696,
    name: "Maelor Targaryen",
    isFemale: false,
    
    titles: ["Prince"],
    aliases: [],
    born: "In 127 AC, at King's Landing",
    died: "In 130 AC, at Bitterbridge",

    childrenIds: [],
    allegiances: [378],
    bookIds: [10, 9, 11]
  },
  {
    id: 697,
    name: "Maelys I Blackfyre",
    isFemale: false,
    culture: "Valyrian",
    titles: [],
    aliases: ["Maelys the Monstrous"],
    
    died: "In 260 AC, at Stepstones",

    childrenIds: [],
    allegiances: [23],
    bookIds: [11, 3, 8]
  },
  {
    id: 698,
    name: "Maldon Massey",
    isFemale: false,
    culture: "First Men",
    titles: ["Lord of Stonedance"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [260],
    bookIds: [11]
  },
  {
    id: 699,
    name: "Mallador Locke",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at Fist of the First Men",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3]
  },
  {
    id: 700,
    name: "Malwyn Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 284 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 701,
    name: "Mandon Moore",
    isFemale: false,
    culture: "Valemen",
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at the Blackwater Rush",

    childrenIds: [],
    allegiances: [268],
    bookIds: [1, 2, 3],

    playedBy: ["James Doran"],
    tvSeries: ["Season 1", "Season 2"]
  },
  {
    id: 702,
    name: "Manfred Dondarrion",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [102],
    bookIds: [4]
  },
  {
    id: 703,
    name: "Manfred Lothston",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [246],
    bookIds: [6]
  },
  {
    id: 704,
    name: "Manfred Swann",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [373],
    bookIds: [3]
  },
  {
    id: 705,
    name: "Manfrey Martell",
    isFemale: false,
    culture: "Dornish",
    titles: ["Ser", "Castellan of Sunspear"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [5, 8]
  },
  {
    id: 706,
    name: "Manfryd Lothston",
    isFemale: false,
    
    titles: [],
    aliases: ["Manfryd o' the Black Hood"],
    
    

    childrenIds: [],
    allegiances: [246],
    bookIds: [5]
  },
  {
    id: 707,
    name: "Manfryd Yew",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [443],
    bookIds: [5, 8]
  },
  {
    id: 708,
    name: "Margot Lannister",
    isFemale: true,
    
    titles: ["Lady of Starpike"],
    aliases: [],
    
    

    spouseId: 1027,
    childrenIds: [],
    allegiances: [229, 296],
    bookIds: [3, 5, 8]
  },
  {
    id: 709,
    name: "Mariah Martell",
    isFemale: true,
    culture: "Dornish",
    titles: ["Princess"],
    aliases: ["Myriah Martell"],
    
    

    spouseId: 274,
    childrenIds: [],
    allegiances: [285, 378],
    bookIds: [11, 4, 1, 5]
  },
  {
    id: 710,
    name: "Maric Seaworth",
    isFemale: false,
    
    titles: ["Oarmaster"],
    aliases: [],
    
    died: "In 299 AC, at Blackwater Rush",

    childrenIds: [],
    allegiances: [340],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 711,
    name: "Marissa Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 286 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 712,
    name: "Mariya Darry",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 751,
    childrenIds: [],
    allegiances: [97, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 713,
    name: "Mark Mullendore",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [275],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 714,
    name: "Mark Ryswell",
    isFemale: false,
    culture: "Northmen",
    titles: ["Ser"],
    aliases: [],
    
    died: "In 283 AC, at the Tower of Joy",

    childrenIds: [],
    allegiances: [335],
    bookIds: [1]
  },
  {
    id: 715,
    name: "Marlon Manderly",
    isFemale: false,
    
    titles: ["Ser", "Commander of the garrison at White Harbor"],
    aliases: [],
    born: "At White Harbor",
    

    childrenIds: [],
    allegiances: [255],
    bookIds: [5, 8]
  },
  {
    id: 716,
    name: "Marna Locke",
    isFemale: true,
    culture: "Northmen",
    titles: ["Lady of Winterfell"],
    aliases: [],
    
    

    spouseId: 351,
    childrenIds: [],
    allegiances: [239, 362],
    bookIds: [11]
  },
  {
    id: 717,
    name: "Maron Botley",
    isFemale: false,
    
    titles: [],
    aliases: ["Fishwhiskers"],
    
    

    childrenIds: [],
    allegiances: [36],
    bookIds: [2, 3]
  },
  {
    id: 718,
    name: "Maron Greyjoy",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    born: "In 275 AC or before",
    died: "In 289 AC, at Pyke",

    childrenIds: [],
    allegiances: [169],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 719,
    name: "Maron Nymeros Martell",
    isFemale: false,
    culture: "Dornish",
    titles: ["Prince of Dorne"],
    aliases: [],
    
    

    spouseId: 271,
    childrenIds: [],
    allegiances: [285],
    bookIds: [5, 8, 11]
  },
  {
    id: 720,
    name: "Maron Volmark",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Volmark", "Lord of Greenshield"],
    aliases: [],
    born: "In 283 AC or 284 AC",
    

    childrenIds: [],
    allegiances: [409],
    bookIds: [3, 5, 8]
  },
  {
    id: 721,
    name: "Marq Piper",
    isFemale: false,
    culture: "Rivermen",
    titles: ["Ser"],
    aliases: [],
    born: "At Pinkmaiden Castle",
    

    childrenIds: [],
    allegiances: [302],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 722,
    name: "Marq Rankenfell",
    isFemale: false,
    
    titles: ["Lord Commander of the Night's Watch"],
    aliases: ["Mad Marq Rankenfell"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 723,
    name: "Marsella Waynwood",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 994,
    childrenIds: [],
    allegiances: [417, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 724,
    name: "Martyn Cassel",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    died: "In 284 AC, at the Tower of Joy",

    childrenIds: [],
    allegiances: [61],
    bookIds: [1, 2]
  },
  {
    id: 725,
    name: "Martyn Lannister",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 285 AC and 287 AC",
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Dean-Charles Chapman"],
    tvSeries: ["Season 3"]
  },
  {
    id: 726,
    name: "Martyn Mullendore",
    isFemale: false,
    
    titles: ["Lord of Uplands"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [275],
    bookIds: [5]
  },
  {
    id: 727,
    name: "Marwyn Belmore",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Ser Ding-Dong"],
    
    

    childrenIds: [],
    allegiances: [19],
    bookIds: [2, 3, 5]
  },
  {
    id: 728,
    name: "Mary Mertyns",
    isFemale: true,
    culture: "Westeros",
    titles: ["Lady of Mistwood"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [265],
    bookIds: [8]
  },
  {
    id: 729,
    name: "Matarys Targaryen",
    isFemale: false,
    
    titles: ["Prince"],
    aliases: ["The Even Younger Prince"],
    born: "In 184 AC or later",
    died: "In 209 AC, at King's Landing",

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 4, 6, 7]
  },
  {
    id: 730,
    name: "Mathis Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 294 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 731,
    name: "Mathis Rowan",
    isFemale: false,
    culture: "Reach",
    titles: ["Lord of Goldengrove", "Marshall of the Northmarch"],
    aliases: [],
    
    

    spouseId: 198,
    childrenIds: [],
    allegiances: [326],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 732,
    name: "Maynard Plumm",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [303],
    bookIds: [7]
  },
  {
    id: 733,
    name: "Medgar Tully",
    isFemale: false,
    culture: "Rivermen",
    titles: ["Lord Paramount of the Trident", "Lord of Riverrun"],
    aliases: [],
    
    died: "In or between 209 AC and 211 AC",

    childrenIds: [],
    allegiances: [395],
    bookIds: [4]
  },
  {
    id: 734,
    name: "Medger Cerwyn",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Cerwyn"],
    aliases: [],
    born: "At Cerwyn",
    died: "In 299 AC, at Harrenhal",

    childrenIds: [],
    allegiances: [66],
    bookIds: [1, 2]
  },
  {
    id: 735,
    name: "Meera Reed",
    isFemale: true,
    culture: "Crannogmen",
    titles: [],
    aliases: [],
    born: "In 283 AC, at Greywater Watch",
    

    childrenIds: [],
    allegiances: [318],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Ellie Kendrick"],
    tvSeries: ["Season 3", "Season 4", "Season 6"]
  },
  {
    id: 736,
    name: "Megga Tyrell",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 286 AC (roughly)",
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5, 8]
  },
  {
    id: 737,
    name: "Melantha Blackwood",
    isFemale: true,
    
    titles: ["Lady of Winterfell"],
    aliases: [],
    
    

    spouseId: 1111,
    childrenIds: [],
    allegiances: [27, 362],
    bookIds: [11]
  },
  {
    id: 738,
    name: "Melara Crane",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 72,
    childrenIds: [],
    allegiances: [87, 133],
    bookIds: [2, 3, 5]
  },
  {
    id: 739,
    name: "Melara Hetherspoon",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 264 AC or 265 AC",
    died: "In 276 AC",

    childrenIds: [],
    allegiances: [193],
    bookIds: [5, 8]
  },
  {
    id: 740,
    name: "Meldred Merlyn",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Pebbleton"],
    aliases: ["The Merlyn"],
    
    

    childrenIds: [],
    allegiances: [263],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 741,
    name: "Melesa Crakehall",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 682,
    childrenIds: [],
    allegiances: [86],
    bookIds: [2, 3, 5]
  },
  {
    id: 742,
    name: "Melessa Florent",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 850,
    childrenIds: [],
    allegiances: [133, 379],
    bookIds: [2, 3, 5],

    playedBy: ["Samantha Spiro"],
    tvSeries: ["Season 6"]
  },
  {
    id: 743,
    name: "Melisandre",
    isFemale: true,
    culture: "Asshai",
    titles: [],
    aliases: [
      "The Red Priestess",
      "The Red Woman",
      "The King's Red Shadow",
      "Lady Red",
      "Lot Seven"
    ],
    born: "At Unknown",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5],

    playedBy: ["Carice van Houten"],
    tvSeries: ["Season 2", "Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 744,
    name: "Melissa Blackwood",
    isFemale: true,
    
    titles: [],
    aliases: ["Missy"],
    born: "In or between 156 AC and 160 AC",
    

    childrenIds: [],
    allegiances: [27],
    bookIds: [11, 8]
  },
  {
    id: 745,
    name: "Melwyn Sarsfield",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 974,
    childrenIds: [],
    allegiances: [338],
    bookIds: [3, 5]
  },
  {
    id: 746,
    name: "Meredyth Crane",
    isFemale: true,
    
    titles: [],
    aliases: ["Merry"],
    born: "At Red Lake",
    

    childrenIds: [],
    allegiances: [87],
    bookIds: [3, 5, 8]
  },
  {
    id: 747,
    name: "Merianne Frey",
    isFemale: true,
    
    titles: [],
    aliases: ["Merry Frey"],
    born: "In 288 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 748,
    name: "Merlon Crakehall",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [86],
    bookIds: [3, 5]
  },
  {
    id: 749,
    name: "Mern IX Gardener",
    isFemale: false,
    
    titles: ["King of the Reach", "Lord of Highgarden"],
    aliases: [],
    
    died: ", at the Field of Fire",

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 1]
  },
  {
    id: 750,
    name: "Merrell Florent",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [133],
    bookIds: [2, 3, 5]
  },
  {
    id: 751,
    name: "Merrett Frey",
    isFemale: false,
    culture: "Rivermen",
    titles: [],
    aliases: ["Merrett Muttonhead"],
    born: "In 262 AC",
    died: "In 300 AC, at Near Oldstones",

    spouseId: 712,
    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 5, 8]
  },
  {
    id: 752,
    name: "Meryn Trant",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [393],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Ian Beattie"],
    tvSeries: ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5"]
  },
  {
    id: 753,
    name: "Michael Mertyns",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["The White Owl"],
    
    

    childrenIds: [],
    allegiances: [265],
    bookIds: [5]
  },
  {
    id: 754,
    name: "Mina Tyrell",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 815,
    childrenIds: [],
    allegiances: [398, 317],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 755,
    name: "Minisa Whent",
    isFemale: true,
    culture: "Rivermen",
    titles: ["Lady of Riverrun"],
    aliases: [],
    
    died: "At Riverrun",

    spouseId: 503,
    childrenIds: [],
    allegiances: [427, 395],
    bookIds: [1, 2, 3]
  },
  {
    id: 756,
    name: "Monford Velaryon",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Lord of the Tides", "Master of Driftmark"],
    aliases: [],
    
    died: "In 299 AC, at Blackwater Rush",

    childrenIds: [],
    allegiances: [407],
    bookIds: [2, 3]
  },
  {
    id: 757,
    name: "Monterys Velaryon",
    isFemale: false,
    
    titles: ["Lord of the Tides", "Master of Driftmark"],
    aliases: [],
    born: "In 293 AC",
    

    childrenIds: [],
    allegiances: [407],
    bookIds: [3, 5]
  },
  {
    id: 758,
    name: "Moqorro",
    isFemale: false,
    
    titles: ["Slave of R'hllor"],
    aliases: ["Black Flame"],
    born: "At Volantis",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 759,
    name: "Morgil Hastwyck",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [185, 378],
    bookIds: [11, 1]
  },
  {
    id: 760,
    name: "Moribald Chester",
    isFemale: false,
    
    titles: ["Lord of Greenshield"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [70],
    bookIds: [5, 8]
  },
  {
    id: 761,
    name: "Morros Slynt",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [354],
    bookIds: [2, 3]
  },
  {
    id: 762,
    name: "Mors Manwoody",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [257],
    bookIds: [3, 5]
  },
  {
    id: 763,
    name: "Mors Martell",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 248 AC or 257 AC",
    died: "In 248 AC or 258 AC",

    childrenIds: [],
    allegiances: [285],
    bookIds: [5]
  },
  {
    id: 764,
    name: "Mors Umber",
    isFemale: false,
    culture: "Northmen",
    titles: ["Castellan of Last Hearth"],
    aliases: ["Mors Crowfood"],
    born: "In 235 AC or before, at Last Hearth",
    

    childrenIds: [],
    allegiances: [401],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 765,
    name: "Morya Frey",
    isFemale: true,
    
    titles: ["Lady"],
    aliases: [],
    born: "In 268 AC or 269 AC",
    

    spouseId: 393,
    childrenIds: [],
    allegiances: [143, 40],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 766,
    name: "Moryn Tyrell",
    isFemale: false,
    
    titles: ["Ser \nLord Commander of the City Watch of Oldtown"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 767,
    name: "Murmison",
    isFemale: false,
    
    titles: ["Septon", "Hand of the King"],
    aliases: [],
    
    died: "In 41 AC, at King's Landing",

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 3]
  },
  {
    id: 768,
    name: "Mychel Redfort",
    isFemale: false,
    culture: "Valemen",
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 1133,
    childrenIds: [],
    allegiances: [316],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 769,
    name: "Mylenda Caron",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In or between 258 AC and 265 AC",
    

    spouseId: 824,
    childrenIds: [],
    allegiances: [60, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 770,
    name: "Myles Manwoody",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [257],
    bookIds: [3, 5]
  },
  {
    id: 771,
    name: "Myles Mooton",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 283 AC, at Stoney Sept",

    childrenIds: [],
    allegiances: [269],
    bookIds: [3, 5]
  },
  {
    id: 772,
    name: "Myles Smallwood",
    isFemale: false,
    
    titles: ["Hand of the King"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [355],
    bookIds: [3]
  },
  {
    id: 773,
    name: "Myranda Lefford",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 984,
    childrenIds: [],
    allegiances: [234, 229],
    bookIds: [11]
  },
  {
    id: 774,
    name: "Myranda Royce",
    isFemale: true,
    
    titles: [],
    aliases: ["Randa"],
    born: "In 279 AC (roughly)",
    

    childrenIds: [],
    allegiances: [329],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 775,
    name: "Myrcella Baratheon",
    isFemale: true,
    
    titles: ["Princess"],
    aliases: [],
    born: "In 290 AC, at King's Landing",
    

    childrenIds: [],
    allegiances: [16],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Aimee Richardson, Nell Tiger Free"],
    tvSeries: ["Season 1", "Season 2", "Season 5", "Season 6"]
  },
  {
    id: 776,
    name: "Myria Jordayne",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [213],
    bookIds: [3, 5, 8]
  },
  {
    id: 777,
    name: "Myriame Manderly",
    isFemale: true,
    culture: "Northmen",
    titles: ["Lady of Winterfell"],
    aliases: [],
    
    

    spouseId: 918,
    childrenIds: [],
    allegiances: [255, 362],
    bookIds: [11]
  },
  {
    id: 778,
    name: "Myrielle Lannister",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [11, 1, 2, 3, 5, 8]
  },
  {
    id: 779,
    name: "Naerys Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess", "Queen"],
    aliases: [],
    born: "In 138 AC, at King's Landing",
    died: "In or between 179 AC and 184 AC, at King's Landing",

    spouseId: 41,
    childrenIds: [],
    allegiances: [378],
    bookIds: [1, 11]
  },
  {
    id: 780,
    name: "Norbert Vance",
    isFemale: false,
    
    titles: ["Lord of Atranta"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [404],
    bookIds: [3, 5, 8]
  },
  {
    id: 781,
    name: "Nymella Toland",
    isFemale: true,
    culture: "Dornish",
    titles: ["Lady of Ghost Hill"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [387],
    bookIds: [3, 5, 8]
  },
  {
    id: 782,
    name: "Nymeria",
    isFemale: true,
    culture: "Rhoynar",
    titles: ["Princess", "Queen"],
    aliases: ["Nymeria of the Rhoyne"],
    
    

    spouseId: 1725,
    childrenIds: [],
    allegiances: [285],
    bookIds: [11, 4, 1, 2, 5, 8]
  },
  {
    id: 783,
    name: "Olene Tyrell",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 621,
    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 784,
    name: "Olenna Redwyne",
    isFemale: true,
    
    titles: ["Dowager Lady of Highgarden"],
    aliases: ["The Queen of Thorns"],
    born: "In 228 AC, at Arbor",
    

    spouseId: 664,
    childrenIds: [],
    allegiances: [317, 398],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Diana Rigg"],
    tvSeries: ["Season 3", "Season 4", "Season 6"]
  },
  {
    id: 785,
    name: "Olymer Tyrell",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 689,
    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 786,
    name: "Olyvar Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 281 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 787,
    name: "Olyvar Oakheart",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["The Green Oak"],
    
    died: "In 161 AC",

    childrenIds: [],
    allegiances: [286],
    bookIds: [5]
  },
  {
    id: 788,
    name: "Ondrew Locke",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Oldcastle"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [239],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 789,
    name: "Orbert Caswell",
    isFemale: false,
    
    titles: ["Lord Commander of the Night's Watch"],
    aliases: ["The Black Centaur"],
    
    died: "At Castle Black",

    childrenIds: [],
    allegiances: [63],
    bookIds: [5]
  },
  {
    id: 790,
    name: "Orivel",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Orivel the Open-Handed"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 791,
    name: "Ormond Osgrey",
    isFemale: false,
    
    titles: ["Lord of Coldmoat"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 792,
    name: "Ormond Westerling",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [425],
    bookIds: [4]
  },
  {
    id: 793,
    name: "Ormond Yronwood",
    isFemale: false,
    
    titles: ["Lord of Yronwood", "Warden of the Stoneway", "The Bloodroyal"],
    aliases: [],
    
    died: "At Yronwood",

    childrenIds: [],
    allegiances: [444],
    bookIds: [5, 8]
  },
  {
    id: 794,
    name: "Ormund Baratheon",
    isFemale: false,
    
    titles: [
      "Lord Paramount of the Stormlands",
      "Lord of Storm's End",
      "Hand of the King"
    ],
    aliases: [],
    
    died: "In 260 AC, at Stepstones",

    spouseId: 870,
    childrenIds: [],
    allegiances: [17],
    bookIds: [11]
  },
  {
    id: 795,
    name: "Ormund Wylde",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [438, 15],
    bookIds: [8]
  },
  {
    id: 796,
    name: "Orton Merryweather",
    isFemale: false,
    
    titles: [
      "Lord of Longtable",
      "Justiciar",
      "Master of laws",
      "Hand of the King"
    ],
    aliases: [],
    
    

    spouseId: 1006,
    childrenIds: [],
    allegiances: [264],
    bookIds: [3, 5, 8]
  },
  {
    id: 797,
    name: "Orys Baratheon",
    isFemale: false,
    
    titles: [
      "Lord of Storm's End",
      "Lord Paramount of the Stormlands",
      "Hand of the King"
    ],
    aliases: ["Orys One-Hand"],
    born: "At Dragonstone (possibly)",
    died: "In 38 AC",

    spouseId: 128,
    childrenIds: [],
    allegiances: [17, 378],
    bookIds: [11, 1]
  },
  {
    id: 798,
    name: "Osbert Serry",
    isFemale: false,
    
    titles: ["Lord of Southshield"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [343],
    bookIds: [5, 8]
  },
  {
    id: 799,
    name: "Osfryd Kettleblack",
    isFemale: false,
    
    titles: ["Ser", "Commander of the City Watch of King's Landing"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [220],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 800,
    name: "Osmund Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 297 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 801,
    name: "Osmund Kettleblack",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Oswald Kettleblack"],
    
    

    childrenIds: [],
    allegiances: [220],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 802,
    name: "Osney Kettleblack",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [220],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 803,
    name: "Ossifer Plumm",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    died: "In 176 AC",

    spouseId: 1358,
    childrenIds: [],
    allegiances: [303],
    bookIds: [11, 3, 5, 8]
  },
  {
    id: 804,
    name: "Oswell Kettleblack",
    isFemale: false,
    
    titles: [],
    aliases: ["Kettleblack"],
    
    

    childrenIds: [],
    allegiances: [220, 10],
    bookIds: [3, 5, 8]
  },
  {
    id: 805,
    name: "Oswell Whent",
    isFemale: false,
    culture: "Rivermen",
    titles: ["Ser"],
    aliases: [],
    
    died: "In 283 AC, at Tower of Joy",

    childrenIds: [],
    allegiances: [427],
    bookIds: [1, 3, 8, 11]
  },
  {
    id: 806,
    name: "Othell Yarwyck",
    isFemale: false,
    
    titles: ["First Builder"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [441],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Brian Fortune"],
    tvSeries: ["Season 6"]
  },
  {
    id: 807,
    name: "Otho Bracken",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["The Brute of Bracken"],
    
    

    childrenIds: [],
    allegiances: [37],
    bookIds: [4, 6, 7]
  },
  {
    id: 808,
    name: "Otto Hightower",
    isFemale: false,
    
    titles: ["Ser", "Hand of the King"],
    aliases: [],
    
    died: "In 130 AC, at King's Landing",

    childrenIds: [],
    allegiances: [195],
    bookIds: [10, 9, 11, 3]
  },
  {
    id: 809,
    name: "Ottyn Wythers",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In 230 AC (roughly)",
    died: "In 299 AC, at Fist of the First Men, Beyond the Wall",

    childrenIds: [],
    allegiances: [440],
    bookIds: [2, 3]
  },
  {
    id: 810,
    name: "Owen Inchfield",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [209],
    bookIds: [5]
  },
  {
    id: 811,
    name: "Owen Norrey",
    isFemale: false,
    culture: "Northern mountain clans",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at the Twins",

    childrenIds: [],
    allegiances: [282],
    bookIds: [3, 5]
  },
  {
    id: 812,
    name: "Parmen Crane",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Parmen the Purple"],
    born: "At Red Lake",
    

    childrenIds: [],
    allegiances: [87],
    bookIds: [2, 3]
  },
  {
    id: 813,
    name: "Pate",
    isFemale: false,
    culture: "First Men",
    titles: [],
    aliases: ["Pate the Plowman"],
    
    

    childrenIds: [],
    allegiances: [270],
    bookIds: [11]
  },
  {
    id: 814,
    name: "Patrek Mallister",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [254],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 815,
    name: "Paxter Redwyne",
    isFemale: false,
    
    titles: [
      "Lord of the Arbor",
      "Grand admiral",
      "Lord admiral",
      "Master of ships"
    ],
    aliases: [],
    
    

    spouseId: 754,
    childrenIds: [],
    allegiances: [317],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 816,
    name: "Pearse Caron",
    isFemale: false,
    
    titles: ["Lord of Nightsong", "Lord of the Marches"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [60],
    bookIds: [4]
  },
  {
    id: 817,
    name: "Perra Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 294 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 818,
    name: "Perra Royce",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 221 AC or before",
    died: "In or between 241 AC and 249 AC",

    spouseId: 1093,
    childrenIds: [],
    allegiances: [328, 143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 819,
    name: "Perriane Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In or between 241 AC and 248 AC",
    

    spouseId: 629,
    childrenIds: [],
    allegiances: [172],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 820,
    name: "Perwyn Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 270 AC and 278 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 821,
    name: "Perwyn Osgrey",
    isFemale: false,
    
    titles: ["Lord of Coldmoat"],
    aliases: ["Perwyn the Proud"],
    
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 822,
    name: "Peter Plumm",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [303],
    bookIds: [3, 5]
  },
  {
    id: 823,
    name: "Petyr Baelish",
    isFemale: false,
    culture: "Valemen",
    titles: [
      "Master of coin (formerly)",
      "Lord Paramount of the Trident",
      "Lord of Harrenhal",
      "Lord Protector of the Vale"
    ],
    aliases: ["Littlefinger"],
    born: "In 268 AC, at the Fingers",
    

    spouseId: 688,
    childrenIds: [],
    allegiances: [11, 10],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Aidan Gillen"],
    tvSeries: [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ]
  },
  {
    id: 824,
    name: "Petyr Frey",
    isFemale: false,
    
    titles: [],
    aliases: ["Petyr Pimple"],
    born: "In 281 AC, at Twins",
    died: "In 300 AC, at Oldstones",

    spouseId: 769,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 825,
    name: "Philip Foote",
    isFemale: false,
    
    titles: ["Ser", "Lord of Nightsong", "Lord of the Marches"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [135, 136],
    bookIds: [2, 3, 8]
  },
  {
    id: 826,
    name: "Philip Plumm",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [303],
    bookIds: [3, 5, 8]
  },
  {
    id: 827,
    name: "Podrick Payne",
    isFemale: false,
    
    titles: [],
    aliases: ["Pod"],
    born: "In 286 AC or 287 AC",
    

    childrenIds: [],
    allegiances: [295],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Daniel Portman"],
    tvSeries: ["Season 2", "Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 828,
    name: "Preston Greenfield",
    isFemale: false,
    culture: "Westerman",
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at King's Landing",

    childrenIds: [],
    allegiances: [163],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 829,
    name: "Pypar",
    isFemale: false,
    
    titles: [],
    aliases: ["Pyp", "Monkey", "Mummer's Monkey"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Jozef Altin"],
    tvSeries: ["Season 1", "Season 3", "Season 4"]
  },
  {
    id: 830,
    name: "Qarl Kenning",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Queer Qarl Kenning"],
    
    

    childrenIds: [],
    allegiances: [218],
    bookIds: [8]
  },
  {
    id: 831,
    name: "Qarlton Chelsted",
    isFemale: false,
    
    titles: ["Lord", "Master of Coin", "Hand of the King"],
    aliases: ["The mace-and-dagger Hand"],
    
    died: "In 283 AC, at King's Landing",

    childrenIds: [],
    allegiances: [69],
    bookIds: [3, 5]
  },
  {
    id: 832,
    name: "Qhorin",
    isFemale: false,
    
    titles: [],
    aliases: ["Qhorin Halfhand"],
    
    died: "In 299 AC, at Skirling Pass",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Simon Armstrong"],
    tvSeries: ["Season 2"]
  },
  {
    id: 833,
    name: "Qhorwyn Hoare",
    isFemale: false,
    
    titles: ["King of the Iron Islands"],
    aliases: ["Qhorwyn the Cunning"],
    
    

    childrenIds: [484],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 834,
    name: "Qorgyle",
    isFemale: false,
    
    titles: ["Lord Commander of the Night's Watch"],
    aliases: [],
    
    died: "In 288 AC, at Castle Black",

    childrenIds: [],
    allegiances: [311],
    bookIds: [3]
  },
  {
    id: 835,
    name: "Quellon Botley",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [36],
    bookIds: [5]
  },
  {
    id: 836,
    name: "Quellon Greyjoy",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of the Iron Islands", "Lord Reaper of Pyke"],
    aliases: [],
    
    died: "In 283 AC, at the mouth of the Mander",

    childrenIds: [],
    allegiances: [169],
    bookIds: [5, 11]
  },
  {
    id: 837,
    name: "Quenten Banefort",
    isFemale: false,
    
    titles: ["Lord of Banefort"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [13],
    bookIds: [1, 3, 5, 8]
  },
  {
    id: 838,
    name: "Quentin Tyrell",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "At Ashford",

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 839,
    name: "Quenton Greyjoy",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [5]
  },
  {
    id: 840,
    name: "Quenton Hightower",
    isFemale: false,
    
    titles: [
      "Lord of the Hightower",
      "Lord of the Port",
      "Voice of Oldtown",
      "Defender of the Citadel",
      "Beacon of the South"
    ],
    aliases: [],
    
    died: "At Oldtown",

    childrenIds: [],
    allegiances: [195],
    bookIds: [5]
  },
  {
    id: 841,
    name: "Quenton Qoherys",
    isFemale: false,
    
    titles: ["Lord of Harrenhal", "Master-at-arms of Dragonstone"],
    aliases: [],
    
    

    spouseId: 347,
    childrenIds: [],
    allegiances: [310],
    bookIds: [11]
  },
  {
    id: 842,
    name: "Quentyn Ball",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Fireball"],
    
    died: "At Near Redgrass Field",

    childrenIds: [],
    allegiances: [12],
    bookIds: [6, 7]
  },
  {
    id: 843,
    name: "Quentyn Blackwood",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    died: "In 205 AC, at King's Landing",

    childrenIds: [],
    allegiances: [27],
    bookIds: [4]
  },
  {
    id: 844,
    name: "Quentyn Martell",
    isFemale: false,
    culture: "Dornish",
    titles: ["Prince"],
    aliases: [
      "Frog",
      "Prince Frog",
      "The prince who came too late",
      "The Dragonrider"
    ],
    born: "In 281 AC, at Sunspear, Dorne",
    died: "In 300 AC, at Meereen",

    childrenIds: [],
    allegiances: [285],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 845,
    name: "Quentyn Qorgyle",
    isFemale: false,
    
    titles: ["Lord of Sandstone"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [311],
    bookIds: [5, 8]
  },
  {
    id: 846,
    name: "Ralf Kenning",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Castellan", "Commander"],
    aliases: [],
    
    died: "In 300 AC, at Moat Cailin",

    childrenIds: [],
    allegiances: [218],
    bookIds: [5, 8]
  },
  {
    id: 847,
    name: "Ralf Stonehouse",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Captain of Red Jester"],
    aliases: ["Red Ralf Stonehouse"],
    
    

    childrenIds: [],
    allegiances: [365],
    bookIds: [5, 8]
  },
  {
    id: 848,
    name: "Ralph Buckler",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [50],
    bookIds: [3, 8]
  },
  {
    id: 849,
    name: "Ramsay Snow",
    isFemale: false,
    culture: "Northmen",
    titles: [
      "Lord of the Hornwood",
      "Lord of Winterfell",
      "Castellan of the Dreadfort"
    ],
    aliases: [
      "Ramsay Bolton",
      "The Bastard of Bolton",
      "The Bastard of the Dreadfort",
      "Reek",
      "Red Helm",
      "Monster"
    ],
    born: "In 282 AC or before",
    

    spouseId: 317,
    childrenIds: [],
    allegiances: [34],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Iwan Rheon"],
    tvSeries: ["Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 850,
    name: "Randyll Tarly",
    isFemale: false,
    
    titles: ["Lord of Horn Hill", "Justiciar", "Master of laws"],
    aliases: [],
    
    

    spouseId: 742,
    childrenIds: [],
    allegiances: [379],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["James Faulkner"],
    tvSeries: ["Season 6"]
  },
  {
    id: 851,
    name: "Ravella Swann",
    isFemale: true,
    
    titles: ["Lady of Acorn Hall"],
    aliases: [],
    
    

    spouseId: 1020,
    childrenIds: [],
    allegiances: [373, 355],
    bookIds: [3, 5]
  },
  {
    id: 852,
    name: "Raymun Darry",
    isFemale: false,
    
    titles: ["Lord of Darry"],
    aliases: [],
    
    died: "In 298 AC, at Mummer's Ford",

    childrenIds: [],
    allegiances: [97],
    bookIds: [1, 3, 5]
  },
  {
    id: 853,
    name: "Raymun Fossoway",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [140],
    bookIds: [4]
  },
  {
    id: 854,
    name: "Raymund Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In 264 AC",
    

    spouseId: 187,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 855,
    name: "Raymund Tyrell",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 856,
    name: "Raynald Westerling",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "At Crag",
    died: "In 299 AC (supposedly), at the Twins",

    childrenIds: [],
    allegiances: [425],
    bookIds: [3, 5]
  },
  {
    id: 857,
    name: "Raynard Ruttiger",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [331],
    bookIds: [5, 8]
  },
  {
    id: 858,
    name: "Red Alyn",
    isFemale: false,
    
    titles: [],
    aliases: ["Red Alyn of the Rosewood"],
    born: "At the Rosewood",
    died: "In 300 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 8]
  },
  {
    id: 859,
    name: "Redwyn",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 2]
  },
  {
    id: 860,
    name: "Regenard Estren",
    isFemale: false,
    
    titles: ["Lord of Wyndhall"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [118],
    bookIds: [1, 3, 5, 8]
  },
  {
    id: 861,
    name: "Renfred Rykker",
    isFemale: false,
    
    titles: ["Lord of Duskendale"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [334],
    bookIds: [5, 8]
  },
  {
    id: 862,
    name: "Renly Baratheon",
    isFemale: false,
    culture: "Stormlands",
    titles: [
      "Lord Paramount of the Stormlands",
      "Lord of Storm's End",
      "Master of laws",
      "Lord of the Seven Kingdoms (claimant)"
    ],
    aliases: ["The King in Highgarden", "The King in the South"],
    born: "In 277 AC",
    died: "In 299 AC, at Storm's End",

    spouseId: 16,
    childrenIds: [],
    allegiances: [17],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Gethin Anthony"],
    tvSeries: ["Season 1", "Season 2"]
  },
  {
    id: 863,
    name: "Renly Norcross",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 296 AC or 297 AC",
    

    childrenIds: [],
    allegiances: [281],
    bookIds: [2, 3, 5]
  },
  {
    id: 864,
    name: "Reynard Webber",
    isFemale: false,
    
    titles: ["Lord of Coldmoat"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [419],
    bookIds: [6]
  },
  {
    id: 865,
    name: "Rhae Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess"],
    aliases: [],
    born: "In or between 201 AC and 209 AC",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 6]
  },
  {
    id: 866,
    name: "Rhaegar Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 269 AC and 273 AC",
    died: "In 300 AC (suspected)",

    spouseId: 549,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 867,
    name: "Rhaegar Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Prince of Dragonstone", "Ser"],
    aliases: ["Silver Prince", "The Dragon Prince", "The Last Dragon"],
    born: "In 259 AC, at Summerhall",
    died: "In 283 AC, at the Trident",

    spouseId: 361,
    childrenIds: [],
    allegiances: [378],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 868,
    name: "Rhaegel Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Prince of Dragonstone"],
    aliases: [],
    born: "In or between 173 AC and 177 AC",
    died: "In 215 AC",

    spouseId: 93,
    childrenIds: [],
    allegiances: [378],
    bookIds: [4, 7, 11]
  },
  {
    id: 869,
    name: "Rhaella Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess", "Queen", "Dowager Queen"],
    aliases: [],
    born: "In 245 AC or 246 AC, at King's Landing",
    died: "In 284 AC, at Dragonstone",

    spouseId: 62,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 1, 3, 5, 8]
  },
  {
    id: 870,
    name: "Rhaelle Targaryen",
    isFemale: true,
    
    titles: ["Princess"],
    aliases: [],
    born: "In or between 229 AC and 233 AC",
    

    spouseId: 794,
    childrenIds: [],
    allegiances: [378, 17],
    bookIds: [5, 8, 11]
  },
  {
    id: 871,
    name: "Rhaena Targaryen",
    isFemale: true,
    
    titles: ["Lady"],
    aliases: ["Rhaena of Pentos"],
    born: "In 116 AC, at Pentos",
    

    spouseId: 255,
    childrenIds: [],
    allegiances: [378, 81, 195],
    bookIds: [11, 10, 9]
  },
  {
    id: 872,
    name: "Rhaena Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess", "Septa"],
    aliases: [],
    born: "In 147 AC",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 5]
  },
  {
    id: 873,
    name: "Rhaena Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess", "Queen"],
    aliases: ["Black Bride"],
    born: "In 23 AC",
    

    spouseId: 43,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 10, 9]
  },
  {
    id: 874,
    name: "Rhaenyra Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: [
      "Princess of Dragonstone",
      "Lady of the Seven Kingdoms (claimant)"
    ],
    aliases: [
      "The Realm's Delight",
      "The Whore of Dragonstone",
      "King Maegor with Teats",
      "Maegor's Teats",
      "The Half-Year Queen"
    ],
    born: "In 97 AC",
    died: "In 130 AC, at Dragonstone",

    spouseId: 611,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 10, 9, 4, 3, 5, 8]
  },
  {
    id: 875,
    name: "Rhaenys Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess"],
    aliases: ["The Queen Who Never Was"],
    born: "In 74 AC",
    died: "In 129 AC, at Rook's Rest",

    spouseId: 253,
    childrenIds: [],
    allegiances: [378, 407],
    bookIds: [11, 10, 9]
  },
  {
    id: 876,
    name: "Rhaenys Targaryen",
    isFemale: true,
    
    titles: ["Princess"],
    aliases: [],
    born: "In 280 AC, at Dragonstone",
    died: "In 283 AC, at King's Landing",

    childrenIds: [],
    allegiances: [378],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 877,
    name: "Rhea Florent",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 635,
    childrenIds: [],
    allegiances: [133, 195],
    bookIds: [2, 3, 5]
  },
  {
    id: 878,
    name: "Rhea Royce",
    isFemale: true,
    
    titles: ["Lady of Runestone"],
    aliases: ["Bronze Bitch"],
    
    died: "In 115 AC, at The Vale",

    spouseId: 269,
    childrenIds: [],
    allegiances: [328],
    bookIds: [11, 10]
  },
  {
    id: 879,
    name: "Rhialta Vance",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [405],
    bookIds: [5]
  },
  {
    id: 880,
    name: "Rhonda Rowan",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 159,
    childrenIds: [],
    allegiances: [326],
    bookIds: [5]
  },
  {
    id: 881,
    name: "Richard Horpe",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["The Slayer"],
    
    

    childrenIds: [],
    allegiances: [203, 15],
    bookIds: [5, 8]
  },
  {
    id: 882,
    name: "Richard Lonmouth",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["The Knight of Skull and Kisses"],
    
    

    childrenIds: [],
    allegiances: [244],
    bookIds: [3]
  },
  {
    id: 883,
    name: "Richard Morrigen",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [272],
    bookIds: [8]
  },
  {
    id: 884,
    name: "Rickard Karstark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Karhold"],
    aliases: [],
    born: "At Karhold",
    died: "In 299 AC, at Riverrun (executed)",

    childrenIds: [],
    allegiances: [215],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Steven Blount", "John Stahl"],
    tvSeries: ["Season 1", "Season 2", "Season 3"]
  },
  {
    id: 885,
    name: "Rickard Ryswell",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [335],
    bookIds: [5, 8]
  },
  {
    id: 886,
    name: "Rickard Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North"],
    aliases: ["The Laughing Wolf"],
    
    
    fatherId: 584,

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 1]
  },
  {
    id: 887,
    name: "Rickard Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Winterfell", "Warden of the North"],
    aliases: [],
    born: "In or between 230 AC and 249 AC, at Winterfell",
    died: "In 282 AC, at King's Landing",

    spouseId: 668,
    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 1, 2, 3, 8],

    playedBy: ["Wayne Foskett"],
    tvSeries: ["Season 6"]
  },
  {
    id: 888,
    name: "Rickard Thorne",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 130 AC, at Bitterbridge",

    childrenIds: [],
    allegiances: [386],
    bookIds: [11, 9]
  },
  {
    id: 889,
    name: "Rickard Tyrell",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 890,
    name: "Rickard Wylde",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 295 AC",
    

    childrenIds: [],
    allegiances: [438],
    bookIds: [2, 3, 5]
  },
  {
    id: 891,
    name: "Rickon Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Prince of Winterfell", "Heir to Winterfell"],
    aliases: [],
    born: "In 295 AC, at Winterfell",
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 8],

    playedBy: ["Art Parkinson"],
    tvSeries: ["Season 1", "Season 2", "Season 3", "Season 4"]
  },
  {
    id: 892,
    name: "Robar Royce",
    isFemale: false,
    culture: "Valemen",
    titles: ["Ser"],
    aliases: ["Robar the Red"],
    born: "In 277 AC (roughly), at Runestone",
    died: "In 299 AC, at Near Storm's End",

    childrenIds: [],
    allegiances: [328],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 893,
    name: "Robb Reyne",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [319],
    bookIds: [6]
  },
  {
    id: 894,
    name: "Robert Arryn",
    isFemale: false,
    culture: "Valemen",
    titles: ["Lord of the Eyrie", "Defender of the Vale", "Warden of the East"],
    aliases: ["Sweetrobin", "True Warden of the East"],
    born: "In 292 AC",
    

    childrenIds: [],
    allegiances: [7],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Lino Facioli"],
    tvSeries: ["Season 1", "Season 4", "Season 5"]
  },
  {
    id: 895,
    name: "Robert Ashford",
    isFemale: false,
    culture: "Reach",
    titles: ["Ser"],
    aliases: [],
    born: "At Ashford",
    

    childrenIds: [],
    allegiances: [8],
    bookIds: [4]
  },
  {
    id: 896,
    name: "Robert Brax",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at Riverlands",

    childrenIds: [],
    allegiances: [40],
    bookIds: [2, 3]
  },
  {
    id: 897,
    name: "Robert Brax",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 290 AC",
    

    childrenIds: [],
    allegiances: [40],
    bookIds: [2, 3, 5]
  },
  {
    id: 898,
    name: "Robert Flowers",
    isFemale: false,
    
    titles: ["Ser", "Lord Commander of the Kingsguard"],
    aliases: ["Red Robert Flowers"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 899,
    name: "Robert Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 286 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 900,
    name: "Robert Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 283 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 901,
    name: "Robert I Baratheon",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm",
      "Ser[1]"
    ],
    aliases: ["The Usurper", "Demon of the Trident", "The Whoremonger King"],
    born: "262 AC, at Storm's End",
    died: "298 AC, at King's Landing",
    fatherId: 986,
    motherId: 230,
    spouseId: 238,
    childrenIds: [565, 775, 1029, 1741, 1201, 1418, 1355, 1188],
    allegiances: [],
    bookIds: [11, 1, 2, 3, 5, 8],

    playedBy: ["Mark Addy"],
    tvSeries: ["Season 1"]
  },
  {
    id: 902,
    name: "Robert Paege",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [293],
    bookIds: [3]
  },
  {
    id: 903,
    name: "Robett Glover",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "At Deepwood Motte",
    

    spouseId: 998,
    childrenIds: [],
    allegiances: [150],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Tim McInnerny"],
    tvSeries: ["Season 6"]
  },
  {
    id: 904,
    name: "Robin Greyjoy",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    died: "At Pyke",

    childrenIds: [],
    allegiances: [169],
    bookIds: [5]
  },
  {
    id: 905,
    name: "Robin Hill",
    isFemale: false,
    
    titles: ["Lord Commander of the Night's Watch"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 906,
    name: "Robin Hollard",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [198],
    bookIds: [5]
  },
  {
    id: 907,
    name: "Robin Moreland",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [270],
    bookIds: [5, 8]
  },
  {
    id: 908,
    name: "Robin Peasebury",
    isFemale: false,
    
    titles: ["Lord of Poddingfield"],
    aliases: ["Lord Pea Pord"],
    
    

    childrenIds: [],
    allegiances: [297, 15],
    bookIds: [8]
  },
  {
    id: 909,
    name: "Robin Ryger",
    isFemale: false,
    
    titles: ["Ser", "Captain of the guards at Riverrun"],
    aliases: [],
    born: "In or between 237 AC and 240 AC (roughly)",
    

    childrenIds: [],
    allegiances: [333, 395],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 910,
    name: "Robyn Rhysling",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [320],
    bookIds: [4]
  },
  {
    id: 911,
    name: "Robyn Ryswell",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    spouseId: 589,
    childrenIds: [],
    allegiances: [335, 362],
    bookIds: [11]
  },
  {
    id: 912,
    name: "Rodrik Cassel",
    isFemale: false,
    culture: "Northmen",
    titles: ["Ser", "Master-at-arms of Winterfell", "Castellan of Winterfell"],
    aliases: ["Old Ser Rodrik"],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [61, 362],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Ron Donachie"],
    tvSeries: ["Season 1", "Season 2"]
  },
  {
    id: 913,
    name: "Rodrik Greyjoy",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    born: "In 274 AC or before",
    died: "In 289 AC, at Seagard",

    childrenIds: [],
    allegiances: [169],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 914,
    name: "Rodrik Harlaw",
    isFemale: false,
    culture: "Ironborn",
    titles: [
      "Lord of Harlaw",
      "Lord of the Ten Towers",
      "The Harlaw of Harlaw",
      "Captain of the Sea Song"
    ],
    aliases: ["The Reader"],
    
    

    childrenIds: [],
    allegiances: [178],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 915,
    name: "Rodrik Ryswell",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of the Rills"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [335],
    bookIds: [5, 8]
  },
  {
    id: 916,
    name: "Rodrik Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King in the North"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 11]
  },
  {
    id: 917,
    name: "Rodrik Stark",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: ["The Wandering Wolf"],
    
    

    spouseId: 1175,
    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 8]
  },
  {
    id: 918,
    name: "Rodwell Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Winterfell", "Warden of the North"],
    aliases: [],
    
    

    spouseId: 777,
    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 2]
  },
  {
    id: 919,
    name: "Roelle",
    isFemale: true,
    
    titles: ["Septa"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [380],
    bookIds: [5]
  },
  {
    id: 920,
    name: "Rohanne",
    isFemale: true,
    culture: "Tyroshi",
    titles: [],
    aliases: [],
    
    died: "In or after 211 AC",

    spouseId: 267,
    childrenIds: [],
    allegiances: [23],
    bookIds: [11]
  },
  {
    id: 921,
    name: "Roland Crakehall",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [86],
    bookIds: [4, 7]
  },
  {
    id: 922,
    name: "Roland Crakehall",
    isFemale: false,
    
    titles: ["Lord of Crakehall"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [86],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 923,
    name: "Rollam Westerling",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 290 AC, at Crag",
    

    childrenIds: [],
    allegiances: [425],
    bookIds: [3, 5]
  },
  {
    id: 924,
    name: "Rolland Darklyn",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [95],
    bookIds: [5]
  },
  {
    id: 925,
    name: "Rolland Storm",
    isFemale: false,
    
    titles: ["Ser", "Castellan of Dragonstone", "Lord of Nightsong (claimant)"],
    aliases: ["The Bastard of Nightsong"],
    
    

    childrenIds: [],
    allegiances: [60, 15],
    bookIds: [3, 5, 8]
  },
  {
    id: 926,
    name: "Rolland Uffering",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 1891,
    childrenIds: [],
    allegiances: [399],
    bookIds: [6]
  },
  {
    id: 927,
    name: "Rolph Spicer",
    isFemale: false,
    
    titles: ["Ser", "Castellan of the Crag", "Lord of Castamere"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [357, 425],
    bookIds: [3, 5]
  },
  {
    id: 928,
    name: "Ronald Connington",
    isFemale: false,
    
    titles: ["Ser the Knight of Griffin's Roost"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [80],
    bookIds: [8]
  },
  {
    id: 929,
    name: "Ronald Vance",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Ronald the Bad"],
    
    

    childrenIds: [],
    allegiances: [404],
    bookIds: [3, 5]
  },
  {
    id: 930,
    name: "Ronnel Harclay",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [174],
    bookIds: [3]
  },
  {
    id: 931,
    name: "Ronnel Stout",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [367],
    bookIds: [3]
  },
  {
    id: 932,
    name: "Ronnet Connington",
    isFemale: false,
    
    titles: ["Ser Knight of Griffin's Roost"],
    aliases: ["Red Ronnet"],
    born: "In 274 AC",
    

    childrenIds: [],
    allegiances: [80],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 933,
    name: "Roose Bolton",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of the Dreadfort", "Warden of the North"],
    aliases: ["The Leech Lord"],
    born: "In 260 AC or before, at the Dreadfort",
    

    spouseId: 196,
    childrenIds: [],
    allegiances: [34],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Michael McElhatton"],
    tvSeries: ["Season 2", "Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 934,
    name: "Roose Ryswell",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [335],
    bookIds: [5, 8]
  },
  {
    id: 935,
    name: "Roryn Drumm",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Roryn the Reaver"],
    
    

    childrenIds: [],
    allegiances: [106],
    bookIds: [5]
  },
  {
    id: 936,
    name: "Rosamund Lannister",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [231],
    bookIds: [5, 8]
  },
  {
    id: 937,
    name: "Roslin Frey",
    isFemale: true,
    culture: "Rivermen",
    titles: [],
    aliases: [],
    born: "In 282 AC or 283 AC",
    

    spouseId: 346,
    childrenIds: [],
    allegiances: [143, 395],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Alexandra Dowling"],
    tvSeries: ["Season 3"]
  },
  {
    id: 938,
    name: "Rossart",
    isFemale: false,
    
    titles: ["Grand Master", "Wisdom", "Lord Hand of the King"],
    aliases: [],
    
    died: "In 283 AC, at King's Landing",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5]
  },
  {
    id: 939,
    name: "Royce Coldwater",
    isFemale: false,
    
    titles: ["Lord of Coldwater Burn"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [76],
    bookIds: [5]
  },
  {
    id: 940,
    name: "Runcel Hightower",
    isFemale: false,
    
    titles: ["Lord Commander of the Night's Watch"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [195],
    bookIds: [3]
  },
  {
    id: 941,
    name: "Rupert Brax",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Rubert Brax"],
    
    died: "In 299 AC, at Oxcross",

    childrenIds: [],
    allegiances: [40],
    bookIds: [2, 3]
  },
  {
    id: 942,
    name: "Rupert Crabb",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [85],
    bookIds: [5]
  },
  {
    id: 943,
    name: "Russell Merryweather",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 293 AC or 294 AC, at Longtable",
    

    childrenIds: [],
    allegiances: [264],
    bookIds: [5, 8]
  },
  {
    id: 944,
    name: "Ryam Florent",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [133],
    bookIds: [2, 3, 5]
  },
  {
    id: 945,
    name: "Ryam Redwyne",
    isFemale: false,
    
    titles: ["Ser", "Lord Commander of the Kingsguard", "Hand of the King"],
    aliases: [],
    
    died: "In 105 AC, at King's Landing",

    childrenIds: [],
    allegiances: [317],
    bookIds: [11, 10, 4, 1, 2, 3, 5]
  },
  {
    id: 946,
    name: "Rycherd Crane",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 949,
    childrenIds: [],
    allegiances: [87],
    bookIds: [2, 3, 5]
  },
  {
    id: 947,
    name: "Ryella Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 294 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 948,
    name: "Ryella Royce",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 145,
    childrenIds: [],
    allegiances: [328, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 949,
    name: "Rylene Florent",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 946,
    childrenIds: [],
    allegiances: [133, 87],
    bookIds: [2, 3, 5]
  },
  {
    id: 950,
    name: "Ryman Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In 246 AC, 247 AC or 248 AC",
    died: "In 300 AC, at near the Twins",

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 951,
    name: "Saera Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess"],
    aliases: [],
    born: "In or between 61 AC and 82 AC",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 10]
  },
  {
    id: 952,
    name: "Sallei Paege",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 530,
    childrenIds: [],
    allegiances: [293, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 953,
    name: "Samwell Spicer",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [357],
    bookIds: [3, 5]
  },
  {
    id: 954,
    name: "Samwell Tarly",
    isFemale: false,
    culture: "Andal",
    titles: [],
    aliases: [
      "Sam",
      "Ser Piggy",
      "Prince Pork-chop",
      "Lady Piggy",
      "Sam the Slayer",
      "Black Sam",
      "Lord of Ham"
    ],
    born: "In 283 AC, at Horn Hill",
    

    childrenIds: [],
    allegiances: [379],
    bookIds: [1, 2, 8],

    playedBy: ["John Bradley-West"],
    tvSeries: [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ]
  },
  {
    id: 955,
    name: "Sandor Clegane",
    isFemale: false,
    
    titles: [],
    aliases: ["The Hound", "Dog"],
    born: "In 270 AC or 271 AC",
    died: "In 300 AC (supposedly)",

    childrenIds: [],
    allegiances: [72, 229],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Rory McCann"],
    tvSeries: ["Season 1", "Season 2", "Season 3", "Season 4", "Season 6"]
  },
  {
    id: 956,
    name: "Sandor Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 287 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 957,
    name: "Sansa Stark",
    isFemale: true,
    culture: "Northmen",
    titles: ["Princess"],
    aliases: ["Little bird", "Alayne Stone", "Jonquil"],
    born: "In 286 AC, at Winterfell",
    

    spouseId: 1052,
    childrenIds: [],
    allegiances: [362, 10],
    bookIds: [8],

    playedBy: ["Sophie Turner"],
    tvSeries: [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ]
  },
  {
    id: 958,
    name: "Sargon Botley",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [36],
    bookIds: [5]
  },
  {
    id: 959,
    name: "Sarra Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 285 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 960,
    name: "Sarya Whent",
    isFemale: true,
    
    titles: ["Lady"],
    aliases: [],
    
    

    spouseId: 1093,
    childrenIds: [],
    allegiances: [427, 143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 961,
    name: "Sawane Botley",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Lordsport", "Captain of Swiftfin"],
    aliases: [],
    
    died: "In 299 AC, at Pyke",

    childrenIds: [],
    allegiances: [36],
    bookIds: [2, 3, 5]
  },
  {
    id: 962,
    name: "Sebastion Errol",
    isFemale: false,
    
    titles: ["Lord of Haystack Hall"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [116],
    bookIds: [8]
  },
  {
    id: 963,
    name: "Sebaston Farman",
    isFemale: false,
    culture: "Westerman",
    titles: ["Lord of Fair Isle"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [120],
    bookIds: [5, 8]
  },
  {
    id: 964,
    name: "Sefton Staunton",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [363],
    bookIds: [6]
  },
  {
    id: 965,
    name: "Selmond Stackspear",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [359],
    bookIds: [3, 5, 8]
  },
  {
    id: 966,
    name: "Selwyn Tarth",
    isFemale: false,
    
    titles: ["Lord of Evenfall"],
    aliases: ["the Evenstar"],
    born: "In 245 AC or 246 AC",
    

    childrenIds: [],
    allegiances: [380],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 967,
    name: "Serala of Myr",
    isFemale: true,
    culture: "Myrish",
    titles: ["Lady of Duskendale"],
    aliases: ["The Lace Serpent"],
    born: "In Myr",
    

    spouseId: 301,
    childrenIds: [],
    allegiances: [95],
    bookIds: [5]
  },
  {
    id: 968,
    name: "Serra Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 285 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 969,
    name: "Serwyn",
    isFemale: false,
    
    titles: ["Ser (in songs and tales)"],
    aliases: ["Serwyn of the Mirror Shield"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [4, 1, 8, 11]
  },
  {
    id: 970,
    name: "Shadrich",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Shadrich of the Shady Glen", "The Mad Mouse"],
    
    

    childrenIds: [],
    allegiances: [10],
    bookIds: [5, 8]
  },
  {
    id: 971,
    name: "Shaera Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess", "Queen"],
    aliases: [],
    born: "In 226 AC",
    died: "In or after 259AC",

    spouseId: 527,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11]
  },
  {
    id: 972,
    name: "Shella Whent",
    isFemale: true,
    culture: "Rivermen",
    titles: ["Lady of Harrenhal"],
    aliases: [],
    
    died: "In +/- 300 AC",

    spouseId: 1099,
    childrenIds: [],
    allegiances: [427],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 973,
    name: "Shiera Crakehall",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 282,
    childrenIds: [],
    allegiances: [86, 229],
    bookIds: [3, 5, 8]
  },
  {
    id: 974,
    name: "Shierle Swyft",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 745,
    childrenIds: [],
    allegiances: [374],
    bookIds: [3, 5]
  },
  {
    id: 975,
    name: "Shireen Baratheon",
    isFemale: true,
    
    titles: ["Princess"],
    aliases: [],
    born: "In 289 AC, at Dragonstone",
    

    childrenIds: [],
    allegiances: [15],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Kerry Ingram"],
    tvSeries: ["Season 3", "Season 4", "Season 5"]
  },
  {
    id: 976,
    name: "Shirei Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 292 AC or 293 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 977,
    name: "Shyra Errol",
    isFemale: true,
    
    titles: ["Lady of Haystack Hall"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [116],
    bookIds: [2]
  },
  {
    id: 978,
    name: "Sigfry Stonetree",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [366],
    bookIds: [5]
  },
  {
    id: 979,
    name: "Sigfryd Harlaw",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Master of Harlaw Hall"],
    aliases: ["Sigfryd Silverhair"],
    
    

    childrenIds: [],
    allegiances: [179],
    bookIds: [5, 8]
  },
  {
    id: 980,
    name: "Sigorn",
    isFemale: false,
    culture: "Thenn",
    titles: ["Magnar of Thenn"],
    aliases: [],
    born: "At Thenn",
    

    spouseId: 96,
    childrenIds: [],
    allegiances: [385],
    bookIds: [5, 8]
  },
  {
    id: 981,
    name: "Simon Leygood",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [235],
    bookIds: [6]
  },
  {
    id: 982,
    name: "Simon Staunton",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 1891,
    childrenIds: [],
    allegiances: [363],
    bookIds: [6]
  },
  {
    id: 983,
    name: "Simon Toyne",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 281 AC, at the Kingswood",

    childrenIds: [],
    allegiances: [392],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 984,
    name: "Stafford Lannister",
    isFemale: false,
    culture: "Westerman",
    titles: ["Ser"],
    aliases: ["Uncle Dolt"],
    born: "In or between 246 AC and 253 AC",
    died: "In 299 AC, at Oxcross",

    spouseId: 773,
    childrenIds: [],
    allegiances: [229],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 985,
    name: "Steffarion Sparr",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [356],
    bookIds: [5]
  },
  {
    id: 986,
    name: "Steffon Baratheon",
    isFemale: false,
    
    titles: ["Lord of Storm's End", "Lord Paramount of the Stormlands"],
    aliases: [],
    born: "In 246 AC, at Shipbreaker Bay",
    died: "In 278 AC",

    spouseId: 230,
    childrenIds: [],
    allegiances: [17],
    bookIds: [11, 2, 3, 8]
  },
  {
    id: 987,
    name: "Steffon Darklyn",
    isFemale: false,
    
    titles: ["Ser", "Lord Commander of the Queensguard"],
    aliases: [],
    
    died: "In 129 AC, at Dragonstone",

    childrenIds: [],
    allegiances: [95],
    bookIds: [9]
  },
  {
    id: 988,
    name: "Steffon Fossoway",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [139],
    bookIds: [4]
  },
  {
    id: 989,
    name: "Steffon Frey",
    isFemale: false,
    
    titles: [],
    aliases: ["Steffon the Sweet"],
    born: "In or between 263 AC and 280 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 990,
    name: "Steffon Hollard",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [198],
    bookIds: [5]
  },
  {
    id: 991,
    name: "Steffon Stackspear",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [359],
    bookIds: [3, 5]
  },
  {
    id: 992,
    name: "Steffon Swyft",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [374],
    bookIds: [3, 5, 8]
  },
  {
    id: 993,
    name: "Steffon Varner",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [406],
    bookIds: [2]
  },
  {
    id: 994,
    name: "Stevron Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In 233 AC or 234 AC, at Twins",
    died: "In 299 AC, at Oxcross",

    spouseId: 252,
    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Colin Carnegie"],
    tvSeries: ["Season 1"]
  },
  {
    id: 995,
    name: "Stonesnake",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 250 AC and 253 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 996,
    name: "Sumner Crakehall",
    isFemale: false,
    
    titles: ["Lord of Crakehall"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [86],
    bookIds: [3, 5]
  },
  {
    id: 997,
    name: "Sybell Spicer",
    isFemale: true,
    
    titles: ["Lady of the Crag"],
    aliases: [],
    
    

    spouseId: 413,
    childrenIds: [],
    allegiances: [357, 425],
    bookIds: [3, 5]
  },
  {
    id: 998,
    name: "Sybelle Glover",
    isFemale: true,
    culture: "Northmen",
    titles: ["Lady of Deepwood Motte"],
    aliases: [],
    
    

    spouseId: 903,
    childrenIds: [],
    allegiances: [239, 150],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 999,
    name: "Sylva Santagar",
    isFemale: true,
    culture: "Dornish",
    titles: ["Lady of Greenstone"],
    aliases: ["Spotted Sylva"],
    born: "In 276 AC or 277 AC, at Spottswood",
    

    spouseId: 357,
    childrenIds: [],
    allegiances: [337, 117],
    bookIds: [5]
  },
  {
    id: 1000,
    name: "Sylwa Paege",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 1107,
    childrenIds: [],
    allegiances: [293, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1001,
    name: "Symon Hollard",
    isFemale: false,
    
    titles: ["Ser", "Master-at-arms at the Dun Fort"],
    aliases: [],
    
    died: "At Duskendale",

    childrenIds: [],
    allegiances: [198],
    bookIds: [5]
  },
  {
    id: 1002,
    name: "Symon Santagar",
    isFemale: false,
    
    titles: ["Ser", "Knight of Spottswood"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [337],
    bookIds: [5, 8]
  },
  {
    id: 1003,
    name: "Symond Botley",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [36],
    bookIds: [5]
  },
  {
    id: 1004,
    name: "Symond Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 252 AC and 260 AC, at the Twins",
    died: "In 300 AC (suspected), at The North",

    spouseId: 1217,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1005,
    name: "Symond Templeton",
    isFemale: false,
    
    titles: ["Ser", "The Knight of Ninestars"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [383],
    bookIds: [5, 8]
  },
  {
    id: 1006,
    name: "Taena of Myr",
    isFemale: true,
    culture: "Myrish",
    titles: [],
    aliases: ["Taena Merryweather", "Myr"],
    born: "In 276 AC (roughly)",
    

    spouseId: 796,
    childrenIds: [],
    allegiances: [264],
    bookIds: [3, 5, 8]
  },
  {
    id: 1007,
    name: "Talbert Serry",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 300 AC, at near the Shield Islands, the Reach",

    childrenIds: [],
    allegiances: [343],
    bookIds: [5]
  },
  {
    id: 1008,
    name: "Talla Tarly",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [379],
    bookIds: [3],

    playedBy: ["Rebecca Benson"],
    tvSeries: ["Season 6"]
  },
  {
    id: 1009,
    name: "Tallad",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Tallad the Tall"],
    
    

    childrenIds: [],
    allegiances: [16],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1010,
    name: "Tanda Stokeworth",
    isFemale: true,
    
    titles: ["Lady of Stokeworth"],
    aliases: [],
    born: "At Stokeworth",
    died: "In 300 AC, at Stokeworth",

    childrenIds: [],
    allegiances: [364],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1011,
    name: "Tanton Fossoway",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [139],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1012,
    name: "Terrance Lynderly",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [251],
    bookIds: [5]
  },
  {
    id: 1013,
    name: "Terrence Kenning",
    isFemale: false,
    
    titles: ["Lord of Kayce"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [219],
    bookIds: [3, 5, 8]
  },
  {
    id: 1014,
    name: "Terrence Toyne",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 178 AC",

    childrenIds: [],
    allegiances: [392],
    bookIds: [11, 3, 5, 8]
  },
  {
    id: 1015,
    name: "The Sparr",
    isFemale: true,
    culture: "Ironborn",
    titles: ["The Sparr"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [356],
    bookIds: [5]
  },
  {
    id: 1016,
    name: "The Stonehouse",
    isFemale: true,
    culture: "Ironborn",
    titles: ["Lord Stonehouse"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [365],
    bookIds: [5]
  },
  {
    id: 1017,
    name: "Theo Wull",
    isFemale: false,
    culture: "Northern mountain clans",
    titles: [],
    aliases: ["Buckets"],
    
    died: "In 283 AC, at Tower of Joy",

    childrenIds: [],
    allegiances: [435],
    bookIds: [1, 3]
  },
  {
    id: 1018,
    name: "Theodan Wells",
    isFemale: false,
    culture: "Northmen",
    titles: ["Ser", "Commander of the Warrior's Sons"],
    aliases: ["Theodan the True"],
    
    

    childrenIds: [],
    allegiances: [421],
    bookIds: [5, 8]
  },
  {
    id: 1019,
    name: "Theodore Tyrell",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 636,
    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 1020,
    name: "Theomar Smallwood",
    isFemale: false,
    
    titles: ["Lord of Acorn Hall"],
    aliases: [],
    
    

    spouseId: 851,
    childrenIds: [],
    allegiances: [355],
    bookIds: [3, 5, 8]
  },
  {
    id: 1021,
    name: "Theomore Harlaw",
    isFemale: false,
    
    titles: [
      "Lord of the Ten Towers",
      "Lord Harlaw of Harlaw",
      "Harlaw of Harlaw"
    ],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [178],
    bookIds: [5]
  },
  {
    id: 1022,
    name: "Theon Greyjoy",
    isFemale: false,
    culture: "Ironborn",
    titles: [
      "Prince of Winterfell",
      "Captain of Sea Bitch",
      "Lord of the Iron Islands (by law of the green lands)"
    ],
    aliases: ["Prince of Fools", "Theon Turncloak", "Reek", "Theon Kinslayer"],
    born: "In 278 AC or 279 AC, at Pyke",
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [1, 3, 5],

    playedBy: ["Alfie Allen"],
    tvSeries: [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ]
  },
  {
    id: 1023,
    name: "Theon Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["King of Winter"],
    aliases: ["The Hungry Wolf"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 1, 2, 8]
  },
  {
    id: 1024,
    name: "Thoren Smallwood",
    isFemale: false,
    
    titles: ["First Ranger (self-styled)"],
    aliases: [],
    
    died: "In 299 AC, at Fist of the First Men",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3]
  },
  {
    id: 1025,
    name: "Tion Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 279 AC and 284 AC",
    died: "In 299 AC, at Riverrun",

    childrenIds: [],
    allegiances: [143, 229],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1026,
    name: "Tion Lannister",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 211 AC and 219 AC",
    died: "In 236 AC, at the Wendwater",

    spouseId: 367,
    childrenIds: [],
    allegiances: [229],
    bookIds: [11]
  },
  {
    id: 1027,
    name: "Titus Peake",
    isFemale: false,
    
    titles: ["Lord of Starpike"],
    aliases: [],
    
    

    spouseId: 708,
    childrenIds: [],
    allegiances: [296],
    bookIds: [3, 5, 8]
  },
  {
    id: 1028,
    name: "Tom Costayne",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Long Tom Costayne"],
    
    

    childrenIds: [],
    allegiances: [83],
    bookIds: [5]
  },
  {
    id: 1029,
    name: "Tommen Baratheon",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms"
    ],
    aliases: ["The Boy King"],
    born: "291 AC",
    
    fatherId: 901,
    motherId: 238,
    spouseId: 16,
    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Callum Wharry", "Dean-Charles Chapman"],
    tvSeries: ["Season 1", "Season 2", "Season 4", "Season 5"]
  },
  {
    id: 1030,
    name: "Tommen Costayne",
    isFemale: false,
    
    titles: ["Lord of the Three Towers"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [83],
    bookIds: [5]
  },
  {
    id: 1031,
    name: "Torren Liddle",
    isFemale: false,
    culture: "Northern mountain clans",
    titles: ["The Liddle", "Lord Liddle"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [236],
    bookIds: [5, 8]
  },
  {
    id: 1032,
    name: "Torrence Teague",
    isFemale: false,
    culture: "Rivermen",
    titles: ["King of the Trident", "Lord"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 1033,
    name: "Torrhen Karstark",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: ["Torr"],
    born: "At Karhold",
    died: "In 298 AC, at the Whispering Wood",

    childrenIds: [],
    allegiances: [215],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Tyrone McElhennon"],
    tvSeries: ["Season 2"]
  },
  {
    id: 1034,
    name: "Torrhen Stark",
    isFemale: false,
    culture: "Northmen",
    titles: [
      "King in the North (former)",
      "Lord of Winterfell",
      "Warden of the North"
    ],
    aliases: ["The King Who Knelt"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 1, 2, 3]
  },
  {
    id: 1035,
    name: "Trebor Jordayne",
    isFemale: false,
    
    titles: ["Lord of the Tor"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [213],
    bookIds: [5, 8]
  },
  {
    id: 1036,
    name: "Tremond Gargalen",
    isFemale: false,
    culture: "Dornish",
    titles: ["Lord of Salt Shore"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [146],
    bookIds: [3, 5, 8]
  },
  {
    id: 1037,
    name: "Tristan Mudd",
    isFemale: false,
    
    titles: ["Lord Commander of the Night's Watch"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [274],
    bookIds: [3]
  },
  {
    id: 1038,
    name: "Tristan Ryger",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [333],
    bookIds: [3]
  },
  {
    id: 1039,
    name: "Tristifer Botley",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Heir to Lordsport"],
    aliases: ["Tris"],
    born: "At Lordsport",
    

    childrenIds: [],
    allegiances: [36],
    bookIds: [5, 8]
  },
  {
    id: 1040,
    name: "Tristifer IV Mudd",
    isFemale: false,
    
    titles: ["King of the Rivers and the Hills"],
    aliases: ["The Hammer of Justice"],
    
    

    childrenIds: [1041],
    allegiances: [],
    bookIds: [3, 11]
  },
  {
    id: 1041,
    name: "Tristifer V",
    isFemale: false,
    
    titles: ["King of the Rivers and the Hills"],
    aliases: ["Tristifer the Last"],
    
    
    fatherId: 1040,

    childrenIds: [],
    allegiances: [],
    bookIds: []
  },
  {
    id: 1042,
    name: "Triston Sunderland",
    isFemale: false,
    
    titles: ["Lord of the Three Sisters"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [370],
    bookIds: [5, 8]
  },
  {
    id: 1043,
    name: "Trystane Martell",
    isFemale: false,
    culture: "Dornish",
    titles: ["Prince"],
    aliases: [],
    born: "In 287 AC",
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Toby Sebastian"],
    tvSeries: ["Season 5", "Season 6"]
  },
  {
    id: 1044,
    name: "Tya Lannister",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 435,
    childrenIds: [],
    allegiances: [17, 229],
    bookIds: [1]
  },
  {
    id: 1045,
    name: "Tyana Wylde",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 56,
    childrenIds: [],
    allegiances: [438, 143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1046,
    name: "Tybolt Crakehall",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [86],
    bookIds: [3, 5]
  },
  {
    id: 1047,
    name: "Tybolt Hetherspoon",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [193],
    bookIds: [5, 8]
  },
  {
    id: 1048,
    name: "Tybolt Lannister",
    isFemale: false,
    culture: "Westerman",
    titles: [
      "Ser",
      "Lord of Casterly Rock",
      "Shield of Lannisport",
      "Warden of the West"
    ],
    aliases: [],
    
    died: "In 212 AC",

    spouseId: 1989,
    childrenIds: [],
    allegiances: [229],
    bookIds: [4, 6, 7, 11]
  },
  {
    id: 1049,
    name: "Tygett Lannister",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Tyg"],
    born: "In 250 AC",
    died: "In or after 285 AC",

    spouseId: 292,
    childrenIds: [],
    allegiances: [229],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1050,
    name: "Tyland Lannister",
    isFemale: false,
    
    titles: ["Ser", "Master of ships", "Master of coin", "Hand of the King"],
    aliases: [],
    
    died: "In 133 AC",

    childrenIds: [],
    allegiances: [229],
    bookIds: [11, 10, 9]
  },
  {
    id: 1051,
    name: "Tyrek Lannister",
    isFemale: false,
    
    titles: [],
    aliases: ['"Wet Nurse"'],
    born: "In 286 AC",
    died: "In 299 AC (allegedly), at King's Landing",

    spouseId: 382,
    childrenIds: [],
    allegiances: [229],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1052,
    name: "Tyrion Lannister",
    isFemale: false,
    
    titles: ["Acting Hand of the King (former)", "Master of Coin (former)"],
    aliases: [
      "The Imp",
      "Halfman",
      "The boyman",
      "Giant of Lannister",
      "Lord Tywin's Doom",
      "Lord Tywin's Bane",
      "Yollo",
      "Hugor Hill",
      "No-Nose",
      "Freak",
      "Dwarf"
    ],
    born: "In 273 AC, at Casterly Rock",
    

    spouseId: 2044,
    childrenIds: [],
    allegiances: [229],
    bookIds: [5, 11],

    playedBy: ["Peter Dinklage"],
    tvSeries: [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ]
  },
  {
    id: 1053,
    name: "Tysane Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 292 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1054,
    name: "Tyta Frey",
    isFemale: true,
    
    titles: [],
    aliases: ["Tyta the Maid"],
    born: "In 269 AC or 270 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1055,
    name: "Tytos Brax",
    isFemale: false,
    
    titles: ["Ser", "Lord of Hornvale"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [40],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1056,
    name: "Tytos Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 261 AC and 272 AC",
    died: "In 299 AC, at the Twins",

    spouseId: 1135,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1057,
    name: "Tytos Lannister",
    isFemale: false,
    
    titles: [
      "Lord of Casterly Rock",
      "Shield of Lannisport",
      "Warden of the West"
    ],
    aliases: ["The Laughing Lion", "The Toothless Lion"],
    born: "In 220 AC",
    died: "In 267 AC, at Casterly Rock",

    spouseId: 556,
    childrenIds: [],
    allegiances: [229],
    bookIds: [11, 3, 5, 8]
  },
  {
    id: 1058,
    name: "Tywin Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Ty"],
    born: "In 287 AC or 288 AC",
    

    childrenIds: [],
    allegiances: [143, 142],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1059,
    name: "Tywin Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 299 AC or 300 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [5]
  },
  {
    id: 1060,
    name: "Ulrick Dayne",
    isFemale: false,
    culture: "Dornish",
    titles: ["Ser", "Sword of the Morning"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [99],
    bookIds: [6]
  },
  {
    id: 1061,
    name: "Ulwyck Uller",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [400],
    bookIds: [3, 5, 8]
  },
  {
    id: 1062,
    name: "Urrigon Greyjoy",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Urri"],
    born: "In 268 AC or 269 AC",
    died: "At Pyke",

    childrenIds: [],
    allegiances: [169],
    bookIds: [5]
  },
  {
    id: 1063,
    name: "Utherydes Wayn",
    isFemale: false,
    
    titles: ["Steward"],
    aliases: [],
    born: "In or between 237 AC and 241 AC (roughly)",
    

    childrenIds: [],
    allegiances: [416, 395],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1064,
    name: "Uthor Tollett",
    isFemale: false,
    culture: "Valemen",
    titles: ["Lord of the Grey Glen"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [388],
    bookIds: [5]
  },
  {
    id: 1065,
    name: "Uthor Underleaf",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["The Snail"],
    born: "In or around 181 AC, 182 AC or 183 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 1066,
    name: "Vaemond Velaryon",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Ser"],
    aliases: [],
    
    died: "In 126 AC",

    childrenIds: [],
    allegiances: [407],
    bookIds: [10]
  },
  {
    id: 1067,
    name: "Valarr Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Prince  Hand of the King (possibly)"],
    aliases: ["The Young Prince"],
    born: "In or between 183 AC and 193 AC",
    died: "In 209 AC, at King's Landing",

    spouseId: 1589,
    childrenIds: [],
    allegiances: [378],
    bookIds: [4, 6, 7]
  },
  {
    id: 1068,
    name: "Vardis Egen",
    isFemale: false,
    culture: "Valemen",
    titles: ["Ser", "Captain of the Guards"],
    aliases: [],
    born: "In or between 249 AC and 253 AC",
    died: "In 298 AC, at the Eyrie",

    childrenIds: [],
    allegiances: [113, 7],
    bookIds: [1, 2, 3],

    playedBy: ["Brendan McCormack"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1069,
    name: "Vayon Poole",
    isFemale: false,
    
    titles: ["Steward of Winterfell"],
    aliases: [],
    
    died: "In 298 AC, at King's Landing",

    childrenIds: [],
    allegiances: [305],
    bookIds: [1, 2]
  },
  {
    id: 1070,
    name: "Velaena Velaryon",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Lady of Dragonstone"],
    aliases: [],
    
    

    spouseId: 59,
    childrenIds: [],
    allegiances: [407, 378],
    bookIds: [11]
  },
  {
    id: 1071,
    name: "Vickon Botley",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [36],
    bookIds: [5]
  },
  {
    id: 1072,
    name: "Vickon Greyjoy",
    isFemale: false,
    
    titles: ["Lord of the Iron Islands", "Lord Reaper of Pyke"],
    aliases: [],
    
    died: "In 33 AC",

    childrenIds: [],
    allegiances: [169],
    bookIds: [11, 1, 2, 3, 5]
  },
  {
    id: 1073,
    name: "Victaria Tyrell",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 575,
    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 1074,
    name: "Victarion Greyjoy",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord Captain of the Iron Fleet", "Master of the Iron Victory"],
    aliases: ["The Iron Captain"],
    born: "In 268 AC or before, at Pyke",
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [1, 2, 3]
  },
  {
    id: 1075,
    name: "Victor Tyrell",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 1076,
    name: "Viserys I",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm"
    ],
    aliases: ["The Young King"],
    born: "77 AC, at King's Landing",
    died: "129 AC, at King's Landing",
    fatherId: 157,
    motherId: 109,
    spouseId: 49,
    childrenIds: [874, 156, 39, 488, 55, 275],
    allegiances: [],
    bookIds: [11, 10, 9, 1]
  },
  {
    id: 1077,
    name: "Viserys II",
    isFemale: false,
    
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Protector of the Realm",
      "Hand of the King"
    ],
    aliases: [],
    born: "122 AC, at Dragonstone",
    died: "172 AC, at King's Landing",
    fatherId: 269,
    motherId: 874,
    spouseId: 1608,
    childrenIds: [41, 779],
    allegiances: [],
    bookIds: [11, 10, 9, 1, 3]
  },
  {
    id: 1078,
    name: "Viserys Plumm",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    born: "In 176 AC or 177 AC",
    

    childrenIds: [],
    allegiances: [303],
    bookIds: [7, 8, 11]
  },
  {
    id: 1079,
    name: "Viserys Targaryen",
    isFemale: false,
    culture: "Valyrian",
    titles: [
      "King of the Andals, the Rhoynar and the First Men, Lord of the Seven Kingdoms and Protector of the Realm"
    ],
    aliases: ["The Beggar King", "Khal Rhaggat (The Cart King)"],
    born: "In 276 AC, at King's Landing",
    died: "In 298 AC, at Vaes Dothrak",

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 1, 2, 3, 5, 8],

    playedBy: ["Harry Lloyd"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1080,
    name: "Vortimer Crane",
    isFemale: false,
    
    titles: ["Ser", "Master-at-arms at Highgarden"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [87],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1081,
    name: "Walda Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 290 AC or 291 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1082,
    name: "Walda Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 294 AC or 295 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1083,
    name: "Walda Frey",
    isFemale: true,
    
    titles: [],
    aliases: ["Fair Walda"],
    born: "In 280 AC or 281 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1084,
    name: "Walda Frey",
    isFemale: true,
    
    titles: [],
    aliases: ["Fat Walda", "Walda Bolton"],
    born: "In 283 AC or 284 AC",
    

    spouseId: 933,
    childrenIds: [],
    allegiances: [143, 34],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Elizabeth Webster"],
    tvSeries: ["Season 4", "Season 5", "Season 6"]
  },
  {
    id: 1085,
    name: "Walda Frey",
    isFemale: true,
    
    titles: [],
    aliases: ["White Walda"],
    born: "In 288 AC or 289 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1086,
    name: "Walda Rivers",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 294 AC or 295 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1087,
    name: "Walda Rivers",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 295 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [3]
  },
  {
    id: 1088,
    name: "Walder Brax",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 293 AC",
    

    childrenIds: [],
    allegiances: [40],
    bookIds: [2, 3, 5]
  },
  {
    id: 1089,
    name: "Walder Frey",
    isFemale: false,
    
    titles: [],
    aliases: ["Big Walder"],
    born: "In 291 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1090,
    name: "Walder Frey",
    isFemale: false,
    culture: "Rivermen",
    titles: [],
    aliases: ["Black Walder"],
    born: "In or between 260 AC and 280 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5],

    playedBy: ["Tim Plester"],
    tvSeries: ["Season 3", "Season 6"]
  },
  {
    id: 1091,
    name: "Walder Frey",
    isFemale: false,
    
    titles: [],
    aliases: ["Little Walder"],
    born: "In 291 AC, at The Twins",
    died: "In 300 AC, at Winterfell",

    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1092,
    name: "Walder Frey",
    isFemale: false,
    
    titles: [],
    aliases: ["Red Walder"],
    born: "In 285 AC",
    

    childrenIds: [],
    allegiances: [142],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1093,
    name: "Walder Frey",
    isFemale: false,
    culture: "Rivermen",
    titles: ["Lord of the Crossing"],
    aliases: ["The Late Lord Frey", "Old Frey"],
    born: "In 208 AC",
    

    spouseId: 818,
    childrenIds: [],
    allegiances: [143],
    bookIds: [7, 1, 2, 3, 5, 8],

    playedBy: ["David Bradley"],
    tvSeries: ["Season 1", "Season 3", "Season 6"]
  },
  {
    id: 1094,
    name: "Walder Goodbrook",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 290 AC",
    

    childrenIds: [],
    allegiances: [151],
    bookIds: [2, 3, 5]
  },
  {
    id: 1095,
    name: "Walder Haigh",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 294 AC or 295 AC",
    

    childrenIds: [],
    allegiances: [172],
    bookIds: [2, 3, 5]
  },
  {
    id: 1096,
    name: "Walder Rivers",
    isFemale: false,
    culture: "Rivermen",
    titles: ["Ser"],
    aliases: ["Bastard Walder"],
    
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1097,
    name: "Waldon Wynch",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Iron Holt"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [439],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1098,
    name: "Wallace Waynwood",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 278 AC and 283 AC",
    

    childrenIds: [],
    allegiances: [417],
    bookIds: [5, 8]
  },
  {
    id: 1099,
    name: "Walter Whent",
    isFemale: false,
    culture: "Rivermen",
    titles: ["Lord of Harrenhal"],
    aliases: ["Old Lord Whent"],
    
    

    spouseId: 972,
    childrenIds: [],
    allegiances: [427],
    bookIds: [3, 8, 11]
  },
  {
    id: 1100,
    name: "Walton Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 250 AC and 267 AC",
    

    spouseId: 295,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1101,
    name: "Walton Stark",
    isFemale: false,
    
    titles: ["King in the North", "Lord of Winterfell"],
    aliases: ["Walton the Moon King"],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 1102,
    name: "Waltyr Frey",
    isFemale: false,
    
    titles: [],
    aliases: ["Tyr"],
    born: "In 289 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1103,
    name: "Warryn Beesbury",
    isFemale: false,
    
    titles: ["Lord of Honeyholt"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [18],
    bookIds: [5]
  },
  {
    id: 1104,
    name: "Waymar Royce",
    isFemale: false,
    culture: "Valemen",
    titles: ["Ser"],
    aliases: [],
    born: "In 278 AC or 279 AC, at Runestone",
    died: "In 297 AC, at the Haunted Forest, Beyond the Wall",

    childrenIds: [],
    allegiances: [328],
    bookIds: [1, 2, 3, 5],

    playedBy: ["Rob Ostlere"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1105,
    name: "Wendel Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 286 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1106,
    name: "Wendel Manderly",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 254 AC and 263 AC, at White Harbor",
    died: "In 299 AC, at the Twins",

    childrenIds: [],
    allegiances: [255],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Oddie Braddell"],
    tvSeries: ["Season 3"]
  },
  {
    id: 1107,
    name: "Whalen Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In 267 AC or 268 AC",
    

    spouseId: 1000,
    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1108,
    name: "Wilbert Osgrey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["the Little Lion"],
    
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 1109,
    name: "Will",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 297 AC, at Haunted Forest",

    childrenIds: [],
    allegiances: [],
    bookIds: [2],

    playedBy: ["Bronson Webb"]
  },
  {
    id: 1110,
    name: "Willam Dustin",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Barrowton"],
    aliases: [],
    
    died: "In 283 AC, at the Tower of Joy",

    spouseId: 166,
    childrenIds: [],
    allegiances: [111],
    bookIds: [1, 5, 8]
  },
  {
    id: 1111,
    name: "Willam Stark",
    isFemale: false,
    culture: "Northmen",
    titles: ["Lord of Winterfell", "Warden of the North"],
    aliases: [],
    born: "At Winterfell",
    died: "In 226 AC, at Long Lake",

    spouseId: 737,
    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 2]
  },
  {
    id: 1112,
    name: "Willam Wythers",
    isFemale: false,
    
    titles: ["Ser", "Captain of the Guards"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [440, 398],
    bookIds: [5]
  },
  {
    id: 1113,
    name: "Willas Tyrell",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 270 AC and 276 AC",
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1114,
    name: "Willem Darry",
    isFemale: false,
    
    titles: ["Ser Master-at-arms at the Red Keep"],
    aliases: [],
    
    died: "In 289 AC or 290 AC (roughly), at Braavos",

    childrenIds: [],
    allegiances: [97, 378],
    bookIds: [1, 2, 3, 8]
  },
  {
    id: 1115,
    name: "Willem Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 289 AC or 290 AC",
    

    childrenIds: [],
    allegiances: [143, 142],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1116,
    name: "Willem Lannister",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 285 AC and 287 AC",
    died: "In 299 AC, at Riverrun",

    childrenIds: [],
    allegiances: [229],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1117,
    name: "Willem Wylde",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [438],
    bookIds: [4, 7]
  },
  {
    id: 1118,
    name: "William Mooton",
    isFemale: false,
    
    titles: ["Lord of Maidenpool"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [269],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1119,
    name: "Willis Fell",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [124],
    bookIds: [9]
  },
  {
    id: 1120,
    name: "Willis Wode",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [430, 427],
    bookIds: [1, 5]
  },
  {
    id: 1121,
    name: "Wyl Waynwood",
    isFemale: false,
    
    titles: [],
    aliases: ["Wild Wyl"],
    
    died: "In 196 AC, at the Redgrass Field",

    childrenIds: [],
    allegiances: [417],
    bookIds: [6]
  },
  {
    id: 1122,
    name: "Wylis Manderly",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 252 AC and 262 AC, at White Harbor",
    

    childrenIds: [],
    allegiances: [255],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1123,
    name: "Wylla Manderly",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 284 AC or 285 AC, at White Harbor",
    

    childrenIds: [],
    allegiances: [255],
    bookIds: [5, 8]
  },
  {
    id: 1124,
    name: "Wyman Manderly",
    isFemale: false,
    
    titles: [
      "Lord of White Harbor",
      "Warden of the White Knife",
      "Shield of the Faith",
      "Defender of the Dispossessed",
      "Lord Marshal of the Mander",
      "Knight of the Order of the Green Hand"
    ],
    aliases: [
      "Lord Lamprey",
      "Lord Too-Fat-to-Sit-a-Horse",
      "Lord Pig",
      "Lord Lard"
    ],
    born: "In or between 239 AC and 242 AC, at White Harbour",
    

    childrenIds: [],
    allegiances: [255],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1125,
    name: "Wynafrei Whent",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 291,
    childrenIds: [],
    allegiances: [427],
    bookIds: [2, 3, 5]
  },
  {
    id: 1126,
    name: "Wynafryd Manderly",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 280 AC or 281 AC, at White Harbor",
    

    childrenIds: [],
    allegiances: [255],
    bookIds: [5, 8]
  },
  {
    id: 1127,
    name: "Wynton Stout",
    isFemale: false,
    culture: "Northmen",
    titles: ["Ser"],
    aliases: [],
    born: "In or before 219 AC",
    

    childrenIds: [],
    allegiances: [367],
    bookIds: [3, 5]
  },
  {
    id: 1128,
    name: "Ygon Farwynd",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [123],
    bookIds: [5]
  },
  {
    id: 1129,
    name: "Ynys Yronwood",
    isFemale: true,
    culture: "Dornish",
    titles: [],
    aliases: [],
    
    

    spouseId: 1922,
    childrenIds: [],
    allegiances: [444, 2],
    bookIds: [8]
  },
  {
    id: 1130,
    name: "Yohn Farwynd",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [123],
    bookIds: [5]
  },
  {
    id: 1131,
    name: "Yohn Royce",
    isFemale: false,
    culture: "Valemen",
    titles: ["Lord of Runestone"],
    aliases: ["Bronze Yohn"],
    
    

    childrenIds: [],
    allegiances: [328],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Rupert Vansittart"],
    tvSeries: ["Season 4", "Season 6"]
  },
  {
    id: 1132,
    name: "Yoren",
    isFemale: false,
    culture: "Westeros",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Gods Eye",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5],

    playedBy: ["Francis Magee"],
    tvSeries: ["Season 1", "Season 2"]
  },
  {
    id: 1133,
    name: "Ysilla Royce",
    isFemale: true,
    culture: "Valemen",
    titles: [],
    aliases: [],
    
    

    spouseId: 768,
    childrenIds: [],
    allegiances: [328, 316],
    bookIds: [5, 8]
  },
  {
    id: 1134,
    name: "Zachery Frey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 287 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1135,
    name: "Zhoe Blanetree",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 1056,
    childrenIds: [],
    allegiances: [28],
    bookIds: [2, 3, 5]
  },
  {
    id: 1136,
    name: "Zia Frey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 285 AC",
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1137,
    name: "Monster",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["the little monsterthe abomination"],
    born: "In 299 AC, at Craster's Keep",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1138,
    name: "Addam",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 1139,
    name: "Aethan",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1140,
    name: "Aethelmure",
    isFemale: false,
    
    titles: ["Grand Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1141,
    name: "Aggar",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [169],
    bookIds: [2, 8]
  },
  {
    id: 1142,
    name: "Aggo",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Ko, Bloodrider of Daenerys Targaryen"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Chuku Modu"],
    tvSeries: ["Season 6"]
  },
  {
    id: 1143,
    name: "Agrivane",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1144,
    name: "Alan of Rosby",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at the haunted forest",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1145,
    name: "Alaric of Eysen",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1146,
    name: "Alayaya",
    isFemale: true,
    
    titles: [],
    aliases: ["'Yaya"],
    born: "In 282 AC or 283 AC, at King's Landing",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1147,
    name: "Albett",
    isFemale: false,
    
    titles: [],
    aliases: ["Pimple"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1148,
    name: "Alebelly",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 1149,
    name: "Alequo Adarys",
    isFemale: false,
    culture: "Tyroshi",
    titles: [],
    aliases: ["Silvertongue", "The Tyrant of Tyrosh"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 1150,
    name: "Alesandor Torrent",
    isFemale: false,
    
    titles: ["Lord of Littlesister"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [389],
    bookIds: [5, 8]
  },
  {
    id: 1151,
    name: "Alfyn",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Alfyn Crowkiller"],
    
    died: "In 299 AC",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 8]
  },
  {
    id: 1152,
    name: "Alia of Braavos",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1153,
    name: "All-for-Joffrey",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1154,
    name: "Allaquo",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1155,
    name: "Allard Seaworth",
    isFemale: false,
    
    titles: ["Captain of the Lady Marya"],
    aliases: [],
    
    died: "In 299 AC, at Blackwater Bay",

    childrenIds: [],
    allegiances: [340],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1156,
    name: "Alvyn Sharp",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [344],
    bookIds: [5]
  },
  {
    id: 1157,
    name: "Alyce",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1158,
    name: "Alyn",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at Riverlands",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 8]
  },
  {
    id: 1159,
    name: "Alyn",
    isFemale: false,
    
    titles: [],
    aliases: ["Sour Alyn"],
    
    

    childrenIds: [],
    allegiances: [34],
    bookIds: [8]
  },
  {
    id: 1160,
    name: "Alysanne Bracken",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [37],
    bookIds: [8]
  },
  {
    id: 1161,
    name: "Amabel",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [427],
    bookIds: [2, 3]
  },
  {
    id: 1162,
    name: "Ambrode",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1163,
    name: "Andrey Dalt",
    isFemale: false,
    culture: "Dornish",
    titles: ["Ser"],
    aliases: ["Drey"],
    
    

    childrenIds: [],
    allegiances: [92],
    bookIds: [5]
  },
  {
    id: 1164,
    name: "Andrik",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Southshield"],
    aliases: ["Andrik the Unsmiling"],
    
    

    childrenIds: [],
    allegiances: [106],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1165,
    name: "Anguy",
    isFemale: false,
    
    titles: [],
    aliases: ["The Archer"],
    born: "At Dornish Marches",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 3, 5],

    playedBy: ["Philip McGinley"],
    tvSeries: ["Season 3"]
  },
  {
    id: 1166,
    name: "Areo Hotah",
    isFemale: false,
    culture: "Norvoshi",
    titles: ["Captain of the Guard at Sunspear"],
    aliases: [],
    born: "In 257 AC or before, at Norvos",
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [1, 2, 3],

    playedBy: ["DeObia Oparei"],
    tvSeries: ["Season 5", "Season 6"]
  },
  {
    id: 1167,
    name: "Argrave the Defiant",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "At Nunny",
    

    childrenIds: [],
    allegiances: [55],
    bookIds: [7]
  },
  {
    id: 1168,
    name: "Armen",
    isFemale: false,
    
    titles: [],
    aliases: ["Armen the Acolyte"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1169,
    name: "Armistead Vance",
    isFemale: false,
    culture: "Andal",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 1170,
    name: "Arneld",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1171,
    name: "Arnell",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1172,
    name: "Arron",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "At Fair Isle",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1173,
    name: "Arryk",
    isFemale: false,
    
    titles: [],
    aliases: ['"Left" or "Right"'],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 1174,
    name: "Arson",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Arson Iceaxe"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1175,
    name: "Arya Flint",
    isFemale: true,
    culture: "Northern mountain clans",
    titles: [],
    aliases: [],
    
    

    spouseId: 917,
    childrenIds: [],
    allegiances: [129, 362],
    bookIds: [11]
  },
  {
    id: 1176,
    name: "Assadora",
    isFemale: true,
    culture: "Ibbenese",
    titles: [],
    aliases: ["Assadora of Ibben"],
    born: "At Ibben",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1177,
    name: "Aurane Waters",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Grand admiral (master of ships)", "Lord of the Waters"],
    aliases: ["Bastard of Driftmark", "Lord Waters"],
    born: "In 277 AC or 278 AC",
    

    childrenIds: [],
    allegiances: [407],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1178,
    name: "Ayrmidon",
    isFemale: false,
    culture: "Valyrian",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1179,
    name: "Azor Ahai",
    isFemale: false,
    culture: "Asshai",
    titles: [],
    aliases: ["Warrior of Light", "Son of Fire", "Warrior of Fire"],
    
    

    spouseId: 1757,
    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1180,
    name: "Azzak",
    isFemale: false,
    culture: "Ghiscari",
    titles: ["Cupbearer"],
    aliases: [],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1181,
    name: "Bael",
    isFemale: false,
    culture: "Free Folk",
    titles: ["King-Beyond-the-Wall"],
    aliases: ["Bael the Bard", "Sygerrik of Skagos"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 2, 3]
  },
  {
    id: 1182,
    name: "Baelish",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [81],
    bookIds: [3]
  },
  {
    id: 1183,
    name: "Balaq",
    isFemale: false,
    culture: "Summer Isles",
    titles: [],
    aliases: ["Black Balaq"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1184,
    name: "Ballabar",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [317],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1185,
    name: "Bandy",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2, 5]
  },
  {
    id: 1186,
    name: "Bannen",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "At or near White Harbor",
    died: "In 299 AC, at Craster's Keep",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3]
  },
  {
    id: 1187,
    name: "Barbara Bracken",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [37],
    bookIds: [8]
  },
  {
    id: 1188,
    name: "Barra",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 298 AC, at King's Landing",
    died: "In 299 AC, at King's Landing",

    childrenIds: [],
    allegiances: [17],
    bookIds: [1, 2, 8]
  },
  {
    id: 1189,
    name: "Barsena",
    isFemale: true,
    culture: "Ghiscari",
    titles: [],
    aliases: ["Barsena Blackhair"],
    born: "In 270 AC (roughly)",
    died: "In 300 AC, at Meereen",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1190,
    name: "Barth",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 1191,
    name: "Bearded Ben",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1192,
    name: "Beardless Dick",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1193,
    name: "Becca",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [7],
    bookIds: [1]
  },
  {
    id: 1194,
    name: "Becca",
    isFemale: true,
    
    titles: [],
    aliases: ["Becca the Baker"],
    
    died: "At Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1195,
    name: "Beck",
    isFemale: false,
    
    titles: ["Goodman"],
    aliases: [],
    born: "In 299 AC",
    died: "At Donnelwood",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1196,
    name: "Bedwyck",
    isFemale: false,
    
    titles: [],
    aliases: ["Giant"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1197,
    name: "Belandra",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [5]
  },
  {
    id: 1198,
    name: "Belaquo",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: ["Belaquo Bonebreaker"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1199,
    name: "Beldecar",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1200,
    name: "Belis",
    isFemale: false,
    
    titles: ["Wisdom"],
    aliases: [],
    
    died: "At King's Landing",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1201,
    name: "Bella",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 283 AC, at Stoney Sept",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1202,
    name: "Bellegere Otherys",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: ["the Black Pearl of Braavos"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 5]
  },
  {
    id: 1203,
    name: "Bellegere Otherys",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: ["Black Pearl", "Brown Pearl"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1204,
    name: "Bellonara Otherys",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: ["Black Pearl of Braavos"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1205,
    name: "Belwas",
    isFemale: false,
    culture: "Meereenese",
    titles: [],
    aliases: ["Strong Belwas", "Belwas the Strong"],
    
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1206,
    name: "Ben",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 293 AC or 294 AC, at the riverlands",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1207,
    name: "Ben",
    isFemale: false,
    
    titles: [],
    aliases: ["Ben Blackthumb"],
    
    

    childrenIds: [],
    allegiances: [427, 229],
    bookIds: [2, 5]
  },
  {
    id: 1208,
    name: "Ben",
    isFemale: false,
    
    titles: [],
    aliases: ["Ben Bones"],
    
    

    childrenIds: [],
    allegiances: [34],
    bookIds: [8]
  },
  {
    id: 1209,
    name: "Benedict",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1210,
    name: "Bennet",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1211,
    name: "Beqqo",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1212,
    name: "Bess Bracken",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [37],
    bookIds: [8]
  },
  {
    id: 1213,
    name: "Bessa",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    died: "At Hag's Mire",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1214,
    name: "Bessa",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1215,
    name: "Bethany",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: ["Blushing Bethany"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1216,
    name: "Bethany Fair-Fingers",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1217,
    name: "Betharios",
    isFemale: true,
    
    titles: [],
    aliases: ["Betharios of Braavos"],
    
    

    spouseId: 1004,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1218,
    name: "Bhakaz zo Loraq",
    isFemale: false,
    culture: "Ghiscari",
    titles: ["Cupbearer"],
    aliases: [],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1219,
    name: "Bharbo",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Khal"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1220,
    name: "Big Belly Ben",
    isFemale: false,
    
    titles: [],
    aliases: ["Big Belly Ben"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1221,
    name: "Big Boil",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1222,
    name: "Biter",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at the inn at the crossroads",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5],

    playedBy: ["Unknown extra", "Gerard Jordan"],
    tvSeries: ["Season 1", "Season 2", "Season 4"]
  },
  {
    id: 1223,
    name: "Black Bernarr",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1224,
    name: "Blane",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3]
  },
  {
    id: 1225,
    name: "Bloodbeard",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1226,
    name: "Bluetooth",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [2, 5]
  },
  {
    id: 1227,
    name: "Bodger",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1228,
    name: "Borcas",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1229,
    name: "Borroq",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1230,
    name: "Bors",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [5]
  },
  {
    id: 1231,
    name: "Boy",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "At 284 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1232,
    name: "Brea",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1233,
    name: "Brella",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [17, 229],
    bookIds: [3, 5]
  },
  {
    id: 1234,
    name: "Brenett",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [3]
  },
  {
    id: 1235,
    name: "Briar",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1236,
    name: "Brogg",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1237,
    name: "Brown Bernarr",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Fist of the First Men",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3]
  },
  {
    id: 1238,
    name: "Brusco",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: ["Big Brusco"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1239,
    name: "Bryan of Oldtown",
    isFemale: false,
    culture: "Reach",
    titles: [],
    aliases: [],
    born: "At Oldtown",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 1240,
    name: "Bryen",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or before 220 AC",
    

    childrenIds: [],
    allegiances: [11],
    bookIds: [3]
  },
  {
    id: 1241,
    name: "Brynden Blackwood",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [27],
    bookIds: [8]
  },
  {
    id: 1242,
    name: "Brynden Rivers",
    isFemale: false,
    culture: "Valyrian",
    titles: ["Ser", "Hand of the King", "Lord Commander of the Night's Watch"],
    aliases: ["Lord Bloodraven", "The three-eyed crow"],
    born: "In 175 AC, at King's Landing",
    died: "In 252 AC(presumed), at beyond the Wall",

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 6, 7, 5, 8],

    playedBy: ["Struan Rodger", "Max Von Sydow"],
    tvSeries: ["Season 4", "Season 6"]
  },
  {
    id: 1243,
    name: "Bump",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1244,
    name: "Butterbumps",
    isFemale: false,
    
    titles: [],
    aliases: ["Butterbumps"],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1245,
    name: "Buu",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1246,
    name: "Byam Flint",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at Craster's Keep",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1247,
    name: "Byan Votyris",
    isFemale: false,
    culture: "Norvoshi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1248,
    name: "Byren Flowers",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Black Byren Flowers"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [6]
  },
  {
    id: 1249,
    name: "Byron",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Byron the Beautiful"],
    
    

    childrenIds: [],
    allegiances: [11],
    bookIds: [5, 8]
  },
  {
    id: 1250,
    name: "Cadwyl",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [2, 3]
  },
  {
    id: 1251,
    name: "Cadwyn",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [2]
  },
  {
    id: 1252,
    name: "Cafferen",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    died: "In 282 AC, at Ashford",

    childrenIds: [],
    allegiances: [58],
    bookIds: [3]
  },
  {
    id: 1253,
    name: "Caleotte",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Colin Azzopardi"],
    tvSeries: ["Season 6"]
  },
  {
    id: 1254,
    name: "Calon",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 1255,
    name: "Camarron",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: ["Camarron of the Count"],
    
    died: "At Meereen",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1256,
    name: "Carrot",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [329],
    bookIds: [5]
  },
  {
    id: 1257,
    name: "Cass",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1258,
    name: "Castos",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1259,
    name: "Catelyn Bracken",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [37],
    bookIds: [8]
  },
  {
    id: 1260,
    name: "Cayn",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at King's Landing",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2]
  },
  {
    id: 1261,
    name: "Cedra",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [5]
  },
  {
    id: 1262,
    name: "Cellador",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1263,
    name: "Cerrick",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Maester"],
    aliases: ["The Grey Pup"],
    
    

    childrenIds: [],
    allegiances: [419],
    bookIds: [6]
  },
  {
    id: 1264,
    name: "Cetheres",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1265,
    name: "Chataya",
    isFemale: true,
    culture: "Summer Isles",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3]
  },
  {
    id: 1266,
    name: "Chella daughter of Cheyk",
    isFemale: true,
    culture: "Mountain clans",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3],

    tvSeries: ["Season 1"]
  },
  {
    id: 1267,
    name: "Chett",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "At Hag's Mire",
    died: "In 299 AC, at Fist of the First Men",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2]
  },
  {
    id: 1268,
    name: "Cheyk",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 8]
  },
  {
    id: 1269,
    name: "Chiggen",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at Mountains of the Moon",

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1270,
    name: "Chiswyck",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Harrenhal",

    childrenIds: [],
    allegiances: [72],
    bookIds: [2, 3]
  },
  {
    id: 1271,
    name: "Clarence Crabb",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [85],
    bookIds: [5]
  },
  {
    id: 1272,
    name: "Clegane",
    isFemale: false,
    
    titles: ["Ser", "Knight of Clegane's Keep"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [72, 229],
    bookIds: [2]
  },
  {
    id: 1273,
    name: "Clement",
    isFemale: false,
    
    titles: ["Brother"],
    aliases: [],
    born: "In 251 AC or 252 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1274,
    name: "Cleon",
    isFemale: false,
    culture: "Astapori",
    titles: ["King of Astapor"],
    aliases: ["Cleon the Great", "The Butcher King", "King Cleaver"],
    
    died: "In 300 AC, at Astapor",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1275,
    name: "Cleos Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 258 AC and 275 AC, at Casterly Rock",
    died: "In 299 AC, at Riverlands",

    spouseId: 550,
    childrenIds: [],
    allegiances: [143, 229],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1276,
    name: "Clifford Conklyn",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [79],
    bookIds: [6]
  },
  {
    id: 1277,
    name: "Clydas",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 240 AC or before",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1278,
    name: "Cohollo",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Ko", "Bloodrider of Khal Drogo"],
    aliases: [],
    
    died: "In 298 AC, at Dothraki sea",

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1279,
    name: "Coldhands",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1280,
    name: "Colemon",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [7],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1281,
    name: "Collio Quaynis",
    isFemale: false,
    culture: "Tyroshi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1282,
    name: "Conn son of Coratt",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at Green Fork of the river Trident, the Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1283,
    name: "Conwy",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1284,
    name: "Coratt",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1285,
    name: "Corliss Penny",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [15],
    bookIds: [5, 8]
  },
  {
    id: 1286,
    name: "Corlos",
    isFemale: false,
    culture: "First Men",
    titles: ["Lord of Casterly Rock"],
    aliases: ["Corlos son of Caster"],
    born: "In Age of Heroes",
    

    childrenIds: [],
    allegiances: [62],
    bookIds: [11]
  },
  {
    id: 1287,
    name: "Cosgrove",
    isFemale: false,
    
    titles: ["Steward"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [55],
    bookIds: [7]
  },
  {
    id: 1288,
    name: "Cossomo",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: ["Cossomo The Conjurer"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1289,
    name: "Cotter Pyke",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Commander of Eastwatch-by-the-Sea"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1290,
    name: "Courteny Greenhill",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1291,
    name: "Craghas Drahar",
    isFemale: false,
    culture: "Myrish",
    titles: [],
    aliases: ["Craghas Crabfeeder"],
    
    died: "In 108 AC",

    childrenIds: [],
    allegiances: [],
    bookIds: [10]
  },
  {
    id: 1292,
    name: "Cragorn",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC",

    childrenIds: [],
    allegiances: [169],
    bookIds: [5, 8]
  },
  {
    id: 1293,
    name: "Craster",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Craster's Keep",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Robert Pugh"],
    tvSeries: ["Season 2", "Season 3"]
  },
  {
    id: 1294,
    name: "Crawn son of Calor",
    isFemale: false,
    culture: "Mountain clans",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1295,
    name: "Cressen",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    born: "In 219 AC or 220 AC",
    died: "In 299 AC, at Dragonstone",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5],

    playedBy: ["Oliver Ford"],
    tvSeries: ["Season 2"]
  },
  {
    id: 1296,
    name: "Cuger",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1297,
    name: "Cutjack",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1298,
    name: "Daario Naharis",
    isFemale: false,
    culture: "Tyroshi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8],

    playedBy: ["Ed Skrein", "Michiel Huisman"],
    tvSeries: ["Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 1299,
    name: "Dacks",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [316],
    bookIds: [1]
  },
  {
    id: 1300,
    name: "Daegon Shepherd",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["The Black Shepherd"],
    
    

    childrenIds: [],
    allegiances: [348],
    bookIds: [5]
  },
  {
    id: 1301,
    name: "Daemon Sand",
    isFemale: false,
    culture: "Dornish",
    titles: ["Ser"],
    aliases: ["Bastard of Godsgrace"],
    born: "In 275 or 276 AC",
    

    childrenIds: [],
    allegiances: [2],
    bookIds: [3, 5, 8],

    tvSeries: ["Season 4"]
  },
  {
    id: 1302,
    name: "Daenaera Velaryon",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Queen"],
    aliases: [],
    born: "In 127 AC",
    

    spouseId: 40,
    childrenIds: [],
    allegiances: [407, 378],
    bookIds: []
  },
  {
    id: 1303,
    name: "Daenerys Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: [
      "Queen of the Andals and the Rhoynar and the First Men, Lord of the Seven Kingdoms",
      "Khaleesi of the Great Grass Sea",
      "Breaker of Shackles/Chains",
      "Queen of Meereen",
      "Princess of Dragonstone"
    ],
    aliases: [
      "Dany",
      "Daenerys Stormborn",
      "The Unburnt",
      "Mother of Dragons",
      "Mother",
      "Mhysa",
      "The Silver Queen",
      "Silver Lady",
      "Dragonmother",
      "The Dragon Queen",
      "The Mad King's daughter"
    ],
    born: "In 284 AC, at Dragonstone",
    

    spouseId: 1346,
    childrenIds: [],
    allegiances: [378],
    bookIds: [5],

    playedBy: ["Emilia Clarke"],
    tvSeries: [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ]
  },
  {
    id: 1304,
    name: "Daeryssa",
    isFemale: true,
    
    titles: ["Princess"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1305,
    name: "Dafyn Vance",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 693,
    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5]
  },
  {
    id: 1306,
    name: "Dagmer",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Captain of Foamdrinker"],
    aliases: ["Dagmer Cleftjaw"],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [2, 5, 8],

    playedBy: ["Ralph Ineson"],
    tvSeries: ["Season 2"]
  },
  {
    id: 1307,
    name: "Dagon Ironmaker",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [210],
    bookIds: [5]
  },
  {
    id: 1308,
    name: "Dake",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At Coldmoat",

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 1309,
    name: "Dake",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [5]
  },
  {
    id: 1310,
    name: "Dale Seaworth",
    isFemale: false,
    
    titles: ["Captain of the Wraith"],
    aliases: [],
    
    died: "In 299 AC, at Blackwater Rush",

    childrenIds: [],
    allegiances: [340],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1311,
    name: "Dalla",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Near Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1312,
    name: "Dalla",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [15],
    bookIds: [2]
  },
  {
    id: 1313,
    name: "Damon",
    isFemale: false,
    
    titles: [],
    aliases: ["Damon Dance-for-Me"],
    
    

    childrenIds: [],
    allegiances: [34],
    bookIds: [8]
  },
  {
    id: 1314,
    name: "Dan",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Hempen Dan"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1315,
    name: "Dancy",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1316,
    name: "Danny Flint",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 8]
  },
  {
    id: 1317,
    name: "Dareon",
    isFemale: false,
    
    titles: [],
    aliases: ["The Black Singer Lover"],
    
    died: "In 300 AC, at Braavos",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1318,
    name: "Darla Deddings",
    isFemale: true,
    
    titles: ["Lady"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [100],
    bookIds: [9]
  },
  {
    id: 1319,
    name: "Davos Seaworth",
    isFemale: false,
    culture: "Westeros",
    titles: [
      "Ser",
      "Lord of the Rainwood",
      "Admiral of the Narrow Sea",
      "Hand of the King"
    ],
    aliases: [
      "Onion Knight",
      "Davos Shorthand",
      "Ser Onions",
      "Onion Lord",
      "Smuggler"
    ],
    born: "In 260 AC or before, at King's Landing",
    

    spouseId: 1676,
    childrenIds: [],
    allegiances: [340, 15],
    bookIds: [5],

    playedBy: ["Liam Cunningham"],
    tvSeries: ["Season 2", "Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 1320,
    name: "Del",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    born: "In 283 AC (roughly)",
    died: "In 299 AC, at Queenscrown",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1321,
    name: "Delp",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Riverrun",

    childrenIds: [],
    allegiances: [395],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1322,
    name: "Denestan",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1323,
    name: "Dennett",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1324,
    name: "Denyo Terys",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    born: "In 287 AC or 288 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1325,
    name: "Dermot",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Dermot of the Rainwood"],
    
    

    childrenIds: [],
    allegiances: [15, 16],
    bookIds: [2, 3, 5]
  },
  {
    id: 1326,
    name: "Desmond",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at King's Landing",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 8]
  },
  {
    id: 1327,
    name: "Devyn",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Devyn Sealskinner"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1328,
    name: "Dhazzar",
    isFemale: true,
    culture: "Ghiscari",
    titles: ["Cupbearer"],
    aliases: ["The dancer"],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1329,
    name: "Dick",
    isFemale: false,
    
    titles: [],
    aliases: ["Yellow Dick"],
    
    died: "In 300 AC, at Winterfell",

    childrenIds: [],
    allegiances: [34],
    bookIds: [8]
  },
  {
    id: 1330,
    name: "Dick Crabb",
    isFemale: false,
    
    titles: [],
    aliases: ["Nimble Dick"],
    
    died: "In 300 AC, at the Whispers",

    childrenIds: [],
    allegiances: [85],
    bookIds: [5]
  },
  {
    id: 1331,
    name: "Dirk",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Beyond the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1332,
    name: "Dobber",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Gods Eye",

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1333,
    name: "Dolf son of Holger",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 8]
  },
  {
    id: 1334,
    name: "Donnel Hill",
    isFemale: false,
    
    titles: [],
    aliases: ["Sweet Donnel Hill"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1335,
    name: "Donnel Waynwood",
    isFemale: false,
    
    titles: ["Ser", "Knight of the Gate"],
    aliases: [],
    born: "In 277 AC or 278 AC",
    

    childrenIds: [],
    allegiances: [417],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1336,
    name: "Donnis",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1]
  },
  {
    id: 1337,
    name: "Donyse",
    isFemale: true,
    
    titles: ["Septa"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1338,
    name: "Dorcas",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [5]
  },
  {
    id: 1339,
    name: "Dorea Sand",
    isFemale: true,
    culture: "Dornish",
    titles: [],
    aliases: [],
    born: "In 291 AC or 292 AC",
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [5, 8]
  },
  {
    id: 1340,
    name: "Doreah",
    isFemale: true,
    culture: "Lysene",
    titles: [],
    aliases: [],
    born: "In 278 or 279 AC",
    died: "In 299 AC, at Red waste",

    childrenIds: [],
    allegiances: [378],
    bookIds: [1, 2, 8],

    playedBy: ["Roxanne McKee"],
    tvSeries: ["Season 1", "Season 2"]
  },
  {
    id: 1341,
    name: "Dormund",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at The Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1342,
    name: "Dornish Dilly",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1343,
    name: "Doss",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Blind Doss"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1344,
    name: "Draqaz",
    isFemale: false,
    culture: "Ghiscari",
    titles: ["Cupbearer"],
    aliases: [],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1345,
    name: "Drennan",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [169],
    bookIds: [2],

    playedBy: ["David Coakley"],
    tvSeries: ["Season 2"]
  },
  {
    id: 1346,
    name: "Drogo",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Khal"],
    aliases: ["Great Rider", "Great Khal"],
    born: "In or around 267 AC",
    died: "In 298 AC, at Dothraki sea",

    spouseId: 1303,
    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 8],

    playedBy: ["Jason Momoa"],
    tvSeries: ["Season 1", "Season 2"]
  },
  {
    id: 1347,
    name: "Dryn",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1348,
    name: "Dudley",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1349,
    name: "Dunaver",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [2]
  },
  {
    id: 1350,
    name: "Dunsen",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [72],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1351,
    name: "Dyah",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    spouseId: 1293,
    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1352,
    name: "Dywen",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1353,
    name: "Easy",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1354,
    name: "Ebrose",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 5]
  },
  {
    id: 1355,
    name: "Edric Storm",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 287 AC",
    

    childrenIds: [],
    allegiances: [17],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1356,
    name: "Eggon",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [72],
    bookIds: [2]
  },
  {
    id: 1357,
    name: "Egon Emeros",
    isFemale: false,
    culture: "Qartheen",
    titles: [],
    aliases: ["Egon Emeros the Exquisite"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 8]
  },
  {
    id: 1358,
    name: "Elaena Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess"],
    aliases: [],
    born: "In 150 AC",
    died: "In or after 220 AC",

    spouseId: 803,
    childrenIds: [],
    allegiances: [378, 303, 300, 257],
    bookIds: [11, 3, 5, 8]
  },
  {
    id: 1359,
    name: "Elder Brother",
    isFemale: false,
    
    titles: ["Elder Brother", "Ser"],
    aliases: [],
    born: "In 255 AC or 256 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1360,
    name: "Eldiss",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1361,
    name: "Elenei",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In Age of Heroes",
    

    spouseId: 333,
    childrenIds: [],
    allegiances: [109],
    bookIds: [2]
  },
  {
    id: 1362,
    name: "Elia Sand",
    isFemale: true,
    culture: "Dornish",
    titles: [],
    aliases: ["El", "Lady Lance"],
    born: "In 285 AC or 286 AC",
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [3, 5, 8]
  },
  {
    id: 1363,
    name: "Elron",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1364,
    name: "Elwood",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Riverrun",

    childrenIds: [],
    allegiances: [395],
    bookIds: [3, 5, 8]
  },
  {
    id: 1365,
    name: "Elza",
    isFemale: true,
    culture: "Meereenese",
    titles: [],
    aliases: ["Ella"],
    
    died: "In 294 AC, at Meereen",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1366,
    name: "Emma",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 260 AC or before",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1367,
    name: "Emmett",
    isFemale: false,
    
    titles: [],
    aliases: ["Iron Emmett"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1368,
    name: "Emmond",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1369,
    name: "Emrick",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "At Fair Isle",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1370,
    name: "Endehar",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1371,
    name: "Enger",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [395],
    bookIds: [2]
  },
  {
    id: 1372,
    name: "Erik Ironmaker",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord Steward of the Iron Islands", "Castellan of Pyke"],
    aliases: ["Erik the Just", "Erik Anvil-Breaker"],
    born: "In 211 AC or 212 AC",
    

    spouseId: 150,
    childrenIds: [],
    allegiances: [210, 169],
    bookIds: [5, 8]
  },
  {
    id: 1373,
    name: "Eroeh",
    isFemale: true,
    culture: "Lhazareen",
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at Dothraki Sea",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 8]
  },
  {
    id: 1374,
    name: "Erreck",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1375,
    name: "Erreg",
    isFemale: false,
    culture: "Andal",
    titles: ["King"],
    aliases: ["Erreg the Kinslayer"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 3]
  },
  {
    id: 1376,
    name: "Errok",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1377,
    name: "Erryk",
    isFemale: false,
    
    titles: [],
    aliases: ['"Left" or "Right"'],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [3, 5]
  },
  {
    id: 1378,
    name: "Esgred",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1379,
    name: "Eustace",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1380,
    name: "Eustace Brune",
    isFemale: false,
    
    titles: ["Lord of the Dyre Den"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [49],
    bookIds: [5]
  },
  {
    id: 1381,
    name: "Ezzara",
    isFemale: true,
    culture: "Ghiscari",
    titles: ["Blue Grace"],
    aliases: [],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1382,
    name: "Falia Flowers",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In either 281 AC, 282 AC or 283 AC",
    

    childrenIds: [],
    allegiances: [194],
    bookIds: [5, 8]
  },
  {
    id: 1383,
    name: "Farlen",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 8],

    playedBy: ["Peter Balance"],
    tvSeries: ["Season 2"]
  },
  {
    id: 1384,
    name: "Fern",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1385,
    name: "Ferny",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    spouseId: 1293,
    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1386,
    name: "Ferrego Antaryon",
    isFemale: false,
    culture: "Braavosi",
    titles: ["Sealord of Braavos"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1387,
    name: "Ferret",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 1388,
    name: "Florys the Fox",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 1389,
    name: "Fogo",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Khalakka"],
    aliases: [],
    
    died: "In 298 AC, at Dothraki sea",

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1390,
    name: "Fornio",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1391,
    name: "Fralegg",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Fralegg the Strong"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1392,
    name: "Franklyn Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [4, 7]
  },
  {
    id: 1393,
    name: "Frenken",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1394,
    name: "Frenya",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Winterfell",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1395,
    name: "Frynne",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1396,
    name: "Gage",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3]
  },
  {
    id: 1397,
    name: "Galazza Galare",
    isFemale: true,
    culture: "Ghiscari",
    titles: ["Green Grace"],
    aliases: [],
    born: "In 217 AC (roughly), at Meereen",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1398,
    name: "Galladon of Morne",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Perfect Knight"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 11]
  },
  {
    id: 1399,
    name: "Gallard",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 11]
  },
  {
    id: 1400,
    name: "Galt",
    isFemale: false,
    culture: "Mountain clans",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1401,
    name: "Galyeon of Cuy",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1402,
    name: "Gareth",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Gareth the Grey"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [6]
  },
  {
    id: 1403,
    name: "Gareth Clifton",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 551,
    childrenIds: [],
    allegiances: [73],
    bookIds: [5]
  },
  {
    id: 1404,
    name: "Garigus",
    isFemale: false,
    
    titles: ["Wisdom"],
    aliases: [],
    
    died: "At King's Landing",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1405,
    name: "Garin",
    isFemale: false,
    culture: "Dornish",
    titles: [],
    aliases: ["Garin of the Orphans"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1406,
    name: "Garin",
    isFemale: false,
    culture: "Rhoynar",
    titles: ["Prince"],
    aliases: ["Garin the Great"],
    
    died: "At Chroyane",

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8, 11]
  },
  {
    id: 1407,
    name: "Gariss",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 1408,
    name: "Garizon",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1409,
    name: "Garrett Flowers",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1410,
    name: "Garse Flowers",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1411,
    name: "Garth Greenhand",
    isFemale: false,
    culture: "First Men",
    titles: ["High King of the First Men"],
    aliases: ["Garth Greenhair", "Garth the Green"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [6, 3, 11]
  },
  {
    id: 1412,
    name: "Garth of Greenaway",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "At Greenaway",
    died: "In 300 AC, at Beyond the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1413,
    name: "Garth of Oldtown",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Craster's Keep",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1414,
    name: "Gascoyne",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Gascoyne of the Greenblood"],
    
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [5, 8]
  },
  {
    id: 1415,
    name: "Gavin",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Gavin the Trader"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1416,
    name: "Gelmarr",
    isFemale: false,
    
    titles: [],
    aliases: ["The Grim"],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [169],
    bookIds: [2, 8]
  },
  {
    id: 1417,
    name: "Gendel",
    isFemale: false,
    culture: "Free Folk",
    titles: ["King-Beyond-the-Wall"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 2, 3]
  },
  {
    id: 1418,
    name: "Gendry",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["The Bull", "Ser Gendry of the hollow hill"],
    born: "In 284 AC, at King's Landing",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5],

    playedBy: ["Joe Dempsie"],
    tvSeries: ["Season 1", "Season 2", "Season 3"]
  },
  {
    id: 1419,
    name: "Gerardys",
    isFemale: false,
    
    titles: ["Grand Maester"],
    aliases: [],
    
    died: "In 130 AC",

    childrenIds: [],
    allegiances: [],
    bookIds: [10, 3]
  },
  {
    id: 1420,
    name: "Gergen",
    isFemale: false,
    
    titles: [],
    aliases: ["Green Gergen"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1421,
    name: "Gerold Dayne",
    isFemale: false,
    culture: "Dornish",
    titles: ["Ser", "Knight of High Hermitage"],
    aliases: ["Darkstar"],
    born: "In or between 270 AC and 274 AC",
    

    childrenIds: [],
    allegiances: [98],
    bookIds: [5, 8]
  },
  {
    id: 1422,
    name: "Gerren",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1423,
    name: "Gerrick",
    isFemale: false,
    culture: "Free folk",
    titles: ["King of the Wildlings"],
    aliases: ["Gerrick Kingsblood"],
    
    

    childrenIds: [],
    allegiances: [314],
    bookIds: [8]
  },
  {
    id: 1424,
    name: "Gerris Drinkwater",
    isFemale: false,
    culture: "Dornish",
    titles: ["Ser"],
    aliases: ["Drink", "Dornish Gerrold"],
    born: "In 275 AC",
    

    childrenIds: [],
    allegiances: [104],
    bookIds: [8]
  },
  {
    id: 1425,
    name: "Ghael",
    isFemale: false,
    culture: "Astapori",
    titles: ["Lord"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 8]
  },
  {
    id: 1426,
    name: "Ghost of High Heart",
    isFemale: true,
    
    titles: [],
    aliases: ["The woods witch"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1427,
    name: "Gilly",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: ["the rabbit keeper"],
    born: "In either 282 AC, 283 AC or 284 AC, at Craster's Keep",
    

    spouseId: 1293,
    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Hannah Murray"],
    tvSeries: ["Season 2", "Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 1428,
    name: "Glendon Hewett",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [194],
    bookIds: [3, 5, 8]
  },
  {
    id: 1429,
    name: "Goady",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1430,
    name: "Godwyn",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [1]
  },
  {
    id: 1431,
    name: "Goghor",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: ["Goghor the Giant"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1432,
    name: "Goodwin",
    isFemale: false,
    
    titles: ["Ser", "Master-at-arms at Evenfall Hall"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [380],
    bookIds: [5]
  },
  {
    id: 1433,
    name: "Gorghan of Old Ghis",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1434,
    name: "Gormon Tyrell",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: ["Maester Gormon"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1435,
    name: "Gorne",
    isFemale: false,
    culture: "Free Folk",
    titles: ["King-Beyond-the-Wall"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 2, 3]
  },
  {
    id: 1436,
    name: "Grazdan",
    isFemale: false,
    culture: "Astapori",
    titles: ["Good Master"],
    aliases: [],
    
    died: "In 299 AC, at Astapor",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1437,
    name: "Grazdan mo Ullhor",
    isFemale: false,
    culture: "Astapori",
    titles: ["Good Master"],
    aliases: [],
    
    died: "In 299 AC, at Astapor",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1438,
    name: "Grazdan the Great",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1439,
    name: "Grazdan zo Galare",
    isFemale: false,
    culture: "Meereenese",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1440,
    name: "Grazdar zo Galare",
    isFemale: false,
    culture: "Ghiscari",
    titles: ["Cupbearer"],
    aliases: ["Grazhar"],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1441,
    name: "Great Walrus",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1442,
    name: "Gregor Clegane",
    isFemale: false,
    
    titles: ["Ser", "Knight of Clegane's Keep"],
    aliases: ["The Mountain That Rides", "The Mountain", "The Great Dog"],
    born: "In 265 AC or 266 AC",
    died: "In 300 AC",

    childrenIds: [],
    allegiances: [72, 229],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Conan Stevens", "Ian Whyte", "Hafþór Júlíus Björnsson"],
    tvSeries: ["Season 1", "Season 2", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 1443,
    name: "Gretchel",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [7],
    bookIds: [5, 8]
  },
  {
    id: 1444,
    name: "Grey King",
    isFemale: false,
    culture: "Ironborn",
    titles: ["High King of the Iron Islands"],
    aliases: [],
    
    died: ", at watery halls of the Drowned God (alleged)",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 8, 11]
  },
  {
    id: 1445,
    name: "Grey Worm",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [3, 5, 8],

    playedBy: ["Jacob Anderson"],
    tvSeries: ["Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 1446,
    name: "Griffin King",
    isFemale: false,
    culture: "First Men",
    titles: ["last of the Mountain King"],
    aliases: ["Griffin King"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1447,
    name: "Grigg",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Grigg the Goat"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1448,
    name: "Grisel",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [11],
    bookIds: [3]
  },
  {
    id: 1449,
    name: "Grisella",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1450,
    name: "Groleo",
    isFemale: false,
    culture: "Pentoshi",
    titles: ["Captain", "Lord Admiral"],
    aliases: [],
    
    died: "In 300 AC, at Meereen",

    childrenIds: [],
    allegiances: [378],
    bookIds: [3, 5, 8]
  },
  {
    id: 1451,
    name: "Grubbs",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Beyond the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1452,
    name: "Grunt",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [34],
    bookIds: [8]
  },
  {
    id: 1453,
    name: "Gueren",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 1454,
    name: "Gulian",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1455,
    name: "Gunthor son of Gurn",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 3]
  },
  {
    id: 1456,
    name: "Gurn",
    isFemale: false,
    culture: "Mountain clans",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1457,
    name: "Guyne",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1458,
    name: "Gyldayn",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 10, 9]
  },
  {
    id: 1459,
    name: "Gyleno Dothare",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1460,
    name: "Gyloro Dothare",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1461,
    name: "Gynir",
    isFemale: false,
    
    titles: [],
    aliases: ["Gynir Rednose", "Rednose"],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [169],
    bookIds: [2, 8]
  },
  {
    id: 1462,
    name: "Haegon Blackfyre",
    isFemale: false,
    culture: "Valyrian",
    titles: [],
    aliases: [],
    born: "In or between 189 AC and 193 AC",
    died: "In 219 AC",

    childrenIds: [],
    allegiances: [23],
    bookIds: [11, 7]
  },
  {
    id: 1463,
    name: "Haggo",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Bloodrider of Khal Drogo"],
    aliases: [],
    
    died: "In 298 AC, at Dothraki sea",

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1464,
    name: "Haggon",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1465,
    name: "Hairy Hal",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Beyond the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1466,
    name: "Hake",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Fist of the First Men",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3]
  },
  {
    id: 1467,
    name: "Hal",
    isFemale: false,
    
    titles: [],
    aliases: ["Hal the Hog"],
    
    died: "In 299 AC",

    childrenIds: [],
    allegiances: [15],
    bookIds: [3]
  },
  {
    id: 1468,
    name: "Halder",
    isFemale: false,
    
    titles: [],
    aliases: ["Stone Head"],
    born: "In 281 AC or 282 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1469,
    name: "Haldon",
    isFemale: false,
    
    titles: [],
    aliases: ["Haldon Halfmaester"],
    
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [8]
  },
  {
    id: 1470,
    name: "Hali",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at the Wolfswood",

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1471,
    name: "Hallyne",
    isFemale: false,
    
    titles: ["Lord", "Wisdom"],
    aliases: ["Hallyne the Pryomancer"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5],

    playedBy: ["Roy Dotrice"],
    tvSeries: ["Season 2"]
  },
  {
    id: 1472,
    name: "Hamish",
    isFemale: false,
    
    titles: [],
    aliases: ["Hamish the Harper"],
    
    died: "In 300 AC, at King's Landing",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1473,
    name: "Harbert",
    isFemale: false,
    
    titles: ["Ser", "Castellan of Storm's End"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [17],
    bookIds: [2]
  },
  {
    id: 1474,
    name: "Hareth",
    isFemale: false,
    
    titles: ["Grand Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1475,
    name: "Hareth",
    isFemale: false,
    
    titles: [],
    aliases: ["Horse"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1476,
    name: "Harghaz",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: ["Harghaz the Hero", "Harghaz the Dragonslayer"],
    
    died: "In 300 AC, at Meereen",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1477,
    name: "Harle",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Harle the Handsome"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1478,
    name: "Harle",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Harle the Huntsman"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1479,
    name: "Harma",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: ["Harma the Dogshead", "Harma Dogshead"],
    
    died: "In 300 AC, at The Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 8]
  },
  {
    id: 1480,
    name: "Harmund Sharp",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [344],
    bookIds: [5]
  },
  {
    id: 1481,
    name: "Harmune",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1482,
    name: "Harodon",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1483,
    name: "Harra",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Harrenhal",

    childrenIds: [],
    allegiances: [427, 229],
    bookIds: [2]
  },
  {
    id: 1484,
    name: "Harrag Sharp",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Harrag Sheepstealer"],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [344],
    bookIds: [2]
  },
  {
    id: 1485,
    name: "Harren Half-Hoare",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1486,
    name: "Harry Sawyer",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1487,
    name: "Harsley",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Pennytree",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 8]
  },
  {
    id: 1488,
    name: "Harwin",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    born: "In 271 AC or later",
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1489,
    name: "Hayhead",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 1490,
    name: "Hazrak zo Loraq",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: ["The Handsome"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1491,
    name: "Hazzea",
    isFemale: true,
    culture: "Ghiscari",
    titles: [],
    aliases: [],
    born: "In 295 AC or 296 AC",
    died: "In 300 AC, at plains outside Meereen",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1492,
    name: "Heke",
    isFemale: false,
    
    titles: [],
    aliases: ["Reek"],
    
    died: "In 299 AC, at the North",

    childrenIds: [],
    allegiances: [34],
    bookIds: [2, 5, 8]
  },
  {
    id: 1493,
    name: "Helliweg",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1494,
    name: "Helly",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1495,
    name: "Helya",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [2, 3, 5]
  },
  {
    id: 1496,
    name: "Hendry Bracken",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Stone Hedge",

    childrenIds: [],
    allegiances: [37],
    bookIds: [2]
  },
  {
    id: 1497,
    name: "Henk",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Henk the Helm"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1498,
    name: "Henly",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [352],
    bookIds: [8]
  },
  {
    id: 1499,
    name: "Heward",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at King's Landing",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1]
  },
  {
    id: 1500,
    name: "Hibald",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1501,
    name: "Hizdahr zo Loraq",
    isFemale: false,
    culture: "Ghiscari",
    titles: [
      "King of Meereen",
      "Scion of Ghis",
      "Octarch of the Old Empire",
      "Master of the Skahazadhan, Consort to Dragons",
      "Blood of the Harpy[1]"
    ],
    aliases: ["Hizdak", "Hizdahr of the tepid kisses"],
    
    

    spouseId: 1303,
    childrenIds: [],
    allegiances: [],
    bookIds: [8],

    playedBy: ["Joel Fry"],
    tvSeries: ["Season 4", "Season 5"]
  },
  {
    id: 1502,
    name: "Hobb",
    isFemale: false,
    
    titles: [],
    aliases: ["Three-Finger Hobb"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1503,
    name: "Hod",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1504,
    name: "Hoke",
    isFemale: false,
    
    titles: [],
    aliases: ["Hoke the Horseleg"],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [5]
  },
  {
    id: 1505,
    name: "Holger",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1506,
    name: "Holly",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    born: "In 283 AC, 284 AC or 285 AC",
    died: "In 300 AC, at Winterfell",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1507,
    name: "Hop-Robin",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1508,
    name: "Hot Pie",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5],

    playedBy: ["Ben Hawkey"],
    tvSeries: ["Season 1", "Season 2", "Season 3", "Season 4"]
  },
  {
    id: 1512,
    name: "Howd",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Wanderer"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1513,
    name: "Hugh Hammer",
    isFemale: false,
    
    titles: ["Ser", "Lord of Bitterbridge"],
    aliases: ["Hard Hugh", "The Betrayer", "Lord Hammer"],
    
    died: "In 130 AC, at Tumbleton",

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 9]
  },
  {
    id: 1514,
    name: "Hugor of the Hill",
    isFemale: false,
    culture: "Andal",
    titles: ["King of the Andals"],
    aliases: ["Hukko (unconfirmed)"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8, 11]
  },
  {
    id: 1515,
    name: "Hullen",
    isFemale: false,
    culture: "Northmen",
    titles: ["Master of horse at Winterfell"],
    aliases: [],
    
    died: "In 298 AC, at King's Landing",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 8]
  },
  {
    id: 1516,
    name: "Humfrey Clifton",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [73, 15],
    bookIds: [8]
  },
  {
    id: 1517,
    name: "Hunnimore",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [9]
  },
  {
    id: 1518,
    name: "Husband",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 1941,
    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1519,
    name: "Iggo",
    isFemale: false,
    culture: "Dothraki",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3],

    playedBy: ["Deon Lee-Williams"],
    tvSeries: ["Season 6"]
  },
  {
    id: 1520,
    name: "Illyrio Mopatis",
    isFemale: false,
    culture: "Pentoshi",
    titles: ["Magister of Pentos"],
    aliases: ["The Cheesemonger", "The Fat Man", "The Lord of Cheese"],
    born: "At Pentos",
    

    spouseId: 1521,
    childrenIds: [],
    allegiances: [378],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Roger Allam"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1521,
    name: "Illyrio's first wife",
    isFemale: true,
    culture: "Pentoshi",
    titles: [],
    aliases: [],
    born: "At Pentos",
    died: "At Pentos",

    spouseId: 1520,
    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1522,
    name: "Ironbelly",
    isFemale: false,
    
    titles: [],
    aliases: ["Ironbelly"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3]
  },
  {
    id: 1523,
    name: "Irri",
    isFemale: true,
    culture: "Dothraki",
    titles: [],
    aliases: [],
    born: "In 283 AC or 284 AC",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Amrita Acharia"],
    tvSeries: ["Season 1", "Season 2"]
  },
  {
    id: 1524,
    name: "Ithoke",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: ["Fearless Ithoke"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1525,
    name: "Jack",
    isFemale: false,
    
    titles: [],
    aliases: ["Jack-Be-Lucky"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1526,
    name: "Jacks",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 1527,
    name: "Jaehaera Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Princess", "Queen"],
    aliases: [],
    born: "In 123 AC",
    died: "In 133 AC, at King's Landing",

    spouseId: 40,
    childrenIds: [],
    allegiances: [378],
    bookIds: [10, 9, 11]
  },
  {
    id: 1528,
    name: "Jaehaerys Targaryen",
    isFemale: false,
    
    titles: ["Prince"],
    aliases: [],
    born: "In 123 AC",
    died: "In 129 AC, at the Tower of the Hand at King's Landing",

    childrenIds: [],
    allegiances: [378],
    bookIds: [10, 9]
  },
  {
    id: 1529,
    name: "Jafer Flowers",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at the Haunted Forest",

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1530,
    name: "Jaggot",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1531,
    name: "Jalabhar Xho",
    isFemale: false,
    culture: "Summer Isles",
    titles: ["Prince of the Red Flower Vale"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1532,
    name: "Jaqen H'ghar",
    isFemale: false,
    
    titles: [],
    aliases: ["Lorath"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Tom Wlaschiha, Patrick O'Kane"],
    tvSeries: ["Season 2", "Season 6"]
  },
  {
    id: 1533,
    name: "Jarl",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1534,
    name: "Jate",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1535,
    name: "Jate Blackberry",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [15],
    bookIds: [3]
  },
  {
    id: 1536,
    name: "Jayde",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1537,
    name: "Jayne Bracken",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [37],
    bookIds: [8]
  },
  {
    id: 1538,
    name: "Jenny",
    isFemale: true,
    
    titles: [],
    aliases: ["Penny Jenny", "Redgrass Jenny"],
    
    died: "At King's Landing",

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 1539,
    name: "Jenny of Oldstones",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 330,
    childrenIds: [],
    allegiances: [],
    bookIds: [11, 3, 5, 8]
  },
  {
    id: 1540,
    name: "Jeren",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1541,
    name: "Jeyne",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: ["Canker Jeyne"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1542,
    name: "Jeyne",
    isFemale: true,
    
    titles: [],
    aliases: ["Squinty Jeyne"],
    
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 1543,
    name: "Jeyne Heddle",
    isFemale: true,
    
    titles: [],
    aliases: ["Long Jeyne"],
    born: "In 281 AC or 282 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1544,
    name: "Jeyne Rivers",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1545,
    name: "Jeyne Waters",
    isFemale: true,
    culture: "Westeros",
    titles: [],
    aliases: [],
    born: "In or between 171 AC and 176 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 1546,
    name: "Jezhene",
    isFemale: true,
    culture: "Ghiscari",
    titles: ["Cupbearer"],
    aliases: ["Jhezane"],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1547,
    name: "Jhaqo",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Khal", "Ko (formerly)"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1548,
    name: "Jhiqui",
    isFemale: true,
    culture: "Dothraki",
    titles: [],
    aliases: [],
    born: "In 284 AC",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Sarita Piotrowski"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1549,
    name: "Jhogo",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Ko", "Bloodrider"],
    aliases: [],
    born: "In or between 281 AC and 283 AC, at Dothraki sea",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1550,
    name: "Jodge",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [2]
  },
  {
    id: 1551,
    name: "Jommo",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Khal"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 5]
  },
  {
    id: 1552,
    name: "Jommy",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [17],
    bookIds: [2]
  },
  {
    id: 1553,
    name: "Jon Cupps",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 634,
    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1554,
    name: "Jon Heddle",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Long Jon"],
    
    

    childrenIds: [],
    allegiances: [190],
    bookIds: [5]
  },
  {
    id: 1555,
    name: "Jon Penny",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1556,
    name: "Jon Pox",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At Stepstones",

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1557,
    name: "Jon Vance",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1558,
    name: "Jon Waters",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    born: "In or between 171 AC and 176 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 11]
  },
  {
    id: 1559,
    name: "Jonos Bracken",
    isFemale: false,
    
    titles: ["Lord of Stone Hedge"],
    aliases: [],
    born: "At Stone Hedge",
    

    childrenIds: [],
    allegiances: [37],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Gerry O'Brien"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1560,
    name: "Jorah Mormont",
    isFemale: false,
    culture: "Northmen",
    titles: ["Ser", "Lord of Bear Island (stripped)"],
    aliases: ["Jorah the Andal", "Bear"],
    born: "In 254 AC (roughly)",
    

    childrenIds: [],
    allegiances: [271, 378],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Iain Glen"],
    tvSeries: [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ]
  },
  {
    id: 1561,
    name: "Joramun",
    isFemale: false,
    culture: "Free Folk",
    titles: ["King-Beyond-the-Wall"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 2, 3]
  },
  {
    id: 1562,
    name: "Jorgen",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [419],
    bookIds: [6]
  },
  {
    id: 1563,
    name: "Jorquen",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1564,
    name: "Joseran",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1565,
    name: "Joseth",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2]
  },
  {
    id: 1566,
    name: "Joss",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1567,
    name: "Joss",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: ["Joss the Gloom"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1568,
    name: "Joss Stilwood",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [72],
    bookIds: [1, 2, 5]
  },
  {
    id: 1569,
    name: "Joth Quickbow",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1570,
    name: "Joy Hill",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 288 AC",
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1571,
    name: "Jurne",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5]
  },
  {
    id: 1572,
    name: "Jyana",
    isFemale: true,
    culture: "Crannogmen",
    titles: [],
    aliases: [],
    
    

    spouseId: 506,
    childrenIds: [],
    allegiances: [318],
    bookIds: [5, 8]
  },
  {
    id: 1573,
    name: "Jyck",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at Mountains of the Moon",

    childrenIds: [],
    allegiances: [229],
    bookIds: [1]
  },
  {
    id: 1574,
    name: "Jynessa Blackmont",
    isFemale: true,
    culture: "Dornish",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [24],
    bookIds: [3, 5]
  },
  {
    id: 1575,
    name: "Jyzene",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1576,
    name: "Kaeth",
    isFemale: false,
    
    titles: ["Grand Maester"],
    aliases: [],
    born: "In 175 AC, 176 AC or 177 AC",
    died: "In 257 AC or 258 AC, at King's Landing",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1577,
    name: "Karl",
    isFemale: false,
    
    titles: [],
    aliases: ["Clubfoot Karl"],
    
    died: "In 300 AC, at the haunted forest",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8],

    playedBy: ["Burn Gorman"],
    tvSeries: ["Season 3", "Season 4"]
  },
  {
    id: 1578,
    name: "Kedge Whiteye",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 251 AC and 260 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1579,
    name: "Kedry",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    died: "In 300 AC, at off the coast of the Disputed Lands",

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1580,
    name: "Kegs",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1581,
    name: "Kella",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [11],
    bookIds: [3]
  },
  {
    id: 1582,
    name: "Kemmett Pyke",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Kemmett the Bastard"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1583,
    name: "Kenned",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Kenned the Whale"],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1584,
    name: "Kennos of Kayce",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [219],
    bookIds: [3, 5, 8]
  },
  {
    id: 1585,
    name: "Ketter",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1586,
    name: "Kezmya",
    isFemale: true,
    culture: "Ghiscari",
    titles: ["Cupbearer"],
    aliases: [],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1587,
    name: "Khorane Sathmantes",
    isFemale: false,
    culture: "Lysene",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1588,
    name: "Khrazz",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: [],
    born: "In 277 AC (roughly)",
    died: "In 300 AC, at Meereen",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1589,
    name: "Kiera of Tyrosh",
    isFemale: true,
    culture: "Tyroshi",
    titles: ["Lady"],
    aliases: [],
    
    

    spouseId: 1067,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 7]
  },
  {
    id: 1590,
    name: "Kindly Man",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: ["The Kindly Man"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1591,
    name: "Kirby Pimm",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 1592,
    name: "Kojja Mo",
    isFemale: true,
    culture: "Summer Isles",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1593,
    name: "Koss",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Gods Eye",

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1594,
    name: "Kraznys mo Nakloz",
    isFemale: false,
    culture: "Astapori",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Astapor",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 8],

    playedBy: ["Dan Hildebrand"],
    tvSeries: ["Season 3"]
  },
  {
    id: 1595,
    name: "Kromm",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    born: "At Iron Islands",
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [169],
    bookIds: [2]
  },
  {
    id: 1596,
    name: "Kurleket",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at Mountains of the Moon",

    childrenIds: [],
    allegiances: [37],
    bookIds: [1]
  },
  {
    id: 1597,
    name: "Kurz",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1598,
    name: "Kyle",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Cat of Misty Moor", "Kyle the Cat"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 1599,
    name: "Kyle",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at the burning septry",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1600,
    name: "Kyleg",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Kyleg of the Wooden Ear"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1601,
    name: "Kym",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1602,
    name: "Kyra",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 280 AC or 281 AC, at Winter Town",
    died: "In 300 AC, at Forests near the Dreadfort",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 5, 8]
  },
  {
    id: 1603,
    name: "Lady of the Leaves",
    isFemale: true,
    
    titles: ["Lady of the Leaves"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1604,
    name: "Lanna",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 285 AC or 286 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1605,
    name: "Lanna",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    born: "In 286 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1606,
    name: "Lark",
    isFemale: false,
    culture: "Sistermen",
    titles: [],
    aliases: ["The Sisterman", "Lark the Sisterman"],
    
    died: "In 299 AC, at the haunted forest",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3]
  },
  {
    id: 1607,
    name: "Larra Blackmont",
    isFemale: true,
    culture: "Dornish",
    titles: ["Lady of Blackmont"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [24],
    bookIds: [3, 5, 8]
  },
  {
    id: 1608,
    name: "Larra Rogare",
    isFemale: true,
    culture: "Lysene",
    titles: [],
    aliases: [],
    born: "In 115 AC, at Lys",
    died: "In 145 AC, at Lys",

    spouseId: 1077,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11]
  },
  {
    id: 1609,
    name: "Larraq",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: ["The Lash"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1610,
    name: "Layna",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In or between 279 AC and 285 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1611,
    name: "Leathers",
    isFemale: false,
    culture: "Free Folk",
    titles: ["Master-at-Arms"],
    aliases: [],
    born: "In 259 AC or before",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1612,
    name: "Left Hand Lew",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1613,
    name: "Lem",
    isFemale: false,
    
    titles: [],
    aliases: ["Lem Lemoncloak", "The Lemon", "Yellow cloak"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5],

    playedBy: ["Jóhannes Haukur Jóhannesson"],
    tvSeries: ["Season 6"]
  },
  {
    id: 1614,
    name: "Lem",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or around 161 AC",
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 1615,
    name: "Lenn",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1616,
    name: "Lennocks",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1617,
    name: "Lenyl",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1618,
    name: "Leonette Fossoway",
    isFemale: true,
    
    titles: ["Lady"],
    aliases: [],
    
    

    spouseId: 401,
    childrenIds: [],
    allegiances: [397],
    bookIds: [3, 5, 8]
  },
  {
    id: 1619,
    name: "Lester",
    isFemale: false,
    
    titles: [],
    aliases: ["Red Lester"],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [3, 5]
  },
  {
    id: 1620,
    name: "Lew",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1]
  },
  {
    id: 1621,
    name: "Lew",
    isFemale: false,
    
    titles: [],
    aliases: ["Long Lew"],
    
    

    childrenIds: [],
    allegiances: [395],
    bookIds: [3, 5, 8]
  },
  {
    id: 1622,
    name: "Lewis Lanster",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "At Westeros",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1623,
    name: "Lewys",
    isFemale: false,
    
    titles: [],
    aliases: ["Lewys the Fishwife"],
    
    

    childrenIds: [],
    allegiances: [15],
    bookIds: [3, 5, 8]
  },
  {
    id: 1624,
    name: "Lharys",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at Mountains of the Moon",

    childrenIds: [],
    allegiances: [37],
    bookIds: [1]
  },
  {
    id: 1625,
    name: "Lister",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1626,
    name: "Lommy",
    isFemale: false,
    
    titles: [],
    aliases: ["Lommy Greenhands"],
    
    died: "In 299 AC, at Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5],

    playedBy: ["Eros Vlahos"],
    tvSeries: ["Season 1", "Season 2"]
  },
  {
    id: 1627,
    name: "Lomys",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1628,
    name: "Lorcas",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 241 AC or before",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1629,
    name: "Lord Belgrave",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1630,
    name: "Lord of Bones",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Rattleshirt", "Lord o' Bones", "Bag o' Bones"],
    
    died: "In 300 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Edward Dogliani"],
    tvSeries: ["Season 2", "Season 3"]
  },
  {
    id: 1631,
    name: "Loren I Lannister",
    isFemale: false,
    
    titles: [
      "King of the Rock (former)",
      "Lord of Casterly Rock",
      "Warden of the West",
      "Lord of the Westerlands"
    ],
    aliases: ["Loren the Last"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 11]
  },
  {
    id: 1632,
    name: "Loreza Sand",
    isFemale: true,
    culture: "Dornish",
    titles: [],
    aliases: ["Loree"],
    born: "In 293 AC",
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [3, 5, 8]
  },
  {
    id: 1633,
    name: "Lorimer",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Lorimer the Belly"],
    
    died: "In 298 AC, at Riverlands",

    childrenIds: [],
    allegiances: [234],
    bookIds: [5]
  },
  {
    id: 1634,
    name: "Lormelle",
    isFemale: false,
    
    titles: [],
    aliases: ["Lormelle Long Lance"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1635,
    name: "Lorren",
    isFemale: false,
    
    titles: [],
    aliases: ["Black Lorren"],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [],
    bookIds: [2],

    playedBy: ["Forbes KB"],
    tvSeries: ["Season 2"]
  },
  {
    id: 1636,
    name: "Lothar",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 1637,
    name: "Lotho Lornel",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1638,
    name: "Lucan",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Harrenhal",

    childrenIds: [],
    allegiances: [427],
    bookIds: [2]
  },
  {
    id: 1639,
    name: "Lucantine Woodwright",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1640,
    name: "Lucas Blackwood",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at the Twins",

    childrenIds: [],
    allegiances: [27],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1641,
    name: "Lucas Nayland",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [279],
    bookIds: [7]
  },
  {
    id: 1642,
    name: "Lucifer Hardy",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [175],
    bookIds: [5]
  },
  {
    id: 1643,
    name: "Luco Prestayn",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1644,
    name: "Lucos",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1645,
    name: "Luke",
    isFemale: false,
    
    titles: [],
    aliases: ["Likely Luke"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1646,
    name: "Luke",
    isFemale: false,
    
    titles: [],
    aliases: ["Luke of Longtown"],
    born: "At Longtown",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1647,
    name: "Lum",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [3, 5]
  },
  {
    id: 1648,
    name: "Luton",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Winterfell",

    childrenIds: [],
    allegiances: [34],
    bookIds: [8]
  },
  {
    id: 1649,
    name: "Luwin",
    isFemale: false,
    culture: "Westeros",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Donald Sumpter"],
    tvSeries: ["Season 1", "Season 2"]
  },
  {
    id: 1650,
    name: "Lyanna Stark",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: ["The She-Wolf", "The Wolf Maid", "Lya"],
    born: "In 266 AC or 267 AC",
    died: "In 283 AC, at Tower of Joy",

    childrenIds: [],
    allegiances: [362],
    bookIds: [11, 1, 2, 3, 8],

    playedBy: ["Cordelia Hill"],
    tvSeries: ["Season 6"]
  },
  {
    id: 1651,
    name: "Lync",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1652,
    name: "Lyonel",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [2]
  },
  {
    id: 1653,
    name: "Lysono Maar",
    isFemale: false,
    culture: "Lysene",
    titles: [],
    aliases: [],
    born: "At Lys",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1654,
    name: "Mad Huntsman",
    isFemale: false,
    
    titles: [],
    aliases: ["The Huntsman"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1655,
    name: "Maddy",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [7],
    bookIds: [5, 8]
  },
  {
    id: 1656,
    name: "Maerie",
    isFemale: true,
    
    titles: ["Goodwife"],
    aliases: [],
    
    died: "At Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1657,
    name: "Maerie",
    isFemale: true,
    
    titles: [],
    aliases: ["Maerie the Whore"],
    
    died: "In 299 AC, at Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1658,
    name: "Mag Mar Tun Doh Weg",
    isFemale: false,
    
    titles: [],
    aliases: ["Mag the Mighty"],
    born: "At Beyond the Wall",
    died: "In 300 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1659,
    name: "Maggy",
    isFemale: true,
    
    titles: [],
    aliases: ["Maggy the Frog"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5],

    playedBy: ["Jodhi May"],
    tvSeries: ["Season 5"]
  },
  {
    id: 1660,
    name: "Mago",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Bloodrider of Khal Jhaqo"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 3, 5, 8],

    playedBy: ["Ivailo Dimitrov"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1661,
    name: "Malcolm",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1662,
    name: "Malleon",
    isFemale: false,
    
    titles: ["Grand Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1663,
    name: "Malliard",
    isFemale: false,
    
    titles: ["Wisdom"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1664,
    name: "Mallor",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 1665,
    name: "Mallor",
    isFemale: false,
    
    titles: [],
    aliases: ["Mallor the Dornishman"],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [1]
  },
  {
    id: 1666,
    name: "Mance Rayder",
    isFemale: false,
    culture: "Free folk",
    titles: ["King-Beyond-the-Wall"],
    aliases: ["The Mance", "Abel", "The Unburnt King"],
    born: ", at Beyond the Wall",
    

    spouseId: 1311,
    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Ciarán Hinds"],
    tvSeries: ["Season 3", "Season 4", "Season 5"]
  },
  {
    id: 1667,
    name: "Marei",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 280 AC or before",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Josephine Gillan"],
    tvSeries: ["Season 2", "Season 3", "Season 4", "Season 5"]
  },
  {
    id: 1668,
    name: "Marghaz zo Loraq",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: [],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1669,
    name: "Marianne Vance",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In or between 262 AC and 293 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5]
  },
  {
    id: 1670,
    name: "Marillion",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 279 AC or 280 AC",
    died: "In 300 AC, at the Eyrie",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5],

    playedBy: ["Emun Elliott."],
    tvSeries: ["Season 1"]
  },
  {
    id: 1671,
    name: "Maris",
    isFemale: true,
    culture: "Free folk",
    titles: [],
    aliases: ["Black Maris"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1672,
    name: "Maris the Maid",
    isFemale: true,
    
    titles: ["Queen"],
    aliases: ["The Most Fair"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 1673,
    name: "Marq Grafton",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 282 AC, at Gulltown",

    childrenIds: [],
    allegiances: [160],
    bookIds: [8]
  },
  {
    id: 1674,
    name: "Martyn Rivers",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1675,
    name: "Marwyn",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: ["Marwyn the Mage", "The Mage", "The mastiff"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 3, 5]
  },
  {
    id: 1676,
    name: "Marya Seaworth",
    isFemale: true,
    
    titles: ["Lady"],
    aliases: [],
    
    

    spouseId: 1319,
    childrenIds: [],
    allegiances: [340],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1677,
    name: "Masha Heddle",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at the Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2],

    playedBy: ["Susie Kelly"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1678,
    name: "Maslyn",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Fist of the First Men",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1679,
    name: "Mathos Mallarawan",
    isFemale: false,
    culture: "Qartheen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1680,
    name: "Matrice",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [15],
    bookIds: [2]
  },
  {
    id: 1681,
    name: "Matt",
    isFemale: false,
    
    titles: [],
    aliases: ["Little Matt"],
    
    died: "At the Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1682,
    name: "Matthar",
    isFemale: false,
    
    titles: [],
    aliases: ["Ser Loon"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 5, 3, 8]
  },
  {
    id: 1683,
    name: "Matthos Seaworth",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Blackwater Rush",

    childrenIds: [],
    allegiances: [340],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Kerr Logan"],
    tvSeries: ["Season 2"]
  },
  {
    id: 1684,
    name: "Mawney",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Beyond the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1685,
    name: "Maynard",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1686,
    name: "Mazdhan zo Loraq",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: ["The Magnificent"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1687,
    name: "Mebble",
    isFemale: false,
    
    titles: [],
    aliases: ["Pinkeye"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1688,
    name: "Medwick Tyrell",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1689,
    name: "Meg",
    isFemale: true,
    
    titles: [],
    aliases: ["Swampy Meg"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1690,
    name: "Megette",
    isFemale: true,
    
    titles: [],
    aliases: ["Merry Meg"],
    
    died: "In 159 AC",

    childrenIds: [],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 1691,
    name: "Meha",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1692,
    name: "Meizo Mahr",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1693,
    name: "Mela",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [7],
    bookIds: [5, 8]
  },
  {
    id: 1694,
    name: "Melaquin",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 1695,
    name: "Meliana",
    isFemale: true,
    
    titles: [],
    aliases: ["Lady Meliana"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1696,
    name: "Mellara Rivers",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1697,
    name: "Mellario",
    isFemale: true,
    culture: "Norvoshi",
    titles: [],
    aliases: ["Mellario of Norvos"],
    born: "In or between 248 AC and 263 AC",
    

    spouseId: 326,
    childrenIds: [],
    allegiances: [285],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1698,
    name: "Mellei",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [5]
  },
  {
    id: 1699,
    name: "Mellos",
    isFemale: false,
    
    titles: ["Grand Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [10]
  },
  {
    id: 1700,
    name: "Melly",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1701,
    name: "Melwys Rivers",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1702,
    name: "Meralyn",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: ["Merry"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1703,
    name: "Mero",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: ["The Titan's Bastard", "Mero of Braavos"],
    
    died: "In 299 AC, at Meereen",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 8],

    playedBy: ["Mark Killeen"],
    tvSeries: ["Season 3"]
  },
  {
    id: 1704,
    name: "Merrit",
    isFemale: false,
    
    titles: [],
    aliases: ["Merrit o' Moontown"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1705,
    name: "Mezzara",
    isFemale: true,
    culture: "Ghiscari",
    titles: ["Cupbearer"],
    aliases: [],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1706,
    name: "Mikken",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Boyd Rankin"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1707,
    name: "Miklaz",
    isFemale: false,
    culture: "Ghiscari",
    titles: ["Cupbearer"],
    aliases: [],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1708,
    name: "Mirri Maz Duur",
    isFemale: true,
    culture: "Lhazareen",
    titles: ["Godswife", "Maegi"],
    aliases: [],
    born:
      "In 257 AC, 258 AC or 259 AC, at Essos. Either in Lhazar, or in an unnamed Lhazareen settlement of the Dothraki sea.",
    died: "In 299 AC, at the red waste",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Mia Soteriou"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1709,
    name: "Missandei",
    isFemale: true,
    culture: "Naathi",
    titles: [],
    aliases: [],
    born: "In 288 AC or 289 AC, at Naath",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [3, 5, 8],

    playedBy: ["Nathalie Emmanuel"],
    tvSeries: ["Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 1710,
    name: "Mohor",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at Mountains of the Moon",

    childrenIds: [],
    allegiances: [37],
    bookIds: [1]
  },
  {
    id: 1711,
    name: "Mollander",
    isFemale: false,
    
    titles: [],
    aliases: ["Hopfrog"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1712,
    name: "Mollos",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1713,
    name: "Moon Boy",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [16],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1714,
    name: "Moonshadow",
    isFemale: true,
    
    titles: [],
    aliases: ["The Moonshadow"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1715,
    name: "Mord",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [7],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Ciaran Birmingham"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1716,
    name: "Moredo Prestayn",
    isFemale: false,
    culture: "Braavosi",
    titles: ["Tradesman-Captain"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1717,
    name: "Moreo Tumitis",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 268 AC or before",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1718,
    name: "Morgan Martell",
    isFemale: false,
    culture: "Andal",
    titles: ["Lord of the Sandship"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [11]
  },
  {
    id: 1719,
    name: "Morgarth",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Morgarth the Merry"],
    
    

    childrenIds: [],
    allegiances: [11],
    bookIds: [5, 8]
  },
  {
    id: 1720,
    name: "Morna White Mask",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1721,
    name: "Moro",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Khal"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 5],

    playedBy: ["Joe Naufahu"],
    tvSeries: ["Season 6"]
  },
  {
    id: 1722,
    name: "Morosh the Myrman",
    isFemale: false,
    culture: "Myrish",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1723,
    name: "Morra",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [5]
  },
  {
    id: 1724,
    name: "Morrec",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at Mountains of the Moon",

    childrenIds: [],
    allegiances: [229],
    bookIds: [1]
  },
  {
    id: 1725,
    name: "Mors Martell",
    isFemale: false,
    culture: "Dornish",
    titles: ["Lord of the Sandship", "Prince of Dorne"],
    aliases: [],
    
    

    spouseId: 782,
    childrenIds: [],
    allegiances: [285],
    bookIds: [11, 1, 5]
  },
  {
    id: 1726,
    name: "Mortimer Boggs",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [31],
    bookIds: [7]
  },
  {
    id: 1727,
    name: "Morton Waynwood",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [417],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1728,
    name: "Mother Mole",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1729,
    name: "Mudge",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1730,
    name: "Mudge",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At Donnelwood",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1731,
    name: "Mudge",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 1732,
    name: "Mullin",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1733,
    name: "Mully",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1734,
    name: "Munciter",
    isFemale: false,
    
    titles: ["Wisdom"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1735,
    name: "Munda",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    spouseId: 1917,
    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1736,
    name: "Murch",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1737,
    name: "Murch",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 1738,
    name: "Murenmure",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1739,
    name: "Mushroom",
    isFemale: false,
    
    titles: [],
    aliases: ["Mushroom"],
    
    died: "In or after 136AC",

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 10, 9]
  },
  {
    id: 1740,
    name: "Muttering Bill",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at the haunted forest",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1741,
    name: "Mya Stone",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 279 AC or 280 AC, at The Vale of Arryn",
    

    childrenIds: [],
    allegiances: [329],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1742,
    name: "Mycah",
    isFemale: false,
    culture: "Westeros",
    titles: [],
    aliases: [],
    born: "In 285 AC",
    died: "In 298 AC, at Riverlands, near the Ruby Ford.",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3],

    playedBy: ["Rhodri Hosking"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1743,
    name: "Myles",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [5, 8]
  },
  {
    id: 1744,
    name: "Myles",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Riverrun",

    childrenIds: [],
    allegiances: [395],
    bookIds: [2]
  },
  {
    id: 1745,
    name: "Myrtle",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Winterfell",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1746,
    name: "Mysaria",
    isFemale: true,
    culture: "Lysene",
    titles: ["Mistress of whisperers"],
    aliases: ["Misery, the White Worm", "Lady Misery"],
    born: "At Lys",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [10, 9, 11]
  },
  {
    id: 1747,
    name: "Nage",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [34],
    bookIds: [3]
  },
  {
    id: 1748,
    name: "Nail",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1749,
    name: "Nan",
    isFemale: true,
    
    titles: [],
    aliases: ["Old Nan"],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Margaret John", "Annette Tierney"],
    tvSeries: ["Season 1", "Season 6"]
  },
  {
    id: 1750,
    name: "Narbert",
    isFemale: false,
    
    titles: ["Brother", "Proctor"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1751,
    name: "Narbo",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: ["Little Narbo"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1752,
    name: "Ned",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 1753,
    name: "Ned Woods",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: ["Noseless Ned"],
    
    

    childrenIds: [],
    allegiances: [432],
    bookIds: [8]
  },
  {
    id: 1754,
    name: "Nella",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    spouseId: 1293,
    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5]
  },
  {
    id: 1755,
    name: "Nestor Royce",
    isFemale: false,
    
    titles: ["Keeper of the Gates of the Moon", "High Steward of the Vale"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [329],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1756,
    name: "Nettles",
    isFemale: true,
    
    titles: [],
    aliases: ["Netty"],
    born: "In 113 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 9]
  },
  {
    id: 1757,
    name: "Nissa Nissa",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 1179,
    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1758,
    name: "Noho Dimittis",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1759,
    name: "Nolla",
    isFemale: true,
    
    titles: ["Goodwife"],
    aliases: [],
    
    died: "At Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1760,
    name: "Norjen",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1761,
    name: "Normund Tyrell",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1762,
    name: "Norne Goodbrother",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Shatterstone"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [157],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1763,
    name: "Norren",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1764,
    name: "Notch",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1765,
    name: "Nute",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Oakenshield"],
    aliases: ["Nute the Barber"],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [5, 8]
  },
  {
    id: 1766,
    name: "Nymeria Sand",
    isFemale: true,
    culture: "Dornish",
    titles: [],
    aliases: ["Lady Nym"],
    born: "In 274 AC or 275 AC",
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [3, 5, 8],

    playedBy: ["Jessica Henwick"],
    tvSeries: ["Season 5", "Season 6"]
  },
  {
    id: 1767,
    name: "Nymos",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1768,
    name: "Obara Sand",
    isFemale: true,
    culture: "Dornish",
    titles: [],
    aliases: [],
    born: "In 271 AC or 272 AC, at Oldtown",
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [3, 5, 8],

    playedBy: ["Keisha Castle-Hughes"],
    tvSeries: ["Season 5", "Season 6"]
  },
  {
    id: 1769,
    name: "Obella Sand",
    isFemale: true,
    culture: "Dornish",
    titles: [],
    aliases: [],
    born: "In 287 AC or 288 AC",
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [3, 5, 8]
  },
  {
    id: 1770,
    name: "Oberyn Nymeros Martell",
    isFemale: false,
    culture: "Dornish",
    titles: ["Prince"],
    aliases: ["The Red Viper"],
    born: "In 257 AC or 258 AC",
    died: "In 300 AC, at King's Landing",

    childrenIds: [],
    allegiances: [285],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Pedro Pascal"],
    tvSeries: ["Season 4"]
  },
  {
    id: 1771,
    name: "Ocley",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1772,
    name: "Ogo",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Khal"],
    aliases: [],
    
    died: "In 298 AC, at Dothraki sea",

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1773,
    name: "Old Grey Gull",
    isFemale: true,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1774,
    name: "Old Henly",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In or between 220 AC and 280 AC",
    died: "In 299 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1775,
    name: "Old Tattersalt",
    isFemale: true,
    
    titles: [],
    aliases: ["Old Tattersalt"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1776,
    name: "Ollo",
    isFemale: false,
    culture: "Tyroshi",
    titles: [],
    aliases: ["Ollo Lophand"],
    
    died: "In 300 AC, at the haunted forest",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1777,
    name: "Omer Blackberry",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [15],
    bookIds: [3, 5, 8]
  },
  {
    id: 1778,
    name: "Omer Florent",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5]
  },
  {
    id: 1779,
    name: "Orbelo",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1780,
    name: "Ordello",
    isFemale: false,
    culture: "Pentoshi",
    titles: ["Magister of Pentos"],
    aliases: [],
    
    died: "In 299 AC, at Pentos",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1781,
    name: "Orell",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Skirling Pass",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Mackenzie Crook"],
    tvSeries: ["Season 3"]
  },
  {
    id: 1782,
    name: "Orland of Oldtown",
    isFemale: false,
    
    titles: [],
    aliases: ["Ormond of Oldtown"],
    
    

    childrenIds: [],
    allegiances: [16],
    bookIds: [3, 5, 8]
  },
  {
    id: 1783,
    name: "Ormond",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at Pennytree",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 8]
  },
  {
    id: 1784,
    name: "Oro Tendyris",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5]
  },
  {
    id: 1785,
    name: "Orphan Oss",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at the haunted forest",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1786,
    name: "Orwyle",
    isFemale: false,
    
    titles: ["Grand Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 9]
  },
  {
    id: 1787,
    name: "Osha",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Natalia Tena"],
    tvSeries: ["Season 1", "Season 2", "Season 3", "Season 6"]
  },
  {
    id: 1788,
    name: "Ossy",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [329],
    bookIds: [5]
  },
  {
    id: 1789,
    name: "Oswyn",
    isFemale: false,
    
    titles: [],
    aliases: ["Oswyn Longneck the Thrice-Hanged"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1790,
    name: "Othor",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at the haunted forest",

    childrenIds: [],
    allegiances: [],
    bookIds: [1],

    tvSeries: ["Season 1"]
  },
  {
    id: 1791,
    name: "Otter Gimpknee",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3]
  },
  {
    id: 1792,
    name: "Ottomore",
    isFemale: false,
    
    titles: [],
    aliases: ["Maester"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1793,
    name: "Owen",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At Stepstones",

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1794,
    name: "Owen",
    isFemale: false,
    
    titles: [],
    aliases: ["Owen the Oaf"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1795,
    name: "Oznak zo Pahl",
    isFemale: false,
    culture: "Meereenese",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Meereen",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 8]
  },
  {
    id: 1796,
    name: "Palla",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2, 5]
  },
  {
    id: 1797,
    name: "Patchface",
    isFemale: false,
    
    titles: [],
    aliases: ["Patches"],
    
    

    childrenIds: [],
    allegiances: [15],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1798,
    name: "Pate",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 291 AC or 292 AC",
    

    childrenIds: [],
    allegiances: [16],
    bookIds: [5, 8]
  },
  {
    id: 1799,
    name: "Pate",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Pate of the Blue Fork Pate of Sevenstreams"],
    
    died: "In 299 AC, at the riverlands",

    spouseId: 114,
    childrenIds: [],
    allegiances: [143],
    bookIds: [2, 3, 5]
  },
  {
    id: 1800,
    name: "Pate",
    isFemale: false,
    
    titles: [],
    aliases: ["Old Pate"],
    
    died: "At Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1801,
    name: "Pate",
    isFemale: false,
    
    titles: [],
    aliases: ["Pinchbottom Pate"],
    
    died: "In 209 AC, at Little Dosk",

    childrenIds: [],
    allegiances: [],
    bookIds: [6]
  },
  {
    id: 1802,
    name: "Pate",
    isFemale: false,
    
    titles: [],
    aliases: ["Spotted Pate"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1803,
    name: "Pate",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 161 AC and 181 AC",
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 1804,
    name: "Pate of Lancewood",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At the Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1805,
    name: "Pate of Mory",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At the Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1806,
    name: "Pate of Shermer's Grove",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At the Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1807,
    name: "Patrek Vance",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 264 AC and 294 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5]
  },
  {
    id: 1808,
    name: "Pello of Tyrosh",
    isFemale: false,
    culture: "Tyroshi",
    titles: [],
    aliases: ["Greenbeard"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1809,
    name: "Penny",
    isFemale: true,
    
    titles: [],
    aliases: ["Lady Imp"],
    born: "In 281 AC, 282 AC or 283 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 8]
  },
  {
    id: 1810,
    name: "Perros Blackmont",
    isFemale: false,
    culture: "Dornish",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [24],
    bookIds: [3, 5]
  },
  {
    id: 1811,
    name: "Pia",
    isFemale: true,
    
    titles: [],
    aliases: ["Pretty Pia"],
    born: "At Harrenhal",
    

    childrenIds: [],
    allegiances: [427],
    bookIds: [2, 3, 5]
  },
  {
    id: 1812,
    name: "Plummer",
    isFemale: false,
    
    titles: ["Steward of Ashford"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [8],
    bookIds: [4]
  },
  {
    id: 1813,
    name: "Pollitor",
    isFemale: false,
    
    titles: ["Wisdom"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1814,
    name: "Polliver",
    isFemale: false,
    
    titles: ["Castellan of Harrenhal"],
    aliases: ["Polly"],
    
    died: "In 300 AC, at Inn at the Crossroads",

    childrenIds: [],
    allegiances: [72],
    bookIds: [2, 3, 5],

    playedBy: ["Andy Kellegher"],
    tvSeries: ["Season 2", "Season 4"]
  },
  {
    id: 1815,
    name: "Pono",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Khal", "Ko (formerly)"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1816,
    name: "Porther",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2]
  },
  {
    id: 1817,
    name: "Portifer Woodwright",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1818,
    name: "Poul Pemford",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Riverrun",

    childrenIds: [],
    allegiances: [395],
    bookIds: [2]
  },
  {
    id: 1819,
    name: "Poxy Tym",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 1820,
    name: "Praed",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at the Crownlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1821,
    name: "Prendahl na Ghezn",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Yunkai",

    childrenIds: [],
    allegiances: [],
    bookIds: [3],

    playedBy: ["Ramon Tikaram"],
    tvSeries: ["Season 3"]
  },
  {
    id: 1822,
    name: "Puckens",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [5]
  },
  {
    id: 1823,
    name: "Pudding",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 1824,
    name: "Puddingfoot",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1825,
    name: "Pyat Pree",
    isFemale: false,
    
    titles: ["Warlock"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Ian Hanmore"],
    tvSeries: ["Season 2"]
  },
  {
    id: 1826,
    name: "Pycelle",
    isFemale: false,
    
    titles: ["Grand Maester"],
    aliases: [],
    born: "In 216 AC",
    died: "In 300 AC, at the Red Keep, King's Landing",

    childrenIds: [],
    allegiances: [378, 16, 229],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Julian Glover"],
    tvSeries: [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ]
  },
  {
    id: 1827,
    name: "Pyg",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Whispers",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1828,
    name: "Pylos",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    born: "In 273 AC or 274 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1829,
    name: "Qalen",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    died: "In before 299",

    childrenIds: [],
    allegiances: [169],
    bookIds: [2, 5]
  },
  {
    id: 1830,
    name: "Qarl",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Qarl the Maid"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1831,
    name: "Qarl",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Qarl the Thrall"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1832,
    name: "Qarl",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Qarl Quickaxe"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1833,
    name: "Qarl Correy",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [407],
    bookIds: [10]
  },
  {
    id: 1834,
    name: "Qarl Shepherd",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [348],
    bookIds: [8]
  },
  {
    id: 1835,
    name: "Qarro Volentin",
    isFemale: false,
    culture: "Braavosi",
    titles: ["First Sword of Braavos"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1836,
    name: "Qezza",
    isFemale: true,
    culture: "Ghiscari",
    titles: ["Cupbearer"],
    aliases: [],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1837,
    name: "Qos",
    isFemale: false,
    
    titles: ["Captain of the Wind Witch"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1838,
    name: "Qotho",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Bloodrider of Khal Drogo"],
    aliases: [],
    
    died: "In 298 AC, at Dothraki sea",

    childrenIds: [],
    allegiances: [],
    bookIds: [1],

    playedBy: ["Dar Salim"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1839,
    name: "Quaithe",
    isFemale: true,
    culture: "Asshai",
    titles: [],
    aliases: ["Quaithe of the Shadow"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Laura Pradelska"],
    tvSeries: ["Season 2"]
  },
  {
    id: 1840,
    name: "Quaro",
    isFemale: false,
    culture: "Dothraki",
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at Dothraki sea",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 8]
  },
  {
    id: 1841,
    name: "Quellon Humble",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [205],
    bookIds: [5, 8]
  },
  {
    id: 1842,
    name: "Quence",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1843,
    name: "Quent",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 1844,
    name: "Quhuru Mo",
    isFemale: false,
    culture: "Summer Isles",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 5]
  },
  {
    id: 1845,
    name: "Quill",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1846,
    name: "Quincy Cox",
    isFemale: false,
    
    titles: ["Serthe Knight of Saltpans"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [84],
    bookIds: [5]
  },
  {
    id: 1847,
    name: "Quort",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 285 AC and 287 AC",
    died: "In +/-299 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1848,
    name: "Qyburn",
    isFemale: false,
    
    titles: ["Master of whisperers"],
    aliases: ["The Bloody Maester"],
    born: "In 217AC or after",
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Anton Lesser"],
    tvSeries: ["Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 1849,
    name: "Qyle",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Gods Eye",

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1850,
    name: "Racallio Ryndoon",
    isFemale: false,
    culture: "Tyroshi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [10]
  },
  {
    id: 1851,
    name: "Rafe",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 1852,
    name: "Rafford",
    isFemale: false,
    
    titles: [],
    aliases: ["Raff the Sweetling"],
    
    died: "In 300 AC, at Braavos",

    childrenIds: [],
    allegiances: [72],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1853,
    name: "Ragnor Pyke",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [5]
  },
  {
    id: 1854,
    name: "Ragwyle",
    isFemale: false,
    culture: "Free folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1855,
    name: "Rainbow Knight",
    isFemale: false,
    
    titles: [],
    aliases: ["Rainbow Knight"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1856,
    name: "Rakharo",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Ko", "Bloodrider of Daenerys Targaryen"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Elyes Gabel"],
    tvSeries: ["Season 1", "Season 2"]
  },
  {
    id: 1857,
    name: "Ralf",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Ralf of Lordsport"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1858,
    name: "Ralf",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Ralf the Shepherd"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1859,
    name: "Ralf the Limper",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Captain of the Lord Quellon"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1860,
    name: "Randa",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    died: "At the Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1861,
    name: "Rast",
    isFemale: false,
    
    titles: [],
    aliases: ["Rat"],
    
    died: "In +/- 299 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3],

    playedBy: ["Luke McEwan"],
    tvSeries: ["Season 1", "Season 3", "Season 4"]
  },
  {
    id: 1862,
    name: "Rat Cook",
    isFemale: false,
    
    titles: [],
    aliases: ["Rat Cook"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 3, 8]
  },
  {
    id: 1863,
    name: "Rawney",
    isFemale: false,
    
    titles: ["Brother"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1864,
    name: "Raymar Royce",
    isFemale: false,
    
    titles: ["Lord"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [329],
    bookIds: [3]
  },
  {
    id: 1865,
    name: "Raymond Nayland",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [279],
    bookIds: [5]
  },
  {
    id: 1866,
    name: "Raymun Redbeard",
    isFemale: false,
    culture: "Free Folk",
    titles: ["King-Beyond-the-Wall"],
    aliases: [],
    
    died: "In 226 AC, at Long Lake",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 8, 11]
  },
  {
    id: 1867,
    name: "Red Lamb",
    isFemale: false,
    culture: "Lhazareen",
    titles: ["Ser"],
    aliases: ["Red Lamb"],
    
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [8]
  },
  {
    id: 1868,
    name: "Red Oarsman",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1869,
    name: "Redtusk",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [6]
  },
  {
    id: 1870,
    name: "Rennifer Longwaters",
    isFemale: false,
    
    titles: ["Chief Undergaoler"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [243],
    bookIds: [5, 8]
  },
  {
    id: 1871,
    name: "Reysen",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1872,
    name: "Reznak mo Reznak",
    isFemale: false,
    culture: "Ghiscari",
    titles: ["Seneschal"],
    aliases: [],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [8]
  },
  {
    id: 1873,
    name: "Rhaego",
    isFemale: false,
    
    titles: [],
    aliases: ["The stallion who mounts the world"],
    born: "In 298 AC, at Dothraki Sea",
    died: "In 298 AC or 299 AC, at Lhazar",

    childrenIds: [],
    allegiances: [378],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 1874,
    name: "Rhaenys Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Queen"],
    aliases: [],
    born: "In 25 BC or 26 BC, at Dragonstone",
    died: "In 10 AC, at Hellholt",

    spouseId: 38,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 1]
  },
  {
    id: 1875,
    name: "Rhogoro",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Khalakka"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 5]
  },
  {
    id: 1876,
    name: "Ricasso",
    isFemale: false,
    
    titles: ["Seneschal of Sunspear"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [5, 8]
  },
  {
    id: 1877,
    name: "Richard Farrow",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 299 AC, at the Battle of the Blackwater",

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1878,
    name: "Rigney",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1879,
    name: "Rob",
    isFemale: false,
    
    titles: [],
    aliases: ["Big Rob"],
    
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 1880,
    name: "Robb Stark",
    isFemale: false,
    
    titles: ["King in the North", "King of the Trident\nLord of Winterfell"],
    aliases: [
      "The Young Wolf",
      "The King Who Lost the North",
      "Robb the Lord",
      "The Boy Wolf"
    ],
    born: "283 AC, at Riverrun",
    died: "299 AC, at the Twins",
    fatherId: 339,
    motherId: 232,
    spouseId: 561,
    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Richard Madden"],
    tvSeries: ["Season 1", "Season 2", "Season 3"]
  },
  {
    id: 1881,
    name: "Robin",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At Stepstones",

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1882,
    name: "Robin Flint",
    isFemale: false,
    
    titles: ["Lord of Flint's Finger"],
    aliases: [],
    
    died: "In 299 AC, at the Twins",

    childrenIds: [],
    allegiances: [132, 131],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 1883,
    name: "Robin Potter",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1884,
    name: "Rodrik Arryn",
    isFemale: false,
    
    titles: ["Lord of the Eyrie"],
    aliases: [],
    
    

    spouseId: 265,
    childrenIds: [],
    allegiances: [7],
    bookIds: [11, 10, 9]
  },
  {
    id: 1885,
    name: "Rodrik Flint",
    isFemale: false,
    
    titles: ["Lord Commander of the Night's Watch"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1886,
    name: "Rodrik Freeborn",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1887,
    name: "Roger Hogg",
    isFemale: false,
    
    titles: ["Ser", "Knight of Sow's Horn"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [197],
    bookIds: [5]
  },
  {
    id: 1888,
    name: "Roger Ryswell",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [335],
    bookIds: [5, 8]
  },
  {
    id: 1889,
    name: "Roger of Pennytree",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "At Pennytree",
    died: "In 194 AC, at the Redgrass Field",

    childrenIds: [],
    allegiances: [],
    bookIds: [6, 7]
  },
  {
    id: 1890,
    name: "Roggo",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: ["Red Roggo"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1891,
    name: "Rohanne Webber",
    isFemale: true,
    
    titles: ["Lady of Coldmoat", "Lady of Standfast", "Lady of Casterly Rock"],
    aliases: ["The Red Widow"],
    born: "In 185 AC or 186 AC",
    

    spouseId: 982,
    childrenIds: [],
    allegiances: [419, 291, 229],
    bookIds: [11, 6]
  },
  {
    id: 1892,
    name: "Rolder",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [5]
  },
  {
    id: 1893,
    name: "Rolfe",
    isFemale: false,
    
    titles: [],
    aliases: ["Red Rolfe"],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [169],
    bookIds: [2]
  },
  {
    id: 1894,
    name: "Rolfe",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1895,
    name: "Rolland Longthorpe",
    isFemale: false,
    
    titles: ["Lord of Longsister"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [242],
    bookIds: [5, 8]
  },
  {
    id: 1896,
    name: "Rolley of Sisterton",
    isFemale: false,
    culture: "Sistermen",
    titles: [],
    aliases: [],
    born: "At Sisterton",
    died: "In 299 AC, at Craster's Keep",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1897,
    name: "Rolly Duckfield",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Duck", "Ser Duck"],
    born: "At Bitterbridge",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [8]
  },
  {
    id: 1898,
    name: "Romny Weaver",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [418],
    bookIds: [5]
  },
  {
    id: 1899,
    name: "Ronald Storm",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [80],
    bookIds: [8]
  },
  {
    id: 1900,
    name: "Ronel Rivers",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 1901,
    name: "Roone",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 286 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1902,
    name: "Roone",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1903,
    name: "Rorge",
    isFemale: false,
    
    titles: [],
    aliases: ["Broken Nose", "The Mad Dog of Saltpans", "The Hound (II)"],
    
    died: "In 300 AC, at the inn at the crossroads",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5],

    playedBy: ["Unknown extra Season 1Andy Beckwith Season 2 | Season 4"],
    tvSeries: ["Season 1", "Season 2", "Season 4"]
  },
  {
    id: 1904,
    name: "Roro Uhoris",
    isFemale: false,
    culture: "Tyroshi",
    titles: ["Captain of Cobblecat"],
    aliases: ["The Blind Bastard"],
    
    died: "At Eastwatch-by-the-sea",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 8]
  },
  {
    id: 1905,
    name: "Rose of Red Lake",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 1906,
    name: "Rosey",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 284 AC or 285 AC, at Oldtown",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1907,
    name: "Rowan",
    isFemale: false,
    culture: "Free folk",
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Winterfell",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1908,
    name: "Rowan Gold-Tree",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11]
  },
  {
    id: 1909,
    name: "Rudge",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1910,
    name: "Rufus Leek",
    isFemale: false,
    
    titles: ["Ser", "Castellan of the Dun Fort"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [334],
    bookIds: [5, 8]
  },
  {
    id: 1911,
    name: "Rugen",
    isFemale: false,
    
    titles: ["Undergaoler"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 3, 5]
  },
  {
    id: 1912,
    name: "Runciter",
    isFemale: false,
    
    titles: ["Grand Maester"],
    aliases: [],
    
    died: "In 112 AC",

    childrenIds: [],
    allegiances: [],
    bookIds: [10]
  },
  {
    id: 1913,
    name: "Rus",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1914,
    name: "Rusty Flowers",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1915,
    name: "Ryam",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1916,
    name: "Ryger Rivers",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Bryan McCaugherty"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1917,
    name: "Ryk",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Longspear Ryk"],
    
    

    spouseId: 1735,
    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1918,
    name: "Ryles",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In +/- 299 AC, at Beyond the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1919,
    name: "Rymolf",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Rymolf Stormdrunk"],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [2]
  },
  {
    id: 1920,
    name: "Rymund",
    isFemale: false,
    
    titles: [],
    aliases: ["Rymund the Rhymer"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3]
  },
  {
    id: 1921,
    name: "Ryn",
    isFemale: false,
    
    titles: [],
    aliases: ["Anvyl Ryn"],
    
    died: "At the Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1922,
    name: "Ryon Allyrion",
    isFemale: false,
    culture: "Dornish",
    titles: ["Ser"],
    aliases: [],
    
    

    spouseId: 1129,
    childrenIds: [],
    allegiances: [2],
    bookIds: [3, 5, 8]
  },
  {
    id: 1923,
    name: "S'vrone",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1924,
    name: "Saathos",
    isFemale: false,
    
    titles: [],
    aliases: ["Saathos the Wise"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1925,
    name: "Salladhor Saan",
    isFemale: false,
    culture: "Lysene",
    titles: ["Prince of the Narrow Sea Lord of Blackwater Bay"],
    aliases: ["Salla"],
    
    

    childrenIds: [],
    allegiances: [15],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Lucian Msamati"],
    tvSeries: ["Season 2", "Season 3", "Season 4"]
  },
  {
    id: 1926,
    name: "Sallor",
    isFemale: false,
    culture: "Qartheen",
    titles: [],
    aliases: ["Sallor the Bald"],
    
    died: "In +/- 299 AC, at Yunkai",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1927,
    name: "Salloreon",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1928,
    name: "Sam Stoops",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 1929,
    name: "Samwell Stone",
    isFemale: false,
    
    titles: ["Ser Master-at-arms of Runestone"],
    aliases: ["Strong Sam Stone"],
    
    

    childrenIds: [],
    allegiances: [328],
    bookIds: [5]
  },
  {
    id: 1930,
    name: "Sarella Sand",
    isFemale: true,
    culture: "Dornish",
    titles: [],
    aliases: [],
    born: "In 280 AC or 281 AC",
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [3, 5, 8]
  },
  {
    id: 1931,
    name: "Satin",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 280 AC or 281 AC, at Oldtown",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1932,
    name: "Sawwood",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1933,
    name: "Scarb",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At Meereen",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1934,
    name: "Sedgekins",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1935,
    name: "Selyse Florent",
    isFemale: true,
    
    titles: ["Lady", "Queen"],
    aliases: ["Light of the North"],
    
    

    spouseId: 1963,
    childrenIds: [],
    allegiances: [133, 15],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Sarah MacKeever", "Tara Fitzgerald"],
    tvSeries: ["Season 2", "Season 3", "Season 4"]
  },
  {
    id: 1936,
    name: "Senelle",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC",

    childrenIds: [],
    allegiances: [229],
    bookIds: [5]
  },
  {
    id: 1937,
    name: "Serra",
    isFemale: true,
    culture: "Lysene",
    titles: [],
    aliases: [],
    
    died: "At Pentos",

    spouseId: 1520,
    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1938,
    name: "Shae",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 280 AC or 281 AC",
    died: "In 300 AC, at King's Landing",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Sibel Kekilli"],
    tvSeries: ["Season 1", "Season 2", "Season 3", "Season 4"]
  },
  {
    id: 1939,
    name: "Shagga, son of Dolf",
    isFemale: false,
    culture: "Mountain clans",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Mark Lewis Jones"]
  },
  {
    id: 1940,
    name: "Shagwell",
    isFemale: false,
    
    titles: [],
    aliases: ["Shagwell the Fool"],
    
    died: "In 300 AC, at near the Whispers",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5]
  },
  {
    id: 1941,
    name: "Sharna",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 1518,
    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1942,
    name: "Shella",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 1943,
    name: "Sherrit",
    isFemale: false,
    
    titles: ["King"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1944,
    name: "Shiera Seastar",
    isFemale: true,
    culture: "Westeros",
    titles: [],
    aliases: [],
    born: "In or between 178 AC and 184 AC",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 6, 8]
  },
  {
    id: 1945,
    name: "Shortear",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [5]
  },
  {
    id: 1946,
    name: "Shyra",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2, 5]
  },
  {
    id: 1947,
    name: "Sigrin",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Sigrin the Shipwright"],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [2, 3]
  },
  {
    id: 1948,
    name: "Skahaz mo Kandaq",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: ["The Shavepate", "Skahaz Shavepate"],
    born: "At Meereen",
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [8]
  },
  {
    id: 1949,
    name: "Skinner",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [34],
    bookIds: [8]
  },
  {
    id: 1950,
    name: "Skittrick",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 1951,
    name: "Sky Blue Su",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1952,
    name: "Skyte",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5]
  },
  {
    id: 1953,
    name: "Sloey",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1954,
    name: "Small Paul",
    isFemale: false,
    
    titles: [],
    aliases: ["Cheese-for-wits"],
    
    died: "In 299 AC, at Beyond the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1955,
    name: "Softfoot",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Beyond the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1956,
    name: "Soren",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1957,
    name: "Spare Boot",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 1958,
    name: "Spotted Cat",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1959,
    name: "Spotted Pate",
    isFemale: false,
    
    titles: [],
    aliases: ["Spotted Pate of Maidenpool"],
    
    died: "In 299 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1960,
    name: "Squint",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [169],
    bookIds: [2]
  },
  {
    id: 1961,
    name: "Squirrel",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    born: "At Beyond the Wall",
    died: "In 300 AC, at Winterfell",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1962,
    name: "Stalwart Shield",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Meereen",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1963,
    name: "Stannis Baratheon",
    isFemale: false,
    
    titles: [
      "Master of ships (formerly)",
      "Lord of Dragonstone",
      "Lord of Storm's End",
      "Lord Paramount of the Stormlands",
      "King of Westeros"
    ],
    aliases: [
      "The King in the Narrow Sea",
      "The King of the Painted Table",
      "The King of Dragonstone",
      "The King at the Wall",
      "Azor Ahai reborncome again"
    ],
    born: "264 AC",
    
    fatherId: 986,
    motherId: 230,
    spouseId: 1935,
    childrenIds: [975],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Stephen Dillane"],
    tvSeries: ["Season 2", "Season 3", "Season 4", "Season 5"]
  },
  {
    id: 1964,
    name: "Stannis Seaworth",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 289 AC or 290 AC",
    
    fatherId: 1319,
    motherId: 1676,

    childrenIds: [],
    allegiances: [340],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1965,
    name: "Steeelskin",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 1966,
    name: "Steely Pate",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [4, 7]
  },
  {
    id: 1967,
    name: "Steffon Seaworth",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 293 AC",
    

    childrenIds: [],
    allegiances: [340],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1968,
    name: "Stiv",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at the Wolfswood",

    childrenIds: [],
    allegiances: [],
    bookIds: [1],

    playedBy: ["Stephen Don"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1969,
    name: "Stone Thumbs",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1970,
    name: "Stonehand",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 1971,
    name: "Stygg",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [2, 3]
  },
  {
    id: 1972,
    name: "Styr",
    isFemale: false,
    culture: "Free Folk",
    titles: ["Magnar of Thenn"],
    aliases: [],
    
    died: "In 300 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8],

    playedBy: ["Yuri Kolokolnikov"],
    tvSeries: ["Season 4"]
  },
  {
    id: 1973,
    name: "Sybassion",
    isFemale: false,
    culture: "Qartheen",
    titles: [],
    aliases: ["Blind Sybassion, the Eater of Eyes"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1974,
    name: "Sylas",
    isFemale: false,
    
    titles: [],
    aliases: ["Sylas Sourmouth"],
    
    died: "In 294 AC",

    childrenIds: [],
    allegiances: [169],
    bookIds: [2]
  },
  {
    id: 1975,
    name: "Sylas Flatnose",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Iron King", "King of the Iron Islands"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1976,
    name: "Symeon Star-Eyes",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [4, 1, 2, 3, 5, 8, 11]
  },
  {
    id: 1977,
    name: "Symon",
    isFemale: false,
    
    titles: [],
    aliases: ["Symon Silver Tongue"],
    
    died: "In 299 AC, at King's Landing",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 8]
  },
  {
    id: 1978,
    name: "Symon Stripeback",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [8]
  },
  {
    id: 1979,
    name: "Syrio Forel",
    isFemale: false,
    culture: "Braavosi",
    titles: ["First Sword to the Sealord of Braavos\nWater Dancer"],
    aliases: [],
    born: "At Braavos",
    died: "In 298 AC, at King's Landing",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Miltos Yeromelou"],
    tvSeries: ["Season 1"]
  },
  {
    id: 1980,
    name: "Tagganaro",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1981,
    name: "Tal Toraq",
    isFemale: false,
    culture: "Summer Isles",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [8]
  },
  {
    id: 1982,
    name: "Talea",
    isFemale: true,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1983,
    name: "Tanselle",
    isFemale: true,
    culture: "Dornish",
    titles: [],
    aliases: ["Tanselle Too-Tall"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [4, 6, 7]
  },
  {
    id: 1984,
    name: "Tansy",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1985,
    name: "Tansy",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1986,
    name: "Tarber",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 1987,
    name: "Tarle",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Tarle the Thrice-Drowned"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1988,
    name: "Temmo",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Khal"],
    aliases: [],
    born: "In Century of Blood",
    died: "In Century of Blood, at the gates of Qohor",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 1989,
    name: "Teora Kyndall",
    isFemale: true,
    
    titles: ["Lady of Casterly Rock"],
    aliases: [],
    
    died: "In 212 AC",

    spouseId: 1048,
    childrenIds: [],
    allegiances: [223, 229],
    bookIds: [11]
  },
  {
    id: 1990,
    name: "Ternesio Terys",
    isFemale: false,
    culture: "Braavosi",
    titles: ["Captain"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5],

    playedBy: ["Gary Oliver"],
    tvSeries: ["Season 4"]
  },
  {
    id: 1991,
    name: "Terro",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1992,
    name: "The Nightingale",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1993,
    name: "The Smiling Knight",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 1994,
    name: "The Tickler",
    isFemale: true,
    
    titles: [],
    aliases: ["the Tickler"],
    
    died: "In 300 AC, at Inn at the Crossroads",

    childrenIds: [],
    allegiances: [72],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Anthony Morris"],
    tvSeries: ["Season 2"]
  },
  {
    id: 1996,
    name: "The Weeper",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: ["The Weeping Man"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 1997,
    name: "Theo Frey",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [143],
    bookIds: [1]
  },
  {
    id: 1998,
    name: "Theobald",
    isFemale: false,
    
    titles: ["Archmaester", "Seneschal"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 1999,
    name: "Theomore Lannister",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    born: "At Lannisport",
    

    childrenIds: [],
    allegiances: [255],
    bookIds: [5, 8]
  },
  {
    id: 2000,
    name: "Thistle",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    died: "In 300 AC, at Beyond the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 2001,
    name: "Thormor Ironmaker",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [210],
    bookIds: [5]
  },
  {
    id: 2002,
    name: "Thoros of Myr",
    isFemale: false,
    culture: "Myrish",
    titles: [],
    aliases: ["The red wizard", "The Ember"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Paul Kaye"],
    tvSeries: ["Season 3", "Season 6"]
  },
  {
    id: 2003,
    name: "Three Toes",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 2004,
    name: "Three-Tooth",
    isFemale: true,
    culture: "Ironborn",
    titles: ["Steward of Ten Towers"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [178],
    bookIds: [5]
  },
  {
    id: 2005,
    name: "Tim Stone",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 2006,
    name: "Tim Tangletongue",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 2007,
    name: "Timeon",
    isFemale: false,
    culture: "Dornish",
    titles: [],
    aliases: ["Timeon of Dorne"],
    born: "At Dorne",
    died: "In 300 AC, at Whispers",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 2008,
    name: "Timett",
    isFemale: false,
    culture: "Mountain clans",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 8]
  },
  {
    id: 2009,
    name: "Timett, son of Timett",
    isFemale: false,
    culture: "Mountain clans",
    titles: ["Red Hand"],
    aliases: ["Timett One-Eye"],
    born: "In or between 278 AC and 282 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 8],

    playedBy: ["Tobias Winter"],
    tvSeries: ["Season 1", "Season 2"]
  },
  {
    id: 2010,
    name: "Timon",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Timon the Scrapesword"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3]
  },
  {
    id: 2011,
    name: "Timoth",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [5]
  },
  {
    id: 2012,
    name: "Tobbot",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [72],
    bookIds: [2]
  },
  {
    id: 2013,
    name: "Tobho Mott",
    isFemale: false,
    culture: "Qohor",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Andrew Wilde"],
    tvSeries: ["Season 1"]
  },
  {
    id: 2014,
    name: "Todder",
    isFemale: false,
    
    titles: [],
    aliases: ["Toad"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 8]
  },
  {
    id: 2015,
    name: "Todric",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at the Stony Shore",

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 2016,
    name: "Toefinger",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 2017,
    name: "Togg Joth",
    isFemale: false,
    culture: "Ibbenese",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 2018,
    name: "Tom of Sevenstreams",
    isFemale: false,
    
    titles: [],
    aliases: ["Tom O'Sevens", "Tom Sevenstrings"],
    born: "In or between 240 AC and 249 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 2019,
    name: "TomToo",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2]
  },
  {
    id: 2020,
    name: "Tomard",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: ["Fat Tom"],
    born: "In or between 249 AC and 253 AC",
    died: "In 298 AC, at King's Landing",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1, 2, 3, 8]
  },
  {
    id: 2021,
    name: "Tommard Heddle",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Black Tom Heddle"],
    
    died: "In 211 AC, at Whitewalls",

    childrenIds: [],
    allegiances: [190, 55, 23],
    bookIds: [7]
  },
  {
    id: 2022,
    name: "Toregg",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Toregg the Tall"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 2023,
    name: "Torghen Flint",
    isFemale: false,
    culture: "Northern mountain clans",
    titles: ["The Flint", "Old Flint Lord Flint"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [129],
    bookIds: [8]
  },
  {
    id: 2024,
    name: "Tormund",
    isFemale: false,
    culture: "Free Folk",
    titles: [
      "Tall-talker",
      "Horn-blower and Breaker of Ice",
      "Husband to Bears",
      "the Mead-king of Ruddy Hall",
      "Speaker to Gods and Father of Hosts"
    ],
    aliases: [
      "Tormund Giantsbane",
      "Mead-King of Ruddy Hall",
      "Tormund Thunderfist",
      "Tormund Horn-Blower",
      "Tormund Tall-Talker",
      "Breaker of Ice",
      "Husband to Bears",
      "Speaker to Gods",
      "Father of Hosts"
    ],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8],

    playedBy: ["Kristofer Hivju"],
    tvSeries: ["Season 3", "Season 4", "Season 5", "Season 6"]
  },
  {
    id: 2025,
    name: "Torrek",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 2026,
    name: "Torwold",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Torwold Browntooth"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 8]
  },
  {
    id: 2027,
    name: "Torwynd",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Torwynd the Tame"],
    
    died: "In 300 AC",

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 2028,
    name: "Tothmure",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    died: "In 299 AC, at Harrenhal",

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 2029,
    name: "Tregar",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at King's Landing",

    childrenIds: [],
    allegiances: [229],
    bookIds: [1]
  },
  {
    id: 2030,
    name: "Tregar Ormollen",
    isFemale: false,
    culture: "Lysene",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 5]
  },
  {
    id: 2031,
    name: "Tristimun",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 2032,
    name: "Triston",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Triston of Tally Hill"],
    
    

    childrenIds: [],
    allegiances: [372],
    bookIds: [3, 5, 8]
  },
  {
    id: 2033,
    name: "Triston Farwynd",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Lord of Sealskin Point"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [122],
    bookIds: [5, 8]
  },
  {
    id: 2034,
    name: "Tuffleberry",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 2035,
    name: "Tumberjon",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 2036,
    name: "Tumco Lho",
    isFemale: false,
    culture: "Ghiscari",
    titles: ["Ser"],
    aliases: ["Tum"],
    born: "At Basilisk Isles",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 2037,
    name: "Turnip",
    isFemale: true,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [2, 5]
  },
  {
    id: 2038,
    name: "Turquin",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 2039,
    name: "Tybero Istarion",
    isFemale: false,
    
    titles: [],
    aliases: ["Inkpots"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 2040,
    name: "Tycho Nestoris",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: ["The Braavosi"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8],

    playedBy: ["Mark Gatiss"],
    tvSeries: ["Season 4", "Season 5"]
  },
  {
    id: 2041,
    name: "Tyene Sand",
    isFemale: true,
    culture: "Dornish",
    titles: [],
    aliases: [],
    born: "In 276 AC or 277 AC",
    

    childrenIds: [],
    allegiances: [285],
    bookIds: [3, 5, 8],

    playedBy: ["Rosabell Laurenti Sellers"],
    tvSeries: ["Season 5", "Season 6"]
  },
  {
    id: 2042,
    name: "Tymor",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [2]
  },
  {
    id: 2043,
    name: "Tyrion Tanner",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In 300 AC, at Stokeworth",
    

    childrenIds: [],
    allegiances: [364],
    bookIds: [5, 8]
  },
  {
    id: 2044,
    name: "Tysha",
    isFemale: true,
    
    titles: [],
    aliases: ["Lady Tysha of House Silverfist"],
    born: "In 271 AC or 272 AC",
    

    spouseId: 1052,
    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 8]
  },
  {
    id: 2045,
    name: "Tytos Blackwood",
    isFemale: false,
    
    titles: ["Lord of Raventree Hall"],
    aliases: [],
    born: "At Raventree Hall",
    

    childrenIds: [],
    allegiances: [27],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 2046,
    name: "Ulf",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Ulf the Ill"],
    
    died: "In 299 AC, at Winterfell",

    childrenIds: [],
    allegiances: [169],
    bookIds: [2]
  },
  {
    id: 2047,
    name: "Ulf son of Umar",
    isFemale: false,
    culture: "Mountain clans",
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at the Green Fork",

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 2048,
    name: "Ulf the White",
    isFemale: false,
    
    titles: ["Ser", "Lord of Bitterbridge"],
    aliases: ["Ulf White", "Ulf the Sot", "The Betrayer"],
    
    died: "In 130 AC, at Tumbleton",

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 9]
  },
  {
    id: 2049,
    name: "Uller",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [2, 3, 5]
  },
  {
    id: 2050,
    name: "Ulmer",
    isFemale: false,
    
    titles: [],
    aliases: ["Ulmer of the Kingswood"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 2051,
    name: "Umar",
    isFemale: false,
    culture: "Mountain clans",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 2052,
    name: "Umfred",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [11],
    bookIds: [3]
  },
  {
    id: 2053,
    name: "Umma",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2054,
    name: "Unknown",
    isFemale: false,
    culture: "Westeros",
    titles: ["Lady"],
    aliases: [],
    born: "In 195 AC or 196 AC",
    

    spouseId: 113,
    childrenIds: [],
    allegiances: [143, 55],
    bookIds: [7]
  },
  {
    id: 2055,
    name: "Urek Ironmaker",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [210],
    bookIds: [5]
  },
  {
    id: 2056,
    name: "Urras Greyiron",
    isFemale: false,
    
    titles: ["High King of the Iron Islands", "Salt King of Orkmont"],
    aliases: ["Urras Ironfoot"],
    born: ", at Orkmont",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5, 11]
  },
  {
    id: 2057,
    name: "Urrathon",
    isFemale: false,
    culture: "Qartheen",
    titles: [],
    aliases: ["Urrathon Night-Walker"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 2058,
    name: "Urreg",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 2059,
    name: "Urron Greyiron",
    isFemale: false,
    culture: "Ironborn",
    titles: ["Iron King", "King of the Iron Islands", "Salt king of Orkmont"],
    aliases: ["Urron Redhand"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 1]
  },
  {
    id: 2060,
    name: "Urswyck",
    isFemale: false,
    
    titles: [],
    aliases: ["Urswyck the Faithful", "Faithful Urswyck"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 2061,
    name: "Urzen",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [2]
  },
  {
    id: 2062,
    name: "Uthor of the High Tower",
    isFemale: false,
    
    titles: ["King of the High Tower"],
    aliases: [],
    
    

    spouseId: 1672,
    childrenIds: [],
    allegiances: [],
    bookIds: []
  },
  {
    id: 2063,
    name: "Utt",
    isFemale: false,
    
    titles: ["Septon"],
    aliases: [],
    
    died: "In 299 AC, at the burning septry",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3]
  },
  {
    id: 2064,
    name: "Vaellyn",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: ["'Vinegar' Vaellyn"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2065,
    name: "Val",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: ["The wildling princess", "Lady Val"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5, 8]
  },
  {
    id: 2066,
    name: "Varamyr",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Varamyr Sixskins", "Haggon", "Lump"],
    born: "At a village Beyond the Wall",
    died: "In 300 AC, at a village Beyond the Wall",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 2067,
    name: "Vargo Hoat",
    isFemale: false,
    culture: "Qohor",
    titles: ["Lord of Harrenhal"],
    aliases: ["The goat Goat of Harrenhal The Crippler The Qohorik"],
    
    died: "In 300 AC, at Harrenhal",

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5]
  },
  {
    id: 2068,
    name: "Varly",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at King's Landing",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1]
  },
  {
    id: 2069,
    name: "Varys",
    isFemale: false,
    
    titles: ["Master of Whisperers"],
    aliases: ["The Spider", "The Eunuch", "Rugen", "Varys of Lys"],
    born: "At Lys",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8],

    playedBy: ["Conleth Hill"],
    tvSeries: [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ]
  },
  {
    id: 2070,
    name: "Violet",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 2071,
    name: "Visenya Targaryen",
    isFemale: true,
    culture: "Valyrian",
    titles: ["Queen", "Dowager Queen"],
    aliases: [],
    born: "In 28 BC or 29 BC, at Dragonstone",
    died: "In 44 AC",

    spouseId: 38,
    childrenIds: [],
    allegiances: [378],
    bookIds: [11, 1, 2, 3, 5, 8]
  },
  {
    id: 2072,
    name: "Vylarr",
    isFemale: false,
    
    titles: ["Captain of Lannister household guard"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 2073,
    name: "Vyman",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1, 2, 3, 5, 8]
  },
  {
    id: 2074,
    name: "Walder Vance",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 263 AC and 291 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5]
  },
  {
    id: 2075,
    name: "Walgrave",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [11, 5]
  },
  {
    id: 2076,
    name: "Wallen",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at Wolfswood",

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 2077,
    name: "Walton",
    isFemale: false,
    
    titles: [],
    aliases: ["Steelshanks Walton"],
    
    

    childrenIds: [],
    allegiances: [34],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Jamie Michie"],
    tvSeries: ["Season 3"]
  },
  {
    id: 2078,
    name: "Walys Flowers",
    isFemale: false,
    culture: "Reach",
    titles: ["Maester"],
    aliases: [],
    
    died: "In before 283 AC",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 2079,
    name: "Wat",
    isFemale: false,
    
    titles: [],
    aliases: ["Wat Barleycorn"],
    
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 2080,
    name: "Wat",
    isFemale: false,
    
    titles: [],
    aliases: ["Blue Bard"],
    
    

    childrenIds: [],
    allegiances: [398],
    bookIds: [5, 8]
  },
  {
    id: 2081,
    name: "Wat",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2082,
    name: "Wat",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2083,
    name: "Wat",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 2084,
    name: "Wat",
    isFemale: false,
    
    titles: [],
    aliases: ["Wet Wat"],
    
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 2085,
    name: "Wat",
    isFemale: false,
    
    titles: [],
    aliases: ["Whitesmile Wat"],
    
    

    childrenIds: [],
    allegiances: [229],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 2086,
    name: "Wate",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [4]
  },
  {
    id: 2087,
    name: "Watt",
    isFemale: false,
    
    titles: [],
    aliases: ["Watt of Long Lake"],
    
    died: "In 299 AC, at Bridge of Skulls",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 2088,
    name: "Watty",
    isFemale: false,
    
    titles: [],
    aliases: ["Watty the Miller"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 2089,
    name: "Wayn",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [362],
    bookIds: [1]
  },
  {
    id: 2090,
    name: "Weasel",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 296 AC or 297 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 2091,
    name: "Weese",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Harrenhal",

    childrenIds: [],
    allegiances: [427, 229],
    bookIds: [2, 3, 5]
  },
  {
    id: 2092,
    name: "Wenda",
    isFemale: true,
    
    titles: [],
    aliases: ["Wenda the White Fawn"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 2093,
    name: "Wendamyr",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [2, 3, 5]
  },
  {
    id: 2094,
    name: "Wendell Webber",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [419],
    bookIds: [6]
  },
  {
    id: 2095,
    name: "Wendello Qar Deeth",
    isFemale: false,
    culture: "Qartheen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 2096,
    name: "Werlag",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [2]
  },
  {
    id: 2097,
    name: "Wex Pyke",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    born: "In 286 AC",
    

    childrenIds: [],
    allegiances: [36],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 2098,
    name: "Wilbert",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    died: "In 298 AC",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 2099,
    name: "Will",
    isFemale: false,
    
    titles: [],
    aliases: ["Fletcher Will"],
    
    died: "At Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 2100,
    name: "Will",
    isFemale: false,
    
    titles: [],
    aliases: ["Hookface Will"],
    
    died: "In 299 AC",

    childrenIds: [],
    allegiances: [15],
    bookIds: [3]
  },
  {
    id: 2101,
    name: "Will",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2102,
    name: "Will",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [7]
  },
  {
    id: 2103,
    name: "Will",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 2104,
    name: "Will",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: ["Will the Stork"],
    
    died: "In 299 AC, at Blackwater Rush",

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2105,
    name: "Will",
    isFemale: false,
    
    titles: [],
    aliases: ["Treb"],
    
    

    childrenIds: [],
    allegiances: [291],
    bookIds: [6]
  },
  {
    id: 2106,
    name: "Will Humble",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [205],
    bookIds: [5]
  },
  {
    id: 2107,
    name: "Willam",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "At Stepstones",

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2108,
    name: "Willam Wells",
    isFemale: false,
    culture: "Dornish",
    titles: ["Ser"],
    aliases: [],
    
    died: "In 300 AC, at Disputed Lands",

    childrenIds: [],
    allegiances: [420],
    bookIds: [8]
  },
  {
    id: 2109,
    name: "Willamen Frey",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    born: "In or between 272 AC and 280 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8]
  },
  {
    id: 2110,
    name: "Willifer",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2111,
    name: "Willit",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [374],
    bookIds: [2]
  },
  {
    id: 2112,
    name: "Willow",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: ["Willow Witch-eye"],
    
    died: "In 300 AC, at Winterfell",

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 2113,
    name: "Willow Heddle",
    isFemale: true,
    
    titles: [],
    aliases: [],
    born: "In 289 AC or 290 AC",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2114,
    name: "Willum",
    isFemale: false,
    
    titles: ["Ser"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [1]
  },
  {
    id: 2115,
    name: "Wolmer",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [419],
    bookIds: [6]
  },
  {
    id: 2116,
    name: "Woth",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    died: "In 299 AC, at Gods Eye",

    childrenIds: [],
    allegiances: [],
    bookIds: [2]
  },
  {
    id: 2117,
    name: "Wulfe",
    isFemale: false,
    culture: "Ironborn",
    titles: [],
    aliases: ["Wulfe One-Ear"],
    
    

    childrenIds: [],
    allegiances: [169],
    bookIds: [5, 8]
  },
  {
    id: 2118,
    name: "Wun Weg Wun Dar Wun",
    isFemale: false,
    
    titles: [],
    aliases: ["Wun Wun"],
    born: "At Beyond the Wall",
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8],

    playedBy: ["Ian Whyte"],
    tvSeries: ["Season 5", "Season 6"]
  },
  {
    id: 2119,
    name: "Wyl",
    isFemale: false,
    culture: "Northmen",
    titles: [],
    aliases: [],
    
    died: "In 298 AC, at King's Landing",

    childrenIds: [],
    allegiances: [362],
    bookIds: [1]
  },
  {
    id: 2120,
    name: "Wyl",
    isFemale: false,
    
    titles: [],
    aliases: ["Blind Wyl the Whittler"],
    
    died: "At Riverlands",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 2121,
    name: "Wylla",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [99],
    bookIds: [1, 3]
  },
  {
    id: 2122,
    name: "Xaro Xhoan Daxos",
    isFemale: false,
    culture: "Qartheen",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Nonso Anozie"],
    tvSeries: ["Season 2"]
  },
  {
    id: 2123,
    name: "Xhondo",
    isFemale: false,
    culture: "Summer Isles",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2124,
    name: "Yandry",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 2132,
    childrenIds: [],
    allegiances: [378],
    bookIds: [8]
  },
  {
    id: 2125,
    name: "Ygon",
    isFemale: false,
    culture: "Free Folk",
    titles: [],
    aliases: ["Ygon Oldfather"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 2126,
    name: "Ygritte",
    isFemale: true,
    culture: "Free Folk",
    titles: [],
    aliases: [],
    born: "In 280 AC",
    died: "In 299 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [2, 3, 5, 8],

    playedBy: ["Rose Leslie"],
    tvSeries: ["Season 2", "Season 3", "Season 4"]
  },
  {
    id: 2127,
    name: "Yna",
    isFemale: true,
    
    titles: [],
    aliases: ["Yna One-Eye"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2128,
    name: "Yorkel",
    isFemale: false,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [378],
    bookIds: [4]
  },
  {
    id: 2129,
    name: "Yorko Terys",
    isFemale: false,
    culture: "Braavosi",
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2130,
    name: "Yormwell",
    isFemale: false,
    
    titles: ["Maester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [4]
  },
  {
    id: 2131,
    name: "Young Henly",
    isFemale: false,
    
    titles: [],
    aliases: [],
    born: "In or between 240 AC and 248 AC",
    died: "In 299 AC, at Castle Black",

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 2132,
    name: "Ysilla",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    spouseId: 2124,
    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 2133,
    name: "Zarabelo",
    isFemale: false,
    
    titles: ["Archmaester"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [5]
  },
  {
    id: 2134,
    name: "Zei",
    isFemale: true,
    
    titles: [],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3]
  },
  {
    id: 2135,
    name: "Zekko",
    isFemale: false,
    culture: "Dothraki",
    titles: ["Khal"],
    aliases: [],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 2136,
    name: "Zharaq zo Loraq",
    isFemale: false,
    culture: "Ghiscari",
    titles: [],
    aliases: ["The Liberator"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [8]
  },
  {
    id: 2137,
    name: "Zollo",
    isFemale: false,
    culture: "Dothraki",
    titles: [],
    aliases: ["Zollo the Fat"],
    
    

    childrenIds: [],
    allegiances: [],
    bookIds: [3, 5]
  },
  {
    id: 2138,
    name: "Criston Cole",
    isFemale: false,
    culture: "Stormlands",
    titles: ["Ser", "Lord Commander of the Kingsguard", "Hand of the King"],
    aliases: ["Criston the Kingmaker"],
    born: "In 82 AC, at Blackhaven",
    died: "In 130 AC, at the Butcher's Ball south of the Gods Eye",

    childrenIds: [],
    allegiances: [77],
    bookIds: [11, 10, 9, 5]
  }
];
