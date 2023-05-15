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
    var type = document.forms[0].elements[i].type;
    if (type == "button") {
      if (i != 1) {
        document.forms[0].elements[i].click();
      }
    } else if (type == "select-one") {
      var items = document.forms[0].elements[i].getElementsByTagName("option");
      var index = Math.floor(Math.random() * items.length);
      document.forms[0].elements[i].selectedIndex = index;
    }
  }
}

function generateRandomScript(){
  let result = document.getElementById("persondetailsResult");
  let form = document.forms[0];
  function generateRandomRGBA() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var a = Math.random().toFixed(1);
  
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  }
  
  // Example usage
  var color = generateRandomRGBA();
  document.getElementById('cover').style.backgroundColor = color;
  document.getElementById('cover').innerHTML = `${form.baddie1_adj1.value} ${form.baddie_noun.value}`+'<p style="position: absolute;bottom: 0; right: 5px;">Ranodm Writer</p>';
  result.innerHTML = ""
  document.getElementById("detainlsdiv").style.display = "none";
  let h3 = document.createElement('h3');
  h3.innerHTML = `${form.baddie1_adj1.value} ${form.baddie_noun.value}`
  h3.style.fontWeight = 'bold';
  h3.style.textTransform = 'capitalize';
  let h4 = document.createElement('h5');
  h4.innerHTML = `A Screenplay by Random Writer`;
  let bump = document.createElement('div');
  bump.setAttribute('class','bump')
  let loc1 = document.createElement('p')
  loc1.setAttribute('class','location')
  loc1.innerHTML = `${form.location1_type.value}.${form.location1.value} - AFTERNOON`;
  loc1.style.fontWeight = 'bold';
  let p1 = document.createElement('p');
  let he_she_1 = '';
  let his_her_1 = '';
  if(form.goodie1_sex.value == 'male'){
    he_she_1 = "He"
    his_her_1 = "his"
  }else{
    he_she_1 = "She"
    his_her_1 = "her"
  }
  p1.innerHTML = `${form.goodie1_adj1.value.toUpperCase()} 
  ${form.goodie1_job.value.toUpperCase()} 
  ${form.goodie1_title.value.toUpperCase()}
  ${form.goodie1_firstname.value.toUpperCase()}
  ${form.goodie1_lastname.value.toUpperCase()} is arguing with intuitive homemaker
  ${form.goodie1_title.value.toUpperCase()}
  ${form.goodie3_firstname.value.toUpperCase()}
  ${form.goodie3_lastname.value.toUpperCase()}. ${form.goodie1_firstname.value.toUpperCase()} tries to hug
  ${form.goodie3_firstname.value.toUpperCase()} but shakes ${his_her_1} off.`
  let l1 = document.createElement('div')
  l1.innerHTML = `<p>${form.goodie1_adj1.value} ${form.goodie1_job.value} ${form.goodie1_title.value} ${form.goodie1_firstname.value.toUpperCase()} ${form.goodie1_lastname.value.toUpperCase()} is arguing with bold ${form.goodie3_job.value} ${form.goodie3_title.value} ${form. goodie3_firstname.value} BOGTROTTER. ${form.goodie1_firstname.value.toUpperCase()} tries to hug ${form. goodie3_firstname.value} but ${he_she_1} shakes ${his_her_1} off.</p>
  <p>${form.goodie1_firstname.value.toUpperCase()}<br>Please ${form. goodie3_firstname.value}, don't leave me.</p>
  <p>${form. goodie3_firstname.value}<br>I'm sorry ${form.goodie1_firstname.value.toUpperCase()}, but I'm looking for somebody a bit more brave. Somebody who faces ${his_her_1} fears head on, instead of running away.</p>
  <p>${form.goodie1_firstname.value.toUpperCase()}<br>I am such a person!</p>
  <p>${form. goodie3_firstname.value} frowns.</p>
  <p>${form. goodie3_firstname.value}<br>I'm sorry, ${form.goodie1_firstname.value.toUpperCase()}. I just don't feel excited by this relationship anymore.</p>
  <p>${form. goodie3_firstname.value} leaves.</p>
  <p>${form.goodie1_firstname.value.toUpperCase()} sits down, looking defeated.</p>
  <p>Moments later, understanding housekeeper DI ${form. goodie2_firstname.value} SMITH barges in looking flustered.</p>
  <p>${form.goodie1_firstname.value.toUpperCase()}<br>Goodness, ${form. goodie2_firstname.value}! Is everything okay?</p>
  <p>${form. goodie2_firstname.value}<br>I'm afraid not.</p>
  <p>${form.goodie1_firstname.value.toUpperCase()}<br>What is it? Don't keep me in suspense.</p>
  <p>${form. goodie2_firstname.value}<br>It's ... a ${form. baddie_noun.value} ... I saw an evil ${form. baddie_noun.value} ${form.neg_act.value} a bunch of ${form.victims.value}!</p>
  <p>${form.goodie1_firstname.value.toUpperCase()}<br>Defenseless ${form.victims.value}?</p>
  <p>${form. goodie2_firstname.value}<br>Yes, defenseless ${form.victims.value}!</p>
  <p>${form.goodie1_firstname.value.toUpperCase()}<br>Bloomin' heck, ${form. goodie2_firstname.value}! We've got to do something.</p>
  <p>${form. goodie2_firstname.value}<br>I agree, but I wouldn't know where to start.</p>
  <p>${form.goodie1_firstname.value.toUpperCase()}<br>You can start by telling me where this happened.</p>
  <p>${form. goodie2_firstname.value}<br>I was...</p>
  <p>${form. goodie2_firstname.value} fans herself and begins to wheeze.</p>
  <p>${form.goodie1_firstname.value.toUpperCase()}<br>Focus ${form. goodie2_firstname.value}, focus! Where did it happen?</p>
  <p>${form. goodie2_firstname.value}<br>Quality Cafe, Los Angeles! That's right - Quality Cafe, Los Angeles!</p>
  <p>${form.goodie1_firstname.value.toUpperCase()} springs up and begins to run.</p>`;
  bump.appendChild(loc1)
  bump.appendChild(p1)
  bump.appendChild(l1)
  let bump1 = document.createElement('div');
  bump1.setAttribute('class','bump')
  let loc2 = document.createElement('p')
  loc2.setAttribute('class','location')
  loc2.innerHTML = `EXT. A ROAD - CONTINUOUS`;
  loc2.style.fontWeight = 'bold';
  let p2 = document.createElement('p');
  p2.innerHTML = `${form.goodie1_firstname.value} rushes along the street, followed by ${form.goodie2_firstname.value}. They take a short cut through some back gardens, jumping fences along the way.`
  bump1.appendChild(loc2)
  bump1.appendChild(p2)
  let he_she_2 = '';
  if(form.goodie2_sex.value == 'male'){
    he_she_2 = "He"
  }else{
    he_she_2 = "She"
  }
  let loc3 = document.createElement('p')
  loc3.setAttribute('class','location')
  loc3.innerHTML = `${form.location2_type.value}. ${form.location2.value.toUpperCase()} - SHORTLY AFTER`;
  loc3.style.fontWeight = 'bold';
  let p3 = document.createElement('p');
  p3.innerHTML = `${form.baddie1_firstname.value} ${form.baddie1_lastname.value} a ${form.baddie1_adj1.value} thug terrorises two ${form.victims.value}.<br>${form.goodie1_firstname.value}, closely followed by ${form.goodie2_firstname.value}, rushes towards ${form.baddie1_firstname.value}, but suddenly stops in his tracks.`
  bump1.appendChild(loc3)
  bump1.appendChild(p3)
  let p4 = document.createElement('div')
  p4.innerHTML = `<p>${form.goodie2_firstname.value}<br>What is is? What's the matter?</p>
  <p>${form.goodie1_firstname.value}<br>That's not just any old thug, that's ${form.baddie1_firstname.value} ${form.baddie1_lastname.value}!</p>
  <p>${form.goodie2_firstname.value}<br>Who's ${form.baddie1_firstname.value} ${form.baddie1_lastname.value}?</p>
  <p>${form.goodie1_firstname.value}<br>Who's ${form.baddie1_firstname.value} ${form.baddie1_lastname.value}? Who's ${form.baddie1_firstname.value} ${form.baddie1_lastname.value}? Only the most ${form.baddie1_adj1.value} ${form.baddie_noun.value} in the universe!</p>
  <p>${form.goodie2_firstname.value}<br>Blinkin' knickers, ${form.goodie1_firstname.value}! We're going to need some help if we're going to stop the most ${form.baddie1_adj1.value} ${form.baddie_noun.value} in the universe!</p>
  <p>${form.goodie1_firstname.value}<br>You can say that again.</p>
  <p>${form.goodie2_firstname.value}<br>Blinkin' knickers, ${form.goodie1_firstname.value}! We're going to need some help if we're going to stop the most ${form.baddie1_adj1.value} ${form.baddie_noun.value} in the universe!</p>
  <p>${form.goodie1_firstname.value}<br>I'm going to need candlesticks, lots of candlesticks.</p>
  <p>${form.baddie1_firstname.value} turns and sees ${form.goodie1_firstname.value} and ${form.goodie2_firstname.value}. ${he_she_2} grins an evil grin.</p>
  <p>${form.baddie1_firstname.value}<br>${form.goodie1_firstname.value} ${form.goodie1_lastname.value}, we meet again.</p>
  <p>${form.goodie2_firstname.value}<br>You've met?</p>
  <p>${form.goodie1_firstname.value}<br>Yes. It was a long, long time ago...</p>`
  bump1.appendChild(p4)
  let loc4 = document.createElement('p')
  loc4.setAttribute('class','location')
  loc4.innerHTML = `EXT. A PARK - BACK IN TIME`;
  loc4.style.fontWeight = 'bold';
  let p6 = document.createElement('p');
  p6.innerHTML = `${form.baddie1_firstname.value} ${form.baddie1_lastname.value} a ${form.baddie1_adj1.value} thug terrorises two ${form.victims.value}.<br>${form.goodie1_firstname.value}, closely followed by ${form.goodie2_firstname.value}, rushes towards ${form.baddie1_firstname.value}, but suddenly stops in his tracks.`
  bump1.appendChild(loc4)
  bump1.appendChild(p6)
  let p5 = document.createElement('div')
  p5.innerHTML = `<p>A young ${form.goodie1_firstname.value} is sitting in a park listening to some R & B music, when suddenly a dark shadow casts over {him_her_3}.</p>
  <p>He looks up and sees ${form.baddie1_firstname.value}. He takes off his headphones.</p>
  <p>${form.baddie1_firstname.value}<br>Would you like some peppermints?</p>
  <p>${form.goodie1_firstname.value}'s eyes light up, but then he studies ${form.baddie1_firstname.value} more closely, and looks uneasy.</p>
  <p>${form.goodie1_firstname.value}<br>I don't know, you look kind of ${form.baddie1_adj1.value}.</p>
  <p>${form.baddie1_firstname.value}<br>Me? No. I'm not ${form.baddie1_adj1.value}. I'm the least ${form.baddie1_adj1.value} thug in the world.</p>
  <p>${form.goodie1_firstname.value}<br>Wait, you're a thug?</p>
  <p>${form.goodie1_firstname.value} runs away, screaming.</p>`
  bump1.appendChild(p5)
  let p7 = document.createElement('p')
  p7.innerHTML = `<b>${form.location2_type.value}. A ${form.location2.value} - PRESENT DAY</b><br>
  <p>${form.baddie1_firstname.value}<br>You were a coward then, and you are a coward now.</p>
  <p></p>${form.goodie2_firstname.value}<br>(To ${form.goodie1_firstname.value}) You ran away?</p>
  <p>${form.goodie1_firstname.value}<br>(To ${form.goodie2_firstname.value}) I was a young child. What was I supposed to do?</p>
  <p>${form.goodie1_firstname.value} turns to ${form.baddie1_firstname.value}.</p>
  <p>${form.goodie1_firstname.value}<br>I may have run away from you then, but I won't run away this time!</p>
  <p>${form.goodie1_firstname.value} runs away.</p>
  <p>He turns back and shouts.</p>
  <p>${form.goodie1_firstname.value}<br>I mean, I am running away, but I'll be back - with ${form.weapons.value}.</p>
  <p>${form.baddie1_firstname.value}<br>I'm not scared of you.</p>
  <p>${form.goodie1_firstname.value}<br>You should be.</p>`
  bump1.appendChild(p7)
  let p8 = document.createElement('p')
  p8.innerHTML =`<b>${form.location3_type.value}. ${form.location3.value} - LATER THAT DAY</b>
  <p>${form.goodie1_firstname.value} and ${form.goodie2_firstname.value} walk around searching for something.</p>
  <p>${form.goodie1_firstname.value}<br>I feel sure I left my ${form.weapons.value} somewhere around here.</p>
  <p>${form.goodie2_firstname.value}<br>Are you sure? It does seem like an odd place to keep deadly ${form.weapons.value}.</p>
  <p>${form.goodie1_firstname.value}<br>You know nothing ${form.goodie2_firstname.value} ${form.goodie2_lastname.value}.</p>
  <p>${form.goodie2_firstname.value}<br>We've been searching for ages. I really don't think they're here.</p>
  <p>Suddenly, ${form.baddie1_firstname.value} appears, holding a pair of ${form.weapons.value}.</p>
  <p>${form.baddie1_firstname.value}<br>Looking for something?</p>
  <p>${form.goodie2_firstname.value}<br>Crikey, ${form.goodie1_firstname.value}, he's got your ${form.weapons.value}.</p>
  <p>${form.goodie1_firstname.value}<br>Tell me something I don't already know!</p>
  <p>${form.goodie2_firstname.value}<br>The earth's circumference at the equator is about 40,075 km.</p>
  <p>${form.goodie1_firstname.value}<br>I know that already!</p>
  <p>${form.goodie2_firstname.value}<br>${form.secret.value}.</p>
  <p>${form.baddie1_firstname.value}<br>(appalled) Dude!</p>
  <p>While ${form.baddie1_firstname.value} is looking at ${form.goodie2_firstname.value} with disgust, ${form.goodie1_firstname.value} lunges forward and grabs his deadly ${form.weapons.value}. He wields them, triumphantly.</p>
  <p>${form.goodie1_firstname.value}<br>Prepare to die, you ${form.baddie1_adj1.value} ${form.vegetable.value}!</p>
  <p>${form.baddie1_firstname.value}<br>No please! All I did was ${form.neg_act.value} a bunch of ${form.victims.value}!</p>
  <p>${form.goodie3_firstname.value} enters, unseen by any of the others.</p>
  <p>${form.goodie1_firstname.value}<br>I cannot tolerate that kind of behaviour! Those ${form.victims.value} were defenceless! Well now they have a defender - and that's me! ${form.goodie1_firstname.value} Russell defender of innocent ${form.victims.value}.</p>
  <p>${form.baddie1_firstname.value}<br>Don't hurt me! Please!</p>
  <p>${form.goodie1_firstname.value}<br>Give me one good reason why I shouldn't use these ${form.weapons.value} on you right away!</p>
  <p>${form.baddie1_firstname.value}<br>Because ${form.goodie1_firstname.value}, I am your father.</p>
  <p>${form.goodie1_firstname.value} looks stunned for a few moments, but then collects himself.</p>
  <p>${form.goodie1_firstname.value}<br>No you're not!</p>
  <p>${form.baddie1_firstname.value}<br>Ah well, it had to be worth a try.</p>
  <p>${form.baddie1_firstname.value} tries to grab the ${form.weapons.value} but ${form.goodie1_firstname.value} dodges out of the way.</p>
  <p>${form.goodie1_firstname.value}<br>Who's the daddy now? Huh? Huh?</p>
  <p>Unexpectedly, ${form.baddie1_firstname.value} slumps to the ground.</p>
  <p>${form.goodie2_firstname.value}<br>Did he just faint?</p>
  <p>${form.goodie1_firstname.value}<br>I think so. Well that's disappointing. I was rather hoping for a more dramatic conclusion, involving my deadly ${form.weapons.value}.</p>
  <p>${form.goodie1_firstname.value} crouches over ${form.baddie1_firstname.value}'s body.</p>
  <p>${form.goodie2_firstname.value}<br>Be careful, ${form.goodie1_firstname.value}. It could be a trick.</p>
  <p>${form.goodie1_firstname.value}<br>No, it's not a trick. It appears that... It would seem... ${form.baddie1_firstname.value} ${form.baddie1_lastname.value} is dead!</p>
  <p>${form.goodie1_firstname.value}<br>What?</p>
  <p>${form.goodie1_firstname.value}<br>Yes, it appears that I scared him to death.</p>
  <p>${form.goodie2_firstname.value} claps her hands.</p>
  <p>${form.goodie2_firstname.value}<br>So your papereights did save the day, after all.</p>
  <p>${form.goodie3_firstname.value} steps forward.</p>
  <p>${form.goodie3_firstname.value}<br>Is it true? Did you kill the ${form.baddie1_adj1.value} ${form.baddie_noun.value}?</p>
  <p>${form.goodie1_firstname.value}<br>${form.goodie3_firstname.value} how long have you been...?</p>
  <p>${form.goodie3_firstname.value} puts her arm around ${form.goodie1_firstname.value}.</p>
  <p>${form.goodie3_firstname.value}</p>
  <p>Long enough.<p>
  <p>${form.goodie1_firstname.value}<br>Then you saw it for yourself. I killed ${form.baddie1_firstname.value} ${form.baddie1_lastname.value}.</p>
  <p>${form.goodie3_firstname.value}<br>Then the ${form.victims.value} are safe?</p>
  <p>${form.goodie1_firstname.value}<br>It does seem that way!</p>
  <p>A crowd of vulnerable ${form.victims.value} enter, looking relived.</p>
  <p>${form.goodie3_firstname.value}<br>You are their hero.</p>
  <p>The ${form.victims.value} bow to ${form.goodie1_firstname.value}.</p>
  <p>${form.goodie1_firstname.value}<br>There is no need to bow to me. I seek no worship. The knowledge that ${form.baddie1_firstname.value} ${form.baddie1_lastname.value} will never ${form.neg_act.value} ${form.victims.value} ever again, is enough for me.</p>
  <p>${form.goodie3_firstname.value}<br>You are humble as well as brave!</p>
  <p>One of the ${form.victims.value} passes ${form.goodie1_firstname.value} a tinkling ${form.precious.value}</p>
  <p>${form.goodie3_firstname.value}<br>I think they want you to have it, as a symbol of their gratitude.</p>
  <p>${form.goodie1_firstname.value}<br>I couldn't possibly.<br>Pause.</p>
  <p>${form.goodie1_firstname.value}<br>Well, if you insist.</P>
  <p>${form.goodie1_firstname.value} takes the ${form.precious.value}.</p>
  <p>${form.goodie1_firstname.value}<br>Thank you.</p>
  <p>The ${form.victims.value} bow their heads once more, and leave.</p>
  <p>${form.goodie1_firstname.value} turns to ${form.goodie3_firstname.value}.</p>
  <p>${form.goodie1_firstname.value}<br>Does this mean you want me back?</p>
  <p>${form.goodie3_firstname.value}<br>Oh, ${form.goodie1_firstname.value}, of course I want you back!</p>
  <p>${form.goodie1_firstname.value} smiles for a few seconds, but then looks defiant.</p>
  <p>${form.goodie1_firstname.value}<br>Well you can't have me.</p>
  <p>${form.goodie3_firstname.value}<br>WHAT?</p>
  <p>${form.goodie1_firstname.value}<br>You had no faith in me. You had to see my scare a ${form.baddie_noun.value} to death before you would believe in me. I don't want a lover like that.</p>
  <p>${form.goodie3_firstname.value}<br>But...</p>
  <p>${form.goodie1_firstname.value}<br>Please leave. I want to spend time with the one person who stayed with me through thick and thin - my best friend, ${form.goodie2_firstname.value}.</p>
  <p>${form.goodie2_firstname.value} grins.</p>
  <p>${form.goodie3_firstname.value}<br>But...</p>
  <p>${form.goodie2_firstname.value}<br>You heard the gentleman. Now be off with you. Skidaddle! Shoo!</p>
  <p>${form.goodie3_firstname.value}<br>${form.goodie1_firstname.value}?</p>
  <p>${form.goodie1_firstname.value}<br>I'm sorry ${form.goodie3_firstname.value}, but I think you should skidaddle.</p>
  <p>${form.goodie3_firstname.value} leaves.</p>
  <p>${form.goodie2_firstname.value} turns to ${form.goodie1_firstname.value}.</p>
  <p>${form.goodie2_firstname.value}<br>Did you mean that? You know ... that I'm your best friend?</p>
  <p>${form.goodie1_firstname.value}<br>Of course you are!</p>
  <p>The two walk off arm in arm.</p>
  <p>Suddenly ${form.goodie2_firstname.value} stops.</p>
  <p>${form.goodie2_firstname.value}<br>When I said ${form.secret.value}, you know I was just trying to distract the ${form.baddie_noun.value} don't you?</P><p>THE END</p>
  `
  bump1.appendChild(p8)
  result.appendChild(h3)
  result.appendChild(h4)
  result.appendChild(bump)
  result.appendChild(bump1)
  result.style.display = "block";
}