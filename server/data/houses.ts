export interface House {
  id: number;
  name: string;
  seats?: string[];
  region: string;
  coatOfArms?: string;
  slogan?: string;
  titles?: string[];
  currentLordId?: number;
  founderId?: number;
  heirId?: number;
  overlordId?: number;
  ancestralWeapons?: string[];
}

export const houses: House[] = [
  {
    id: 1,
    name: "House Algood",

    region: "The Westerlands",
    coatOfArms:
      "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",

    overlordId: 229
  },
  {
    id: 2,
    name: "House Allyrion of Godsgrace",
    seats: ["Godsgrace"],
    region: "Dorne",
    coatOfArms: "Gyronny Gules and Sable, a hand couped Or",
    slogan: "No Foe May Pass",

    currentLordId: 298,

    heirId: 1922,
    overlordId: 285
  },
  {
    id: 3,
    name: "House Amber",

    region: "The North"
  },
  {
    id: 4,
    name: "House Ambrose",

    region: "The Reach",
    coatOfArms: "Or, semy of ants gules",
    slogan: "Never Resting",

    currentLordId: 141,

    overlordId: 398
  },
  {
    id: 5,
    name: "House Appleton of Appleton",
    seats: ["Appleton"],
    region: "The Reach",
    coatOfArms:
      "Or, an apple tree eradicated proper fructed gules, quartered with argent, a gatehouse cendrée",

    overlordId: 398
  },
  {
    id: 6,
    name: "House Arryn of Gulltown",
    seats: ["Gulltown"],
    region: "The Vale",

    overlordId: 7
  },
  {
    id: 7,
    name: "House Arryn of the Eyrie",
    seats: ["The Eyrie (summer)", "Gates of the Moon (winter)"],
    region: "The Vale",
    coatOfArms:
      "A sky-blue falcon soaring against a white moon, on a sky-blue field(Bleu celeste, upon a plate a falcon volant of the field)",
    slogan: "As High as Honor",
    titles: [
      "King of Mountain and Vale (formerly)",
      "Lord of the Eyrie",
      "Defender of the Vale",
      "Warden of the East"
    ],
    currentLordId: 894,
    founderId: 144,

    heirId: 477,
    overlordId: 16
  },
  {
    id: 8,
    name: "House Ashford of Ashford",
    seats: ["Ashford"],
    region: "The Reach",
    coatOfArms: "Tenny, a sun in splendour beneath a chevron inverted argent",
    slogan: "Our Sun Shines Bright",
    titles: ["Lord of Ashford"],

    overlordId: 398
  },
  {
    id: 9,
    name: "House Ashwood",

    region: "The North",

    overlordId: 34
  },
  {
    id: 10,
    name: "House Baelish of Harrenhal",
    seats: ["Harrenhal"],
    region: "The Riverlands",
    coatOfArms:
      "A field of silver mockingbirds, on a green field(Vert, semé of mockingbirds argent)",

    titles: ["Lord Paramount of the Trident", "Lord of Harrenhal"],
    currentLordId: 823,
    founderId: 823,

    overlordId: 16
  },
  {
    id: 11,
    name: "House Baelish of the Fingers",
    seats: ["unnamed tower"],
    region: "The Vale",
    coatOfArms:
      "A grey stone head with fiery eyes, on a light green field(Vert, a stone head cendrée, orbed gules)",

    currentLordId: 823,
    founderId: 1182,

    overlordId: 7
  },
  {
    id: 12,
    name: "House Ball",

    region: "The Reach",
    coatOfArms: "Three white plates upon a chevron red on a white field",

    overlordId: 398
  },
  {
    id: 13,
    name: "House Banefort of Banefort",
    seats: ["Banefort"],
    region: "The Westerlands",
    coatOfArms:
      "A black hooded man, on a grey field, within a fiery tressure(Cendrée, a hooded man sable within a tressure rayonné along the outer edge gules)",

    titles: ["Lord of Banefort"],
    currentLordId: 837,
    founderId: 497,

    overlordId: 229
  },
  {
    id: 14,
    name: "House Bar Emmon of Sharp Point",
    seats: ["Sharp Point"],
    region: "The Crownlands",
    coatOfArms: "Fretty argent and white, a swordfish embowed haurient azure",

    titles: ["Lord of Sharp Point"],
    currentLordId: 332,

    overlordId: 15
  },
  {
    id: 15,
    name: "House Baratheon of Dragonstone",
    seats: ["Dragonstone"],
    region: "The Crownlands",
    coatOfArms:
      "Or, a heart gules enflamed proper charged with a stag's head sable crowned of the field",

    titles: ["Lord of Dragonstone", "King of Westeros"],
    currentLordId: 1963,
    founderId: 1963,

    heirId: 975,
    overlordId: 16
  },
  {
    id: 16,
    name: "House Baratheon of King's Landing",
    seats: ["King's Landing"],
    region: "The Crownlands",
    coatOfArms:
      "A black crowned stag and a gold lion, combatant, on a per pale gold and crimson field(Per pale or and gules, a stag, crowned, sable and a lion of the first combatant)",

    titles: ["Lord of the Seven Kingdoms"],
    currentLordId: 1029,
    founderId: 901,

    heirId: 775,
    overlordId: 15
  },
  {
    id: 17,
    name: "House Baratheon of Storm's End",
    seats: ["Storm's End", "Dragonstone (House Baratheon of Dragonstone)"],
    region: "The Stormlands",
    coatOfArms:
      "A black crowned stag, on a gold field(Or, a stag salient, crowned, sable)",
    slogan: "Ours is the Fury",
    titles: ["Lord of Storm's End", "Lord Paramount of the Stormlands"],
    currentLordId: 1029,
    founderId: 797,

    heirId: 775,
    overlordId: 16
  },
  {
    id: 18,
    name: "House Beesbury of Honeyholt",
    seats: ["Honeyholt"],
    region: "The Reach",
    coatOfArms:
      "Paly or and sable, on a pale of the last three beehives of the first",
    slogan: "Beware our Sting",

    currentLordId: 1103,
    founderId: 366,

    overlordId: 195
  },
  {
    id: 19,
    name: "House Belmore of Strongsong",
    seats: ["Strongsong"],
    region: "The Vale",
    coatOfArms:
      "Six silver bells, 3, 2, 1, on a purple field(Purpure, six bells, 3, 2, 1, argent)",

    titles: ["Lord of Strongsong"],
    currentLordId: 176,

    overlordId: 7
  },
  {
    id: 20,
    name: "House Bettley",

    region: "The Westerlands",
    coatOfArms: "Three blue beetles, on a gold field(Or, three beetles azure)",

    overlordId: 229
  },
  {
    id: 21,
    name: "House Bigglestone",

    region: "The Riverlands"
  },
  {
    id: 22,
    name: "House Blackbar of Bandallon",
    seats: ["Bandallon"],
    region: "The Reach",
    coatOfArms: "Argent, a fess sable",

    titles: ["Lord of Bandallon"],

    overlordId: 398
  },
  {
    id: 23,
    name: "House Blackfyre of King's Landing",

    region: "",
    coatOfArms: "Gules, a three headed dragon breathing flames sable",

    founderId: 267,

    overlordId: 378,

    ancestralWeapons: ["Blackfyre"]
  },
  {
    id: 24,
    name: "House Blackmont of Blackmont",
    seats: ["Blackmont"],
    region: "Dorne",
    coatOfArms: "A black vulture with a pink infant in its claws, on yellow",

    currentLordId: 1607,

    heirId: 1574,
    overlordId: 285
  },
  {
    id: 25,
    name: "House Blackmyre",

    region: "The Neck",

    overlordId: 318
  },
  {
    id: 26,
    name: "House Blacktyde of Blacktyde",
    seats: ["Blacktyde"],
    region: "Iron Islands",
    coatOfArms: "Vairy vert and sable",

    titles: ["Lord of Blacktyde"],

    overlordId: 169
  },
  {
    id: 27,
    name: "House Blackwood of Raventree Hall",
    seats: ["Raventree Hall"],
    region: "The Riverlands",
    coatOfArms:
      "A flock of ravens surrounding a black shield charged with a dead weirwood, on a scarlet field(Gules, on an escutcheon sable a dead weirwood tree proper, all within an orle of ravens volant sable)",

    titles: ["Lord of Raventree"],
    currentLordId: 2045,

    heirId: 1241,
    overlordId: 10
  },
  {
    id: 28,
    name: "House Blanetree",

    region: "The Riverlands",
    coatOfArms:
      "Green and brown maple leaves, strewn across a yellow field(Or, semé of maple leaves vert and tenné)",

    overlordId: 395
  },
  {
    id: 29,
    name: "House Blount",

    region: "The Crownlands",
    coatOfArms:
      "A red bend sinister between two black porcupines, on a green field(Vert, a bend sinister gules between two porcupines sable)",

    overlordId: 16
  },
  {
    id: 30,
    name: "House Boggs",

    region: "The North",

    overlordId: 318
  },
  {
    id: 31,
    name: "House Boggs of Crackclaw Point",

    region: "The Crownlands",

    overlordId: 16
  },
  {
    id: 32,
    name: "House Bole",

    region: "The North",

    overlordId: 150
  },
  {
    id: 33,
    name: "House Bolling",

    region: "The Stormlands",
    coatOfArms:
      "Vairy orange and blue, upon a black canton, a golden stag beneath an orange bend sinister(Vairy tenné and azure, on a canton sable a stag or debruised by a bend sinister of the first)",

    overlordId: 17
  },
  {
    id: 34,
    name: "House Bolton of the Dreadfort",
    seats: ["The Dreadfort"],
    region: "The North",
    coatOfArms: "A red flayed man on pink de sang",
    slogan: "Our Blades are Sharp",
    titles: [
      "Red King (Age of Heroes)",
      "Lord of the Dreadfort",
      "Warden of the North"
    ],
    currentLordId: 933,

    heirId: 849,
    overlordId: 16
  },
  {
    id: 35,
    name: "House Borrell of Sweetsister",
    seats: ["Breakwater in Sisterton"],
    region: "The Vale",
    coatOfArms:
      "A white spider crab, on a grey-green field(Vert-cendrée, a spider crab argent)",

    titles: ["Lord of Sweetsister"],
    currentLordId: 429,

    overlordId: 370
  },
  {
    id: 36,
    name: "House Botley of Lordsport",
    seats: ["Lordsport"],
    region: "Iron Islands",
    coatOfArms: "Vert, semy of fishes argent",

    titles: ["Lord of Lordsport"],
    currentLordId: 419,

    overlordId: 169
  },
  {
    id: 37,
    name: "House Bracken of Stone Hedge",
    seats: ["Stone Hedge"],
    region: "The Riverlands",
    coatOfArms:
      "A red stallion upon a gold shield, on a brown field(Tenné, on an escutcheon or a stallion rampant gules)",

    currentLordId: 1559,

    overlordId: 10
  },
  {
    id: 38,
    name: "House Branch",

    region: "The North",

    overlordId: 150
  },
  {
    id: 39,
    name: "House Branfield",
    seats: ["exiles living at Ironrath"],
    region: "The North"
  },
  {
    id: 40,
    name: "House Brax of Hornvale",
    seats: ["Hornvale"],
    region: "The Westerlands",
    coatOfArms:
      "A purple unicorn, on a silver field(Argent, a unicorn rampant purpure)",

    currentLordId: 1055,

    heirId: 393,
    overlordId: 229
  },
  {
    id: 41,
    name: "House Breakstone",

    region: "The Vale",
    coatOfArms: "A red sledge"
  },
  {
    id: 42,
    name: "House Briar",

    region: "Dorne",

    titles: ["High King of Dorne"]
  },
  {
    id: 43,
    name: "House Bridges",

    region: "The Reach",
    coatOfArms:
      "A black stone bridge with three arches upon a golden chief above three blue pallets on white",

    overlordId: 398
  },
  {
    id: 44,
    name: "House Brightstone",

    region: "The Vale",

    titles: ["King of the Fingers"]
  },
  {
    id: 45,
    name: "House Brook",

    region: "Dorne",

    titles: ["High King of Dorne"]
  },
  {
    id: 46,
    name: "House Broom",

    region: "The Westerlands",
    coatOfArms:
      "A silver helm crested with a sprig of broom, on a checkered black and green field(Chequy sable and vert, a helm argent, crested with a sprig of broom proper)",

    overlordId: 229
  },
  {
    id: 47,
    name: "House Brownhill",

    region: "Dorne",

    titles: ["High King of Dorne"]
  },
  {
    id: 48,
    name: "House Brune of Brownhollow",
    seats: ["Brownhollow"],
    region: "The Crownlands",
    coatOfArms: "Argent, a bear's paw erased within a double tressure tenné",

    titles: ["The Knight of Brownhollow"],
    currentLordId: 184,

    overlordId: 16
  },
  {
    id: 49,
    name: "House Brune of the Dyre Den",
    seats: ["The Dyre Den"],
    region: "The Crownlands",

    titles: ["Lord of the Dyre Den"],
    currentLordId: 1380,

    overlordId: 16
  },
  {
    id: 50,
    name: "House Buckler of Bronzegate",
    seats: ["Bronzegate"],
    region: "The Stormlands",
    coatOfArms: "Three brass buckles, on a blue field(Azure, three buckles or)",

    currentLordId: 848,

    overlordId: 17
  },
  {
    id: 51,
    name: "House Buckwell of the Antlers",
    seats: ["the Antlers"],
    region: "The Crownlands",
    coatOfArms:
      "A rack of golden antlers, on a field of vair(Vair, a stag's attire or)",
    slogan: "Pride and Purpose",
    titles: ["Lord of the Antlers"],

    overlordId: 16
  },
  {
    id: 52,
    name: "House Bulwer of Blackcrown",
    seats: ["Blackcrown"],
    region: "The Reach",
    coatOfArms: "Sanguine, a bull`s skull argent",
    slogan: "Death Before Disgrace",

    currentLordId: 100,

    overlordId: 195
  },
  {
    id: 53,
    name: "House Burley",

    region: "The North",
    coatOfArms: "White, upon a pile azure a knife white",

    overlordId: 34
  },
  {
    id: 54,
    name: "House Bushy",

    region: "The Reach",
    coatOfArms: "A green fess embattled on white",

    overlordId: 398
  },
  {
    id: 55,
    name: "House Butterwell",
    seats: ["formerly Whitewalls"],
    region: "The Riverlands",
    coatOfArms:
      "Barry wavy green, white, and yellow(Barry wavy vert, argent, and or)",

    overlordId: 10
  },
  {
    id: 56,
    name: "House Byrch",

    region: "The Crownlands",
    coatOfArms:
      "Gryonny white and black quartered with a silver axe on a green field(Quarterly, first and fourth, gyronny argent and sable, second and third, vert, an axe palewise argent)",

    overlordId: 16
  },
  {
    id: 57,
    name: "House Bywater",

    region: "The Crownlands",
    coatOfArms:
      "Blue frets on a white field, three silver fish on a blue chief(Argent fretty azure, on a chief of the second three fish of the field)",

    overlordId: 16
  },
  {
    id: 58,
    name: "House Cafferen of Fawnton",
    seats: ["Fawnton"],
    region: "The Stormlands",
    coatOfArms:
      "Two white fawns counter salient, on a green field(Vert, two fawns counter-salient argent)",

    overlordId: 17
  },
  {
    id: 59,
    name: "House Cargyll",

    region: "The Crownlands",
    coatOfArms: "Bendy sinister sable and gules, a goose Or",

    overlordId: 378
  },
  {
    id: 60,
    name: "House Caron of Nightsong",
    seats: ["Nightsong"],
    region: "The Stormlands",
    coatOfArms:
      "A field of black nightingales on yellow(Or, semé of nightingales sable)",
    slogan: "No Song so Sweet",
    titles: ["Lord of the Marches", "Lord of Nightsong"],
    currentLordId: 925,

    overlordId: 15
  },
  {
    id: 61,
    name: "House Cassel",

    region: "The North",
    coatOfArms: "Ten white wolf heads, 4-3-2-1, on grey with a black border",

    currentLordId: 194,

    overlordId: 362
  },
  {
    id: 62,
    name: "House Casterly of Casterly Rock",
    seats: ["Casterly Rock"],
    region: "The Westerlands",

    titles: ["Lord of Casterly Rock"],

    founderId: 1286
  },
  {
    id: 63,
    name: "House Caswell of Bitterbridge",
    seats: ["Bitterbridge"],
    region: "The Reach",
    coatOfArms: "Argent, a centaur with bow or",

    titles: ["Lord of Bitterbridge", "Defender of the Fords"],
    currentLordId: 644,

    overlordId: 398
  },
  {
    id: 64,
    name: "House Cave",

    region: "The Crownlands",

    overlordId: 16
  },
  {
    id: 65,
    name: "House Celtigar of Claw Isle",
    seats: ["Claw Isle"],
    region: "The Crownlands",
    coatOfArms: "Argent, semy of crabs gules",

    titles: ["Lord of Claw Isle"],
    currentLordId: 127,

    overlordId: 16
  },
  {
    id: 66,
    name: "House Cerwyn of Cerwyn",
    seats: ["Castle Cerwyn"],
    region: "The North",
    coatOfArms: "Argent, a battle-axe paleways sable",
    slogan: "Honed and Ready",
    titles: ["Lord of Cerwyn"],
    currentLordId: 588,

    overlordId: 34
  },
  {
    id: 67,
    name: "House Chambers",

    region: "The Riverlands"
  },
  {
    id: 68,
    name: "House Charlton",

    region: "The Riverlands",
    coatOfArms:
      "Three sprigs of mistletoe, green and red, on a gold field within a green border(Or, three sprigs of mistletoe vert, fructed gules, within a bordure of the second)",

    overlordId: 143
  },
  {
    id: 69,
    name: "House Chelsted",

    region: "The Crownlands",
    coatOfArms:
      "Per bend green and white shield, a spiked mace and a silver dagger crossed(Per bend vert and argent, in pale a mace surmounted by a dagger in fesse of the second)",

    overlordId: 16
  },
  {
    id: 70,
    name: "House Chester of Greenshield",
    seats: ["Greenshield"],
    region: "The Reach",
    coatOfArms:
      "A green hand on a gold escutcheon on a green field, a border of red rayonne",

    currentLordId: 760,

    overlordId: 398
  },
  {
    id: 71,
    name: "House Chyttering",
    seats: ["Chyttering"],
    region: "The Crownlands",
    coatOfArms:
      "Three golden enhanced bendlets on a white shield(Argent, three bendlets enhanced or)",

    currentLordId: 663,

    overlordId: 16
  },
  {
    id: 72,
    name: "House Clegane",
    seats: ["Clegane's Keep"],
    region: "The Westerlands",
    coatOfArms:
      "Three dogs on a yellow field(Or, three dogs courant in pale sable)",

    titles: ["Ser"],

    founderId: 1272,

    overlordId: 229
  },
  {
    id: 73,
    name: "House Clifton",

    region: "The Westerlands",

    currentLordId: 1403,

    overlordId: 120
  },
  {
    id: 74,
    name: "House Cockshaw",

    region: "The Reach",
    coatOfArms: "Sable, three feathers in fess gules argent and or",

    overlordId: 398
  },
  {
    id: 75,
    name: "House Codd",

    region: "Iron Islands",

    slogan: "Though All Men Do Despise Us",

    overlordId: 169
  },
  {
    id: 76,
    name: "House Coldwater of Coldwater Burn",
    seats: ["Coldwater Burn"],
    region: "The Vale",
    coatOfArms:
      "A blue pall with white borders, on a red field(Gules, a pall azure, fimbriated argent)",

    titles: ["Lord of Coldwater Burn"],
    currentLordId: 939,

    overlordId: 328
  },
  {
    id: 77,
    name: "House Cole",

    region: "The Stormlands",
    coatOfArms:
      "Ten black pellets, on a scarlet field(Gules, ten pellets, 4, 3, 2, 1)"
  },
  {
    id: 78,
    name: "House Condon",

    region: "The North",
    coatOfArms: "An eagle's head between crossed tridents, red on white",

    overlordId: 66
  },
  {
    id: 79,
    name: "House Conklyn",

    region: "The Reach",

    overlordId: 398
  },
  {
    id: 80,
    name: "House Connington of Griffin's Roost",
    seats: ["Griffin's Roost"],
    region: "The Stormlands",
    coatOfArms:
      "Two combatant griffins, counterchanged, on a red and white field(Per pale gules and argent, two griffins combatant counterchanged)",

    titles: ["The Knight of Griffin's Roost"],
    currentLordId: 576,

    overlordId: 17
  },
  {
    id: 81,
    name: "House Corbray of Heart's Home",
    seats: ["Heart's Home"],
    region: "",
    coatOfArms:
      "Three black ravens in flight, holding three red hearts, on a white field(Argent, three ravens volant sable, each clutching in their claws a heart gules)",

    titles: ["Lord of Heart's Home", "King of the Fingers (historical)"],
    currentLordId: 681,
    founderId: 256,

    heirId: 677,
    overlordId: 7,

    ancestralWeapons: ["Lady Forlorn"]
  },
  {
    id: 82,
    name: "House Cordwayner of Hammerhal",
    seats: ["Hammerhal"],
    region: "The Reach",
    coatOfArms: "Lozengny vert and or, a pair of boots sable",

    overlordId: 398
  },
  {
    id: 83,
    name: "House Costayne of Three Towers",
    seats: ["Three Towers"],
    region: "The Reach",
    coatOfArms: "Quarterly; sable, a chalice argent; or, a rose sable",

    currentLordId: 1030,

    overlordId: 195
  },
  {
    id: 84,
    name: "House Cox of Saltpans",
    seats: ["Saltpans"],
    region: "",

    titles: ["the Knight of Saltpans"],
    currentLordId: 1846,

    overlordId: 395
  },
  {
    id: 85,
    name: "House Crabb",
    seats: ["The Whispers (former)"],
    region: "The Crownlands",

    overlordId: 16
  },
  {
    id: 86,
    name: "House Crakehall of Crakehall",
    seats: ["Crakehall"],
    region: "The Westerlands",
    coatOfArms:
      "A brindled boar on a brown field(Tenné, a boar brindled sable and argent)",
    slogan: "None so Fierce",
    titles: ["Lord of Crakehall"],
    currentLordId: 922,
    founderId: 257,

    heirId: 1046,
    overlordId: 229
  },
  {
    id: 87,
    name: "House Crane of Red Lake",
    seats: ["Red Lake"],
    region: "The Reach",
    coatOfArms: "Azure, cranes in chevron or",

    founderId: 1905,

    overlordId: 398
  },
  {
    id: 88,
    name: "House Cray",

    region: "The Neck",

    overlordId: 318
  },
  {
    id: 89,
    name: "House Cressey",

    region: "The Crownlands",
    coatOfArms:
      "Seven silver coins on a red bend sinister, between two silver helmets, on a blue field(Azure, on a bend sinister gules seven plates, between two helmets argent)",

    overlordId: 16
  },
  {
    id: 90,
    name: "House Crowl of Deepdown",
    seats: ["Deepdown"],
    region: "The North",
    coatOfArms: "Pily gules and sable",

    overlordId: 34
  },
  {
    id: 91,
    name: "House Cuy of Sunhouse",
    seats: ["Sunhouse"],
    region: "The Reach",
    coatOfArms: "Six yellow flowers on blue",

    currentLordId: 215,

    overlordId: 195
  },
  {
    id: 92,
    name: "House Dalt of Lemonwood",
    seats: ["Lemonwood"],
    region: "Dorne",
    coatOfArms: "Purpure, semy of lemons Or",

    titles: ["The Knight of Lemonwood"],
    currentLordId: 309,

    heirId: 1163,
    overlordId: 285
  },
  {
    id: 93,
    name: "House Dargood",

    region: "The Crownlands"
  },
  {
    id: 94,
    name: "House Darke",

    region: "The Crownlands"
  },
  {
    id: 95,
    name: "House Darklyn of Duskendale",
    seats: ["The Dun Fort"],
    region: "The Crownlands",
    coatOfArms:
      "Fusily sable and or, upon a pale in dexter gules seven escutcheons argent",

    titles: ["Lord of Duskendale"],

    overlordId: 378
  },
  {
    id: 96,
    name: "House Darkwood",

    region: "The Crownlands"
  },
  {
    id: 97,
    name: "House Darry of Darry",
    seats: ["Darry"],
    region: "The Riverlands",
    coatOfArms: "A black plowman on a brown field(Tenné, a plowman sable)",

    currentLordId: 712,

    overlordId: 10
  },
  {
    id: 98,
    name: "House Dayne of High Hermitage",
    seats: ["High Hermitage"],
    region: "Dorne",

    titles: ["the Knight of High Hermitage"],
    currentLordId: 1421,

    overlordId: 99
  },
  {
    id: 99,
    name: "House Dayne of Starfall",
    seats: ["Starfall"],
    region: "Dorne",
    coatOfArms:
      "A white sword and falling star crossed on lilac (Purpure, a blazing star bendways surmounted by a sword bendways sinister argent)",

    titles: ["Lord of Starfall", "King of the Torrentine (historical)"],
    currentLordId: 348,

    overlordId: 285,

    ancestralWeapons: ["Dawn"]
  },
  {
    id: 100,
    name: "House Deddings",

    region: "The Riverlands",

    overlordId: 10
  },
  {
    id: 101,
    name: "House Doggett",

    region: "The Westerlands",
    coatOfArms:
      "Per bend, a white unicorn on a green field, a black raven on a white field(Per bend vert and argent, in sinister chief a unicorn rampant of the second, and in dexter base a raven closed sable)",

    overlordId: 229
  },
  {
    id: 102,
    name: "House Dondarrion of Blackhaven",
    seats: ["Blackhaven"],
    region: "The Stormlands",
    coatOfArms:
      "A forked purple lightning bolt, on black field speckled with four-pointed stars(Sable, semé of mullets of four points argent, a lightning bolt forked purpure)",

    titles: ["Lord of Blackhaven"],
    currentLordId: 190,

    overlordId: 17
  },
  {
    id: 103,
    name: "House Donniger",

    region: "The Vale",
    coatOfArms:
      "A red sun rising from a grey-green sea, against a yellow sky(Per fesse wavy or and vert-cendrée, a demi-sun-in-splendour issuant from the line of division gules)",

    overlordId: 7
  },
  {
    id: 104,
    name: "House Drinkwater",

    region: "Dorne",

    overlordId: 444
  },
  {
    id: 105,
    name: "House Drox",

    region: "The Westerlands",
    coatOfArms:
      "Three black crossbows, on a gold field with a black border(Or, three crossbows within a bordure sable)",

    overlordId: 229
  },
  {
    id: 106,
    name: "House Drumm of Old Wyk",

    region: "Iron Islands",
    coatOfArms: "Gules, a bone hand argent",

    titles: ["Lord of Old Wyk", "The Drumm", "The Bone Hand"],
    currentLordId: 331,

    overlordId: 169,

    ancestralWeapons: ["Red Rain"]
  },
  {
    id: 107,
    name: "House Dryland",

    region: "Dorne",

    titles: ["King of the Brimstone", "Lord of Hellgate Hall"]
  },
  {
    id: 108,
    name: "House Dunn",

    region: "The Reach",
    coatOfArms: "per pale black and pink, a countercharged two-headed pelican",

    overlordId: 398
  },
  {
    id: 109,
    name: "House Durrandon",
    seats: ["Storm's End"],
    region: "The Stormlands",
    coatOfArms:
      "A black crowned stag, on a gold field(Or, a stag salient, crowned, sable)",
    slogan: "Ours is the Fury",
    titles: ["Storm King"],

    founderId: 333
  },
  {
    id: 110,
    name: "House Durwell",

    region: "The Reach",

    overlordId: 398
  },
  {
    id: 111,
    name: "House Dustin of Barrowton",
    seats: ["Barrow Hall"],
    region: "The North",
    coatOfArms:
      "Two rusted longaxes with black shafts crossed, a black crown between their points, on yellow",

    titles: ["Lord of Barrowton"],
    currentLordId: 166,

    overlordId: 34
  },
  {
    id: 112,
    name: "House Edgerton",

    region: "The Crownlands",
    coatOfArms:
      "Purpure, a wheel flaming tenny quartered with half-fusilly sable and argent",

    overlordId: 16
  },
  {
    id: 113,
    name: "House Egen",

    region: "The Vale",
    coatOfArms:
      "A yellow sun, white crescent moon, and silver star on a blue chief, above a white field(Argent, on a chief azure a moon increscent of the first between a sun-in-splendour or and a mullet of the first)",
    slogan: "By Day or Night",

    overlordId: 7
  },
  {
    id: 114,
    name: "House Elesham of the Paps",
    seats: ["the Paps"],
    region: "The Vale",
    coatOfArms:
      "A black star between an inverted stone-coloured double-pile, on a pink field(Carnation, a mullet sable between two piles issuant from base cendrée)",

    overlordId: 7
  },
  {
    id: 115,
    name: "House Erenford",

    region: "The Riverlands",
    coatOfArms:
      "A golden heron, beak and legs black, standing with a silver fish in its beak, on a pink field(Carnation, a heron or, beaked and membered sable, clasped in its mouth a fish argent)",

    overlordId: 143
  },
  {
    id: 116,
    name: "House Errol of Haystack Hall",
    seats: ["Haystack Hall"],
    region: "The Stormlands",
    coatOfArms: "A yellow haystack, on an orange field(Tenné, a haystack or)",

    titles: ["Lord of Haystack Hall"],
    currentLordId: 962,

    overlordId: 17
  },
  {
    id: 117,
    name: "House Estermont of Greenstone",
    seats: ["Greenstone"],
    region: "The Stormlands",
    coatOfArms:
      "A dark-green sea-turtle on a pale-green field(Vert, a sea-turtle tergiant of the field)",

    titles: ["Lord of Greenstone"],
    currentLordId: 357,

    heirId: 52,
    overlordId: 16
  },
  {
    id: 118,
    name: "House Estren of Wyndhall",
    seats: ["Wyndhall"],
    region: "The Westerlands",
    coatOfArms:
      "A green saltire between four red double-headed eagles, on a white field(Argent, a saltire vert between four double-headed eagles displayed gules)",

    titles: ["Lord of Wyndhall"],
    currentLordId: 860,

    overlordId: 229
  },
  {
    id: 119,
    name: "House Falwell",

    region: "The Westerlands",
    coatOfArms:
      "A fool in red and gold motley juggling five suns, on a black field(Sable, a fool proper clothed in motley gules and or, juggling five suns-in-splendour of the last)",

    overlordId: 229
  },
  {
    id: 120,
    name: "House Farman of Faircastle",
    seats: ["Faircastle, Fair Isle"],
    region: "The Westerlands",
    coatOfArms:
      "Three silver ships on a blue field with a border of crimson and gold(Azure, three galleys argent within a bordure compony gules and or)",

    titles: ["Lord of Fair Isle"],
    currentLordId: 963,

    overlordId: 229
  },
  {
    id: 121,
    name: "House Farring",

    region: "The Crownlands",
    coatOfArms:
      "Per pale purpure and argent, two knights combatant crossing swords counterchanged",

    overlordId: 15
  },
  {
    id: 122,
    name: "House Farwynd of Sealskin Point",
    seats: ["Sealskin Point"],
    region: "Iron Islands",

    currentLordId: 2033,

    overlordId: 169
  },
  {
    id: 123,
    name: "House Farwynd of the Lonely Light",
    seats: ["Lonely Light"],
    region: "Iron Islands",
    coatOfArms:
      "Per fess wavy tenny and sable, a demi-torteaux gules issuant from the division surmounted by a longship sailing upon the division of the second",

    currentLordId: 453,

    heirId: 455,
    overlordId: 169
  },
  {
    id: 124,
    name: "House Fell of Felwood",
    seats: ["Felwood"],
    region: "The Stormlands",
    coatOfArms:
      "Per fess, a white crescent moon on a black field above a green field, a sprucetree line between(Per fess sapinagé vert and sable, in dexter chief a moon increscent argent)",

    titles: ["Lord of Felwood"],

    overlordId: 17
  },
  {
    id: 125,
    name: "House Fenn",

    region: "The Neck",
    coatOfArms: "Purpure, three water lilies sable",

    overlordId: 318
  },
  {
    id: 126,
    name: "House Ferren",

    region: "The Westerlands",
    coatOfArms:
      "Per saltire, checkered red and gold, a silver and black ferret on a green field(Per saltire chequy gules and or and vert, in each flank point a ferret argent and sable)",

    overlordId: 229
  },
  {
    id: 127,
    name: "House Fisher",
    seats: ["Misty Isle"],
    region: "The Riverlands",
    coatOfArms:
      "A crowned catfish, spotted grey, on a blue field(Azure, a catfish cendrée, crowned or)",

    titles: ["River king"]
  },
  {
    id: 128,
    name: "House Fisher of the Stony Shore",
    seats: ["Stony Shore"],
    region: "The North",

    overlordId: 362
  },
  {
    id: 129,
    name: "House Flint  of the mountains",
    seats: ["northern mountains"],
    region: "The North",

    titles: ["The Flint", "Lord Flint"],
    currentLordId: 2023,

    overlordId: 362
  },
  {
    id: 130,
    name: "House Flint of Breakstone Hill",
    seats: ["Breakstone Hill"],
    region: "The North",

    overlordId: 362
  },
  {
    id: 131,
    name: "House Flint of Flint's Finger",
    seats: ["Flint's Finger"],
    region: "The North",
    coatOfArms:
      "Paly sable and cendrée on a pall inverted argent a hand couped of the second",

    currentLordId: 1882,

    overlordId: 34
  },
  {
    id: 132,
    name: "House Flint of Widow's Watch",
    seats: ["Widow's Watch"],
    region: "The North",
    coatOfArms:
      "Azure, semy of whitecaps argent on a chief wavy Or two eyes of the second irised of the first and pupiled sable",
    slogan: "Ever Vigilant",

    currentLordId: 669,

    overlordId: 34
  },
  {
    id: 133,
    name: "House Florent of Brightwater Keep",
    seats: ["Stripped (formerly Brightwater Keep)"],
    region: "The Reach",
    coatOfArms: "A red fox in a circle of blue flowers on ermine",

    titles: ["Lord of Brightwater"],
    currentLordId: 68,
    founderId: 1388,

    heirId: 742,
    overlordId: 15
  },
  {
    id: 134,
    name: "House Follard",

    region: "The Crownlands",
    coatOfArms:
      "Gyronny gules and argent, on a canton Or a fool's cap two peaked of the first and second",
    slogan: "None so Wise",

    overlordId: 16
  },
  {
    id: 135,
    name: "House Foote",

    region: "The Westerlands",
    coatOfArms:
      "A copper dagger across a black chevron, on a white field(Argent, a chevron reversed sable, surmounted by a dagger erect tenné)",

    overlordId: 229
  },
  {
    id: 136,
    name: "House Foote of Nightsong",
    seats: ["Nightsong"],
    region: "The Stormlands",

    titles: ["Lord of Nightsong", "Lord of the Marches"],
    currentLordId: 825,
    founderId: 825,

    overlordId: 16
  },
  {
    id: 137,
    name: "House Footly of Tumbleton",
    seats: ["Tumbleton"],
    region: "The Reach",
    coatOfArms: "a field of silver caltrops on black",
    slogan: "Tread Lightly Here",

    overlordId: 398
  },
  {
    id: 138,
    name: "House Forrester",
    seats: ["Ironrath (Telltale)"],
    region: "The North",
    coatOfArms:
      "an ironwood tree outline with a sword outline drawn inside it, pointing down. (Telltale)",
    slogan: "Iron from Ice (Telltale)",

    overlordId: 150
  },
  {
    id: 139,
    name: "House Fossoway of Cider Hall",
    seats: ["Cider Hall"],
    region: "The Reach",
    coatOfArms: "Or, an apple gules",
    slogan: "Taste of Glory",
    titles: ["Lord of Cider Hall"],

    founderId: 395,

    overlordId: 398
  },
  {
    id: 140,
    name: "House Fossoway of New Barrel",
    seats: ["New Barrel"],
    region: "The Reach",
    coatOfArms: "Or, an apple vert",

    titles: ["The Knight of New Barrel"],
    currentLordId: 577,
    founderId: 853,

    overlordId: 398
  },
  {
    id: 141,
    name: "House Fowler of Skyreach",
    seats: ["Skyreach"],
    region: "Dorne",
    coatOfArms: "Argent, a hooded hawk trussed azure",
    slogan: "Let Me Soar",
    titles: [
      "Lord of Skyreach",
      "Warden of the Prince's Pass",
      "Lord of the Wide Way",
      "King of Stone and Sky"
    ],
    currentLordId: 396,

    overlordId: 285
  },
  {
    id: 142,
    name: "House Frey of Riverrun",
    seats: ["Riverrun"],
    region: "The Riverlands",

    titles: ["Lord of Riverrun"],
    currentLordId: 377,
    founderId: 377,

    heirId: 1058,
    overlordId: 10
  },
  {
    id: 143,
    name: "House Frey of the Crossing",
    seats: ["The Twins"],
    region: "The Riverlands",
    coatOfArms:
      "Two blue towers, united by a bridge, on a silver-grey field(Cendrée, a bridge azure, at either end a tower of the same)",

    titles: ["Lord of the Crossing"],
    currentLordId: 1093,

    heirId: 352,
    overlordId: 10
  },
  {
    id: 144,
    name: "House Frost",

    region: "The North"
  },
  {
    id: 145,
    name: "House Gardener of Highgarden",
    seats: ["Highgarden"],
    region: "The Reach",
    coatOfArms: "Argent, a hand couped vert",

    titles: ["King of the Reach", "Lord of Highgarden"],

    founderId: 410
  },
  {
    id: 146,
    name: "House Gargalen of Salt Shore",
    seats: ["Salt Shore"],
    region: "Dorne",
    coatOfArms: "Or, a cockatrice gules, in its beak a serpent sable",

    titles: ["Lord of Salt Shore"],
    currentLordId: 1036,

    overlordId: 285
  },
  {
    id: 147,
    name: "House Garner",

    region: "The Westerlands",
    coatOfArms:
      "Three grey owls upon white plates, on a green field(Vert, three plates, each charged with an owl close affronté cendrée)",

    overlordId: 229
  },
  {
    id: 148,
    name: "House Gaunt",

    region: "The Crownlands",
    coatOfArms:
      "Purpure, three lances palewise in fess between two flaunches sable",

    overlordId: 16
  },
  {
    id: 149,
    name: "House Glenmore",
    seats: ["Rillwater Crossing"],
    region: "The North"
  },
  {
    id: 150,
    name: "House Glover of Deepwood Motte",
    seats: ["Deepwood Motte"],
    region: "The North",
    coatOfArms: "Gules, a gauntlet argent",

    titles: ["Master of Deepwood Motte"],
    currentLordId: 397,

    heirId: 903,
    overlordId: 362
  },
  {
    id: 151,
    name: "House Goodbrook",

    region: "The Riverlands",
    coatOfArms: "A blue wavy bend, on a gold field(Or, a bend wavy azure)",

    currentLordId: 673,

    overlordId: 10
  },
  {
    id: 152,
    name: "House Goodbrother of Corpse Lake",
    seats: ["Corpse Lake"],
    region: "Iron Islands",

    overlordId: 155
  },
  {
    id: 153,
    name: "House Goodbrother of Crow Spike Keep",
    seats: ["Crow Spike Keep"],
    region: "Iron Islands",

    overlordId: 155
  },
  {
    id: 154,
    name: "House Goodbrother of Downdelving",
    seats: ["Downdelving"],
    region: "Iron Islands",

    overlordId: 155
  },
  {
    id: 155,
    name: "House Goodbrother of Hammerhorn",
    seats: ["Hammerhorn"],
    region: "Iron Islands",
    coatOfArms: "Gules, a warhorn sable banded or.",

    currentLordId: 434,

    heirId: 440,
    overlordId: 169
  },
  {
    id: 156,
    name: "House Goodbrother of Orkmont",

    region: "Iron Islands",

    overlordId: 169
  },
  {
    id: 157,
    name: "House Goodbrother of Shatterstone",
    seats: ["Shatterstone"],
    region: "Iron Islands",

    currentLordId: 1762,

    overlordId: 169
  },
  {
    id: 158,
    name: "House Gower",

    region: "The Stormlands",
    coatOfArms:
      "Nine yellow trefoils on a black cross, on an ermine field(Ermine, on a cross sable nine trefoils or)",

    overlordId: 17
  },
  {
    id: 159,
    name: "House Graceford of Holyhall",
    seats: ["Holyhall"],
    region: "The Reach",
    coatOfArms: "Tenny, on a pale wavy argent the Mother's face proper",
    slogan: "Work Her Will",

    currentLordId: 81,

    overlordId: 398
  },
  {
    id: 160,
    name: "House Grafton of Gulltown",
    seats: ["Gulltown"],
    region: "The Vale",
    coatOfArms:
      "A yellow tower, burning, on a black pile, on a flame-red field(Gules, on a pile sable a tower or with flames issuant from the battlements proper)",

    titles: ["Lord of Gulltown"],
    currentLordId: 420,

    overlordId: 7
  },
  {
    id: 161,
    name: "House Grandison of Grandview",
    seats: ["Grandview"],
    region: "The Stormlands",
    coatOfArms:
      "A black sleeping lion, on a yellow field(Or, a lion dormant sable)",
    slogan: "Rouse Me Not",
    titles: ["Lord of Grandview"],
    currentLordId: 510,

    overlordId: 17
  },
  {
    id: 162,
    name: "House Graves",

    region: "The Reach",
    coatOfArms:
      "Green and white gyronny, a double-headed eagle counter-charged, gold beak and talons",

    overlordId: 398
  },
  {
    id: 163,
    name: "House Greenfield of Greenfield",
    seats: ["Greenfield"],
    region: "The Westerlands",
    coatOfArms:
      "A white double-tressure, on a green field(Vert, a double-tressure argent)",

    titles: ["The Knight of Greenfield"],
    currentLordId: 405,

    overlordId: 229
  },
  {
    id: 164,
    name: "House Greengood",

    region: "The Neck",

    overlordId: 318
  },
  {
    id: 165,
    name: "House Greenwood",

    region: "The North"
  },
  {
    id: 166,
    name: "House Grell",

    region: "The Riverlands",
    coatOfArms:
      "Three red martlets on a white bend, on a blue field(Azure, on a bend argent three martlets gules)",

    overlordId: 395
  },
  {
    id: 167,
    name: "House Grey",

    region: "The Riverlands"
  },
  {
    id: 168,
    name: "House Greyiron of Orkmont",
    seats: ["Orkmont"],
    region: "Iron Islands",
    coatOfArms:
      "The sea king's head, white with dark green seaweed beard and hair, a black crown on a grey field",

    titles: ["High King of the Iron Islands", "King of the Iron Islands"]
  },
  {
    id: 169,
    name: "House Greyjoy of Pyke",
    seats: ["Pyke"],
    region: "Iron Islands",
    coatOfArms: "Sable, a kraken Or",
    slogan: "We Do Not Sow",
    titles: [
      "King of Salt and Rock",
      "Son of the Sea Wind",
      "Lord Reaper of Pyke"
    ],
    currentLordId: 385,

    heirId: 1022,
    overlordId: 16
  },
  {
    id: 170,
    name: "House Greystark of Wolf's Den",
    seats: ["Wolf's Den"],
    region: "The North",

    overlordId: 362
  },
  {
    id: 171,
    name: "House Grimm of Greyshield",
    seats: ["Grimston"],
    region: "The Reach",
    coatOfArms:
      "An iron escutcheon with silver studs on a grey-green field strewn with longships proper",

    titles: ["Lord of Greyshield"],
    currentLordId: 445,

    overlordId: 398
  },
  {
    id: 172,
    name: "House Haigh",

    region: "The Riverlands",
    coatOfArms:
      "A black pitchfork on a gold bend sinister, on a russet field(Tenné, on a bend sinister or a pitchfork sable)",

    overlordId: 143
  },
  {
    id: 173,
    name: "House Hamell",

    region: "The Westerlands",
    coatOfArms:
      "An erminois maunch, on a pink field with an erminois border(Carnation, a maunch within a bordure erminois)",

    overlordId: 229
  },
  {
    id: 174,
    name: "House Harclay",

    region: "The North",
    coatOfArms:
      "Azure, on a bend argent a hurt between an increscent and decrescent of the first",

    titles: ["Lord Harclay", "The Harclay"],

    overlordId: 34
  },
  {
    id: 175,
    name: "House Hardy",

    region: "The Crownlands",

    overlordId: 16
  },
  {
    id: 176,
    name: "House Hardyng",

    region: "The Vale",
    coatOfArms: "A field of red and white diamonds(Lozengy argent and gules)",

    overlordId: 417
  },
  {
    id: 177,
    name: "House Harlaw of Grey Garden",
    seats: ["Grey Garden, Harlaw"],
    region: "Iron Islands",
    coatOfArms: "Quartered: a silver scythe on black, a peacock on cream",

    titles: ["Knight of Grey Garden", "Lord of Greyshield"],
    currentLordId: 473,

    overlordId: 178
  },
  {
    id: 178,
    name: "House Harlaw of Harlaw",
    seats: ["Ten Towers"],
    region: "Iron Islands",
    coatOfArms: "Sable, a scythe argent",

    titles: ["Lord of Harlaw"],
    currentLordId: 914,

    heirId: 473,
    overlordId: 169
  },
  {
    id: 179,
    name: "House Harlaw of Harlaw Hall",
    seats: ["Harlaw Hall, Harlaw"],
    region: "Iron Islands",
    coatOfArms: "Per bend black and silver, two scythes counterchanged",

    titles: ["Master of Harlaw Hall"],
    currentLordId: 979,

    overlordId: 178
  },
  {
    id: 180,
    name: "House Harlaw of Harridan Hill",
    seats: ["Harridan Hill, Harlaw"],
    region: "Iron Islands",
    coatOfArms: "the Harlaw scythe on a pale blue field",

    titles: ["Master of Harridan Hill"],
    currentLordId: 201,

    overlordId: 178
  },
  {
    id: 181,
    name: "House Harlaw of the Tower of Glimmering",
    seats: ["Tower of Glimmering, Harlaw"],
    region: "Iron Islands",
    coatOfArms: "The Harlaw scythe girdled within an embattled border.",

    titles: ["Master of the Tower of Glimmering"],
    currentLordId: 505,

    overlordId: 178
  },
  {
    id: 182,
    name: "House Harlton",
    seats: ["Castlewood"],
    region: "The Riverlands",
    coatOfArms: "A silver tree on green",

    overlordId: 395
  },
  {
    id: 183,
    name: "House Harroway of Harrenhal",
    seats: ["Harrenhal"],
    region: "The Riverlands",
    coatOfArms:
      "Per bend sinister orange and sable rayonné, a castle counterchanged(Per bend sinister rayonné tenné and sable, a castle counterchanged)",

    titles: ["Lord of Harrenhal"],

    overlordId: 395
  },
  {
    id: 184,
    name: "House Harte",

    region: "The Crownlands",
    coatOfArms: "Three red hart's heads caboshed on a white bend on vair",

    overlordId: 16
  },
  {
    id: 185,
    name: "House Hastwyck",

    region: "The Reach",
    coatOfArms: "Barry olive and ivory",
    slogan: "None so Dutiful",

    overlordId: 398
  },
  {
    id: 186,
    name: "House Hasty",

    region: "The Stormlands",
    coatOfArms:
      "A white bend cotised, on a purple field(Purpure, a bend cotised argent)",

    overlordId: 17
  },
  {
    id: 187,
    name: "House Hawick of Saltpans",
    seats: ["Saltpans"],
    region: "The Riverlands",
    coatOfArms:
      "White seabirds strewn across a blue field(Azure, semé of seabirds argent)",

    overlordId: 10
  },
  {
    id: 188,
    name: "House Hawthorne",

    region: "The Westerlands",
    coatOfArms:
      "A ring of black thorns and a ring of pink flowers, interlocked, on a green field(Vert, two interlocking annulets, one composed of thorns sable, the other of flowers carnation)",

    overlordId: 229
  },
  {
    id: 189,
    name: "House Hayford of Hayford",
    seats: ["Hayford"],
    region: "The Crownlands",
    coatOfArms: "Green fretty over gold, a green pale wavy",

    titles: ["Lord of Hayford"],
    currentLordId: 382,

    overlordId: 16
  },
  {
    id: 190,
    name: "House Heddle",

    region: "The Riverlands",

    overlordId: 10
  },
  {
    id: 191,
    name: "House Herston",

    region: "The Stormlands",
    coatOfArms:
      "A yellow rooster's head with red comb, within a white escutcheon, on a red field(Gules, on an escutcheon argent, a cock's head or, combed and wattled of the field)",

    overlordId: 17
  },
  {
    id: 192,
    name: "House Hersy of Newkeep",
    seats: ["Newkeep"],
    region: "The Vale",
    coatOfArms:
      "A white winged chalice, on a pink field(Carnation, a winged cup displayed argent)",

    overlordId: 7
  },
  {
    id: 193,
    name: "House Hetherspoon",

    region: "The Westerlands",
    coatOfArms:
      "An oak spoon within a white cartouche, on a field of orange and black diamonds(Lozengy tenné and sable, on a cartouche argent a spoon or)",

    titles: ["Ser"],
    currentLordId: 1047,

    overlordId: 229
  },
  {
    id: 194,
    name: "House Hewett of Oakenshield",
    seats: ["Lord Hewett's castle on Oakenshield"],
    region: "The Reach",
    coatOfArms:
      "an oaken escutcheon studded with iron on a field bendy of undulating blue and white",

    titles: ["Lord of Oakenshield"],
    currentLordId: 515,

    overlordId: 398
  },
  {
    id: 195,
    name: "House Hightower of the Hightower",
    seats: ["The Hightower, Oldtown"],
    region: "The Reach",
    coatOfArms: "Cendrée, a tower argent with a beacon on fire gules",
    slogan: "We Light the Way",
    titles: [
      "Lord of the Hightower",
      "Lord of the Port",
      "Voice of Oldtown",
      "Defender of the Citadel",
      "Beacon of the South",
      "King of the High Tower (formerly)"
    ],
    currentLordId: 635,
    founderId: 2062,

    heirId: 159,
    overlordId: 398,

    ancestralWeapons: ["Vigilance"]
  },
  {
    id: 196,
    name: "House Hoare of Orkmont",
    seats: ["Orkmont", "Hoare Castle", "Fairmarket", "Harrenhal"],
    region: "Iron Islands",
    coatOfArms:
      "Per saltire, two heavy silver chains crossing between a gold longship on a black field, a dark green pine on a white field, a cluster of red grapes on a gold field, and a black raven flying in a blue sky.",

    titles: ["King of the Iron Islands", "King of the Isles and the Rivers"]
  },
  {
    id: 197,
    name: "House Hogg of Sow's Horn",
    seats: ["Sow's Horn"],
    region: "The Crownlands",

    titles: ["the Knight of Sow's Horn"],
    currentLordId: 1887,

    overlordId: 189
  },
  {
    id: 198,
    name: "House Hollard",

    region: "The Crownlands",
    coatOfArms: "Barry gules and carnation, a chief azure with three crowns Or",

    overlordId: 95
  },
  {
    id: 199,
    name: "House Holt",

    region: "Dorne",

    titles: ["High King of Dorne"]
  },
  {
    id: 200,
    name: "House Holt",

    region: "The North",

    overlordId: 34
  },
  {
    id: 201,
    name: "House Hook",
    seats: ["Extinct"],
    region: "The Riverlands"
  },
  {
    id: 202,
    name: "House Hornwood of Hornwood",
    seats: ["Hornwood"],
    region: "The North",
    coatOfArms: "Tenny, a bull moose trippant proper",
    slogan: "Righteous in Wrath",
    titles: ["Lord of the Hornwood"],

    overlordId: 362
  },
  {
    id: 203,
    name: "House Horpe",

    region: "The Stormlands",
    coatOfArms:
      "Per chevron engrailed grey and bone, three death's head moths counterchanged(Per chevron reversed engrailed cendrée and argent, three death's head moths counterchanged)",

    overlordId: 17
  },
  {
    id: 204,
    name: "House Hull",

    region: "Dorne",

    titles: ["High King of Dorne"]
  },
  {
    id: 205,
    name: "House Humble",

    region: "Iron Islands",

    overlordId: 169
  },
  {
    id: 206,
    name: "House Hunt",

    region: "The Reach",
    coatOfArms: "Argent, a deer bound and slung on a pole fesswise tenny",

    overlordId: 379
  },
  {
    id: 207,
    name: "House Hunter of Longbow Hall",
    seats: ["Longbow Hall"],
    region: "The Vale",
    coatOfArms:
      "Five silver arrows, fanned, on a brown field(Tenné, a sheaf of five arrows, points to chief, argent)",

    titles: ["Lord of Longbow Hall"],
    currentLordId: 426,

    heirId: 387,
    overlordId: 7
  },
  {
    id: 208,
    name: "House Hutcheson",

    region: "The Reach",
    coatOfArms:
      "Or, two bendlets between in base dexter a hand pointing to chief sinister, and in chief sinister a sun in splendour gules",

    overlordId: 398
  },
  {
    id: 209,
    name: "House Inchfield",

    region: "The Reach",
    coatOfArms: "Cendrée, a bend sinister chequy sable and argent",

    overlordId: 398
  },
  {
    id: 210,
    name: "House Ironmaker",

    region: "Iron Islands",

    currentLordId: 1372,

    overlordId: 169
  },
  {
    id: 211,
    name: "House Ironsmith",

    region: "The North",
    coatOfArms:
      "Or, a sword palewise between four horseshoes sable all within a bordure vert",

    overlordId: 34
  },
  {
    id: 212,
    name: "House Jast",

    region: "The Westerlands",
    coatOfArms:
      "An inverted yellow pall between three yellow lions' heads, on a black field(Sable, a pall reversed between three lions' heads erased or)",

    currentLordId: 124,

    overlordId: 229
  },
  {
    id: 213,
    name: "House Jordayne of the Tor",
    seats: ["The Tor"],
    region: "Dorne",
    coatOfArms: "Chequy light and dark green, a quill or.",
    slogan: "Let it be Written",
    titles: ["Lord of the Tor"],
    currentLordId: 1035,

    heirId: 776,
    overlordId: 285
  },
  {
    id: 214,
    name: "House Justman",

    region: "The Riverlands",
    coatOfArms:
      "Golden scales within a blue a double tressure, on a white field(Argent, a pair of balances or within a double-tressure azure)",

    titles: ["King of the Trident"],

    founderId: 178
  },
  {
    id: 215,
    name: "House Karstark of Karhold",
    seats: ["Karhold"],
    region: "The North",
    coatOfArms: "Sable, a sunburst argent",
    slogan: "The Sun of Winter",
    titles: ["Lord of Karhold"],
    currentLordId: 476,
    founderId: 603,

    heirId: 96,
    overlordId: 34
  },
  {
    id: 216,
    name: "House Keath",

    region: "The Riverlands",
    coatOfArms:
      "Quarterly of nine; a white fish on a grey field; a gold fish hook on a white field(Quarterly of nine, first, third, fifth, seventh and ninth cendrée, a fish argent; second, fourth, sixth and eight argent, a fish-hook or)"
  },
  {
    id: 217,
    name: "House Kellington",

    region: "The Stormlands",
    coatOfArms:
      "A black book bound in bronze, locked, on a pale blue field(Azure, a locked book sable, edged and garnished tenné)",

    overlordId: 17
  },
  {
    id: 218,
    name: "House Kenning of Harlaw",

    region: "Iron Islands",
    coatOfArms:
      "Sable, issuant from a cloud bank in chief the Storm God's hand cendrée with lightning flashing from its fingertip Or",

    overlordId: 178
  },
  {
    id: 219,
    name: "House Kenning of Kayce",
    seats: ["Kayce"],
    region: "The Westerlands",
    coatOfArms:
      "Four sunbursts counterchanged on a quartered orange and black field(Quarterly tenné and sable, four suns-in-splendour counterchanged)",

    titles: ["Lord of Kayce"],
    currentLordId: 1013,
    founderId: 492,

    overlordId: 229
  },
  {
    id: 220,
    name: "House Kettleblack",

    region: "The Crownlands",
    coatOfArms: "Gules, a kettle within an orle sable",

    overlordId: 16
  },
  {
    id: 221,
    name: "House Kidwell of Ivy Hall",
    seats: ["Ivy Hall"],
    region: "The Reach",
    coatOfArms: "Cendrée masoned sable, semy of ivy leaves vert",

    overlordId: 398
  },
  {
    id: 222,
    name: "House Knott",

    region: "The North",
    coatOfArms: "Argent, a saltire surmounted by a fret tenny",

    titles: ["The Knott"],

    overlordId: 34
  },
  {
    id: 223,
    name: "House Kyndall",

    region: "The Westerlands",

    overlordId: 229
  },
  {
    id: 224,
    name: "House Ladybright",

    region: "Dorne",

    overlordId: 285
  },
  {
    id: 225,
    name: "House Lake",

    region: "Dorne",

    titles: ["High King of Dorne"]
  },
  {
    id: 226,
    name: "House Lake",

    region: "The North",
    coatOfArms: "Tenny, seven pommes arranged 2-2-2-1",

    overlordId: 34
  },
  {
    id: 227,
    name: "House Langward",

    region: "The Crownlands",
    coatOfArms: "Per fess undy: A crown of white stars on burgundy above black",

    overlordId: 16
  },
  {
    id: 228,
    name: "House Lannett",

    region: "The Westerlands"
  },
  {
    id: 229,
    name: "House Lannister of Casterly Rock",
    seats: ["Casterly Rock"],
    region: "The Westerlands",
    coatOfArms: "A gold lion, on a crimson field(Gules, a lion or)",
    slogan: "Hear Me Roar!",
    titles: [
      "King of the Rock (formerly) Lord of Casterly Rock",
      "Shield of Lannisport",
      "Warden of the West"
    ],
    currentLordId: 238,
    founderId: 615,

    overlordId: 16,

    ancestralWeapons: ["Brightroar"]
  },
  {
    id: 230,
    name: "House Lannister of Darry",
    seats: ["Darry"],
    region: "The Riverlands",
    coatOfArms:
      "Quarterly, a gold lion on a red field; a black plowman on a brown field(Quarterly, first and fourth gules a lion rampant or (for Lannister), second and third tenné a plowman sable (for Darry))",

    titles: ["Lord of Darry"],
    currentLordId: 613,
    founderId: 613,

    overlordId: 10
  },
  {
    id: 231,
    name: "House Lannister of Lannisport",
    seats: ["Lannisport"],
    region: "The Westerlands",

    overlordId: 229
  },
  {
    id: 232,
    name: "House Lanny",

    region: "The Westerlands"
  },
  {
    id: 233,
    name: "House Lantell",

    region: "The Westerlands"
  },
  {
    id: 234,
    name: "House Lefford of the Golden Tooth",
    seats: ["Golden Tooth"],
    region: "The Westerlands",
    coatOfArms:
      "A golden inverted pile on a sky-blue field, a yellow sun in the first(Bleu celeste, a pile reversed or, in canton a sun-in-splendor of the same)",

    currentLordId: 103,

    overlordId: 229
  },
  {
    id: 235,
    name: "House Leygood",

    region: "The Reach",
    coatOfArms: "Tenny, three thunderbolts in fess sable",

    overlordId: 398
  },
  {
    id: 236,
    name: "House Liddle",

    region: "The North",
    coatOfArms:
      "Per pale argent and vert, a fir tree line between, three brown pinecones on the argent",

    titles: ["The Liddle", "Lord Liddle"],
    currentLordId: 1031,

    overlordId: 362
  },
  {
    id: 237,
    name: "House Lightfoot",

    region: "The North",
    coatOfArms: "Tenny, a trail of footprints in bend sinister argent",

    overlordId: 34
  },
  {
    id: 238,
    name: "House Lipps",

    region: "The Vale",
    coatOfArms:
      "Two large pink lips, on a dark blue field(Azure, a pair of lips carnation)",

    overlordId: 7
  },
  {
    id: 239,
    name: "House Locke of Oldcastle",
    seats: ["Oldcastle"],
    region: "The North",
    coatOfArms: "Two bronze keys crossed on an argent pale on purpure.",

    titles: ["Lord of Oldcastle"],
    currentLordId: 788,

    overlordId: 34
  },
  {
    id: 240,
    name: "House Lolliston",

    region: "The Riverlands",
    coatOfArms:
      "Three oaken barrels, on a white field(Argent, three oaken barrels proper)"
  },
  {
    id: 241,
    name: "House Long",

    region: "The North",

    overlordId: 34
  },
  {
    id: 242,
    name: "House Longthorpe of Longsister",
    seats: ["Longsister"],
    region: "The Vale",

    currentLordId: 1895,

    overlordId: 370
  },
  {
    id: 243,
    name: "House Longwaters",

    region: "The Crownlands",

    overlordId: 16
  },
  {
    id: 244,
    name: "House Lonmouth",

    region: "The Stormlands",
    coatOfArms:
      "Quartered of six: red lips strewn on a yellow field, yellow skulls strewn on a black field(Quarterly of six, first, third and fifth, or, semé of lips gules, second, fourth and sixth, sable, semé of skulls of the first)",
    slogan: "The Choice is Yours",

    overlordId: 17
  },
  {
    id: 245,
    name: "House Lorch",

    region: "The Westerlands",
    coatOfArms:
      "A black manticore on a white field, beneath a crimson chief with three gold coins(Argent, a manticore passant sable, on a chief gules three bezants)",

    currentLordId: 645,

    overlordId: 229
  },
  {
    id: 246,
    name: "House Lothston of Harrenhal",
    seats: ["Harrenhal"],
    region: "The Riverlands",
    coatOfArms:
      'A black bat on a field per bend, silver and gold(Per bend argent and or, a bat displayed sable")',

    titles: ["Lord of Harrenhal"],

    founderId: 656,

    overlordId: 395
  },
  {
    id: 247,
    name: "House Lowther",

    region: "The Reach",
    coatOfArms: "A silver dolphin on a blue-green field",

    overlordId: 398
  },
  {
    id: 248,
    name: "House Lyberr",

    region: "The Reach",
    coatOfArms:
      "Per bend sinister: a grey cat's face on black, a brown jug on white",

    overlordId: 398
  },
  {
    id: 249,
    name: "House Lychester",
    seats: ["Castle Lychester"],
    region: "The Riverlands",
    coatOfArms:
      "A black talon, on an orange and white gyronny field(Gyronny tenné and argent, an eagle's leg erased sable)",

    currentLordId: 674,

    overlordId: 10
  },
  {
    id: 250,
    name: "House Lydden of Deep Den",
    seats: ["Deep Den"],
    region: "The Westerlands",
    coatOfArms:
      "A white badger on a per pale green and brown field(Per pale vert and tenné, a badger passant argent)",

    titles: ["Lord of the Deep Den"],
    currentLordId: 632,

    overlordId: 229
  },
  {
    id: 251,
    name: "House Lynderly of the Snakewood",
    seats: ["Snakewood"],
    region: "The Vale",
    coatOfArms:
      "A black field strewn with green vipers(Sable, semé of snakes vert)",

    titles: ["Lord of the Snakewood"],
    currentLordId: 579,

    heirId: 1012,
    overlordId: 7
  },
  {
    id: 252,
    name: "House Magnar of Kingshouse",
    seats: ["Kingshouse"],
    region: "The North",
    coatOfArms: "Argent, a lobster vert holding a harpoon sable",

    overlordId: 34
  },
  {
    id: 253,
    name: "House Mallery",

    region: "The Crownlands",
    coatOfArms: "Purpure, six mullets argent",

    overlordId: 16
  },
  {
    id: 254,
    name: "House Mallister of Seagard",
    seats: ["Seagard"],
    region: "The Riverlands",
    coatOfArms:
      "A silver eagle, displayed, on an indigo field(Purpure, an eagle displayed argent)",
    slogan: "Above the Rest",
    titles: ["Lord of Seagard"],
    currentLordId: 539,

    heirId: 814,
    overlordId: 10
  },
  {
    id: 255,
    name: "House Manderly of White Harbor",
    seats: ["New Castle in White Harbor", "Dunstonbury (formerly)"],
    region: "The North",
    coatOfArms:
      "A white merman with dark green hair, beard and tail, carrying a black trident, on a blue-green field",

    titles: [
      "Lord of White Harbor",
      "Warden of the White Knife",
      "Shield of the Faith",
      "Defender of the Dispossessed",
      "Lord Marshal of the Mander",
      "Knight of the Order of the Green Hand",
      "Lord of Dunstonbury (formerly)"
    ],
    currentLordId: 1124,

    heirId: 1122,
    overlordId: 34
  },
  {
    id: 256,
    name: "House Manning",

    region: "The Crownlands",
    coatOfArms: "A red sea lion between two black pallets on white",

    overlordId: 16
  },
  {
    id: 257,
    name: "House Manwoody of Kingsgrave",
    seats: ["Kingsgrave"],
    region: "Dorne",
    coatOfArms: "Sable, a skull argent crowned or.",

    currentLordId: 279,

    heirId: 762,
    overlordId: 285
  },
  {
    id: 258,
    name: "House Marbrand of Ashemark",
    seats: ["Ashemark"],
    region: "The Westerlands",
    coatOfArms:
      "An orange burning tree, on a smoky field(Cendrée, a tree in flame tenné)",
    slogan: "Burning bright",

    currentLordId: 285,

    heirId: 31,
    overlordId: 229
  },
  {
    id: 259,
    name: "House Marsh",

    region: "The North",
    coatOfArms: "Or, ten frogs vert",

    overlordId: 34
  },
  {
    id: 260,
    name: "House Massey of Stonedance",
    seats: ["Stonedance"],
    region: "The Crownlands",
    coatOfArms: "A triple spiral; red, green and blue, on white",

    titles: ["Lord of Stonedance"],

    founderId: 698,

    overlordId: 16
  },
  {
    id: 261,
    name: "House Meadows of Grassy Vale",
    seats: ["Grassfield Keep in Grassy Vale"],
    region: "The Reach",
    coatOfArms: "a border of flowers of many colors and varieties on green",

    currentLordId: 369,

    overlordId: 17
  },
  {
    id: 262,
    name: "House Melcolm of Old Anchor",
    seats: ["Old Anchor"],
    region: "The Vale",
    coatOfArms:
      "A rusty anchor, on a turquoise field, beneath yellow chief with three blue plates(Azure, an anchor tenné, on a chief or three hurts)",

    overlordId: 7
  },
  {
    id: 263,
    name: "House Merlyn of Pebbleton",
    seats: ["Pebbleton"],
    region: "Iron Islands",
    coatOfArms: "Argent, Twining waterspouts vert",

    overlordId: 169
  },
  {
    id: 264,
    name: "House Merryweather of Longtable",
    seats: ["Longtable"],
    region: "The Reach",
    coatOfArms:
      "White, a cornucopia Or spilling foods proper within a bordure Or",
    slogan: "Behold Our Bounty",

    currentLordId: 796,

    heirId: 943,
    overlordId: 398
  },
  {
    id: 265,
    name: "House Mertyns of Mistwood",
    seats: ["Mistwood"],
    region: "The Stormlands",
    coatOfArms:
      "A white great horned owl on a grey field(Cendrée, a great-horned owl close affronté argent)",

    currentLordId: 728,

    overlordId: 17
  },
  {
    id: 266,
    name: "House Middlebury",

    region: "The Reach",
    coatOfArms:
      "Quarterly, a black saltire on yellow, green and white diamonds",

    overlordId: 398
  },
  {
    id: 267,
    name: "House Mollen",

    region: "The North",
    coatOfArms: "White, upon a pile vert a snowy pine tree proper",

    overlordId: 362
  },
  {
    id: 268,
    name: "House Moore",

    region: "The Vale",
    coatOfArms:
      "Three bronze spearheads, on a white field, within a bronze embattled border(Argent, three spearheads within a bordure embattled tenné)",

    overlordId: 7
  },
  {
    id: 269,
    name: "House Mooton of Maidenpool",
    seats: ["Maidenpool"],
    region: "The Riverlands",
    coatOfArms:
      "A red salmon within a gold tressure, on a white field(Argent, a salmon gules within a tressure or)",
    slogan: "Wisdom and Strength",
    titles: ["Lord of Maidenpool"],
    currentLordId: 1118,

    overlordId: 10
  },
  {
    id: 270,
    name: "House Moreland",

    region: "The Westerlands",
    coatOfArms:
      "Per pale barry russet and green(Per pale barry tenné and vert)",

    currentLordId: 907,
    founderId: 813,

    overlordId: 229
  },
  {
    id: 271,
    name: "House Mormont of Bear Island",
    seats: ["Bear Island"],
    region: "The North",
    coatOfArms: "A wood vert, a bear sable",
    slogan: "Here We Stand",
    titles: ["Lord of Bear Island"],
    currentLordId: 692,

    heirId: 99,
    overlordId: 362,

    ancestralWeapons: ["Longclaw"]
  },
  {
    id: 272,
    name: "House Morrigen of Crow's Nest",
    seats: ["Crow's Nest"],
    region: "The Stormlands",
    coatOfArms:
      "A black crow in flight on a storm-green field(Vert, a crow volant sable)",

    titles: ["Lord of Crow's Nest"],
    currentLordId: 630,

    heirId: 883,
    overlordId: 17
  },
  {
    id: 273,
    name: "House Moss",

    region: "The North",
    coatOfArms: "A bend orange on vairy grey and green",

    overlordId: 34
  },
  {
    id: 274,
    name: "House Mudd of Oldstones",
    seats: ["Oldstones"],
    region: "The Riverlands",
    coatOfArms:
      "A golden crown studded with emeralds, on a red-brown field(Tenné, an ancient crown or studded with emeralds vert)",

    titles: ["King of the Rivers and the Hills"]
  },
  {
    id: 275,
    name: "House Mullendore of Uplands",
    seats: ["Uplands"],
    region: "The Reach",
    coatOfArms: "Black-and-orange butterflies on white",

    titles: ["Lord of Uplands"],
    currentLordId: 726,

    overlordId: 195
  },
  {
    id: 276,
    name: "House Musgood",

    region: "The Stormlands",
    coatOfArms:
      "Quarterly: A golden pavilion on a blue field, a green laurel crown on a white field(Quarterly, first and fourth, azure, a pavilion or, second and third, argent, a garland of laurel vert)",

    overlordId: 17
  },
  {
    id: 277,
    name: "House Myatt",

    region: "The Westerlands",
    coatOfArms:
      "A spotted yellow-and-black treecat, on a mud-brown field(Tenné, a treecat or pelleté)",

    overlordId: 229
  },
  {
    id: 278,
    name: "House Myre of Harlaw",

    region: "Iron Islands",
    coatOfArms: "10 nooses, 4-3-2-1, black on white with a border of blood",

    overlordId: 178
  },
  {
    id: 279,
    name: "House Nayland of Hag's Mire",
    seats: ["Hag's Mire"],
    region: "The Riverlands",

    overlordId: 143
  },
  {
    id: 280,
    name: "House Netley",

    region: "Iron Islands",

    overlordId: 169
  },
  {
    id: 281,
    name: "House Norcross",

    region: "The Reach",
    coatOfArms: "Argent, a cross embattled sable",

    overlordId: 398
  },
  {
    id: 282,
    name: "House Norrey",

    region: "The North",
    coatOfArms: "Or,six thistles slipped vert",

    titles: ["The Norrey", "Lord Norrey"],
    currentLordId: 205,

    overlordId: 362
  },
  {
    id: 283,
    name: "House Norridge",

    region: "The Reach",
    coatOfArms: "Azure, six arrows in bend sable heads flaming gules",

    overlordId: 398
  },
  {
    id: 284,
    name: "House Nutt",

    region: "The Riverlands"
  },
  {
    id: 285,
    name: "House Nymeros Martell of Sunspear",
    seats: ["Old Palace within Sunspear"],
    region: "Dorne",
    coatOfArms:
      "Tenny, a sun in splendour gules transfixed by a spear bendwise Or",
    slogan: "Unbowed, Unbent, Unbroken",
    titles: ["Lord of the Sandship", "Lord of Sunspear", "Prince of Dorne"],
    currentLordId: 326,
    founderId: 1718,

    heirId: 130,
    overlordId: 16
  },
  {
    id: 286,
    name: "House Oakheart of Old Oak",
    seats: ["Old Oak"],
    region: "The Reach",
    coatOfArms: "Or, three oak leaves vert",
    slogan: "Our Roots Go Deep",

    currentLordId: 147,
    founderId: 570,

    overlordId: 398
  },
  {
    id: 287,
    name: "House Oldflowers",

    region: "The Reach",
    coatOfArms:
      "Vert, ten hands couped argent surmounted by a bend sinister gules",

    overlordId: 398
  },
  {
    id: 288,
    name: "House Orkwood of Orkmont",
    seats: ["Orkmont"],
    region: "Iron Islands",
    coatOfArms: "Or, semy of pines vert",

    overlordId: 169
  },
  {
    id: 289,
    name: "House Orme",

    region: "The Reach",
    coatOfArms:
      "Per fess sable and bendy Or and argent, in chief three harps in fess of the seocnd",

    overlordId: 398
  },
  {
    id: 290,
    name: "House Osgrey of Leafy Lake",
    seats: ["Extinct (formerly Leafy Lake)"],
    region: "The Reach",

    overlordId: 291
  },
  {
    id: 291,
    name: "House Osgrey of Standfast",
    seats: ["Standfast", "Coldmoat (formally)"],
    region: "The Reach",
    coatOfArms: "Argent, a lion rampant chequy vert and or",

    titles: [
      "Knight of Standfast",
      "Marshall of the Northmarch (pre-Conquest)"
    ],

    overlordId: 326
  },
  {
    id: 292,
    name: "House Overton",

    region: "The North",
    coatOfArms: "Sable, a fess chequy argent and Or",

    overlordId: 34
  },
  {
    id: 293,
    name: "House Paege",

    region: "The Riverlands",
    coatOfArms:
      "Twining red-and-white snakes, on a black field(Sable, two serpents argent and gules entwined palewise)",

    currentLordId: 462,

    overlordId: 10
  },
  {
    id: 294,
    name: "House Parren",

    region: "The Westerlands",
    coatOfArms:
      "Per saltire: burgundy and white stripes; a black lion's head on a gold field(Per saltire, the first paly gules and argent, the second or, a lion's head erased sable)",

    overlordId: 229
  },
  {
    id: 295,
    name: "House Payne",

    region: "The Westerlands",
    coatOfArms:
      "Gold coins in the checks of a checkered purple and white field(Chequy purpure and argent, each chequer charged with a bezant)",

    overlordId: 229
  },
  {
    id: 296,
    name: "House Peake of Starpike",
    seats: ["Starpike", "Whitegrove (formerly)"],
    region: "The Reach",
    coatOfArms: "Tenny, three castles sable",

    titles: ["Lord of Starpike"],
    currentLordId: 1027,

    overlordId: 398
  },
  {
    id: 297,
    name: "House Peasebury of Poddingfield",
    seats: ["Poddingfield"],
    region: "The Stormlands",
    coatOfArms:
      "A green pea pod, burst open, on a white field, bordered by three rows of green peas(Argent, a pea pod open within a bordure of three rows of peas vert)",

    titles: ["Lord of Poddingfield"],
    currentLordId: 908,

    overlordId: 15
  },
  {
    id: 298,
    name: "House Peat",

    region: "The Neck",

    overlordId: 318
  },
  {
    id: 299,
    name: "House Peckledon",

    region: "The Westerlands",
    coatOfArms:
      "Ten purple stars, on a yellow field(Or, ten mullets, 4, 3, 2, 1, purpure)",
    slogan: "Unflinching",

    overlordId: 229
  },
  {
    id: 300,
    name: "House Penrose of Parchments",
    seats: ["Parchments"],
    region: "The Stormlands",
    coatOfArms:
      "White crossed quills, on a russet field(Tenné, two quills saltirewise argent)",
    slogan: "Set Down Our Deeds",
    titles: ["Lord of Parchments"],

    overlordId: 17
  },
  {
    id: 301,
    name: "House Perryn",

    region: "The Riverlands"
  },
  {
    id: 302,
    name: "House Piper of Pinkmaiden",
    seats: ["Pinkmaiden Castle"],
    region: "The Riverlands",
    coatOfArms:
      "A pink dancing maiden in a swirl of white silk, on a blue field(Azure, a maiden dancing proper enwrapped with silk argent)",
    slogan: "Brave and Beautiful",

    currentLordId: 245,

    heirId: 721,
    overlordId: 10
  },
  {
    id: 303,
    name: "House Plumm",

    region: "The Westerlands",
    coatOfArms: "Three purple roundels, on a gold field(Or, three golpes)",
    slogan: "Come Try Me",

    currentLordId: 826,

    heirId: 299,
    overlordId: 229
  },
  {
    id: 304,
    name: "House Pommingham",

    region: "The Reach",
    coatOfArms: "A red pomegranate on white, a double tressure red",

    overlordId: 398
  },
  {
    id: 305,
    name: "House Poole",

    region: "The North",
    coatOfArms: "White, a roundel azure, a tressure cendrée",

    overlordId: 34
  },
  {
    id: 306,
    name: "House Prester of Feastfires",
    seats: ["Feastfires"],
    region: "The Westerlands",
    coatOfArms: "A red ox, on an ermine field(Ermine, an ox passant gules)",
    slogan: "Tireless",
    titles: ["Lord of Feastfires"],
    currentLordId: 403,

    overlordId: 229
  },
  {
    id: 307,
    name: "House Pryor of Pebble",
    seats: ["Pebble"],
    region: "The Vale",
    coatOfArms:
      "A partial eclipse, black moon over yellow sun, on a dusty pink field(Carnation, a sun-in-splendour or surmounted by a moon in her complement sable)",

    overlordId: 7
  },
  {
    id: 308,
    name: "House Pyle",

    region: "The Crownlands",
    coatOfArms: "A grey iron greathelm on white",

    overlordId: 16
  },
  {
    id: 309,
    name: "House Pyne",

    region: "The Crownlands",

    overlordId: 16
  },
  {
    id: 310,
    name: "House Qoherys of Harrenhal",
    seats: ["Harrenhal"],
    region: "The Riverlands",
    coatOfArms:
      "A flaming red and yellow saltire between four white skulls, on a black field(Sable, a saltire rayonné gules, tipped or, between four skulls argent)",

    titles: ["Lord of Harrenhal"],

    founderId: 841,

    overlordId: 395
  },
  {
    id: 311,
    name: "House Qorgyle of Sandstone",
    seats: ["Sandstone"],
    region: "Dorne",
    coatOfArms: "Gules, three scorpions sable.",

    titles: ["Lord of Sandstone"],
    currentLordId: 845,

    heirId: 441,
    overlordId: 285
  },
  {
    id: 312,
    name: "House Quagg",

    region: "The Neck",

    overlordId: 318
  },
  {
    id: 313,
    name: "House Rambton",

    region: "The Crownlands",
    coatOfArms: "Gules, a ram's head cabossed argent attired or",

    overlordId: 372
  },
  {
    id: 314,
    name: "House Redbeard",

    region: "Beyond the Wall",

    titles: ["King of the Wildlings"],
    currentLordId: 1423,

    overlordId: 15
  },
  {
    id: 315,
    name: "House Redding",

    region: "The Reach",
    coatOfArms: "Gules, a flagon Or within a bordure chequy Or and argent",

    overlordId: 398
  },
  {
    id: 316,
    name: "House Redfort of Redfort",
    seats: ["Redfort"],
    region: "The Vale",
    coatOfArms:
      "A red castle, on a white field, within a red embattled border(Argent, a castle within a bordure embattled gules)",
    slogan: "As Strong as Stone",
    titles: ["Lord of Redfort"],
    currentLordId: 499,

    overlordId: 7
  },
  {
    id: 317,
    name: "House Redwyne of the Arbor",
    seats: ["The Arbor"],
    region: "The Reach",
    coatOfArms: "Azure, a grape cluster proper",

    titles: ["Lord of the Arbor", "King of the Arbor (formerly)"],
    currentLordId: 815,
    founderId: 425,

    heirId: 498,
    overlordId: 398
  },
  {
    id: 318,
    name: "House Reed of Greywater Watch",
    seats: ["Greywater Watch"],
    region: "The Neck",
    coatOfArms: "Vert, a lizard-lion sable",

    currentLordId: 506,

    heirId: 571,
    overlordId: 362
  },
  {
    id: 319,
    name: "House Reyne of Castamere",
    seats: ["Castamere"],
    region: "The Westerlands",
    coatOfArms:
      "A red lion rampant regardant with a forked tail, with gold teeth and claws, on a silver field(Argent, a lion rampant regardant queue-fourché gules, armed and langued or)",

    titles: ["Lord of Castamere"],

    overlordId: 229
  },
  {
    id: 320,
    name: "House Rhysling",

    region: "The Reach",
    coatOfArms:
      "An oaken door banded with iron, in a grey stone doorway, on black masonry",

    overlordId: 398
  },
  {
    id: 321,
    name: "House Risley",

    region: "The Reach",
    coatOfArms:
      "A black knight on a black rearing horse on white, bearing a golden lance and a white shield, upon which is seen the above in miniature",

    overlordId: 398
  },
  {
    id: 322,
    name: "House Rogers of Amberly",
    seats: ["Amberly"],
    region: "The Stormlands",
    coatOfArms:
      "Nine silver unicorns around a silver maze, on a black field(Sable, a maze surrounded by an orle of nine unicorns rampant argent)",

    overlordId: 17
  },
  {
    id: 323,
    name: "House Rollingford",

    region: "The Crownlands",
    coatOfArms: "Six roundels fountain, 3-2-1, on grey",

    overlordId: 16
  },
  {
    id: 324,
    name: "House Roote of Lord Harroway's Town",
    seats: ["Lord Harroway's Town"],
    region: "The Riverlands",
    coatOfArms:
      "A brown double-headed horse on a field of wavy green and green(Wavy vert and vert, a two-headed horse tenné)",

    overlordId: 10
  },
  {
    id: 325,
    name: "House Rosby of Rosby",
    seats: ["Rosby"],
    region: "The Crownlands",
    coatOfArms: "Ermine, three chevronels gules",

    titles: ["Lord of Rosby"],
    currentLordId: 458,

    overlordId: 16
  },
  {
    id: 326,
    name: "House Rowan of Goldengrove",
    seats: ["Goldengrove"],
    region: "The Reach",
    coatOfArms: "Argent, a tree eradicated",

    titles: ["Lord of Goldengrove and Marshall of the Northmarch"],
    currentLordId: 731,
    founderId: 1908,

    overlordId: 398
  },
  {
    id: 327,
    name: "House Roxton of the Ring",
    seats: ["The Ring"],
    region: "The Reach",
    coatOfArms: "Bleu celeste, per saltire a chain of rings Or",

    overlordId: 398,

    ancestralWeapons: ["Orphan-Maker"]
  },
  {
    id: 328,
    name: "House Royce of Runestone",
    seats: ["Runestone"],
    region: "The Vale",
    coatOfArms:
      "Black iron studs on a bronze field, bordered with runes(Tenné pelletée, an orle of ancient runes sable)",
    slogan: "We Remember",
    titles: [
      "High King of the Vale, the Fingers and the Mountains of the Moon (formerly)",
      "Lord of Runestone"
    ],
    currentLordId: 1131,

    heirId: 116,
    overlordId: 7,

    ancestralWeapons: ["Lamentation"]
  },
  {
    id: 329,
    name: "House Royce of the Gates of the Moon",
    seats: ["Gates of the Moon"],
    region: "The Vale",
    coatOfArms:
      "A black portcullis over a white crescent moon, on a purple field, bordered with runes on bronze(Purpure, a moon increscent argent surmounted by a portcullis sable, all within a bordure tenné charged with ancient runes of the third)",

    titles: ["Lord of the Gates of the Moon"],
    currentLordId: 1755,

    heirId: 67,
    overlordId: 7
  },
  {
    id: 330,
    name: "House Ruthermont",

    region: "The Vale",
    coatOfArms:
      "Five black starfish on a gold pale, on a field of pean(Pean, on a pale or five starfish sable)",

    overlordId: 7
  },
  {
    id: 331,
    name: "House Ruttiger",

    region: "The Westerlands",
    coatOfArms:
      "An orange engrailed bend, on a black field(Sable, a bend tenné engrailed)",

    currentLordId: 857,

    overlordId: 229
  },
  {
    id: 332,
    name: "House Ryder of the Rills",
    seats: ["Rills"],
    region: "The North",

    overlordId: 362
  },
  {
    id: 333,
    name: "House Ryger of Willow Wood",
    seats: ["Willow Wood"],
    region: "The Riverlands",
    coatOfArms:
      "A green weeping willow, on a white field(Argent, a willow-tree vert)",

    overlordId: 10
  },
  {
    id: 334,
    name: "House Rykker of Duskendale",
    seats: ["The Dun Fort"],
    region: "The Crownlands",
    coatOfArms:
      "Azure, a cross saltire argent charged with two crossed warhammers sable",

    titles: ["Lord of Duskendale"],
    currentLordId: 861,

    overlordId: 16
  },
  {
    id: 335,
    name: "House Ryswell of the Rills",

    region: "The North",
    coatOfArms:
      "Bronze, a horse's head sable orbed and maned gules within a bordure engrailed sable",

    titles: ["Lord of the Rills"],
    currentLordId: 915,

    overlordId: 34
  },
  {
    id: 336,
    name: "House Saltcliffe of Saltcliffe",
    seats: ["Saltcliffe"],
    region: "Iron Islands",
    coatOfArms: "Argent, a serpent nine-headed sable",

    currentLordId: 323,

    overlordId: 169
  },
  {
    id: 337,
    name: "House Santagar of Spottswood",
    seats: ["Spottswood"],
    region: "Dorne",
    coatOfArms:
      "Per bend sinister azure and argent, a leopard rampant Or spotted sable bearing an axe of the third",

    titles: ["the Knight of Spottswood"],
    currentLordId: 1002,

    heirId: 999,
    overlordId: 285
  },
  {
    id: 338,
    name: "House Sarsfield of Sarsfield",
    seats: ["Sarsfield"],
    region: "The Westerlands",
    coatOfArms:
      "A green arrow on a white bend, on a green field(Vert, on a bend argent an arrow of the field, point to dexter chief)",
    slogan: "True to the Mark",

    overlordId: 229
  },
  {
    id: 339,
    name: "House Sarwyck",
    seats: ["Riverspring"],
    region: "The Westerlands",
    coatOfArms: "A broken silver sword on red",

    overlordId: 229
  },
  {
    id: 340,
    name: "House Seaworth of Cape Wrath",

    region: "The Stormlands",
    coatOfArms:
      "A black ship on a pale grey field, with a white onion on its sails(Cendrée, a ship sable, its sail charged with an onion argent)",

    currentLordId: 1319,
    founderId: 1319,

    heirId: 308,
    overlordId: 15
  },
  {
    id: 341,
    name: "House Selmy of Harvest Hall",
    seats: ["Harvest Hall"],
    region: "The Stormlands",
    coatOfArms:
      "Three stalks of yellow wheat, on a brown field(Tenné, three stalks of wheat or)",

    titles: ["Lord of Harvest Hall"],
    currentLordId: 139,

    overlordId: 17
  },
  {
    id: 342,
    name: "House Serrett of Silverhill",
    seats: ["Silverhill"],
    region: "The Westerlands",
    coatOfArms:
      "A peacock in his pride, on a cream field(Argent, a peacock-in-his-pride proper)",
    slogan: "I Have No Rival",

    overlordId: 229
  },
  {
    id: 343,
    name: "House Serry of Southshield",
    seats: ["Southshield"],
    region: "The Reach",
    coatOfArms:
      "Argent, an escutcheon gules charged with a rose of the first all within a bordure embattled of the second",

    currentLordId: 798,

    heirId: 1007,
    overlordId: 398
  },
  {
    id: 344,
    name: "House Sharp",

    region: "Iron Islands",

    overlordId: 169
  },
  {
    id: 345,
    name: "House Shawney",

    region: "The Riverlands",
    coatOfArms:
      "Per fesse, a divided blue, red, green field above, a white catfish on a black field below(Per fesse, the first tierced in pale azure, gules and vert, the second sable, a catfish argent)",

    overlordId: 395
  },
  {
    id: 346,
    name: "House Shell",

    region: "Dorne",

    titles: ["High King of Dorne"]
  },
  {
    id: 347,
    name: "House Shell",

    region: "The Vale",

    titles: ["King of the Fingers"]
  },
  {
    id: 348,
    name: "House Shepherd",

    region: "Iron Islands",

    overlordId: 169
  },
  {
    id: 349,
    name: "House Shermer of Smithyton",
    seats: ["Smithyton"],
    region: "The Reach",
    coatOfArms: "a field of copper nails on blue, a copper border rayonne",

    overlordId: 398
  },
  {
    id: 350,
    name: "House Shett of Gull Tower",
    seats: ["Gull Tower"],
    region: "The Vale",
    coatOfArms:
      "Three golden wings, bendwise, on a checkered white and black field(Chequy argent and sable, in bend three dexter wings elevated bendwise or)",

    titles: ["the Knight of Gull Tower"],
    currentLordId: 287,

    overlordId: 328
  },
  {
    id: 351,
    name: "House Shett of Gulltown",
    seats: ["Gulltown"],
    region: "The Vale",
    coatOfArms:
      "Nine white seagulls on a field of brown(Tenné, nine seagulls argent, 3, 3, 2, 1)",

    overlordId: 160
  },
  {
    id: 352,
    name: "House Slate of Blackpool",
    seats: ["Blackpool"],
    region: "The North",
    coatOfArms: "Pale grey, a double tressure white",

    overlordId: 34
  },
  {
    id: 353,
    name: "House Sloane",

    region: "The Reach",
    coatOfArms:
      "Per pale, white stars strewn on indigo, an orange sun on yellow",

    overlordId: 398
  },
  {
    id: 354,
    name: "House Slynt of Harrenhal",
    seats: ["None, formerly Harrenhal"],
    region: "None",
    coatOfArms:
      "A bloody gold spear, on a black field, within a checkered gold and black border(Sable, a spear or, tipped gules, within a bordure chequy of the field and of the second)",

    currentLordId: 761,
    founderId: 533,

    heirId: 599,
    overlordId: 16
  },
  {
    id: 355,
    name: "House Smallwood of Acorn Hall",
    seats: ["Acorn Hall"],
    region: "The Riverlands",
    coatOfArms:
      "Six brown acorns, on a yellow field(Or, six acorns, 3, 2, 1, tenné)",
    slogan: "From These Beginnings",
    titles: ["Lord of Acorn Hall"],
    currentLordId: 1020,

    overlordId: 405
  },
  {
    id: 356,
    name: "House Sparr of Great Wyk",
    seats: ["Great Wyk"],
    region: "Iron Islands",
    coatOfArms: "an oak saltire on blue",

    currentLordId: 1015,

    overlordId: 169
  },
  {
    id: 357,
    name: "House Spicer of Castamere",
    seats: ["Castamere"],
    region: "The Westerlands",
    coatOfArms:
      "Three black pepperpots on a saffron bend, across a field of green and silver stripes (Paly vert and argent, three pepperpots sable on a bend tenné)",

    titles: ["Lord of Castamere"],
    currentLordId: 927,

    heirId: 997,
    overlordId: 229
  },
  {
    id: 358,
    name: "House Stackhouse",

    region: "The Reach",

    overlordId: 398
  },
  {
    id: 359,
    name: "House Stackspear",

    region: "The Westerlands",
    coatOfArms:
      "Two crossed black spears, on a checkered silver and gold field(Chequy argent and or, two spears in saltire sable)",

    currentLordId: 965,

    heirId: 991,
    overlordId: 229
  },
  {
    id: 360,
    name: "House Staedmon of Broad Arch",
    seats: ["Broad Arch"],
    region: "The Stormlands",
    coatOfArms:
      "A black dagger piercing a red heart on a white de sang field, within an undulating red border(Argent goutté-de-sang, a heart gules transfixed by a dagger sable, all within a bordure wavy of the second)",

    currentLordId: 71,

    overlordId: 17
  },
  {
    id: 361,
    name: "House Stane of Driftwood Hall",
    seats: ["Driftwood Hall"],
    region: "The North",
    coatOfArms: "A driftwood tree, bare and brown, on pale green",

    overlordId: 34
  },
  {
    id: 362,
    name: "House Stark of Winterfell",
    seats: ["Scattered (formerly Winterfell)"],
    region: "The North",
    coatOfArms: "A running grey direwolf, on an ice-white field",
    slogan: "Winter is Coming",
    titles: [
      "King in the North",
      "Lord of Winterfell",
      "Warden of the North",
      "King of the Trident"
    ],

    founderId: 209,

    overlordId: 16,

    ancestralWeapons: ["Ice"]
  },
  {
    id: 363,
    name: "House Staunton of Rook's Rest",
    seats: ["Rook's Rest"],
    region: "The Crownlands",
    coatOfArms: "two black wings upon a white fess on checkered black and grey",

    overlordId: 15
  },
  {
    id: 364,
    name: "House Stokeworth of Stokeworth",
    seats: ["Stokeworth"],
    region: "The Crownlands",
    coatOfArms: "Vert, a lamb couchant argent holding a goblet or",
    slogan: "Proud to be Faithful",
    titles: ["Lord of Stokeworth"],
    currentLordId: 638,

    heirId: 2043,
    overlordId: 16
  },
  {
    id: 365,
    name: "House Stonehouse of Old Wyk",
    seats: ["Old Wyk"],
    region: "Iron Islands",
    coatOfArms: "a black brazier on a grey masonry field",

    currentLordId: 1016,

    overlordId: 169
  },
  {
    id: 366,
    name: "House Stonetree of Harlaw",

    region: "Iron Islands",
    coatOfArms: "A bare stone tree, grey on black",

    overlordId: 178
  },
  {
    id: 367,
    name: "House Stout of Goldgrass",
    seats: ["Goldgrass"],
    region: "The North",
    coatOfArms: "Chevronny tenné and Or",

    titles: ["Lord of Goldgrass"],
    currentLordId: 483,

    overlordId: 111
  },
  {
    id: 368,
    name: "House Strickland",

    region: "",

    currentLordId: 480
  },
  {
    id: 369,
    name: "House Strong of Harrenhal",
    seats: ["Harrenhal"],
    region: "The Riverlands",
    coatOfArms:
      "A tripartite pale, blue, red, and green, on a white field(Argent, a pale tierced per pale azure, gules, and vert)",

    titles: ["Lord of Harrenhal"],

    overlordId: 395
  },
  {
    id: 370,
    name: "House Sunderland of the Three Sisters",
    seats: ["Sisterton"],
    region: "The Vale",
    coatOfArms:
      "Three women's heads, white with black hair, on a barry wavy blue and green field(Barry wavy azure and vert, three women's heads argents, crined sable)",

    currentLordId: 1042,

    overlordId: 7
  },
  {
    id: 371,
    name: "House Sunderly of Saltcliffe",

    region: "Iron Islands",
    coatOfArms:
      "A drowned man, pink and pale, floating upright in a blue-green sea",

    overlordId: 169
  },
  {
    id: 372,
    name: "House Sunglass of Sweetport Sound",
    seats: ["Sweetport Sound"],
    region: "The Crownlands",
    coatOfArms: "Argent, seven mullets of seven points or",

    titles: ["Lord of Sweetport Sound"],

    overlordId: 15
  },
  {
    id: 373,
    name: "House Swann of Stonehelm",
    seats: ["Stonehelm"],
    region: "The Stormlands",
    coatOfArms:
      "Battling swans black and white, beaks and feet golden, on per pale white and black field(Per pale argent and sable, two swans combatant counterchanged, beaked and membered or)",

    titles: ["Lord of Stonehelm"],
    currentLordId: 442,

    heirId: 322,
    overlordId: 17
  },
  {
    id: 374,
    name: "House Swyft of Cornfield",
    seats: ["Cornfield"],
    region: "The Westerlands",
    coatOfArms:
      "A blue bantam rooster, on a yellow field(Or, a cock close azure)",
    slogan: "Awake! Awake!",
    titles: ["Knight of Cornfield"],
    currentLordId: 487,

    heirId: 992,
    overlordId: 229
  },
  {
    id: 375,
    name: "House Swygert",

    region: "The Stormlands",
    coatOfArms:
      "A white scroll with gold knobs, on a purple field within a white tressure(Purpure a scroll argent, knobbed or, within a tressure of the second)",
    slogan: "Truth Conquers",

    overlordId: 17
  },
  {
    id: 376,
    name: "House Tallhart of Torrhen's Square",
    seats: ["Torrhen's Square"],
    region: "The North",
    coatOfArms: "Tenny, three sentinel trees vert",
    slogan: "Proud and Free",
    titles: ["Master of Torrhen's Square"],
    currentLordId: 337,

    heirId: 214,
    overlordId: 34
  },
  {
    id: 377,
    name: "House Tarbeck of Tarbeck Hall",
    seats: ["Tarbeck Hall"],
    region: "The Westerlands",
    coatOfArms:
      "A seven-pointed star, parts silver parts blue, on a silver and blue field(Gyronny argent and azure, a star of seven points counterchanged)",

    titles: ["Lord of Tarbeck Hall"],

    overlordId: 229
  },
  {
    id: 378,
    name: "House Targaryen of King's Landing",
    seats: ["Red Keep (formerly)", "Summerhall (formerly)"],
    region: "The Crownlands",
    coatOfArms: "Sable, a dragon thrice-headed gules",
    slogan: "Fire and Blood",
    titles: [
      "King of the Andals, the Rhoynar and the First Men",
      "Lord of the Seven Kingdoms",
      "Prince of Summerhall"
    ],
    currentLordId: 1303,

    ancestralWeapons: ["Blackfyre", "Dark Sister"]
  },
  {
    id: 379,
    name: "House Tarly of Horn Hill",
    seats: ["Horn Hill"],
    region: "The Reach",
    coatOfArms: "Vert, a huntsman striding to dexter proper garbed gules",
    slogan: "First in Battle",
    titles: ["Lord of Horn Hill"],
    currentLordId: 850,

    heirId: 313,
    overlordId: 398,

    ancestralWeapons: ["Heartsbane"]
  },
  {
    id: 380,
    name: "House Tarth of Evenfall Hall",
    seats: ["Evenfall Hall"],
    region: "The Stormlands",
    coatOfArms:
      "Quartered, yellow sun on a rose-coloured field and white crescents on a blue field(Quarterly, first and fourth, carnation, a sun-in-splendour or, second and third, azure, a moon increscent argent)",

    titles: ["Lord of Tarth", "The Evenstar"],
    currentLordId: 966,

    heirId: 216,
    overlordId: 17
  },
  {
    id: 381,
    name: "House Tawney of Orkmont",
    seats: ["Orkmont"],
    region: "Iron Islands",
    coatOfArms: "A scourge of nettles, red and black, on white",

    overlordId: 169
  },
  {
    id: 382,
    name: "House Teague",

    region: "The Riverlands",
    coatOfArms:
      "A golden trident upright between two golden flanches, on a black field(Sable, between two flaunches a trident erect or)",

    titles: ["King of the Trident"],

    founderId: 1032
  },
  {
    id: 383,
    name: "House Templeton",
    seats: ["Ninestars"],
    region: "",
    coatOfArms:
      "Nine stars, one of seven points and eight of six points, on a gold saltire, on a black field(Sable, on a saltire or, nine mullets of the field, that in fesse-point of seven points, all others of six points)",

    titles: ["The Knight of Ninestars"],
    currentLordId: 1005,

    overlordId: 7
  },
  {
    id: 384,
    name: "House Terrick",

    region: "The Riverlands",
    coatOfArms:
      "Per saltire purple and gold, four hawks' heads countercharged(Per saltire purpure and or, four hawks' heads counterchanged)"
  },
  {
    id: 385,
    name: "House Thenn",

    region: "The North",
    coatOfArms: "Argent, a sun in splendour gules",

    titles: ["Magnar of Thenn"],
    currentLordId: 980
  },
  {
    id: 386,
    name: "House Thorne",

    region: "The Crownlands",
    coatOfArms: "Gules, a flail argent within an bordure rayonne sable",

    overlordId: 16
  },
  {
    id: 387,
    name: "House Toland of Ghost Hill",
    seats: ["Ghost Hill"],
    region: "Dorne",
    coatOfArms: "Or, a dragon biting its tail vert",

    currentLordId: 781,

    overlordId: 285
  },
  {
    id: 388,
    name: "House Tollett of the Grey Glen",
    seats: ["The Grey Glen"],
    region: "The Vale",
    coatOfArms: "Pily grey and black(Pily cendrée and sable)",
    slogan: "When All is Darkest",
    titles: ["Lord of the Grey Glen"],
    currentLordId: 1064,

    overlordId: 328
  },
  {
    id: 389,
    name: "House Torrent of Littlesister",
    seats: ["Littlesister"],
    region: "The Vale",

    titles: ["Lord of Littlesister"],
    currentLordId: 1150,

    overlordId: 370
  },
  {
    id: 390,
    name: "House Towers",

    region: "The North"
  },
  {
    id: 391,
    name: "House Towers of Harrenhal",
    seats: ["Harrenhal"],
    region: "The Riverlands",
    coatOfArms:
      "Five black towers within a red and black double tressure, on a white field(Argent, five towers sable within a double-tressure, the outer gules and the inner of the second)",

    overlordId: 395
  },
  {
    id: 392,
    name: "House Toyne",

    region: "The Stormlands",
    coatOfArms:
      "A black winged heart, on a gold field, within a black embattled borderOr, a winged heart within a bordure embattled sable)",
    slogan: "Fly High, Fly Far",

    overlordId: 17
  },
  {
    id: 393,
    name: "House Trant of Gallowsgrey",
    seats: ["Gallowsgrey"],
    region: "The Stormlands",
    coatOfArms:
      "A black hanged man, on a blue field(Azure, a hanged man sable)",
    slogan: "So End Our Foes",
    titles: ["Lord of Gallowsgrey"],

    overlordId: 17
  },
  {
    id: 394,
    name: "House Tudbury",

    region: "The Stormlands",
    coatOfArms:
      "A brown tortoise within a yellow lozenge, on a green field(Vert, on a lozenge or a tortoise tergiant tenné)",

    overlordId: 17
  },
  {
    id: 395,
    name: "House Tully of Riverrun",
    seats: ["Scattered (formerly Riverrun)"],
    region: "The Riverlands",
    coatOfArms:
      "A leaping silver trout on a field of blue and mud red(Paly wavy azure and gules, a trout embowed argent)",
    slogan: "Family, Duty, Honor",
    titles: ["Lord of Riverrun", "Lord Paramount of the Trident"],
    currentLordId: 346,

    heirId: 894,
    overlordId: 362
  },
  {
    id: 396,
    name: "House Turnberry",

    region: "The Westerlands",
    coatOfArms:
      "Nine strawberries on a white saltire, on a field of green and red vairy in point(Vairy-in-point vert and gules, on a saltire argent nine strawberries of the second)",

    overlordId: 229
  },
  {
    id: 397,
    name: "House Tyrell of Brightwater Keep",
    seats: ["Brightwater Keep (disputed by House Florent)"],
    region: "The Reach",

    titles: ["Lord of Brightwater Keep"],
    currentLordId: 401,
    founderId: 401,

    overlordId: 398
  },
  {
    id: 398,
    name: "House Tyrell of Highgarden",
    seats: ["Highgarden"],
    region: "The Reach",
    coatOfArms: "Vert, a rose Or",
    slogan: "Growing Strong",
    titles: [
      "Lord of Highgarden",
      "Defender of the Marches",
      "High Marshal of the Reach",
      "Warden of the South",
      "Lord Paramount of the Mander",
      "High Steward of Highgarden (pre-Conquest)"
    ],
    currentLordId: 691,
    founderId: 75,

    heirId: 1113,
    overlordId: 16
  },
  {
    id: 399,
    name: "House Uffering",

    region: "The Reach",
    coatOfArms:
      "Paly tenné and cendrée, upon a chief argent seven hands couped vert",

    overlordId: 398
  },
  {
    id: 400,
    name: "House Uller of Hellholt",
    seats: ["Hellholt"],
    region: "Dorne",
    coatOfArms: "per fess rayonny Or and gules",

    titles: ["Lord of Hellholt"],
    currentLordId: 470,

    overlordId: 285
  },
  {
    id: 401,
    name: "House Umber of the Last Hearth",
    seats: ["The Last Hearth"],
    region: "The North",
    coatOfArms: "Gules, a roaring giant proper with shattered chains argent",

    titles: ["Lord of the Last Hearth"],
    currentLordId: 585,

    overlordId: 362
  },
  {
    id: 402,
    name: "House Upcliff",
    seats: ["Witch Isle"],
    region: "The Vale",
    coatOfArms:
      "A cresting sea-green wave, on a black field(Sable, a wave cresting vert)",

    overlordId: 7
  },
  {
    id: 403,
    name: "House Vaith of the Red Dunes",
    seats: ["Vaith"],
    region: "Dorne",
    coatOfArms: "Tenny, on a pile Or three leopards statant sable",

    titles: ["Lord of the Red Dunes"],
    currentLordId: 277,

    overlordId: 285
  },
  {
    id: 404,
    name: "House Vance of Atranta",
    seats: ["Atranta"],
    region: "The Riverlands",
    coatOfArms:
      "Quartered, a green dragon on a white field and a white tower on a black field(Quarterly, first and fourth, argent, a dragon vert, second and third, sable, a tower argent)",

    currentLordId: 780,
    founderId: 1169,

    heirId: 929,
    overlordId: 10
  },
  {
    id: 405,
    name: "House Vance of Wayfarer's Rest",
    seats: ["Wayfarer's Rest"],
    region: "The Riverlands",
    coatOfArms:
      "Quartered, a black dragon on a white field and two golden eyes in a golden ring on a black field(Quarterly, first and fourth, argent, a dragon sable, second and third, sable, a pair of eyes within an annulet or)",

    currentLordId: 604,
    founderId: 1169,

    overlordId: 10
  },
  {
    id: 406,
    name: "House Varner",

    region: "The Reach",
    coatOfArms: "Ermines, a weasel argent",

    currentLordId: 993,

    overlordId: 398
  },
  {
    id: 407,
    name: "House Velaryon of Driftmark",
    seats: ["High Tide or Driftmark"],
    region: "The Crownlands",
    coatOfArms: "seahorse rampant argent, on sea green",
    slogan: "The Old, the True, the Brave",
    titles: ["Lord of the Tides  Master of Driftmark"],
    currentLordId: 757,

    overlordId: 15
  },
  {
    id: 408,
    name: "House Vikary",

    region: "The Westerlands",
    coatOfArms:
      "Quarterly: a red boar's head on a white field; beneath a gold bend sinister, a silver lion rampant regardant with a forked tail, with gold teeth and claws, on a red field.",

    currentLordId: 676,

    overlordId: 229
  },
  {
    id: 409,
    name: "House Volmark",
    seats: ["Volmark"],
    region: "Iron Islands",
    coatOfArms: "Cendrée, a leviathan sable",

    titles: ["Lord of Volmark", "Lord of Greenshield"],
    currentLordId: 720,

    overlordId: 178
  },
  {
    id: 410,
    name: "House Vypren",

    region: "",
    coatOfArms:
      "A black toad on white lily pad, on a green field(Vert, a toad sable atop a lilypad argent)",

    currentLordId: 660,

    heirId: 288,
    overlordId: 10
  },
  {
    id: 411,
    name: "House Vyrwel of Darkdell",
    seats: ["Darkdell"],
    region: "The Reach",
    coatOfArms: "a silver wyvern within a red double tressure on sable",

    overlordId: 398
  },
  {
    id: 412,
    name: "House Wade",

    region: "Dorne",

    titles: ["High King of Dorne"]
  },
  {
    id: 413,
    name: "House Wagstaff",

    region: "The Stormlands",
    coatOfArms:
      "Five yellow mascles, on a green field(Vert, five mascles in fess or)",

    overlordId: 17
  },
  {
    id: 414,
    name: "House Waterman",

    region: "The North",
    coatOfArms:
      "Argent, two oars saltirewise tenny between as many flaunces azure",

    overlordId: 34
  },
  {
    id: 415,
    name: "House Waxley of Wickenden",
    seats: ["Wickenden"],
    region: "The Vale",
    coatOfArms:
      "Three candles, white with red flames, within silver candle holders, on a grey field within a black border(Cendrée, three candles in holders argent, flamed gules, within a bordure sable)",
    slogan: "Light in Darkness",
    titles: ["The Knight of Wickenden"],
    currentLordId: 345,

    overlordId: 7
  },
  {
    id: 416,
    name: "House Wayn",

    region: "The Riverlands",
    coatOfArms:
      "Four wheels counterchanged on a quartered blue and white field(Quarterly azure and argent, four wheels counterchanged)",

    overlordId: 395
  },
  {
    id: 417,
    name: "House Waynwood of Ironoaks",
    seats: ["Ironoaks"],
    region: "The Vale",
    coatOfArms:
      "A broken black wheel, on a green field(Vert, a wheel broken sable)",

    titles: ["Lord of Ironoaks"],
    currentLordId: 125,

    heirId: 1727,
    overlordId: 7
  },
  {
    id: 418,
    name: "House Weaver",

    region: "Iron Islands"
  },
  {
    id: 419,
    name: "House Webber of Coldmoat",
    seats: ["formerly Coldmoat"],
    region: "The Reach",
    coatOfArms: "Sable, a cobweb argent thereon a spider gules",

    titles: ["Lord of Coldmoat"],

    overlordId: 326
  },
  {
    id: 420,
    name: "House Wells",

    region: "Dorne",

    overlordId: 285
  },
  {
    id: 421,
    name: "House Wells",

    region: "The North",
    coatOfArms:
      "Per fess cendrée and lozengy argent and vert, in chief five pellets",

    overlordId: 34
  },
  {
    id: 422,
    name: "House Wendwater",

    region: "The Crownlands",
    coatOfArms:
      "A green engrailed pall, inverted on white, dividing three trees, green, red and bare",
    slogan: "For All Seasons",

    overlordId: 16
  },
  {
    id: 423,
    name: "House Wensington",

    region: "The Stormlands",
    coatOfArms:
      "Two golden trumpets crossed on a blue field, beneath a gold chief with three black stags(Azure, two trumpets saltirewise or, on a chief of the second three stags salient sable)",
    slogan: "Sound The Charge",

    overlordId: 17
  },
  {
    id: 424,
    name: "House Westbrook",

    region: "The Reach",
    coatOfArms: "Two green bars gemmel on gold",

    overlordId: 398
  },
  {
    id: 425,
    name: "House Westerling of the Crag",
    seats: ["The Crag"],
    region: "The Westerlands",
    coatOfArms:
      "Six white shells, on a sand-coloured field(Or, six escallops argent)",
    slogan: "Honor, Not Honors",
    titles: ["Lord of the Crag"],
    currentLordId: 413,

    heirId: 923,
    overlordId: 229
  },
  {
    id: 426,
    name: "House Westford",

    region: "The Westerlands",
    coatOfArms: "A black dog on blue",

    overlordId: 229
  },
  {
    id: 427,
    name: "House Whent of Harrenhal",
    seats: ["Harrenhal (stripped)"],
    region: "The Riverlands",
    coatOfArms:
      "Nine black bats, on a yellow field(Or, nine bats, 4, 3, 2, displayed sable)",

    titles: ["Lord of Harrenhal"],
    currentLordId: 972,

    overlordId: 395
  },
  {
    id: 428,
    name: "House Whitehill",
    seats: ["Highpoint (Telltale)"],
    region: "The North",
    coatOfArms:
      "A white pile inverted on indigo, an arch of 4-pointed stars above",

    overlordId: 34
  },
  {
    id: 429,
    name: "House Willum",

    region: "The Reach",
    coatOfArms:
      "three silver longswords crossed on black beneath a dragonbone skeleton on a white chief",

    overlordId: 398
  },
  {
    id: 430,
    name: "House Wode",

    region: "The Riverlands",
    coatOfArms:
      "Three white hedgehogs, on a yellow field(Or, three hedgehogs argent)",
    slogan: "Touch Me Not",

    overlordId: 10
  },
  {
    id: 431,
    name: "House Woodfoot of Bear Island",
    seats: ["Bear Island"],
    region: "The North",

    overlordId: 362
  },
  {
    id: 432,
    name: "House Woods",

    region: "The North",

    overlordId: 150
  },
  {
    id: 433,
    name: "House Woodwright",

    region: "The Reach",
    coatOfArms: "A red pall on a field of oak",

    overlordId: 398
  },
  {
    id: 434,
    name: "House Woolfield",

    region: "The North",
    coatOfArms: "Three woolsacks, white on purple, a white border",

    overlordId: 34
  },
  {
    id: 435,
    name: "House Wull",

    region: "The North",
    coatOfArms:
      "Azure, three wooden buckets tenné, a bordure chequy cendrée and white",

    titles: ["The Wull  Lord Wull"],
    currentLordId: 512,

    overlordId: 362
  },
  {
    id: 436,
    name: "House Wydman",

    region: "The Vale",
    coatOfArms:
      "Five splintered lances, 3, 2, striped blue and white with blue pennons, on a yellow field, beneath a white chief bearing a red castle, a green viper, a black broken wheel, a purple unicorn and a yellow lion.",
    slogan: "Right Conquers Might",

    overlordId: 7
  },
  {
    id: 437,
    name: "House Wyl of the Boneway",
    seats: ["Wyl"],
    region: "Dorne",
    coatOfArms: "A black adder biting a heel on yellow",

    overlordId: 285
  },
  {
    id: 438,
    name: "House Wylde of Rain House",
    seats: ["Rain House"],
    region: "The Stormlands",
    coatOfArms:
      "A blue-green maelstrom, on a gold field(Or, a maelstrom azure)",

    titles: ["Lord of the Rain House"],
    currentLordId: 229,

    overlordId: 17
  },
  {
    id: 439,
    name: "House Wynch of Iron Holt",
    seats: ["Iron Holt"],
    region: "Iron Islands",
    coatOfArms: "a bloody moon on purple",

    titles: ["Lord of Iron Holt"],
    currentLordId: 1097,

    overlordId: 169
  },
  {
    id: 440,
    name: "House Wythers",

    region: "The Reach",
    coatOfArms: "a grey squirrel on white with red border",

    overlordId: 398
  },
  {
    id: 441,
    name: "House Yarwyck",

    region: "The Westerlands",
    coatOfArms:
      "Two bronze halberds crossed between four red diamonds, on a white field(Argent, two halberds saltirewise tenné, hafted sable, between four lozenges gules)",

    overlordId: 229
  },
  {
    id: 442,
    name: "House Yelshire",

    region: "The Reach",
    coatOfArms:
      "Barry vert and Or, on a chief sable a battering-ram proper headed Or",

    overlordId: 398
  },
  {
    id: 443,
    name: "House Yew",

    region: "The Westerlands",
    coatOfArms:
      "A golden longbow between two crimson flaunches, on a white field(Argent, a longbow or between two flaunches gules)",

    currentLordId: 707,
    founderId: 65,

    overlordId: 229
  },
  {
    id: 444,
    name: "House Yronwood of Yronwood",
    seats: ["Yronwood"],
    region: "Dorne",
    coatOfArms: "Or, a portcullis sable",
    slogan: "We Guard the Way",
    titles: [
      "The Bloodroyal",
      "Lord of Yronwood",
      "Warden of the Stone Way",
      "High King of Dorne (formerly)"
    ],
    currentLordId: 117,

    heirId: 452,
    overlordId: 285
  }
];
