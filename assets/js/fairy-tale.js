function populateSuggestions() {
  var suggestions = new Array();
  suggestions["rand"] = new Array("");
  suggestions["idea_count"] = new Array("3", "4", "5", "8", "10");
  suggestions["unisex_name"] = new Array(
    "Sam",
    "Bob",
    "Morgan",
    "Jamie",
    "Jody",
    "Robin",
    "Alex",
    "Lee",
    "Ash"
  );
  suggestions["friend_relationship"] = new Array(
    "enemy",
      "colleague",
      "neighbour",
      "daughter",
      "mother",
      "sister",
      "lover",
      "friend",
      "wife",
      "girlfriend",
      "niece",
      "aunt",
      "granddaughter",
      "grandmother"
  )
  suggestions["first_name"] = new Array(
    "Sam",
    "Bob",
    "Morgan",
    "Jamie",
    "Jody",
    "Robin",
    "Alex",
    "Lee",
    "Ash",
    "Chloe",
    "Catherine",
    "Mike",
    "James",
    "Bob",
    "Robert"
  );
  suggestions["last_name"] = new Array(
    "Gump",
    "Doop",
    "Gloop",
    "Snozcumber",
    "Giantbulb",
    "Slaughterhouse",
    "Godfrey",
    "Smith",
    "Jones",
    "Bogtrotter",
    "Ramsbottom",
    "Cockle",
    "Hemingway",
    "Pigeon",
    "Parker",
    "Nolan",
    "Parkes",
    "Butterscotch",
    "Barker",
    "Trescothik",
    "Superhalk",
    "Barlow",
    "MacDonald",
    "Ferguson",
    "Donaldson",
    "Platt",
    "Bishop",
    "Blunder",
    "Thunder",
    "Sparkle",
    "Walker",
    "Raymond",
    "Thornhill",
    "Sweet",
    "Parker",
    "Johnson",
    "Randall",
    "Zeus",
    "England",
    "Smart",
    "Gobble",
    "Clifford",
    "Thornton",
    "Cox",
    "Blast",
    "Plumb",
    "Wishmonger",
    "Fish",
    "Blacksmith",
    "Thomas",
    "Grey",
    "Russell",
    "Lakeman",
    "Ball",
    "Chan",
    "Chen",
    "Wu",
    "Khan",
    "Meadows",
    "Connor",
    "Williams",
    "Wilson",
    "Blackman",
    "Jones",
    "Humble",
    "Noris",
    "Bond",
    "Rabbit",
    "McCallister",
    "DeVito",
    "Malkovich",
    "Olsson",
    "Sparrow",
    "Kowalski",
    "Vader",
    "Torrance",
    "Greenway",
    "Rockatansky",
    "Pitt",
    "Willis",
    "Jolie"
  );
  suggestions["doing"] = new Array(
    "running",
    "skiing",
    "looking pretty",
    "pouting",
    "smiling",
    "holidaying",
    "jumping",
    "sailing",
    "swimming",
    "walking",
    "dressing up"
  );
  suggestions["physical"] = new Array(
    "short",
    "tall",
    "strong",
    "weak",
    "muscular",
    "puny",
    "ugly",
    "hot",
    "sexy",
    "fat",
    "thin",
    "slim",
    "curvy",
    "slender",
    "handsome",
    "stunning",
    "beautiful",
    "pale",
    "hairy",
    "bald",
    "porky",
    "podgy",
    "grubby",
    "scruffy",
    "smart",
    "flabby"
  );
  suggestions["species"] = new Array(
    "werewolf",
    "vampire",
    "mermaid",
    "wizard",
    "angel",
    "demon",
    "alien",
    "ghost",
    "loch ness monster",
    "phantom cat",
    "goblin",
    "pixie",
    "unicorn",
    "yeti",
    "gremlin",
    "zombie",
    "dragon",
    "serpent",
    "fairy",
    "elf",
    "god",
    "fallen angel",
    "gargoyle",
    "siren",
    "shape shifter",
    "yeti"
  );
  suggestions["troll_towns"] = new Array(
    "Gootown",
    "Sludgeside",
    "Upper Muddington",
    "Slimeville",
    "Creepmouth",
    "St Gurgle",
    "Redbellyford",
    "Gurglebridge",
    "Muckyham",
    "Muddon",
    "New Swamp",
    "San Fran Boggo",
    "Las Bogie",
    "Earwax City",
    "Snotchester",
    "Bogieborough",
    "Spittleton",
    "Gruesomeside",
    "Smellgow",
    "Sharpfoot",
    "Yuckylake",
    "Stinkville",
    "Greenton",
    "Slipperyham",
    "Bogstaple",
    "Awfulpool"
  );
  suggestions["forest"] = new Array(
    "Penrose Woods",
    "Central Park",
    "Sherwook Forest",
    "Kennel Vale",
    "Idless Woods",
    "St James's Park",
    "Kensington Gardens",
    "Gurglebridge",
    "Hyde Park",
    "Hampstead Heath",
    "New Swamp",
    "Thetford Forest",
    "The Amazon Rainforest",
    "Wyre Forest",
    "Snotchester Forest",
    "Greenwood Forest",
    "Spittleton Woods",
    "Gruesomeside Forest",
    "Grizedale Forest",
    "Dallington Forest",
    "Yuckylake Woods",
    "Stinkville Forest",
    "Greenton Woods",
    "Slipperyham Park",
    "Bogstaple Woods",
    "Awfulpool Forest"
  );
  suggestions["toy"] = new Array(
    "Mr Teddy",
    "Miss Piggy",
    "Terrance the Moose",
    "Little Mouse",
    "Henry the Hippo",
    "Spike",
    "Daisy",
    "Laura",
    "Rags",
    "Bunny",
    "George",
    "Blankey",
    "Ted",
    "Hugo",
    "Molly",
    "Dolly",
    "Emma",
    "Piglet",
    "Donkey"
  );
  suggestions["meals"] = new Array(
    "spaghetti bolognese",
    "pasties",
    "chips",
    "pizzas",
    "pies",
    "curries",
    "noodles",
    "sausages",
    "burgers",
    "lasagnes",
    "carbonaras",
    "cheesebakes",
    "baked potatoes",
    "sandwiches"
  );

  suggestions["yucky"] = new Array(
    "bogies",
    "earwax",
    "dustbins",
    "skunks",
    "fish",
    "cheese",
    "toilets",
    "cabbages",
    "sprouts"
  );
  suggestions["accident"] = new Array(
    "drunk driving",
    "sausage",
    "flying",
    "boating",
    "catapulting",
    "hit and run",
    "apocalyptic",
    "magic",
    "golfing",
    "polo",
    "motor",
    "unfortunate",
    "bear baiting",
    "crocodile taming",
    "safari",
    "bungee jumping",
    "dancing",
    "pointless",
    "fang",
    "skating",
    "biking"
  );

  suggestions["friend_gender"] = new Array(
     "male",
     "female"
  );
  suggestions["protag_gender"] = new Array(
     "male",
     "female"
  );
  suggestions["vulnerable"] = new Array(
    "old lady",
    "chicken",
    "baby",
    "toddler",
    "old man",
    "kitten",
    "puppy",
    "blind person",
    "deaf person",
    "injured bird",
    "disabled person",
    "baby bird",
    "owl",
    "baby flamingo"
  );
  suggestions["role"] = new Array(
    "Mummy",
    "Daddy",
    "Doctor",
    "Dentist",
    "Sis",
    "Bro",
    "Teacher",
    "Headmaster",
    "Honey",
    "Darling",
    "Dear",
    "Mother",
    "Mum",
    "Father",
    "Dad",
    "Nan",
    "Grandma",
    "Grandpa",
    "Auntie",
    "Uncle"
  );
  suggestions["planet"] = new Array(
    "Pluto",
    "Mars",
    "Jupiter",
    "Earth",
    "Uranus",
    "Venus",
    "Abydos",
    "Saturn",
    "Byss",
    "Klendathu",
    "Ocampa",
    "Tatooine",
    "Neptune",
    "Epsilon Eridani",
    "Solaris",
    "Dune",
    "Dagobah",
    "Mooyani",
    "Scoboni",
    "Lavalulu",
    "Kubasulu",
    "Frabenesh"
  );
  suggestions["child_age"] = new Array(
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17"
  );
  suggestions["age"] = new Array(
    "7",
    "9",
    "15",
    "18",
    "21",
    "29",
    "45",
    "55",
    "75",
    "24",
    "28",
    "32",
    "33",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
    "100",
    "101",
    "124",
    "20",
    "203",
    "65",
    "8",
    "99"
  );
  suggestions["number"] = new Array(
    "3",
    "9",
    "15",
    "365",
    "21",
    "29",
    "45",
    "55",
    "75",
    "24",
    "28",
    "32",
    "33",
    "40",
    "50",
    "31",
    "70",
    "80",
    "90",
    "100",
    "101",
    "124",
    "20",
    "203",
    "65",
    "8",
    "99"
  );
  suggestions["pos_character"] = new Array(
    "gentle",
    "thoughtful",
    "modest",
    "adorable",
    "brave",
    "helpful",
    "loving",
    "special",
    "hopeful",
    "optimistic",
    "charming",
    "kind",
    "grateful",
    "gracious",
    "delightful",
    "patient",
    "generous",
    "energetic",
    "down to earth",
    "admirable",
    "friendly",
    "smart",
    "considerate",
    "noble",
    "articulate",
    "caring",
    "intuitive",
    "sympathetic",
    "clever",
    "daring",
    "courageous",
    "hilarious",
    "understanding",
    "incredible",
    "funny",
    "popular",
    "virtuous",
    "lovable",
    "remarkable",
    "cute",
    "sweet",
    "splendid",
    "stable",
    "witty",
    "admirable",
    "giving",
    "intelligent",
    "brave",
    "bold"
  );
  suggestions["neg_character"] = new Array(
    "greedy",
    "callous",
    "selfish",
    "spiteful",
    "mean",
    "cowardly",
    "stupid",
    "spiteful",
    "scheming",
    "wild",
    "tactless",
    "peculiar",
    "creepy",
    "sinister",
    "arrogant",
    "proud",
    "ruthless",
    "cold-blooded",
    "smelly",
    "vile",
    "snotty",
    "hungry",
    "predatory",
    "malicious",
    "deranged",
    "snooty",
    "violent",
    "cowardly",
    "brutal",
    "controlling",
    "clumsy",
    "forgetful",
    "thoughtless",
    "stingy",
    "rude",
    "tight-fisted"
  );

  suggestions["phys_adj"] = new Array(
    "pink",
    "feathery",
    "sloppy",
    "slimy",
    "spiky",
    "greasy",
    "ginger",
    "brunette",
    "brown",
    "blonde",
    "red",
    "tall",
    "short",
    "fat",
    "squat",
    "chubby",
    "skinny",
    "pointy",
    "scrawny",
    "wobbly",
    "wide",
    "vast",
    "solid",
    "fragile",
    "fluffy",
    "hairy",
    "grubby",
    "dirty",
    "moist",
    "ugly",
    "pretty",
    "charming",
    "handsome",
    "beautiful",
    "sticky",
    "curvaceous",
    "curvy",
    "ample",
    "ruddy"
  );

  suggestions["character_type"] = new Array(
    "human",
    "cat",
    "dog",
    "steam train",
    "boat",
    "pencil",
    "teapot"
  );

  suggestions["seeking"] = new Array("ball", "mum", "dad", "stick", "dog");

  suggestions["decoy"] = new Array(
    "orange",
    "apple",
    "globe",
    "granny",
    "grandpa",
    "mum",
    "dad",
    "stick",
    "pencil",
    "pen",
    "tomato",
    "broom",
    "elephant",
    "cat",
    "mouse",
    "hippo"
  );

  suggestions["feature"] = new Array(
    "arches",
    "beaches",
    "cliffs",
    "ditches",
    "estuaries",
    "fields",
    "gates",
    "hills",
    "igloos",
    "jungle",
    "kettles",
    "lakes",
    "mountains",
    "nooks",
    "oceans",
    "parks",
    "quarries",
    "rivers",
    "swamps",
    "trees",
    "tunnels",
    "umbrellas",
    "volcanoes",
    "waters",
    "zoos"
  );

  suggestions["para_feature"] = new Array(
    "sharp fangs",
    "sharp teeth",
    "long claws",
    "spiky fur",
    "evil eyes",
    "fuzzy wings",
    "fish-like tail",
    "giant feet",
    "pointy hat",
    "translucent body",
    "foul odour",
    "dangerous sword",
    "thirst for blood",
    "pale skin",
    "black fur",
    "dazzling fangs",
    "long nose",
    "whopping ears",
    "grumpy disposition",
    "murderous tendencies",
    "inherent evilness",
    "angry eyes",
    "nasty wounds"
  );

  suggestions["want"] = new Array(
    "justice",
    "love",
    "revenge",
    "affection",
    "equality",
    "a phone number",
    "Internet access",
    "a wifi code",
    "peace",
    "a fight",
    "a resolution",
    "a pencil",
    "some more Facebook friends",
    "some more Twitter followers",
    "a kiss"
  );

  suggestions["feel"] = new Array(
    "uncomfortable",
    "hot",
    "uneasy",
    "scared",
    "confused",
    "frightened",
    "on edge",
    "afraid",
    "dubious"
  );

  suggestions["genre"] = new Array(
    "crime",
    "suspense",
    "mystery",
    "paranormal romance",
    "children's",
    "young adult",
    "fantasy",
    "science fiction",
    "religious",
    "war",
    "futuristic",
    "historic",
    "romance",
    "humorous",
    "gay",
    "lesbian",
    "horror",
    "contemporary",
    "literary",
    "family",
    "psychological"
  );

  suggestions["weather_noun"] = new Array(
    "sun",
    "hail",
    "sleet",
    "snow",
    "rain",
    "drizzle",
    "moon",
    "wind",
    "clouds"
  );
  suggestions["nouns_adj"] = new Array(
    "giant",
    "killer",
    "scary",
    "worrying",
    "evil",
    "ill-meaning",
    "violent",
    "scheming",
    "false",
    "wicked",
    "fake"
  );

  suggestions["battle"] = new Array(
    "Three Armies",
    "Four Armies",
    "Five Armies",
    "Blenheim",
    "Waterloo",
    "the Somme",
    "Hastings",
    "Britain"
  );
  suggestions["provide"] = new Array(
    "warmth",
    "happiness",
    "comfort",
    "shelter"
  );

  suggestions["nouns"] = new Array(
    "flamingos",
    "aardvarks",
    "bees",
    "robots",
    "potions",
    "spells",
    "charms",
    "coins",
    "weapons",
    "glasses",
    "toast",
    "stamps",
    "soup",
    "beans",
    "dice",
    "trousers",
    "wigs",
    "eyebrows",
    "bananas",
    "sausages",
    "bacon"
  );
  suggestions["currency"] = new Array(
    "pounds",
    "dollars",
    "euros",
    "gold pieces"
  );

  suggestions["petnames"] = new Array(
    "Queenie",
    "Rover",
    "Sootie",
    "Scamp",
    "Rusty",
    "Snowie",
    "Tilly",
    "Fluffy",
    "Cottontail",
    "Fuzz",
    "Mr Kitten",
    "Kitty the Stink",
    "Charlie",
    "Oscar",
    "Alfie",
    "Gizmo",
    "Millie",
    "Poppy",
    "Molly",
    "Smudge",
    "Jasper",
    "Tigger",
    "Simba",
    "Little Lola",
    "Max",
    "Buster",
    "Harvey",
    "Daisy",
    "Ruby",
    "Roxie"
  );

  suggestions["protag_noun"] = new Array(
    "saint",
    "giant",
    "angel",
    "teacher",
    "doctor",
    "do gooder",
    "academic",
    "carer",
    "god",
    "deity",
    "animal",
    "bear",
    "dolphin",
    "elephant",
    "friend",
    "gamer",
    "hero",
    "juggler",
    "knight",
    "lover",
    "muppet",
    "ogre",
    "patient",
    "queen",
    "rover",
    "volcano",
    "wally",
    "brute",
    "coward",
    "monster",
    "vicar",
    "author",
    "writer",
    "painter",
    "banker",
    "lawyer"
  );

  suggestions["emotion"] = new Array(
    "active",
    "barmy",
    "happy",
    "delighted",
    "ecstatic",
    "concerned",
    "worried",
    "afraid",
    "puzzled",
    "ambivalent",
    "lonely",
    "sad",
    "angry",
    "stressed",
    "irritable",
    "calm",
    "relaxed",
    "jumpy",
    "cross",
    "fuzzy",
    "sleepy",
    "sneezy",
    "healthy",
    "unstable",
    "stable",
    "anxious",
    "confident",
    "sparkly",
    "shocked",
    "surprised"
  );

  suggestions["baddie"] = new Array(
    "thug",
    "lion",
    "tiger",
    "robber",
    "mugger",
    "monster",
    "cow",
    "sea monster",
    "hooligan",
    "zombie",
    "goblin",
    "mass murderer",
    "alien",
    "vampire",
    "ghost",
    "dragon",
    "shark"
  );

  suggestions["victims"] = new Array(
    "children",
    "elderly ladies",
    "elderly gents",
    "babies",
    "swimmers",
    "kittens",
    "baby birds"
  );

  suggestions["neg_act"] = new Array(
    "rob",
    "burgle",
    "eat",
    "mug",
    "attack",
    "gobble",
    "badmouth",
    "terrorise",
    "hurt",
    "kill",
    "murder",
    "blackmail",
    "squash",
    "fire",
    "destroy",
    "squish",
    "terrify",
    "munch",
    "devour",
    "kick",
    "stab",
    "thump",
    "punch",
    "exterminate",
    "frame",
    "poke",
    "tickle",
    "shoot",
    "attack",
    "prod",
    "frighten",
    "rob",
    "trick",
    "vandalise"
  );

  suggestions["love_adj"] = new Array(
    "passionate",
    "sizzling",
    "magical",
    "tender",
    "sensational",
    "frantic",
    "deep",
    "important",
    "splendid",
    "incredible",
    "hot"
  );

  suggestions["bodypart"] = new Array(
    "toes",
    "feet",
    "hands",
    "legs",
    "arms",
    "lips",
    "fingers",
    "toenails",
    "fingernails",
    "eyes",
    "elbows",
    "fingers",
    "eyelashes",
    "eyebrows",
    "thighs",
    "abs",
    "ankles",
    "spots",
    "moles",
    "warts"
  );

  suggestions["bodypart_sin"] = new Array(
    "toe",
    "little toe",
    "big toe",
    "foot",
    "hand",
    "leg",
    "arm",
    "upper lip",
    "finger",
    "little finger",
    "big finger",
    "toenail",
    "fingernail",
    "left eye",
    "elbow",
    "eyelash",
    "eyebrow",
    "thigh",
    "ankle"
  );

  suggestions["location"] = new Array(
    "Canada",
    "Devon",
    "Cornwall",
    "London",
    "Wales",
    "New York",
    "Africa",
    "Australia",
    "Kent",
    "Ireland",
    "Scotland"
  );

  suggestions["place"] = new Array(
    "the park",
    "the petrol station",
    "the forest glade",
    "the supermarket",
    "school",
    "the butchers",
    "a sparking river",
    "a deserted church",
    "a spooky graveyard"
  );

  suggestions["music_type"] = new Array(
    "reggae",
    "jazz",
    "trance",
    "piano",
    "classical",
    "R & B",
    "drum and bass",
    "indie",
    "flute",
    "orchestral"
  );

  suggestions["drink"] = new Array(
    "tea",
    "cocoa",
    "port",
    "beer",
    "wine",
    "whiskey",
    "brandy",
    "squash"
  );

  suggestions["weapon"] = new Array(
    "knife",
    "spoon",
    "gun",
    "razor",
    "blade",
    "rope",
    "arrow",
    "sword",
    "pistol",
    "rifle",
    "paperweight",
    "candlestick"
  );

  suggestions["weapons"] = new Array(
    "knives",
    "spoons",
    "guns",
    "razors",
    "blades",
    "ropes",
    "arrows",
    "swords",
    "pistols",
    "rifles",
    "paperweights",
    "candlesticks",
    "nets",
    "stakes",
    "rainbows"
  );

  suggestions["precious"] = new Array(
    "necklace",
    "ring",
    "pendant",
    "bell",
    "talisman"
  );

  suggestions["precious_adj"] = new Array(
    "shiny",
    "gold",
    "tinkling",
    "wooden",
    "mystical",
    "magic",
    "healing"
  );

  suggestions["grim_adj"] = new Array(
    "grim",
    "frozen",
    "icy",
    "deserted",
    "devastated",
    "terrifying"
  );

  suggestions["year"] = new Array(
    "2022",
    "2023",
    "2030",
    "2033",
    "2080",
    "2090",
    "2099",
    "2100"
  );

  suggestions["ruled_by"] = new Array(
    "zombies",
    "robots",
    "fascists",
    "right wing extremists",
    "rebels",
    "convicts",
    "criminals",
    "racist giraffes",
    "apes",
    "merpeople",
    "starfish"
  );

  suggestions["dys_event"] = new Array(
    "a meteor strike",
    "nuclear war",
    "a zombie apocalypse",
    "an alien invasion",
    "robots becoming sentient",
    "a super virus",
    "a prison break",
    "an unstoppable virus",
    "harmful bacteria"
  );

  suggestions["rev_org"] = new Array(
    "The Sisterhood",
    "The Hope Tribe",
    "The Freedom Fighters",
    "The Freedom Foxes",
    "The Republic",
    "Leader's Army",
    "The New Federation",
    "The Pink Elephants",
    "The Seven Wolves",
    "The Four Aardvarks",
    "Z",
    "The Purple Knights",
    "The Earthlings",
    "The Twenty Three",
    "The Seventh Spouts",
    "The Brain Protectors"
  );

  suggestions["save_world_noun"] = new Array(
    "wit",
    "diligence",
    "an antidote",
    "guns",
    "swords",
    "stakes",
    "brains",
    "space rockets",
    "nets",
    "flippers",
    "oxygen tanks"
  );

  suggestions["landmark"] = new Array(
    "the Statue of Liberty",
    "the Eifel Tower",
    "the Taj Mahal",
    "Stonehenge",
    "Big Ben",
    "Golden Gate Bridge",
    "Buckingham Palace",
    "the Tower of London",
    "the Sistine Chapel",
    "the Grand Canyon"
  );

  suggestions["landmark_adj"] = new Array(
    "under water",
    "wobbly",
    "mouldy",
    "buried",
    "grubby",
    "rocky",
    "dangerous",
    "derelict",
    "possessed",
    "iced over",
    "frozen",
    "jagged"
  );

  suggestions["secret"] = new Array(
    "I'm afraid of sausages",
    "I pickle my earwax and keep it in a jar under my bed",
    "I pick my nose and eat it",
    "I'm afraid of dust",
    "I bite my toenails",
    "I still wear nappies"
  );

  suggestions["dangerous"] = new Array(
    "murderer",
    "demon",
    "hand-glider",
    "motorbike",
    "blade",
    "armed robber",
    "lion",
    "wolf",
    "tiger",
    "bear",
    "barbed wire",
    "monster"
  );

  suggestions["pretty"] = new Array(
    "flower",
    "rose",
    "kitten",
    "sunset",
    "mountain",
    "violet",
    "lake",
    "sunrise",
    "dress",
    "apron",
    "lace",
    "eye"
  );

  suggestions["addiction"] = new Array(
    "television",
    "chocolate",
    "sugar",
    "Vaseline",
    "lip balm",
    "social media",
    "pain",
    "caffeine",
    "coffee",
    "video games"
  );

  suggestions["condition"] = new Array(
    "pregnancy",
    "addiction",
    "amnesia",
    "chronic fatigue syndrome",
    "depression",
    "anxiety",
    "insomnia"
  );

  suggestions["sweets"] = new Array(
    "chocolate",
    "fruit gums",
    "toffees",
    "white mice",
    "barley sugar",
    "jelly tots",
    "jelly babies",
    "wine gums",
    "peppermints"
  );

  suggestions["say"] = new Array(
    "D'oh!",
    "Yabba Dabba Doo!",
    "Exterminate!",
    "Beam me up Scotty!",
    "What's up Doc?",
    "Oh my God they killed Kenny!",
    "Eat my shorts!",
    "I love you",
    "I am your father",
    "I am your mother",
    "Get out of my house",
    "I admire your eyebrows",
    "Let's get married",
    "Let's move in together",
    "What a spiffing dress",
    "I'm in love with you",
    "I ate your puppy",
    "I shrunk the kids",
    "I've got a new job",
    "I just don't need you in my life any more",
    "Is that real leather",
    "I don't have the money",
    "Hands up or I'll shoot",
    "You must think I was born yesterday"
  );
  suggestions["animal"] = new Array(
    "flamingo",
    "aardvark",
    "kitten",
    "puppy",
    "cat",
    "dog",
    "monkey",
    "snake",
    "bear",
    "rat",
    "gerbil",
    "giraffe",
    "elephant",
    "koala",
    "pigeon",
    "owl",
    "tortoise",
    "toad",
    "frog",
    "mouse",
    "ostrich",
    "donkey",
    "horse",
    "goldfish",
    "guppy",
    "rabbit",
    "hamster",
    "lizard",
    "maggot",
    "fox",
    "badger"
  );
  suggestions["animals"] = new Array(
    "flamingos",
    "aardvarks",
    "kittens",
    "puppies",
    "cats",
    "dogs",
    "monkeys",
    "snakes",
    "bears",
    "rats",
    "gerbils",
    "giraffes",
    "elephants",
    "koalas",
    "humming birds",
    "pigeons",
    "owls",
    "tortoises",
    "toads",
    "frogs",
    "mice",
    "ostriches",
    "donkeys",
    "horses",
    "goldfish",
    "guppies",
    "rabbits",
    "hamsters",
    "lizards",
    "maggots",
    "blue bottles",
    "foxes",
    "badgers"
  );
  suggestions["animal_adj_not_size"] = new Array(
    "hairy",
    "fluffy",
    "scary",
    "spiky",
    "cruel",
    "kind",
    "fierce",
    "friendly",
    "fuzzy",
    "hysterical",
    "naughty",
    "scruffy",
    "mean",
    "terrifying",
    "grey",
    "purple",
    "feathery",
    "winged",
    "spotted",
    "dotty",
    "yellow",
    "wise",
    "wicked",
    "cunning",
    "wise",
    "wild",
    "slippery",
    "grumpy",
    "long-necked",
    "hooting",
    "awful"
  );
  suggestions["when"] = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "spring",
    "summer",
    "autumn",
    "winter",
    "spring",
    "summer",
    "autumn",
    "winter"
  );
  suggestions["origin"] = new Array(
    "Ohio",
    "Ireland",
    "England",
    "Scotland",
    "Europe",
    "the country",
    "the city",
    "the hood",
    "the seaside"
  );

  suggestions["onomatopoeia"] = new Array(
    "crash",
    "smash",
    "drip",
    "boom",
    "moo",
    "clatter",
    "growl",
    "mumble",
    "chatter"
  );

  suggestions["skill"] = new Array(
    "resourcefulness",
    "intelligence",
    "patience",
    "braveness",
    "diligence",
    "kindness",
    "leadership"
  );

  suggestions["job"] = new Array(
    "housekeeper",
    "doctor",
    "author",
    "painter",
    "homemaker",
    "lawyer",
    "cleaner",
    "nurse",
    "gardener",
    "teacher",
    "actor",
    "psychiatrist",
    "fishmonger",
    "shopkeeper",
    "hairdresser",
    "computer programmer",
    "detective",
    "police officer",
    "private detective",
    "mechanic",
    "swordsman",
    "scout",
    "navigator"
  );

  suggestions["passion"] = new Array(
    "dancing",
    "life",
    "love",
    "bird watching",
    "trainspotting",
    "booze",
    "books",
    "comedy",
    "star gazing",
    "kite flying",
    "music",
    "playing the piano",
    "cookery",
    "cats",
    "making birthday cards",
    "food",
    "jam doughnuts"
  );

  suggestions["object"] = new Array(
    "newspaper",
    "cotton reel",
    "torch",
    "sausage",
    "sandwich",
    "book",
    "golf ball",
    "beer can",
    "map",
    "record",
    "hat",
    "birth certificate",
    "death certificate",
    "teapot",
    "ruler",
    "kettle",
    "banana",
    "paper weight",
    "picture frame",
    "piano",
    "knife",
    "blade",
    "gun",
    "rock",
    "guillotine",
    "hawk"
  );

  suggestions["bought"] = new Array(
    "newspaper",
    "chocolate bar",
    "torch",
    "sausage",
    "sandwich",
    "book",
    "coffeee",
    "cup of tea",
    "map",
    "mp3",
    "hat",
    "album",
    "single",
    "teapot",
    "song",
    "kettle",
    "banana",
    "bus ticket",
    "phone",
    "tablet",
    "laptop",
    "pencil"
  );
  suggestions["initial"] = new Array(
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  );
  suggestions["celebrity"] = new Array(
    "Donald Trump",
    "Hilary Clinton",
    "Brad Pitt",
    "Zac Efron",
    "Taylor Swift",
    "Emma Watson",
    "Will Smith",
    "Kim Kardashian",
    "Selena Gomez"
  );

  suggestions["verb"] = new Array(
    "sitting",
    "sleeping",
    "talking",
    "walking",
    "chatting",
    "laughing",
    "running",
    "jogging",
    "eating",
    "skipping",
    "singing",
    "rampaging",
    "gyrating",
    "dancing",
    "bopping",
    "loving",
    "smiling",
    "boating",
    "hopping",
    "swimming",
    "jumping",
    "bouncing",
    "drinking",
    "thinking",
    "cooking",
    "partying",
    "shouting"
  );

  suggestions["verbed"] = new Array(
    "sat",
    "slept",
    "talked",
    "walked",
    "shook",
    "chatted",
    "laughed",
    "ran",
    "jogged",
    "ate",
    "skipped",
    "sung",
    "rampaged",
    "gyrated",
    "danced",
    "smiled",
    "boated",
    "hopped",
    "swam",
    "jumped",
    "bounced",
    "drank",
    "cooked",
    "trembled",
    "whistled",
    "ranted",
    "sunbathed",
    "relaxed"
  );
  suggestions["verb_to"] = new Array(
    "kiss",
    "tickle",
    "eat",
    "bite",
    "punch",
    "kick",
    "smoke",
    "licked",
    "hug",
    "slap",
    "pleasure",
    "shoot",
    "sniff",
    "wash",
    "massage",
    "scrub",
    "club",
    "nuzzle",
    "peck",
    "poke",
    "sniff",
    "taste",
    "polish",
    "scratch"
  );
  suggestions["hobby"] = new Array(
    "choir",
    "stamp collecting",
    "golf",
    "reading",
    "baking",
    "hiking",
    "football",
    "socialising",
    "writing",
    "knitting",
    "star gazing",
    "boxing"
  );

  suggestions["creature"] = new Array(
    "witch",
    "goblin",
    "wizard",
    "fairy",
    "pixie",
    "troll",
    "ogre",
    "sprite",
    "giant",
    "elf",
    "ghost",
    "zombie",
    "gnome",
    "moose",
    "imp",
    "gremlin",
    "dragon",
    "robot",
    "alien"
  );

  suggestions["yucky"] = new Array(
    "bogies",
    "earwax",
    "bones",
    "dustbins",
    "stinky shoes",
    "rotton turnips",
    "skunk trainers"
  );

  suggestions["people"] = new Array(
    "witches",
    "goblins",
    "wizards",
    "fairies",
    "pixies",
    "trolls",
    "ogres",
    "people",
    "giants",
    "elves",
    "ghosts",
    "girls",
    "men",
    "teens",
    "youths",
    "old folk",
    "robots",
    "aliens"
  );
  suggestions["vehicle"] = new Array(
    "space rocket",
    "car",
    "boat",
    "lorry",
    "van",
    "fire engine",
    "bicycle",
    "tandem",
    "scooter",
    "motor bike",
    "tractor",
    "digger",
    "truck"
  );

  suggestions["heavyobject"] = new Array(
    "lorries",
    "elephants",
    "trucks",
    "elephants",
    "rhinos",
    "helicopters",
    "meteors",
    "traffic",
    "rocks",
    "cars",
    "hippos"
  );

  suggestions["colour"] = new Array(
    "red",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink"
  );

  suggestions["clothing"] = new Array(
    "top hat",
    "bowler hat",
    "dungarees",
    "pinafore",
    "skirt",
    "t-shirt",
    "jumper",
    "waistcoat",
    "coat",
    "jacket"
  );

  suggestions["clothing_plu"] = new Array(
    "hats",
    "shirts",
    "dungarees",
    "pinafores",
    "skirts",
    "t-shirts",
    "jumpers",
    "waistcoats",
    "coats",
    "jackets"
  );

  suggestions["obj_adj"] = new Array(
    "bendy",
    "giant",
    "tiny",
    "stripy",
    "spotty",
    "warped",
    "minuscule",
    "peculiar",
    "ribbed",
    "ripped",
    "crumpled",
    "tattered",
    "solid",
    "weathered",
    "damp",
    "squidgy",
    "silver",
    "enchanted",
    "magic",
    "cursed"
  );

  suggestions["tat_adj"] = new Array(
    "garish",
    "hostile",
    "snake",
    "discreet",
    "tribal",
    "butterfly",
    "lower back",
    "facial",
    "large",
    "epic",
    "unfortunate"
  );
  suggestions["disaster"] = new Array(
    "tsunami",
    "hurricane",
    "earthquake",
    "tornado",
    "tidal wave",
    "volcanic eruption"
  );

  suggestions["vegetable"] = new Array(
    "carrot",
    "potato",
    "aubergine",
    "courgette",
    "cauliflower",
    "cabbage",
    "parsnip",
    "sprout",
    "turnip"
  );
  suggestions["vegetables"] = new Array(
    "carrots",
    "butternut squashes",
    "aubergines",
    "courgettes",
    "cauliflowers",
    "cabbages",
    "parsnips",
    "sprouts",
    "turnips",
    "sweet potatoes",
    "swedes",
    "broccoli florets",
    "pumpkins",
    "peppers",
    "onions",
    "runner beans",
    "sugar snap pea",
    "pods of peas",
    "peas",
    "red cabbages",
    "lettuces",
    "cucumbers"
  );
  suggestions["unhealthy_foods"] = new Array(
    "crisps",
    "sweets",
    "biscuits",
    "cakes",
    "toffees",
    "chocolates",
    "chips",
    "doughnuts",
    "pancakes",
    "muffins",
    "cupcakes",
    "pizzas",
    "macarons",
    "lollipops",
    "jelly babies",
    "humbugs",
    "fruit gums"
  );

  suggestions["building"] = new Array(
    "hall",
    "heights",
    "house",
    "bungalow",
    "castle",
    "abbey",
    "mill",
    "towers",
    "station",
    "garage",
    "skyscraper",
    "tower",
    "church",
    "school",
    "hut"
  );
  suggestions["streets"] = new Array(
    "Seventh Avenue",
    "St Luke's Terrace",
    "Golden Bank Road",
    "Market Hill",
    "The Old Church Lane",
    "Edward's Street",
    "Greenlane",
    "Northern Terrace",
    "Regent Street",
    "Cowley Lane",
    "Manor Hill",
    "Oxford Road",
    "Iffly Street",
    "School Road",
    "Hawthorn Avenue"
  );

  suggestions["weatherAdj"] = new Array(
    "windy",
    "snowy",
    "sunny",
    "frosty",
    "chilly",
    "nippy",
    "frozen",
    "breezy",
    "icy",
    "cold",
    "sweltering",
    "freezing"
  );

  suggestions["truth_adj"] = new Array(
    "unbelievable",
    "wacky",
    "terrifying",
    "zany",
    "unlikely",
    "dangerous",
    "shocking",
    "electrifying",
    "improbable",
    "fearsome",
    "sickening",
    "exciting"
  );

  suggestions["person_type"] = new Array(
    "aunt",
    "nun",
    "monk",
    "wolf",
    "uncle",
    "sister",
    "brother",
    "nurse",
    "father",
    "headmistress",
    "matron"
  );

  suggestions["event"] = new Array(
    "Christening",
    "funeral",
    "wedding",
    "birthday party",
    "bar mitzvah",
    "engagement party",
    "carol service",
    "wake",
    "Valentine's meal",
    "Halloween party",
    "disco",
    "dinner party",
    "accident",
    "snow storm",
    "rave",
    "holiday"
  );
  suggestions["car_make"] = new Array(
    "Ford",
    "Audi",
    "Rover",
    "Aston Martin",
    "Mini",
    "Morgan",
    "Jaguar",
    "Bentley",
    "Vauxhall",
    "Fiat",
    "Mercedes-Benz",
    "Porche",
    "Opel",
    "Saab",
    "Honda"
  );
  suggestions["title_ideas"] = new Array(
    "One Rotten Day",
    "Yesterday in my Life",
    "The Terrible Tragedy",
    "The Flaming Flamingo",
    "One Week",
    "The Terrible Troubles of a Terrible Tuesday",
    "The Day I Couldn't Fly",
    "Bob's Story",
    "My Winter of Fear",
    "A Great Mess",
    "The Story of a Toad Out of Water",
    "Martin the Martian",
    "Adventures on Earth",
    "Unfair Circumstances",
    "The Mystery of the Ghost that Gargled"
  );

  suggestions["life_adj"] = new Array(
    "sleepy",
    "quiet",
    "wild",
    "happy",
    "idyllic",
    "contented",
    "cosy",
    "simple",
    "carefree"
  );

  suggestions["place_adj"] = new Array(
    "sleepy",
    "pretty",
    "wild",
    "picturesque",
    "idyllic",
    "deserted",
    "cosy",
    "noisy",
    "sunny",
    "quiet",
    "dull",
    "urban",
    "rural",
    "dirty",
    "hilly",
    "grand",
    "old-fashioned",
    "damp",
    "creepy",
    "industrial",
    "derelict",
    "deprived",
    "snooty",
    "backward",
    "beautiful",
    "magical",
    "crowded",
    "grey",
    "chilly",
    "cold"
  );

  suggestions["place_adj_alt"] = new Array(
    "Cornish",
    "country",
    "seaside",
    "English",
    "coastal"
  );

  suggestions["adverbs"] = new Array(
    "abnormally",
    "absentmindedly",
    "accidentally",
    "actively",
    "admiringly",
    "agreeably",
    "beautifully",
    "badly",
    "bashfully",
    "begrudgingly",
    "blissfully",
    "blindly",
    "boldly",
    "boyishly",
    "bravely",
    "brilliantly",
    "briskly",
    "brutally",
    "busily",
    "calmly",
    "carefully",
    "carelessly",
    "casually",
    "cautiously",
    "cheerfully",
    "childishly",
    "cleverly",
    "dangerously",
    "daringly",
    "darkly",
    "deeply",
    "defiantly",
    "deftly",
    "eloquently",
    "elegantly",
    "emotionally",
    "energetically",
    "enjoyably",
    "fondly",
    "foolishly",
    "gently",
    "gleefully",
    "gracefully"
  );

  suggestions["town"] = new Array(
    "Sleepford",
    "Upper Boggington",
    "West Boggins",
    "Truro",
    "Oxford",
    "Exeter",
    "Camborne",
    "London",
    "New York",
    "Los Angeles",
    "Cambridge",
    "Exeter",
    "Truro",
    "Plymouth",
    "Falmouth",
    "Cardiff",
    "Newton Abbot",
    "Paris",
    "Berlin",
    "Sludgeside",
    "Shanghai",
    "Falmouth",
    "Moscow",
    "Chicago",
    "Philadelphia",
    "Plymouth",
    "Sydney",
    "Dallas",
    "Manchester",
    "Liverpool",
    "Skegness",
    "Cape Town",
    "San Diego",
    "San Francisco",
    "Glasgow",
    "Sidney",
    "Amsterdam",
    "Athens",
    "Bangkok",
    "Berlin",
    "Madrid",
    "Moscow"
  );

  suggestions["evil_med"] = new Array(
    "robbery",
    "theft",
    "burglary",
    "vandalism",
    "fraud",
    "impersonation",
    "gluttony",
    "lust",
    "sloth",
    "jealousy",
    "adultery",
    "decadence"
  );

  suggestions["evil_big"] = new Array(
    "murder",
    "violence",
    "abduction",
    "kidnap",
    "assassination",
    "mutilation",
    "man slaughter",
    "cruelty"
  );
  suggestions["dwelling"] = new Array(
    "hole",
    "pit",
    "cave",
    "house",
    "bungalow",
    "tent",
    "hut"
  );

  suggestions["look"] = new Array(
    "distorted",
    "mirrored",
    "translucent",
    "grey",
    "pickled",
    "upside-down",
    "shrunken",
    "zombified",
    "skeletal"
  );

  suggestions["all_character"] = suggestions["pos_character"].concat(
    suggestions["neg_character"]
  );
  suggestions["all_person"] = suggestions["pos_character"]
    .concat(suggestions["neg_character"])
    .concat(suggestions["phys_adj"]);
  suggestions["all_adj"] = suggestions["phys_adj"].concat(
    suggestions["love_adj"],
    suggestions["obj_adj"],
    suggestions["weatherAdj"],
    suggestions["place_adj"],
    suggestions["life_adj"],
    suggestions["nouns_adj"]
  );
  suggestions["all_nouns"] = suggestions["object"];

  for (var i = 0; i < suggestions["all_nouns"].length; i++) {
    if (suggestions["all_nouns"][i].indexOf(" ") >= 0) {
      suggestions["all_nouns"].splice(i, 1);
      i--;
    }
  }
  return suggestions;
}

function suggest(whichType, whichBox) {
  suggestions = populateSuggestions();
  shuffle(suggestions[whichType]);
  var newValue = suggestions[whichType][0];
  document.getElementsByName(whichBox)[0].value = newValue;
}

function suggestPair() {
  var suggestions = new Array(
    "beer|wine",
    "football|rugby",
    "girls|boys",
    "pizza|pies",
    "bl ones|brunettes",
    "dogs|cats",
    "muppets|fraggles",
    "swedes|Danes",
    "men|women",
    "ketchup|mayo",
    "studying|socialising",
    "Europe|America",
    "the city|the countryside",
    "fruit|chocolate",
    "golf|skydiving",
    "sophisticated ladies|bad girls",
    "gentlemen|bad boys",
    "tights|stockings",
    "Fords|BMWs",
    "the wife|the mistress",
    "Cambridge|Oxford",
    "television|radio",
    "trifle|pavlova",
    "trainers|stiletto boots",
    "orange juice|vodka",
    "the living|the dead",
    "law|art",
    "science|religion",
    "tall people|gnomes",
    "chickens|ducks"
  );

  shuffle(suggestions);
  var newValue = suggestions[0];
  var pair = newValue.split("|");
  document.getElementsByName("loves1")[0].value = pair[0];
  document.getElementsByName("loves2")[0].value = pair[1];
}
shuffle = function (o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
};
function refKissed() {
  kissed.innerText = document.getElementsByName("verbed")[0].value;
}
function populateNames(field) {
  var names = new Array();

  names["male_firstnames"] = new Array(
    "Boris",
    "Fred",
    "Albert",
    "Tom",
    "James",
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "David",
    "Harold",
    "Bob",
    "Jack",
    "Mike",
    "Raymond",
    "Cuthbert",
    "Casper",
    "Harry",
    "Cameron",
    "Warwick",
    "Steve",
    "Steven",
    "Simon",
    "Jeff",
    "Zach",
    "Chris",
    "Christian",
    "Matt",
    "Mathias",
    "Alex",
    "Will",
    "William",
    "Forest",
    "Clarke",
    "Gregory",
    "Joshua",
    "Josh",
    "Andy",
    "Andrew",
    "Dick",
    "Rick",
    "Richard",
    "Rob",
    "Robert",
    "Mo",
    "Hector",
    "Reginald",
    "Phillip",
    "Phil",
    "Pete",
    "Roger",
    "Brad",
    "Chad",
    "Shane",
    "Daniel",
    "Dan",
    "Tristan",
    "Roy",
    "Gary",
    "Tony",
    "Toby",
    "Barry",
    "Graham",
    "Kevin",
    "Tommy",
    "Sandie",
    "Darth",
    "Garth"
  );

  names["female_firstnames"] = new Array(
    "Annie",
    "Mary",
    "Sarah",
    "Laura",
    "Lauren",
    "Katy",
    "Kate",
    "Catherine",
    "Naomi",
    "Helen",
    "Nadine",
    "Alice",
    "Alison",
    "Susan",
    "Suzanne",
    "Sharon",
    "Georgina",
    "Sonya",
    "Marion",
    "Beth",
    "Una",
    "Sophia",
    "Rachel",
    "Christiana",
    "Maud",
    "Mildred",
    "Zoe",
    "Chantal",
    "Charlotte",
    "Chloe",
    "Flora",
    "Annabelle",
    "Elizabeth",
    "Morwenna",
    "Jenna",
    "Jenny",
    "Gemma",
    "Wenna",
    "Fairydust",
    "Charity",
    "Ocean",
    "Virginia",
    "Hannah",
    "Mavis",
    "Harriet",
    "Kathy",
    "Heather",
    "Kimberly",
    "May",
    "Carla",
    "Suki",
    "Michelle",
    "Rhiannon",
    "Ruth",
    "Polly",
    "Sally",
    "Molly",
    "Dolly",
    "Maureen",
    "Maud",
    "Doris",
    "Felicity",
    "Jessica",
    "Stanley"
  );

  names["lastnames"] = new Array(
    "Gump",
    "Doop",
    "Gloop",
    "Snozcumber",
    "Giantbulb",
    "Slaughterhouse",
    "Godfrey",
    "Smith",
    "Jones",
    "Bogtrotter",
    "Ramsbottom",
    "Cockle",
    "Hemingway",
    "Pigeon",
    "Parker",
    "Nolan",
    "Parkes",
    "Butterscotch",
    "Barker",
    "Trescothik",
    "Superhalk",
    "Barlow",
    "MacDonald",
    "Ferguson",
    "Donaldson",
    "Platt",
    "Bishop",
    "Blunder",
    "Thunder",
    "Sparkle",
    "Walker",
    "Raymond",
    "Thornhill",
    "Sweet",
    "Parker",
    "Johnson",
    "Randall",
    "Zeus",
    "England",
    "Smart",
    "Gobble",
    "Clifford",
    "Thornton",
    "Cox",
    "Blast",
    "Plumb",
    "Wishmonger",
    "Fish",
    "Blacksmith",
    "Thomas",
    "Grey",
    "Russell",
    "Lakeman",
    "Ball",
    "Chan",
    "Chen",
    "Wu",
    "Khan",
    "Meadows",
    "Connor",
    "Williams",
    "Wilson",
    "Blackman",
    "Jones",
    "Humble",
    "Noris",
    "Bond",
    "Rabbit",
    "McCallister",
    "DeVito",
    "Malkovich",
    "Olsson",
    "Sparrow",
    "Kowalski",
    "Vader",
    "Torrance",
    "Greenway",
    "Rockatansky",
    "Pitt",
    "Willis",
    "Jolie"
  );
  return names;
}
function populateTrollNames(field) {
  var names = new Array();
  names["male_firstnames"] = new Array(
    "Boris",
    "Fred",
    "Albert",
    "Borisulator",
    "Harold",
    "Bob",
    "Jack",
    "Mikemenace",
    "Raymond",
    "Cuthbert",
    "Casper",
    "Harry",
    "Cameron",
    "Warwick",
    "Steve",
    "Steven",
    "Simon",
    "Jeff",
    "Zach",
    "Chris",
    "Christian",
    "Matt",
    "Big Alex",
    "Willsnot",
    "Earlobe",
    "Forest",
    "Clarkeslug",
    "Slug",
    "Gregorsnail",
    "Joshslime",
    "Andybogie",
    "Clawed",
    "Garth"
  );

  names["female_firstnames"] = new Array(
    "Tometta",
    "Maggot",
    "Sarahstench",
    "Larva",
    "Laurengross",
    "Katybert",
    "Katenose",
    "Catherina",
    "Soapfree",
    "Helenflip",
    "Nadgoose",
    "Alicefearce",
    "Grimalison",
    "Susangrr",
    "Flappy Suzanne",
    "Georgina",
    "Sonyalip",
    "Marionica",
    "Bethlyn",
    "Una",
    "Sophiamoose",
    "Rachelguts",
    "Christiana",
    "Maud",
    "Mildred"
  );

  names["lastnames"] = new Array(
    "Gump",
    "Breakableclaws",
    "Gloop",
    "Troubledmaster",
    "Giantbulb",
    "Braveboil",
    "Chillynails",
    "Fatmaster",
    "Calfwax",
    "Toilettrotter",
    "Headbottom",
    "Mudbather",
    "Hemingfoot",
    "Pigeonscarer",
    "Parkemptier",
    "Nosoap",
    "Soapfree",
    "Grubbytoes",
    "Grizzle",
    "Treecruncher",
    "Superhalk",
    "Leafstripper",
    "Smellybum",
    "Nastynose",
    "Donaldsonsnot",
    "Boglewax",
    "Bogie",
    "Earwax",
    "Nosril",
    "Hairy",
    "Smelly",
    "Putridpinky",
    "the Ghastly",
    "Boilingears",
    "Speckledtongue",
    "Bloodshot",
    "Stink",
    "Eversogrim",
    "Grim",
    "Barkingnose",
    "Gobble",
    "Noisybelly",
    "Spongebelly",
    "Nobbledknees",
    "Greasyankles",
    "Boldfoot",
    "Baldbottom",
    "Smellyelbow",
    "Greentongue",
    "Armpit",
    "Greyskin",
    "Russellbeard",
    "Bignose",
    "Crookedface",
    "Foul",
    "Dreadfulbark",
    "Scratchyvoice"
  );
  return names;
}
function populateLocations(field) {
  var places = new Array();

  places["EXT"] = new Array(
    "Central Park, New York",
    "Miami Beach",
    "Trafalgar Square, London",
    "Chippewa Square, Savannah",
    "The Eden Project, Cornwall",
    "Vasquez Rocks, California",
    "Greenwich, London",
    "Tower Bridge, London",
    "Notting Hill, London",
    "St Michael's Mount, Cornwall",
    "A greasy diner",
    "a supermarket",
    "a book shop",
    "a library"
  );
  places["INT"] = new Array(
    "A Library",
    "A Sweet Shop",
    "Sydney Opera House",
    "Quality Cafe, Los Angeles",
    "Hatfield House, England",
    "National History Museum, London",
    "Tate Modern, St Ives",
    "Kings Cross Station, London",
    "Hamstead Heath, London"
  );
  return places;
}
function suggestPerson(whichFirstnameBox, whichLastnameBox, whichGenderBox) {
  names = populateNames();
  shuffle(names["lastnames"]);
  var gender = Math.round(Math.random());
  if (gender == 0) {
    shuffle(names["male_firstnames"]);
    var newValue = names["male_firstnames"][0];
    document.getElementsByName(whichGenderBox)[0].checked = true;
  } else {
    shuffle(names["female_firstnames"]);
    var newValue = names["female_firstnames"][0];
    document.getElementsByName(whichGenderBox)[1].checked = true;
  }
  document.getElementsByName(whichFirstnameBox)[0].value = newValue;
  var newValue = names["lastnames"][0];
  document.getElementsByName(whichLastnameBox)[0].value = newValue;

  return gender;
}
function suggestFirstname(whichFirstnameBox) {
  names = populateNames();
  var first = names["male_firstnames"].concat(names["female_firstnames"]);
  shuffle(first);
  var newValue = first[0];
  document.getElementsByName(whichFirstnameBox)[0].value = newValue;
}
function suggestChild(
  whichFirstnameBox,
  whichLastnameBox,
  whichAgeBox,
  gender
) {
  names = populateNames();
  shuffle(names["lastnames"]);
  if (gender == "m") {
    shuffle(names["male_firstnames"]);
    var newValue = names["male_firstnames"][0];
  } else {
    shuffle(names["female_firstnames"]);
    var newValue = names["female_firstnames"][0];
  }
  var age = Math.floor(Math.random() * 10) + 4;
  document.getElementsByName(whichFirstnameBox)[0].value = newValue;
  var newValue = names["lastnames"][0];
  document.getElementsByName(whichLastnameBox)[0].value = newValue;
  document.getElementsByName(whichAgeBox)[0].value = age;
  var label = whichAgeBox + "_label";
  document.getElementById(label).innerHTML = age;
}
function suggestTroll(whichFirstnameBox, whichLastnameBox, gender) {
  names = populateTrollNames();
  shuffle(names["lastnames"]);
  if (gender == "m") {
    shuffle(names["male_firstnames"]);
    var newValue = names["male_firstnames"][0];
  } else {
    shuffle(names["female_firstnames"]);
    var newValue = names["female_firstnames"][0];
  }
  document.getElementsByName(whichFirstnameBox)[0].value = newValue;
  var newValue = names["lastnames"][0];
  document.getElementsByName(whichLastnameBox)[0].value = newValue;
}
function suggestTrollWithGenderBox(
  whichFirstnameBox,
  whichLastnameBox,
  whichSexBox
) {
  names = populateTrollNames();
  shuffle(names["lastnames"]);
  var gender = Math.round(Math.random());
  if (gender == 0) {
    shuffle(names["male_firstnames"]);
    var newValue = names["male_firstnames"][0];
    document.getElementsByName(whichSexBox)[0].checked = true;
  } else {
    shuffle(names["female_firstnames"]);
    var newValue = names["female_firstnames"][0];
    document.getElementsByName(whichSexBox)[1].checked = true;
  }
  document.getElementsByName(whichFirstnameBox)[0].value = newValue;
  var newValue = names["lastnames"][0];
  document.getElementsByName(whichLastnameBox)[0].value = newValue;

  return gender;
}
function suggestPersonSpecifiedGender(
  whichFirstnameBox,
  whichLastnameBox,
  gender
) {
  names = populateNames();
  shuffle(names["lastnames"]);
  if (gender == "m") {
    shuffle(names["male_firstnames"]);
    var newValue = names["male_firstnames"][0];
  } else {
    shuffle(names["female_firstnames"]);
    var newValue = names["female_firstnames"][0];
  }
  document.getElementsByName(whichFirstnameBox)[0].value = newValue;
  var newValue = names["lastnames"][0];
  document.getElementsByName(whichLastnameBox)[0].value = newValue;
}
function suggestPersonWithMiddlename(
  whichFirstnameBox,
  whichMiddlenameBox,
  whichLastnameBox
) {
  names = populateNames();
  shuffle(names["lastnames"]);
  var gender = Math.round(Math.random());
  if (gender == 0) {
    shuffle(names["male_firstnames"]);
    var newValue = names["male_firstnames"][0];
    shuffle(names["male_firstnames"]);
    var newValue2 = names["male_firstnames"][0];
  } else {
    shuffle(names["female_firstnames"]);
    var newValue = names["female_firstnames"][0];
    shuffle(names["female_firstnames"]);
    var newValue2 = names["female_firstnames"][0];
  }
  document.getElementsByName(whichFirstnameBox)[0].value = newValue;
  document.getElementsByName(whichMiddlenameBox)[0].value = newValue2;
  var newValue = names["lastnames"][0];
  document.getElementsByName(whichLastnameBox)[0].value = newValue;
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var newValue = possible.charAt(Math.floor(Math.random() * possible.length));
  document.getElementsByName(whichInitialsBox)[0].value = newValue;
  return gender;
}

function suggestTitle(
  whichFirstnameBox,
  whichLastnameBox,
  whichGenderBox,
  whichTitleBox
) {
  var gender = suggestPerson(
    whichFirstnameBox,
    whichLastnameBox,
    whichGenderBox
  );

  if (gender == 0) {
    var titles = new Array(
      "DI",
      "DCI",
      "Master",
      "Mr",
      "Dr",
      "Prof",
      "Sir",
      "Lord"
    );
  } else {
    var titles = new Array(
      "DI",
      "DCI",
      "Miss",
      "Ms",
      "Dr",
      "Prof",
      "Mrs",
      "Lady",
      "Madame"
    );
  }
  shuffle(titles);
  var newValue = titles[0];
  document.getElementsByName(whichTitleBox)[0].value = newValue;
}

function suggestRelationship(
  whichFirstnameBox,
  whichLastnameBox,
  whichGenderBox,
  whichTitleBox,
  whichRelBox
) {
  var gender = suggestPerson(
    whichFirstnameBox,
    whichLastnameBox,
    whichGenderBox
  );

  if (gender == 0) {
    var relationships = new Array(
      "son",
      "father",
      "brother",
      "lover",
      "friend",
      "husband",
      "nephew",
      "uncle",
      "grandson",
      "grandfather"
    );
  } else {
    var relationships = new Array(
      "daughter",
      "mother",
      "sister",
      "lover",
      "friend",
      "wife",
      "niece",
      "aunt",
      "granddaughter",
      "grandmother"
    );
  }

  shuffle(relationships);

  var newValue = relationships[0];
  document.getElementsByName(whichRelBox)[0].value = newValue;
}
function suggestChildRelationship(
  whichFirstnameBox,
  whichLastnameBox,
  whichSexBox,
  whichRelBox
) {
  var gender = suggestPerson(
    whichFirstnameBox,
    whichLastnameBox,
    whichGenderBox
  );

  if (gender == 0) {
    var relationships = new Array(
      "brother",
      "father",
      "uncle",
      "grandfather",
      "friend",
      "teacher",
      "papa",
      "grandpa"
    );
  } else {
    var relationships = new Array(
      "mother",
      "auntie",
      "sister",
      "friend",
      "aunt",
      "grandmother",
      "grandma",
      "gran",
      "teacher"
    );
  }

  shuffle(relationships);

  var newValue = relationships[0];
  document.getElementsByName(whichRelBox)[0].value = newValue;
}
function suggestRelationshipWiderScope(
  whichFirstnameBox,
  whichLastnameBox,
  whichGenderBox,
  whichTitleBox,
  whichRelBox
) {
  var gender = suggestPerson(
    whichFirstnameBox,
    whichLastnameBox,
    whichGenderBox
  );

  if (gender == 0) {
    var relationships = new Array(
      "enemy",
      "colleague",
      "neighbour",
      "son",
      "father",
      "brother",
      "lover",
      "friend",
      "husband",
      "boyfriend",
      "nephew",
      "uncle",
      "grandson",
      "grandfather"
    );
  } else {
    var relationships = new Array(
      "enemy",
      "colleague",
      "neighbour",
      "daughter",
      "mother",
      "sister",
      "lover",
      "friend",
      "wife",
      "girlfriend",
      "niece",
      "aunt",
      "granddaughter",
      "grandmother"
    );
  }

  shuffle(relationships);

  var newValue = relationships[0];
  document.getElementsByName(whichRelBox)[0].value = newValue;
}
function suggestFilmLocation(whichLocationBox, whichTypeBox) {
  names = populateLocations();
  var type = Math.round(Math.random());
  if (type == 0) {
    shuffle(names["EXT"]);
    var newValue = names["EXT"][0];
    document.getElementsByName(whichTypeBox)[1].checked = true;
  } else {
    shuffle(names["INT"]);
    var newValue = names["INT"][0];
    document.getElementsByName(whichTypeBox)[0].checked = true;
  }
  document.getElementsByName(whichLocationBox)[0].value = newValue;

  return type;
}

function suggestFeature(whichFeatureBox, whichPluralBox) {
  var sinFeature = new Array(
    "arm",
    "leg",
    "hill",
    "turret",
    "field",
    "eye",
    "nose",
    "mouth",
    "tree",
    "tentacle",
    "foot",
    "mountain",
    "wall",
    "lake",
    "lid",
    "bottom",
    "top",
    "flap",
    "surface",
    "shelf",
    "sole",
    "hook",
    "smell",
    "scent",
    "taste",
    "texture",
    "skin",
    "fur"
  );
  var pluFeature = new Array(
    "arms",
    "legs",
    "hills",
    "turrets",
    "fields",
    "eyes",
    "noses",
    "mouths",
    "trees",
    "tentacles",
    "feet",
    "mountains",
    "walls",
    "lakes",
    "lids",
    "flaps",
    "shelves",
    "soles",
    "hooks",
    "windows",
    "feathers",
    "spikes"
  );
  shuffle(sinFeature);
  shuffle(pluFeature);
  var sp = Math.round(Math.random());

  if (sp == 0) {
    var newValue = sinFeature[0];
    document.getElementsByName(whichPluralBox)[0].checked = false;
  } else {
    var newValue = pluFeature[0];
    document.getElementsByName(whichPluralBox)[0].checked = true;
  }

  document.getElementsByName(whichFeatureBox)[0].value = newValue;
}

function fillAll() {
  var elLength = document.forms[0].elements.length;

  for (i = 0; i < elLength; i++) {
    var type = document.forms[0][i].type;
    if (type == "button") {
      if (i != 1) {
        document.forms[0][i].click();
      }
    } else if (type == "select-one") {
      var items = document.forms[0][i].getElementsByTagName("option");
      var index = Math.floor(Math.random() * items.length);
      document.forms[0][i].selectedIndex = index;
    }
  }
}
function getRandomFairyTale(){
  let result = document.getElementById("persondetailsResult");
  let form = document.forms[0];
  let fr_he = '';
  if(form.friend_gender.value == 'male'){
    fr_he = "He"
  }else{
    fr_he = "She"
  }
  let p = document.createElement('p')
  p.innerHTML = `<P>Once upon a time there was a ${form.hero_adj.value} boy called ${form.protag_firstname.value} ${form.protag_lastname.value}. He was on the way to see his ${form.friend_firstname.value} ${form.friend_lastname.value}, when ${fr_he} decided to take a short cut through ${form.forest.value}.</p>
  <P>It wasn't long before ${form.protag_firstname.value} got lost. He looked around, but all he could see were trees. Nervously, ${fr_he} felt into his bag for his favourite toy, ${form.toy.value}, but ${form.toy.value} was nowhere to be found! ${form.protag_firstname.value} began to panic. He felt sure he had packed ${form.toy.value}. To make ${form.friend_firstname.value}ers worse, he was starting to feel hungry.</p>
  <P>Unexpectedly, he saw a ${form.animal_adj.value} ${form.animal.value} dressed in a ${form.colour.value} ${form.clothing.value} disappearing into the trees.</p>
  <P>"How odd!" thought ${form.protag_firstname.value}.</p>
  <P>For the want of anything better to do, he decided to follow the peculiarly dressed ${form.animal.value}. Perhaps it could tell him the way out of the forest.</p>
  <P>Eventually, ${form.protag_firstname.value} reached a clearing. In the clearing were two houses, one made from sprouts and one made from ${form.vegetables.value}.</p>
  <P>${form.protag_firstname.value} could feel his tummy rumbling. Looking at the houses did nothing to ease his hunger.</p>
  <p>"Hello!" he called. "Is anybody there?"</p>
  <P>Nobody replied.</p>
  <P>${form.protag_firstname.value} looked at the roof on the closest house and wondered if it would be rude to eat somebody else's chimney. Obviously it would be impolite to eat a whole house, but perhaps it would be considered acceptable to nibble the odd fixture or lick the odd fitting, in a time of need.</p>
  <p>A cackle broke through the air, giving ${form.protag_firstname.value} a fright. A witch jumped into the space in front of the houses. She was carrying a cage. In that cage was ${form.toy.value}!<p>
  <p>"${form.toy.value}!" shouted ${form.protag_firstname.value}. He turned to the witch. "That's my toy!"</p>
  <P>The witch just shrugged.</p>
  <P>"Give ${form.toy.value} back!" cried ${form.protag_firstname.value}.</p>
  <P>"Not on your nelly!" said the witch.</p>
  <p>"At least let ${form.toy.value} out of that cage!"</p>
  <P>Before she could reply, the ${form.animal_adj.value} ${form.animal.value} in the ${form.colour.value} ${form.clothing.value} rushed in from a footpath on the other side of the cleaning.</p>
  <P>"Hello Big ${form.animal.value}," said the witch.</p>
  <p>"Good morning." The ${form.animal.value} noticed ${form.toy.value}. "Who is this?"</p>
  <P>"That's ${form.toy.value}," explained the witch.</p>
  <P>"Ooh! ${form.toy.value} would look lovely in my house. Give it to me!" demanded the ${form.animal.value}.</p>
  <p>The witch shook her head. "${form.toy.value} is staying with me."</p>
  <p>"Um... Excuse me..." ${form.protag_firstname.value} interrupted. "${form.toy.value} lives with me! And not in a cage!"</p>
  <P>Big ${form.animal.value} ignored him. "Is there nothing you'll trade?" he asked the witch.</p>
  <p>The witch thought for a moment, then said, "I do like to be entertained. I'll release him to anybody who can eat a whole front door."</p>
  <p>Big ${form.animal.value} looked at the house made from ${form.vegetables.value} and said, "No problem, I could eat an entire house made from ${form.vegetables.value} if I wanted to."</p>
  <p>"There's no need to show off," said the witch. Just eat one front door and I'll let you have ${form.toy.value}."</p>
  <P>${form.protag_firstname.value} watched, feeling very worried. He didn't want the witch to give ${form.toy.value} to Big ${form.animal.value}. He didn't think ${form.toy.value} would like living with a ${form.animal_adj.value} ${form.animal.value}, away from his house and all his other toys.</p>
  <P>Big ${form.animal.value} put on his bib and withdraw a knife and fork from his pocket.</p>
  <P>"I'll eat this whole house," said Big ${form.animal.value}. "Just you watch!"</p>
  <P>Big ${form.animal.value} pulled off a corner of the front door of the house made from ${form.vegetables.value}. He gulped it down smiling, and went back for more.</p>
     <P>And more.</p>
        <P>And more.</p>
  <P>Eventually, Big ${form.animal.value} started to get bigger - just a little bit bigger at first. But after a few more fork-fulls of ${form.vegetables.value}, he grew to the size of a large snowball - and he was every bit as round.</p>
  <P>"Erm... I don't feel too good," said Big ${form.animal.value}.</p>
  <p>Suddenly, he started to roll. He'd grown so round that he could no longer balance!</p>
  <P>"Help!" he cried, as he rolled off down a slope into the forest.</p>
  <P>Big ${form.animal.value} never finished eating the front door made from ${form.vegetables.value} and ${form.toy.value} remained trapped in the witch's cage.</p>
  <p>"That's it," said the witch. "I win. I get to keep ${form.toy.value}."</p>
  <P>"Not so fast," said ${form.protag_firstname.value}. "There is still one front door to go. The front door of the house made from sprouts. And I haven't had a turn yet.</p>
  <p>"I don't have to give you a turn!" laughed the witch. "My game. My rules."</p>
  <p>The woodcutter's voice carried through the forest. "I think you should give him a ${form.protag_lastname.value}ce. It's only fair."</p>
  <p>"Fine," said the witch. "But you saw what happened to the ${form.animal.value}. He won't last long."</p>
  <P>"I'll be right back," said ${form.protag_firstname.value}.</p>
  <p>"What?" said the witch. "Where's your sense of impatience? I thought you wanted ${form.toy.value} back."</p>
  <P>${form.protag_firstname.value} ignored the witch and gathered a hefty pile of sticks. He came back to the clearing and started a small camp fire. Carefully, he broke off a piece of the door of the house made from sprouts and toasted it over the fire. Once it had cooked and cooled just a little, he took a bite. He quickly devoured the whole piece.</p>
  <P>${form.protag_firstname.value} sat down on a nearby log.</p>
  <p>"You fail!" cackled the witch. "You were supposed to eat the whole door."</p>
  <p>"I haven't finished," explained ${form.protag_firstname.value}. "I am just waiting for my food to go down."</p>
  <P>When ${form.protag_firstname.value}'s food had digested, he broke off another piece of the door made from sprouts. Once more, he toasted his food over the fire and waited for it to cool just a little. He ate it at a leisurely pace then waited for it to digest.</p>
  <P>Eventually, after several sittings, ${form.protag_firstname.value} was down to the final piece of the door made from sprouts. Carefully, he toasted it and allowed it to cool just a little. He finished his final course. ${form.protag_firstname.value} had eaten the entire front door of the house made from sprouts.</p>
  <p>The witch stamped her foot angrily. "You must have tricked me!" she said. "I don't reward cheating!"</p>
  <p>"I don't think so!" said a voice. It was the woodcutter. He walked back into the clearing, carrying his axe. "This little boy won fair and square. Now hand over ${form.toy.value} or I will chop your broomstick in half."</p>
  <P>The witch looked horrified. She grabbed her broomstick and placed it behind her. Then, huffing, she opened the door of the cage.</p>
  <P>${form.protag_firstname.value} hurried over and grabbed ${form.toy.value}, checking that his favourite toy was all right. Fortunately, ${form.toy.value} was unharmed.</p>
  <P>${form.protag_firstname.value} thanked the woodcutter, grabbed a quick souvenir, and hurried on to meet ${form.friend_firstname.value}. It was starting to get dark.</p>
  <P>When ${form.protag_firstname.value} got to ${form.friend_firstname.value}'s house, his threw his arms around him.</p>
  <p>"I was so worried!" cried ${form.friend_firstname.value}. "You are very late."</p>
  <P>As ${form.protag_firstname.value} described his day, he could tell that ${form.friend_firstname.value} didn't believe him. So he grabbed a napkin from his pocket.</p>
  <P>"What's that?" asked ${form.friend_firstname.value}.</p>
  <P>${form.protag_firstname.value} unwrapped a doorknob made from ${form.vegetables.value}. "Pudding!" he said.</p>
  <P>${form.friend_firstname.value} almost fell off his chair.</p>
  <p>The End</p>`;
  result.innerHTML = ""
  result.appendChild(p); 
  result.style.display = "block";
  document.getElementById('detainlsdiv').style.display = "none";
}