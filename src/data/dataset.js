export default [
  {
    id: "1",
    name: "Bulbasaur",
    description:
      "Bulbasaur es un Pokémon de tipo dual Hierba/Veneno. Tiene un bulbo vegetal en la espalda que crece hasta convertirse en una gran flor a medida que evoluciona.",
    type: {
      typeName: ["Grass", "Poison"],
      typeImage: [
        "./assets/pokemones/planta.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    image: "./assets/pokemones/Bulbasaur.png",
    weaknesses: {
      weaknessesName: ["Fire", "Flying", "Ice", "Psychic"],
      weaknessesImage: [
        "./assets/pokemones/fuego.png",
        "./assets/pokemones/volador.png",
        "./assets/pokemones/hielo.png",
        "./assets/pokemones/psiquico.png",
      ],
    },
    baseStats: {
      hp: "45",
      attack: "49",
      defense: "49",
      speed: "45",
    },
    height: "0.7", // en metros
    category: "Seed",
    ability: "Overgrow",
    weight: "6.9", // en kilogramos
    evolutions: {
      evolutionName: ["Ivysaur", "Venusaur"],
      evolutionImage: ["./assets/Ivysaur.png", "./assets/Venusaur.png"],
    },
  },
  {
    id: "4",
    name: "Charmander",
    description:
      "Charmander es un Pokémon de tipo Fuego. Tiene una llama en la cola que se vuelve más brillante a medida que evoluciona.",
    type: {
      typeName: ["Fire"],
      typeImage: ["./assets/pokemones/fuego.png"],
    },
    image: "./assets/pokemones/Charmander.png",
    weaknesses: {
      weaknessesName: ["Water", "Rock", "Ground"],
      weaknessesImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/roca.png",
        "./assets/pokemones/tierra.png",
      ],
    },
    baseStats: {
      hp: "39",
      attack: "52",
      defense: "43",
      speed: "65",
    },
    height: "0.6",
    category: "Lizard",
    ability: "Blaze",
    weight: "8.5",
    evolutions: {
      evolutionName: ["Charmander", "Charmeleon", "Charizard"],
      evolutionImage: [
        "./assets/Charmander.png",
        "./assets/Charmeleon.png",
        "./assets/Charizard.png",
      ],
    },
  },
  {
    id: "5",
    name: "Charmeleon",
    description:
      "Charmeleon es un Pokémon de tipo Fuego. Tiene una llama más desarrollada en la cola y es más agresivo que Charmander.",
    type: {
      typeName: ["Fire"],
      typeImage: ["./assets/pokemones/fuego.png"],
    },
    image: "./assets/pokemones/Charmaleon.png",
    weaknesses: {
      weaknessesName: ["Water", "Rock", "Ground"],
      weaknessesImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/roca.png",
        "./assets/pokemones/tierra.png",
      ],
    },
    baseStats: {
      attack: "64",
      defense: "58",
      speed: "80",
    },
    height: "1.1",
    category: "Flame",
    ability: "Blaze",
    weight: "19.0",
    evolutions: {
      evolutionName: ["Charmander", "Charmeleon", "Charizard"],
      evolutionImage: [
        "./assets/Charmander.png",
        "./assets/Charmeleon.png",
        "./assets/Charizard.png",
      ],
    },
  },
  {
    id: "6",
    name: "Charizard",
    description:
      "Charizard es un Pokémon de tipo Fuego/Volador. Es la evolución final de Charmander y es conocido por sus poderosos ataques de fuego.",
    type: {
      typeName: ["Fire", "Flying"],
      typeImage: [
        "./assets/pokemones/fuego.png",
        "./assets/pokemones/volador.png",
      ],
    },
    image: "./assets/pokemones/Charizard.png",
    weaknesses: {
      weaknessesName: ["Water", "Electric", "Rock"],
      weaknessesImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/roca.png",
      ],
    },
    baseStats: {
      hp: "78",
      attack: "84",
      defense: "78",
      speed: "100",
    },
    height: "1.7",
    category: "Flame",
    ability: "Blaze",
    weight: "90.5",
    evolutions: {
      evolutioneName: ["Charmander", "Charmeleon", "Charizard"],
      evolutionImage: [
        "./assets/Charmander.png",
        "./assets/Charmeleon.png",
        "./assets/Charizard.png",
      ],
    },
  },
  {
    id: "7",
    name: "Squirtle",
    description:
      "Squirtle es un Pokémon de tipo Agua. Es un Pokémon pequeño, con forma de tortuga y caparazón azul.",
    type: {
      typeName: ["Water"],
      typeImage: ["./assets/pokemones/agua.png"],
    },
    image: "./assets/pokemones/Squirtle_2.png",
    weaknesses: {
      weaknessesName: ["Electric", "Grass"],
      weaknessesImage: [
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/planta.png",
      ],
    },
    baseStats: {
      hp: "44",
      attack: "48",
      defense: "65",
      speed: "43",
    },
    height: "0.5",
    category: "Tiny Turtle",
    ability: "Torrent",
    weight: "9.0",
    evolutions: {
      evolutionName: ["Squirtle", "Wartortle", "Blastoise"],
      evolutionImage: [
        "./assets/Squirtle.png",
        "./assets/Wartortle.png",
        "./assets/Blastoise.png",
      ],
    }
  },
  {
    id: "8",
    name: "Wartortle",
    description:
      "Wartortle es un Pokémon de tipo Agua. Evoluciona de Squirtle y es la segunda etapa de su línea evolutiva.",
    type: {
      typeName: ["Water"],
      typeImage: ["./assets/pokemones/agua.png"],
    },
    image: "./assets/pokemones/Wartortle.png",
    weaknesses: {
      weaknessesName: ["Electric", "Grass"],
      weaknessesImage: [
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/planta.png",
      ],
    },
    baseStats: {
      hp: "59",
      attack: "63",
      defense: "80",
      speed: "58",
    },
    height: "1.0",
    category: "Turtle",
    ability: "Torrent",
    weight: "22.5",
    evolutions: {
      evolutionName: ["Squirtle", "Wartortle", "Blastoise"],
      evolutionImage: [
        "./assets/Squirtle.png",
        "./assets/Wartortle.png",
        "./assets/Blastoise.png",
      ],
    }
  },
  {
    id: "10",
    name: "Caterpie",
    description:
      "Caterpie es un Pokémon de tipo Bicho. Es la primera etapa de su línea evolutiva y es conocido por su voraz apetito por las hojas.",
    type: {
      typeName: ["Bug"],
      typeImage: ["./assets/pokemones/bicho.png"],
    },
    image: "./assets/pokemones/Caterpie.png",
    weaknesses: {
      weaknessesName: ["Flying", "Rock", "Fire"],
      weaknessesImage: [
        "./assets/pokemones/volador.png",
        "./assets/pokemones/roca.png",
        "./assets/pokemones/fuego.png",
      ],
    },
    baseStats: {
      hp: "45",
      attack: "30",
      defense: "35",
      speed: "45",
    },
    height: "0.3",
    category: "Worm",
    ability: "Shield Dust",
    weight: "2.9",
    evolutions: {
      evolutionName: ["Caterpie","Metapod", "Butterfree"],
      evolutionImage: ["./assets/Caterpie.png","./assets/Metapod.png", "./assets/Butterfree.png"],
    },
  },
  {
    id: "35",
    name: "Clefairy",
    description:
      "Clefairy es un Pokémon de tipo Hada. Es conocido por su aspecto adorable y su asociación con la luna.",
    type: {
      typeName: ["Fairy"],
      typeImage: ["./assets/pokemones/hada.png"],
    },
    image: "./assets/pokemones/Clefairy2.png",
    weaknesses: {
      weaknessesName: ["Steel", "Poison"],
      weaknessesImage: [
        "./assets/pokemones/acero.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    baseStats: {
      hp: "70",
      attack: "45",
      defense: "48",
      speed: "35",
    },
    height: "0.6",
    category: "Fairy",
    ability: "Cute Charm",
    weight: "7.5",
    evolutions: {
      evolutionName: ["Cleffa","Clefairy","Clefable"],
      evolutionImage: ["./assets/Cleffa.png","./assets/Clefairy.png","./assets/Clefable.png"],
    },
  },
  {
    id: "25",
    name: "Pikachu",
    description:
      "Pikachu es un Pokémon de tipo Eléctrico. Es la forma evolucionada de Pichu y evoluciona a Raichu cuando se expone a una Piedra Trueno.",
    type: {
      typeName: ["Electric"],
      typeImage: ["./assets/pokemones/electrico.png"],
    },
    image: "./assets/pokemones/Pikachu2.png",
    weaknesses: {
      weaknessesName: ["Ground"],
      weaknessesImage: ["./assets/pokemones/tierra.png"],
    },
    baseStats: {
      hp: "35",
      attack: "55",
      defense: "40",
      speed: "90",
    },
    height: "0.4",
    category: "Mouse",
    ability: "Static",
    weight: "6.0",
    evolutions: {
      evolutionName: ["Pichu","Pikachu","Raichu"],
      evolutionImage: ["./assets/Pichu.png","./assets/Pikachu.png","./assets/Raichu.png"],
    },
  },
  {
    id: "50",
    name: "Diglett",
    description:
      "Diglett es un Pokémon de tipo Tierra. Es conocido por su capacidad para excavar túneles subterráneos y por las tres protuberancias redondeadas que tiene en la cabeza.",
    type: {
      typeName: ["Ground"],
      typeImage: ["./assets/pokemones/tierra.png"],
    },
    image: "./assets/pokemones/Diglett.png",
    weaknesses: {
      weaknessesName: ["Water", "Grass", "Ice"],
      weaknessesImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/planta.png",
        "./assets/pokemones/hielo.png",
      ],
    },
    baseStats: {
      hp: "10",
      attack: "55",
      defense: "25",
      speed: "95",
    },
    height: "0.2",
    category: "Mole",
    ability: "Sand Veil",
    weight: "0.8",
    evolutions: {
      evolutionName: ["Diglett","Dugtrio"],
      evolutionImage: ["./assets/Diglett.png","./assets/Dugtrio.png"],
    },
  },
  {
    id: "23",
    name: "Ekans",
    description:
      "Ekans es un Pokémon de tipo Veneno. Es conocido por su habilidad para acercarse sigilosamente a su presa y por su particular sonido de cascabel.",
    type: {
      typeName: ["Poison"],
      typeImage: ["./assets/pokemones/veneno.png"],
    },
    image: "./assets/pokemones/Ekans.png",
    weaknesses: {
      weaknessesName: ["Ground", "Psychic"],
      weaknessesImage: [
        "./assets/pokemones/tierra.png",
        "./assets/pokemones/psiquico.png",
      ],
    },
    baseStats: {
      hp: "35",
      attack: "60",
      defense: "44",
      speed: "55",
    },
    height: "2.0",
    category: "Snake",
    ability: "Intimidate",
    weight: "6.9",
    evolutions: {
      evolutionName: ["Ekans","Arbok"],
      evolutionImage: ["./assets/Ekans.png","./assets/Arbok.png"],
    },
  },
  {
    id: "26",
    name: "Raichu",
    description:
      "Raichu es un Pokémon de tipo Eléctrico. Es la forma evolucionada de Pikachu y es conocido por sus poderes eléctricos mejorados.",
    type: {
      typeName: ["Electric"],
      typeImage: ["./assets/pokemones/electrico.png"],
    },
    image: "./assets/pokemones/Raichu.png",
    weaknesses: {
      weaknessesName: ["Ground"],
      weaknessesImage: ["./assets/pokemones/tierra.png"],
    },
    baseStats: {
      hp: "60",
      attack: "90",
      defense: "55",
      speed: "100",
    },
    height: "0.8",
    category: "Mouse",
    ability: "Static",
    weight: "30.0",
    evolutions: {
      evolutionName: ["Pichu","Pikachu","Raichu"],
      evolutionImage: ["./assets/Pichu.png","./assets/Pikachu.png","./assets/Raichu.png"],
    },
  },
  {
    id: "56",
    name: "Mankey",
    description:
      "Un Pokémon simio de color blanco y marrón con una nariz rosada. Es muy ágil y tiene una personalidad traviesa.",
    type: {
      typeName: ["Fighting"],
      typeImage: ["./assets/pokemones/lucha.png"],
    },
    image: "./assets/pokemones/Mankey.png",
    weaknesses: {
      weaknessesName: ["Flying", "Psychic", "Fairy"],
      weaknessesImage: [
        "./assets/pokemones/volador.png",
        "./assets/pokemones/psiquico.png",
        "./assets/pokemones/hada.png",
      ],
    },
    baseStats: {
      hp: "40",
      attack: "80",
      defense: "35",
      speed: "70",
    },
    height: "0.5",
    category: "Pig Monkey",
    ability: "Vital Spirit",
    weight: "28.0",
    evolutions: {
      evolutionName: ["Mankey","Primeape", "Annihilape"],
      evolutionImage: ["./assets/pokemones/Mankey.png","./assets/pokemones/Primeape.png","./assets/pokemones/Annihilape.png"],
    },
  },
  {
    id: "62",
    name: "Poliwrath",
    description:
      "Un Pokémon anfibio con apariencia de rana grande. Tiene una piel azul y una barriga blanca. Es poderoso en combate cuerpo a cuerpo.",
    type: {
      typeName: ["Water", "Fighting"],
      typeImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/lucha.png",
      ],
    },
    image: "./assets/pokemones/Poliwrath.png",
    weaknesses: {
      weaknessesName: ["Electric", "Grass", "Flying", "Psychic", "Fairy"],
      weaknessesImage: [
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/planta.png",
        "./assets/pokemones/volador.png",
        "./assets/pokemones/psiquico.png",
        "./assets/pokemones/hada.png",
      ],
    },
    baseStats: {
      hp: "90",
      attack: "95",
      defense: "95",
      speed: "70",
    },
    height: "1.3",
    category: "Tadpole",
    ability: "Water Absorb",
    weight: "54.0",
    evolutions: {
      evolutionName: ["Poliwag","Poliwhirl", "Poliwrath", "Politoed"],
      evolutionImage: ["./assets/pokemones/Poliwag.png","./assets/pokemones/Poliwhirl.png","./assets/pokemones/Poliwrath.png","./assets/pokemones/Politoed.png"],
    },
  },
  {
    id: "63",
    name: "Abra",
    description:
      "Abra es un Pokémon pequeño y amarillo con orejas puntiagudas. Tiene poderes psíquicos y puede teletransportarse.",
    type: {
      typeName: ["Psychic"],
      typeImage: ["./assets/pokemones/psiquico.png"],
    },
    image: "./assets/pokemones/Abra.png",
    weaknesses: {
      weaknessesName: ["Bug", "Ghost", "Dark"],
      weaknessesImage: [
        "./assets/pokemones/bicho.png",
        "./assets/pokemones/fantasma.png",
        "./assets/pokemones/oscuro.png",
      ],
    },
    baseStats: {
      hp: "25",
      attack: "20",
      defense: "15",
      speed: "90",
    },
    height: "0.9",
    category: "Psi",
    ability: "Synchronize",
    weight: "19.5",
    evolutions: {
      evolutionName: ["Abra","Kadabra","Alakazam"],
      evolutionImage: ["./assets/pokemones/Abra.png","./assets/pokemones/Kadabra.png","./assets/pokemones/Alakazam.png"],
    },
  },
  {
    id: "66",
    name: "Machop",
    type: {
      typeName: ["Fighting"],
      typeImage: ["./assets/pokemones/lucha.png"],
    },
    image: "./assets/pokemones/Machop.png",
    weaknesses: {
      weaknessesName: ["Flying", "Psychic", "Fairy"],
      weaknessesImage: [
        "./assets/pokemones/volador.png",
        "./assets/pokemones/psiquico.png",
        "./assets/pokemones/hada.png",
      ],
    },
    baseStats: {
      hp: "70",
      attack: "80",
      defense: "50",
      speed: "35",
    },
    height: "0.8",
    category: "Superpower",
    ability: "Guts",
    weight: "19.5",
    evolutions: {
      evolutionName: ["Machop","Machoke","Machamp"],
      evolutionImage: ["./assets/pokemones/Machop.png","./assets/pokemones/Machoke.png", "./assets/pokemones/Machamp.png"],
    },
  },
  {
    id: "79",
    name: "Slowpoke",
    description:
      "Slowpoke es un Pokémon de color rosa pálido con una expresión facial relajada. Es conocido por ser extremadamente lento y por su aparente falta de reacción ante situaciones peligrosas.",
    type: {
      typeName: ["Water", "Psychic"],
      typeImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/psiquico.png",
      ],
    },
    image: "./assets/pokemones/Slowpoke.png",
    weaknesses: {
      weaknessesName: ["Electric", "Bug", "Ghost", "Dark"],
      weaknessesImage: [
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/bicho.png",
        "./assets/pokemones/fantasma.png",
        "./assets/pokemones/oscuro.png",
      ],
    },
    baseStats: {
      hp: "90",
      attack: "65",
      defense: "65",
      speed: "15",
    },
    height: "1.2",
    category: "Dopey",
    ability: "Oblivious",
    weight: "36.0",
    evolutions: {
      evolutionName: ["Slowbro"],
      evolutionImage: ["./assets/pokemones/Slowbro.png"],
    },
  },
  {
    id: "16",
    name: "Pidgey",
    description:
      "Pidgey es un Pokémon pequeño y común de color marrón claro con un pico corto y ancho. Es conocido por ser un excelente volador, capaz de moverse rápidamente en el aire.",
    type: {
      typeName: ["Normal", "Flying"],
      typeImage: [
        "./assets/pokemones/volador.png",
        "./assets/pokemones/normal.png",
      ],
    },
    image: "./assets/pokemones/Pidgey.png",
    weaknesses: {
      weaknessesName: ["Electric", "Rock"],
      weaknessesImage: [
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/roca.png",
      ],
    },
    baseStats: {
      hp: "40",
      attack: "45",
      defense: "40",
      speed: "56",
    },
    height: "0.3",
    category: "Tiny Bird",
    ability: "Keen Eye",
    weight: "1.8",
    evolutions: {
      evolutionName: ["Pidgey","Pidgeotto", "Pidgeot"],
      evolutionImage: [
        "./assets/pokemones/Pidgey.png",
        "./assets/pokemones/Pidgeotto.png",
        "./assets/pokemones/Pidgeot.png",
      ],
    },
  },
  {
    id: "2",
    name: "Ivysaur",
    description:
      "Ivysaur es la evolución intermedia de Bulbasaur. Tiene un cuerpo más grande y una flor en su espalda que está en proceso de crecimiento. Esta flor emite un aroma dulce y agradable.",
    type: {
      typeName: ["Grass", "Poison"],
      typeImage: [
        "./assets/pokemones/planta.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    image: "./assets/pokemones/Ivysaur.png",
    weaknesses: {
      weaknessesName: ["Fire", "Flying", "Ice", "Psychic"],
      weaknessesImage: [
        "./assets/pokemones/fuego.png",
        "./assets/pokemones/volador.png",
        "./assets/pokemones/hielo.png",
        "./assets/pokemones/psiquico.png",
      ],
    },
    baseStats: {
      hp: "60",
      attack: "62",
      defense: "63",
      speed: "60",
    },
    height: "1.0",
    category: "Seed",
    ability: "Overgrow",
    weight: "13.0",
    evolutions: {
      evolutionName: ["Bulbasaur","Ivysaur","Venusaur"],
      evolutionImage: ["./assets/pokemones/Bulbasaur.png","./assets/pokemones/Ivysaur.png","./assets/pokemones/Venusaur.png"],
    },
  },
  {
    id: "94",
    name: "Gengar",
    description:
      "Gengar es la evolución final de Gastly. Es un Pokémon de tipo Fantasma y Veneno. Se dice que Gengar se esconde en las sombras, esperando el momento adecuado para asustar a sus víctimas.",
    type: {
      typeName: ["Ghost", "Poison"],
      typeImage: [
        "./assets/pokemones/fantasma.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    image: "./assets/pokemones/Gengar.png",
    weaknesses: {
      weaknessesName: ["Ghost", "Dark", "Ground"],
      weaknessesImage: [
        "./assets/pokemones/fantasma.png",
        "./assets/pokemones/oscuro.png",
        "./assets/pokemones/tierra.png",
      ],
    },
    baseStats: {
      hp: "60",
      attack: "65",
      defense: "60",
      speed: "110",
    },
    height: "1.5",
    category: "Shadow",
    ability: "Levitate",
    weight: "40.5",
    evolutions: {
      evolutionName: ["Gastly","Haunter","Gengar"],
      evolutionImage: ["./assets/pokemones/Gastly.png","./assets/pokemones/Haunter.png","./assets/pokemones/Gengar.png"],
    },
  },
  {
    id: "92",
    name: "Gastly",
    description:
      "Gastly es un Pokémon de tipo Fantasma y Veneno. Se le conoce por su habilidad para aparecer y desaparecer a voluntad. A menudo se le ve flotando en lugares oscuros.",
    type: {
      typeName: ["Ghost", "Poison"],
      typeImage: [
        "./assets/pokemones/fantasma.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    image: "./assets/pokemones/Gastly.png",
    weaknesses: {
      weaknessesName: ["Ground", "Psychic", "Ghost", "Dark"],
      weaknessesImage: [
        "./assets/pokemones/tierra.png",
        "./assets/pokemones/psiquico.png",
        "./assets/pokemones/fantasma.png",
        "./assets/pokemones/oscuro.png",
      ],
    },
    baseStats: {
      hp: "30",
      attack: "35",
      defense: "30",
      speed: "80",
    },
    height: "1.3",
    category: "Gas",
    ability: "Levitate",
    weight: "0.1",
    evolutions: {
      evolutionName: ["Gastly","Haunter","Gengar"],
      evolutionImage: ["./assets/pokemones/Gastly.png","./assets/pokemones/Haunter.png","./assets/pokemones/Gengar.png"],
    },
  },
  {
    id: "48",
    name: "Venonat",
    description:
      "Venonat es un Pokémon de tipo Bicho y Veneno. Este Pokémon tiene grandes ojos que le permiten ver en la oscuridad. Se alimenta de hojas cercanas a la luz de la luna.",
    type: {
      typeName: ["Bug", "Poison"],
      typeImage: [
        "./assets/pokemones/bicho.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    image: "./assets/pokemones/Venonat.png",
    weaknesses: {
      weaknessesName: ["Flying", "Rock", "Fire", "Psychic"],
      weaknessesImage: [
        "./assets/pokemones/volador.png",
        "./assets/pokemones/roca.png",
        "./assets/pokemones/fuego.png",
        "./assets/pokemones/psiquico.png",
      ],
    },
    baseStats: {
      hp: "60",
      attack: "55",
      defense: "50",
      speed: "45",
    },
    height: "1.0",
    category: "Insect",
    ability: "Compound Eyes",
    weight: "30.0",
    evolutions: {
      evolutionName: ["Venonat","Venomoth"],
      evolutionImage: ["./assets/pokemones/Venonat.png","./assets/pokemones/Venomoth.png"],
    },
  },
  {
    id: "104",
    name: "Cubone",
    description:
      "Cubone es un Pokémon de tipo Tierra. Este Pokémon lleva siempre consigo un cráneo que una vez perteneció a su madre. Se dice que llora en solitario durante la noche por la pérdida de su progenitora.",
    type: {
      typeName: ["Ground"],
      typeImage: ["./assets/pokemones/tierra.png"],
    },
    image: "./assets/pokemones/Cubone.png",
    weaknesses: {
      weaknessesName: ["Water", "Grass", "Ice"],
      weaknessesImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/planta.png",
        "./assets/pokemones/hielo.png",
      ],
    },
    baseStats: {
      hp: "50",
      attack: "50",
      defense: "95",
      speed: "35",
    },
    height: "0.4",
    category: "Lonely",
    ability: "Rock Head",
    weight: "6.5",
    evolutions: {
      evolutionName: ["Cubone","Marowak"],
      evolutionImage: ["./assets/pokemones/Cubone.png","./assets/pokemones/Marowak.png"],
    },
  },
  {
    id: "113",
    name: "Chansey",
    description:
      "Chansey es un Pokémon de tipo Normal. Se dice que trae felicidad a quien se encuentra con ella, ya que siempre lleva un huevo en su bolsa y comparte este con aquellos que están enfermos o heridos.",
    type: {
      typeName: ["Normal"],
      typeImage: ["./assets/pokemones/normal.png"],
    },
    image: "./assets/pokemones/Chansey.png",
    weaknesses: {
      weaknessesName: ["Fighting"],
      weaknessesImage: ["./assets/pokemones/lucha.png"],
    },
    baseStats: {
      hp: "250",
      attack: "5",
      defense: "5",
      speed: "50",
    },
    height: "1.1",
    category: "Egg",
    ability: "Natural Cure",
    weight: "34.6",
    evolutions: {
      evolutionName: ["Happiny","Chansey","Blissey"],
      evolutionImage: ["./assets/pokemones/Happiny.png","./assets/pokemones/Chansey.png","./assets/pokemones/Blissey.png"],
    },
  },
  {
    id: "123",
    name: "Scyther",
    description:
      "Scyther es un Pokémon de tipo Bicho/Volador. Es conocido por su velocidad y habilidades en el combate. Tiene afiladas guadañas en lugar de manos y es capaz de volar a gran velocidad para atacar a sus oponentes.",
    type: {
      typeName: ["Bug", "Flying"],
      typeImage: [
        "./assets/pokemones/bicho.png",
        "./assets/pokemones/volador.png",
      ],
    },
    image: "./assets/pokemones/Scyther.png",
    weaknesses: {
      weaknessesName: ["Electric", "Rock", "Ice"],
      weaknessesImage: [
        "./assets/pokemones/electrico.png",
        "./assets/pokemones/roca.png",
        "./assets/pokemones/hielo.png",
      ],
    },
    baseStats: {
      hp: "70",
      attack: "110",
      defense: "80",
      speed: "105",
    },
    height: "1.5",
    category: "Mantis",
    ability: "Swarm",
    weight: "56.0",
    evolutions: {
      evolutionName: ["Scyther","Scizor","Kleavor"],
      evolutionImage: ["./assets/pokemones/Scyther.png","./assets/pokemones/Scizor.png","./assets/pokemones/Kleavor.png"],
    },
  },
  {
    id: "135",
    name: "Jolteon",
    description:
      "Jolteon es un Pokémon de tipo Eléctrico. Su cuerpo está cubierto de puntas afiladas cargadas de electricidad, las cuales utiliza para defenderse y atacar. Es extremadamente rápido y ágil.",
    type: {
      typeName: ["Electric"],
      typeImage: ["./assets/pokemones/electrico.png"],
    },
    image: "./assets/pokemones/Jolteon.png",
    weaknesses: {
      weaknessesName: ["Ground"],
      weaknessesImage: ["./assets/pokemones/tierra.png"],
    },
    baseStats: {
      hp: "65",
      attack: "65",
      defense: "60",
      speed: "110",
    },
    height: "0.8",
    category: "Lightning",
    ability: "Volt Absorb",
    weight: "24.5",
    evolutions: {
      evolutionName: ["Eevee","Jolteon","Espeon"],
      evolutionImage: ["./assets/pokemones/Eevee.png","./assets/pokemones/Jolteon.png","./assets/pokemones/Espeon.png"],
    },
  },
  {
    id: "173",
    name: "Cleffa",
    description:
      "Cleffa es un Pokémon de tipo Hada. Tiene forma de estrella y es conocido por su ternura y suaves movimientos. Se dice que ver a Cleffa en la noche estrellada trae buena fortuna.",
    type: {
      typeName: ["Fairy"],
      typeImage: ["./assets/pokemones/hada.png"],
    },
    image: "./assets/pokemones/Cleffa.png",
    weaknesses: {
      weaknessesName: ["Steel", "Poison"],
      weaknessesImage: [
        "./assets/pokemones/acero.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    baseStats: {
      hp: "50",
      attack: "25",
      defense: "28",
      speed: "15",
    },
    height: "0.3",
    category: "Star Shape",
    ability: "Cute Charm",
    weight: "3.0",
    evolutions: {
      evolutionName: ["Cleffa","Clefairy","Clefable"],
      evolutionImage: ["./assets/pokemones/Cleffa.png","./assets/pokemones/Clefairy.png",,"./assets/pokemones/Clefable.png"],
    },
  },
  {
    id: "175",
    name: "Togepi",
    description:
      "Togepi es un Pokémon de tipo Hada. Tiene forma de huevo con espinas en su cáscara. Se dice que aquellos que lo abrazan con cariño serán bendecidos con felicidad y buena suerte.",
    type: {
      typeName: ["Fairy"],
      typeImage: ["./assets/pokemones/hada.png"],
    },
    image: "./assets/pokemones/Togepi.png",
    weaknesses: {
      weaknessesName: ["Steel", "Poison"],
      weaknessesImage: [
        "./assets/pokemones/acero.png",
        "./assets/pokemones/veneno.png",
      ],
    },
    baseStats: {
      hp: "35",
      attack: "20",
      defense: "65",
      speed: "20",
    },
    height: "0.3",
    category: "Spike Ball",
    ability: "Serene Grace",
    weight: "1.5",
    evolutions: {
      evolutionName: ["Togepi","Togetic","Togekiss"],
      evolutionImage: ["./assets/pokemones/Togepi.png","./assets/pokemones/Togetic.png","./assets/pokemones/Togekiss.png"],
    },
  },
  {
    id: "246",
    name: "Larvitar",
    description:
      "Larvitar es un Pokémon de tipo Roca/Tierra. Tiene la piel dura y áspera y vive en montañas y cuevas. Pasa la mayor parte de su vida cavando y comiendo minerales.",
    type: {
      typeName: ["Stone", "Ground"],
      typeImage: [
        "./assets/pokemones/roca.png",
        "./assets/pokemones/tierra.png",
      ],
    },
    image: "./assets/pokemones/Larvitar.png",
    weaknesses: {
      weaknessesName: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
      weaknessesImage: [
        "./assets/pokemones/agua.png",
        "./assets/pokemones/planta.png",
        "./assets/pokemones/hielo.png",
        "./assets/pokemones/lucha.png",
        "./assets/pokemones/tierra.png",
        "./assets/pokemones/acero.png",
      ],
    },
    baseStats: {
      hp: "50",
      attack: "64",
      defense: "50",
      speed: "41",
    },
    height: "0.6",
    category: "Rock Skin",
    ability: "Guts",
    weight: "72.0",
    evolutions: {
      evolutionName: ["Larvitar","Pupitar","Tyanitar"],
      evolutionImage: ["./assets/pokemones/Larvitar.png","./assets/pokemones/Pupitar.png","./assets/pokemones/Tyanitar.png"],
    },
  },
];
