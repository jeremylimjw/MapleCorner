interface Question {
    question: string;
    matchValue?: string;
    answers: string[];
}

const store: Question[] = [
    {
        question: "What is the name of the broker residing in Magatia?",
        answers: ["Han the Broker"]
    },
    {
        question: "What is the name of the buddy list admin in Lith Harbor?",
        answers: ["Mr. Goldstein"]
    },
    {
        question: "What is the name of the buddy list admin in Ludibrium?",
        answers: ["Robert Holly"]
    },
    {
        question: "What is the name of the dog sitting next to the Dimensional Mirror in Orbis?",
        answers: ["Moppie"],
    },
    {
        question: "What is the name of the current council president in Edelstein?",
        answers: ["Anthony"],
    },
    {
        question: "What is the name of the former council president in Edelstein?",
        answers: ["Albert"],
    },
    {
        question: "What is the name of the grandma guarding the Great Temple in Pantheon?",
        answers: ["Selene"],
    },
    {
        question: "What is the name of the helmsman of Riena Strait Glacial Observatory?",
        answers: ["Helmsman Tanya"],
    },
    {
        question: "What is the name of the Humanoid residing in Magatia?",
        answers: ["Humanoid A"],
    },
    {
        question: "What is the name of the kid monk in front of the Golden Temple entrance?",
        answers: ["Noi"],
    },
    {
        question: "What is the name of the merchant on the Nautilus?",
        answers: ["Gali"],
    },
    {
        question: "What is the name of the pet master in Ellinia?",
        answers: ["Mar the Fairy"],
    },{
        question: "What is the name of the plastic surgeon in Ariant?",
        answers: ["Aldin"],
    },
    {
        question: "What is the name of the skin care expert in Ariant?",
        answers: ["Lila"],
    },
    {
        question: "What is the name of the storage keeper in Ludibrium?",
        answers: ["Seppy"],
    },
    {
        question: "What is the name of the storage keeper in Rien?",
        answers: ["Pusla"],
    },
    {
        question: "What is the name of the storage keeper on the Nautilus?",
        answers: ["Dondlass"],
    },
    {
        question: "What is the name of the street sweeper in Edelstein?",
        answers: ["Brighton"],
    },
    {
        question: "What is the name of the town mascot of Edelstein?",
        answers: ["Checky"],
    },
    {
        question: "What is the name of the upcoming merchant in Pantheon?",
        answers: ["Karin"],
    },
    {
        question: "What is the name of the warp helper in Herb Town?",
        answers: ["Crane"],
    },
    {
        question: "What is the name of the weapon merchant in Ariant?",
        answers: ["Zaid"],
    },
    {
        question: "What is the name of the weapon seller on the Nautilus?",
        answers: ["Morgan"]
    },
    {
        question: "Who in Kerning City can repair items?",
        answers: ["JM From tha Streetz"]
    },
    {
        question: "Who is the item creator in front of the Sleepywood Hotel?",
        answers: ["Chrishrama"]
    },
    {
        question: "Who is the merchant in the Golden Temple?",
        answers: ["Ms. Tang"]
    },
    {
        question: "Who is the merchant in Gold Beach Resort?",
        answers: ["Mason"]
    },
    {
        question: "Who is the warrior job instructor in the Warriors' Sanctuary?",
        answers: ["Dances with Balrog"]
    },
    {
        question: "Who is the weapon seller in Perion?",
        answers: ["River"]
    },
    {
        question: "Who is the subway worker next to the Ticket Gate in Kerning City?",
        answers: ["Jake"]
    },
    {
        question: "Are you asking me if I can see in front of me? Of course I can!",
        answers: ["Puno"]
    },
    {
        question: "Do you want to learn how to achieve spiritual enlightenment?",
        answers: ["No Gong"]
    },
    {
        question: "Grendel the Really Old is not a bad person, but his students...",
        answers: ["Arwen the Fairy"]
    },
    {
        question: "If you have the Scroll of Secrets, give it to me!",
        answers: ["Geanie"]
    },
    {
        question: "I can only do this by myself for so long...",
        answers: ["Anne"]
    },
    {
        question: "I can't wait for these kits to grow up!",
        answers: ["Patience"]
    },
    {
        question: "I found him, so I'll take care of him!",
        answers: ["Moonbeam"]
    },
    {
        question: "I gotta say, I look pretty good in an apron.",
        answers: ["Elex"]
    },
    {
        question: "I need more firewood for the furnace.",
        answers: ["Timber"]
    },
    {
        question: "I need to send these herbs to Tae Sang fast...",
        answers: ["Mr. Ku"]
    },
    {
        question: "I serve the ancient Nova deities.",
        answers: ["Fenelle"]
    },
    {
        question: "I will never let go of thieves who try to steal from me.",
        answers: ["Harry"]
    },
    {
        question: "I'm worried that monsters these days are much more ferocious...",
        answers: ["Lisa"]
    },
    {
        question: "Just look at me! So strong. Don't be jealous.",
        answers: ["Olaf"]
    },
    {
        question: "Life is transitory. As time passes, the world will change.",
        answers: ["Do Gong"]
    },
    {
        question: "My friend Arwen is still pretty uncomfortable around humans.",
        answers: ["Rowen the Fairy"]
    },
    {
        question: "My hands aren't what they used to be. I really need to get me an apprentice...",
        answers: ["Potter"]
    },
    {
        question: "Nice weather, isn't it? It's a greay day to enjoy a walk with my pet, Muffins.",
        answers: ["Bastille"]
    },
    {
        question: "Nothing like a good set of Pirate digs, mates!",
        answers: ["Rodos"]
    },
    {
        question: "Outsiders can never be trusted.",
        answers: ["Faculty Head Kalayan"]
    },
    {
        question: "Pirates are the best! You want a piece of me?",
        answers: ["Valerie"]
    },
    {
        question: "So much homework... And so much studying to do... Man, I'm swamped.",
        answers: ["Wing the Fairy"]
    },
    {
        question: "That smell in the air sure does make the fur stand up, don't it?",
        answers: ["Alviola"]
    },
    {
        question: "The seas have grown fat as an orca, eh?",
        answers: ["Putan"]
    },
    {
        question: "This room is not open to the public.",
        answers: ["Olson"]
    },
    {
        question: "We must work together.",
        answers: ["Lakelis"]
    },
    {
        question: "Where are all my research notes? And my fairy comics?",
        answers: ["Cootie the Really Small"]
    },
    {
        question: "Won't somebody bring me some food? I'm starving?",
        answers: ["Lumps"]
    },
    {
        question: "Work is important, but eating is crucial!",
        answers: ["Bavan"]
    },
    {
        question: "I'm collecting herbs...",
        answers: ["Sabitrama"]
    },
    {
        question: "Which of these bosses has NEVER appeared in MapleStory?",
        answers: ["Bear Grills", "Beelzebub", "Big Brother", "Big Carl", "Botichelli", "Cocatris", "Diablow", "Emuloch", "Navy Captain", "Von Venom"]
    },
    {
        question: "Which of these chairs does NOT exist in MapleStory?",
        answers: ["Come Back Chair", "Diamond Bath", "First Love Chair", "Last Year Sergeant Chair", "March Bunny Chair", "Mammoth Chair", "Money Cushion", "Rappy's Persimmon Chair", "Valentine's Cursed Chair", "Wheelchair"]
    },
    {
        question: "Which of these cities does NOT exist in MapleStory?",
        answers: ["Aqua Aqua"  , "Cunning City"  , "Edinburgh"  , "El Segundo"  , "Fenesys"  , "Frankenstein"  , "Margaret"  , "Sacramento"  , "Sleeping Forest"  , "Swan Town"]
    },
    {
        question: "Which of these is NOT a crafting item in MapleStory?",
        answers: ["Loving Chocolate", "Fairy Sand", "Hyacinth Juice", "Kryptonite Ore", "Magnus Sweat", "Nickel", "Penicillin", "Pulsatilla Seed", "Used Fabric", "Zakum Phlegm"]
    },
    {
        question: "Which of these is NOT a one-handed weapon?",
        answers: ["Beatstick", "Doombringer", "Facebuster", "Forked Spear", "Gallant Wings", "Lion's Fang", "Lunar Glory", "Pioneer's Dual Wings", "Twin Zephyrs", " Wooden Mallet"]
    },
    {
        question: "Which of these is NOT a Paladin skill?",
        answers: ["Blaze Defense", "Blessing", "Chase", "Divine Sword", "Faint Prayer", "Haste", "Lightning Action", "Mendable Claw", "Ordinance", "Regal Stretch"]
    },
    {
        question: "Which of these is NOT a Shade skill?",
        answers: ["Chase Cut", "Dead Or Alive", "Heavy Hammer", "Hyper Buting", "Pink Punch", "Really Angry Fist", "Scuffle", "Sleeper Hold", "Stumping A Mudhole", "Super Mega Awesome Punch"]
    },
    {
        question: "Which of these is NOT a skill of a Battle Mage?",
        answers: ["Draw Mana"]
    },
    {
        question: "Which of these is NOT a skill of a Cannoneer?",
        answers: ["Fast Reload"]
    },
    {
        question: "Which of these is NOT a skill of a Marksman?",
        answers: ["Exploding Arrows"]
    },
    {
        question: "Which of these is NOT a skill of a Mechanic?",
        answers: ["Claymore"]
    },
    {
        question: "Which of these is NOT a skill of a Wind Archer?",
        answers: ["Double Shot Witcher"]
    },
    {
        question: "Which of these is NOT a skill of Mihile?",
        answers: ["Soul Plunger"]
    },
    {
        question: "Which of these is NOT a skill of Phantom?",
        answers: ["Perfect Sense"]
    },
    {
        question: "Which of these is NOT a skill of the Demon Slayer?",
        answers: ["Mind Flayer"]
    },
    {
        question: "Which of these is NOT a skill of the Night Walker?",
        answers: ["Collateral Flash"]
    },
    {
        question: "Which of these is NOT a skill of the Swordsman?",
        answers: ["Imagination Boost"]
    },
    {
        question: "Which of these is NOT a Zero skill?",
        answers: ["Crimson Cutter", "Cross Line", "Deadly Action", "Double Stretch", "Fighting Stumble", "File Driver", "Low Blow", "Mega Power Bomb", "Moon Assault", "Psychic Tracer"]
    },
    {
        question: "Which of these is NOT in Monster Life?",
        answers: ["Aqua Aquarium", "Basement Training Ground", "BigWigs", "Black Bunny Farm", "Black House", "Cave House", "Empress Prayer House", "Fish Farm", "Fruit Farm", "Heaven's Hammer", "Hideout", "Maple Aquatic House", "Maple Water Park", "Mushroomy Mine", "Organic Mud House", "Pantheon Temple", "Psychic Audition Hall", "Puriel House", "Shammos' Storage Room", "Sushi House"]
    },
    {
        question: "Which of these items does NOT exist in MapleStory?",
        answers: ["Alchemist's Handmade Gloves", "Blessed Sunglasses", "Donkey's Chef Hat", "Frantic Hair Pin", "Minotaurus Nose Ring", "Phoenix Dandruff", "Single's Curse Promise Ring", "Sugar's Tiny Cane", "Ultimate Harp Helm", "Venom Buccaneer"]
    },
    {
        question: "Which of these items is NOT a consumable item?",
        answers: ["Crimson Bull", "Fairy Dew", "Fancy Cheese", "Lukewarm Juice", "Purple Potion", "Smoked Salmon", "Wizard's Toenail", "Year of Horse Cleansing Potion", "Year of Horse Resistance Potion", "Zakum's Breath"]
    },
    {
        question: "Which of these items is NOT a hand cannon?",
        answers: ["Art Lulu", "Bling Bling Iron Cannon", "Blurry Cannon", "Click Click Boom", "Crimson Bull", "Cursed Black Cannon", "Dragonic Deck Sweeper", "Handcrafted Ignite Crash", "Necro Beryl Cannon", "Used Toy Cannon"]
    },
    {
        question: "Which of these jobs does NOT exist in MapleStory?",
        answers: ["Art Designer", "Bard", "Beast Lord", "Blue Mage", "Cannon Puncher", "Demon Hunter", "Eric", "Necromancer", "Water Dancer", "Wind Runner"]
    },
    {
        question: "Which of these jobs is a part of the Cygnus Knights?",
        answers: ["Blaze Wizard", "Night Walker"]
    },
    {
        question: "Which of these jobs is a part of the Explorers?",
        answers: ["Bishop", "Dual Blade"]
    },
    {
        question: "Which of these jobs is a part of the Legendary Heroes?",
        answers: ["Luminous", "Mercedes"]
    },
    {
        question: "Which of these jobs is a part of the Nova race?",
        answers: ["Angelic Buster", "Kaiser"]
    },
    {
        question: "Which of these jobs is a part of the Resistance?",
        answers: ["Demon Avenger", "Xenon"]
    },
    {
        question: "Which of these monsters does NOT exist in MapleStory?",
        answers: ["Bertus", "Corbie", "Dark Cactus", "Downey", "Fenelle", "Mountable Golem", "Red Peppers", "Sledge Hammer", "Sharplan", "Solarion"]
    },
    {
        question: "Which of these monsters is NOT a canine?",
        answers: ["Birk"]
    },
    {
        question: "Which of these monsters is NOT a Mammal?",
        answers: ["Spore"]
    },
    {
        question: "Which of these monsters is NOT a plant?",
        answers: ["OctoPirate"]
    },
    {
        question: "Which of these monsters is NOT a reptile?",
        answers: ["Jr. Wraith"]
    },
    {
        question: "Which of these monsters is NOT enchanted?",
        answers: ["Antoinette", "Goby"]
    },
    {
        question: "Which of these monsters is NOT from the Nihal Desert?",
        answers: ["Water Thief Monster"]
    },
    {
        question: "Which of these monsters is NOT in the Seed?",
        answers: ["Ancient Insectivore Slimes", "Ancient Mushroom Bat", "Ancient Red Turtle", "Black Thorny Bear", "Blue Ancient Beetle", "Blue Mushroom Bat", "Crocodile", "Murupa", "Roolang", "Yellow Flower Cow"]
    },
    {
        question: "Which of these monsters is NOT live in the sea?",
        answers: ["Captain Latencia"]
    },
    {
        question: "Which of these monsters is NOT undead?",
        answers: ["Pink Bean", "Snipe of Competence"]
    },
    {
        question: "Which of these people is NOT a resident in MapleStory?",
        answers: ["Agamemnon", "Carno", "DJ Koo", "Giant Joe", "Harcourt", "Jacklyn", "Joe Bob", "Kaiso", "Stitch", "Sybil"]
    }
];

export const questions = store.map(x => {
    x.matchValue = x.question.trim().replace(/\s/g,'').toLowerCase()
    return x;
});
