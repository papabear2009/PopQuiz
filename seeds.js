const db = require("./models");

const records= [
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Who had hits in the 70s with the songs 'Lonely Boy' and 'Never Let Her Slip Away'?",
      "correct_answer": "Andrew Gold",
      "incorrect_answers": [
        "Elton John",
        "Leo Sayer",
        "Barry White "
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "hard",
      "question": "On which Beatles album would you find the song 'Eleanor Rigby'?",
      "correct_answer": "Revolver",
      "incorrect_answers": [
        "Help!",
        "Rubber Soul",
        "Abbey Road"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who had a 1983 hit with the song 'Africa'?",
      "correct_answer": "Toto",
      "incorrect_answers": [
        "Foreigner",
        "Steely Dan",
        "Journey"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Typically, how many keys are on a piano?",
      "correct_answer": "88",
      "incorrect_answers": [
        "24",
        "12",
        "96"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "hard",
      "question": "Which of these songs was released in 1996?",
      "correct_answer": "The Smashing Pumpkins - '1979'",
      "incorrect_answers": [
        "Prince - '1999'",
        "James Blunt - '1973'",
        "David Bowie - '1984'"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the best selling album of all time from 1976 to 2018?",
      "correct_answer": "Thriller",
      "incorrect_answers": [
        "Back in Black",
        "Abbey Road",
        "The Dark Side of the Moon"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Who is the Pink Floyd song 'Shine On You Crazy Diamond' written about?",
      "correct_answer": "Syd Barrett",
      "incorrect_answers": [
        "John Lennon",
        "David Gilmour",
        "Floyd"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Who is the primary lyricist for Canadian progressive rock band Rush?",
      "correct_answer": "Neil Peart",
      "incorrect_answers": [
        "Geddy Lee",
        "Alex Lifeson",
        "John Rutsey"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which member of the Foo Fighters was previously the drummer for Nirvana?",
      "correct_answer": "Dave Grohl",
      "incorrect_answers": [
        "Taylor Hawkins",
        "Nate Mendel",
        "Chris Shiflett"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which band released songs such as 'Electric Feel', 'Kids', and 'Time to Pretend'?",
      "correct_answer": "MGMT",
      "incorrect_answers": [
        "Passion Pit",
        "Phoenix",
        "Franz Ferdinand"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the name of Finnish DJ Darude's hit single released in October 1999?",
      "correct_answer": "Sandstorm",
      "incorrect_answers": [
        "Dust Devil",
        "Sirocco",
        "Khamsin"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which Queen song was covered by Brittany Murphy in the 2006 film 'Happy Feet'?",
      "correct_answer": "Somebody to Love",
      "incorrect_answers": [
        "Under Pressure",
        "Flash",
        "Bohemian Rhapsody"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which of these artists has NOT been a member of dancehall group Major Lazer?",
      "correct_answer": "Skrillex",
      "incorrect_answers": [
        "Diplo",
        "Jillionaire",
        "Walshy Fire"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which song by Swedish electronic musician Avicii samples the song 'Something's Got A Hold On Me' by Etta James?",
      "correct_answer": "Levels",
      "incorrect_answers": [
        "Fade Into Darkness",
        "Silhouettes",
        "Seek Bromance"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "hard",
      "question": "What is the British term for a 64th note?",
      "correct_answer": "Hemidemisemiquaver",
      "incorrect_answers": [
        "Semihemidemisemiquaver",
        "Semiquaver",
        "Demisemiquaver"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "hard",
      "question": "Which band is the longest active band in the world with no breaks or line-up changes?",
      "correct_answer": "U2",
      "incorrect_answers": [
        "Radiohead",
        "Rush",
        "Rolling Stones"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "The 'K' in 'K-Pop' stands for which word?",
      "correct_answer": "Korean",
      "incorrect_answers": [
        "Kenyan",
        "Kazakhstan",
        "Kuwaiti"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which one of these Rammstein songs has two official music videos?",
      "correct_answer": "Du Riechst So Gut",
      "incorrect_answers": [
        "Du Hast",
        "Benzin",
        "Mein Teil"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which of these bands are NOT from Australia?",
      "correct_answer": "The Naked and Famous",
      "incorrect_answers": [
        "Cut Copy",
        "Empire of the Sun",
        "Tame Impala"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which Beatles album does NOT feature any of the band members on it's cover?",
      "correct_answer": "The Beatles (White Album)",
      "incorrect_answers": [
        "Rubber Soul",
        "Abbey Road",
        "Magical Mystery Tour"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "What is the real name of Canadian electronic music producer deadmau5?",
      "correct_answer": "Joel Zimmerman",
      "incorrect_answers": [
        "Sonny Moore",
        "Adam Richard Wiles",
        "Thomas Wesley Pentz"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "The song 'Feel Good Inc.' by British band Gorillaz features which hip hop group?",
      "correct_answer": "De La Soul",
      "incorrect_answers": [
        "Public Enemy",
        "OutKast",
        "Cypress Hill"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "According to the American rapper Nelly, what should you do when its hot in here?",
      "correct_answer": "Take off all your clothes",
      "incorrect_answers": [
        "Take a cool shower",
        "Drink some water",
        "Go skinny dipping"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "hard",
      "question": "In Kendrick Lamar's 2012 album, 'Good Kid, M.A.A.D City', the album's story takes place in which city?",
      "correct_answer": "Compton",
      "incorrect_answers": [
        "Detroit",
        "New York",
        "Baltimore"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "What is Brian May's guitar called?",
      "correct_answer": "Red Special",
      "incorrect_answers": [
        "Blue Special",
        "Green Special",
        "Yellow Special"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "What is the name of the main character from the music video of 'Shelter' by Porter Robinson and A-1 Studios?",
      "correct_answer": "Rin",
      "incorrect_answers": [
        "Rem",
        "Ren",
        "Ram"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which 80s band is fronted by singer/guitarist Robert Smith?",
      "correct_answer": "The Cure",
      "incorrect_answers": [
        "The Smiths",
        "Echo & the Bunnymen",
        "New Order"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "According to a song by Belinda Carlisle, Heaven is a place on what?",
      "correct_answer": "Earth",
      "incorrect_answers": [
        "Venus",
        "Mars",
        "Uranus"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which Disney character sings the song 'A Dream is a Wish Your Heart Makes'?",
      "correct_answer": "Cinderella",
      "incorrect_answers": [
        "Belle",
        "Snow White",
        "Pocahontas"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Cryoshell, known for 'Creeping in My Soul' did the advertising music for what Lego Theme?",
      "correct_answer": "Bionicle",
      "incorrect_answers": [
        "Hero Factory",
        "Ben 10 Alien Force",
        "Star Wars"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who is the lead singer of Green Day?",
      "correct_answer": "Billie Joe Armstrong",
      "incorrect_answers": [
        "Mike Dirnt",
        "Sean Hughes",
        "Tr&eacute; Cool"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who performed 'I Took A Pill In Ibiza'?",
      "correct_answer": "Mike Posner",
      "incorrect_answers": [
        "Avicii",
        "Robbie Williams",
        "Harry Styles"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "African-American performer Sammy Davis Jr. was known for losing which part of his body in a car accident?",
      "correct_answer": "Left Eye",
      "incorrect_answers": [
        "Right Ear",
        "Right Middle Finger",
        "Nose"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "'The Singing Cowboy' Gene Autry is credited with the first recording for all but which classic Christmas jingle?",
      "correct_answer": "White Christmas",
      "incorrect_answers": [
        "Frosty the Snowman",
        "Rudolph the Red-Nosed Reindeer",
        "Here Comes Santa Claus"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "When was Gangnam Style uploaded to YouTube?",
      "correct_answer": "2012",
      "incorrect_answers": [
        "2013",
        "2014",
        "2011"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which rapper had an album that went double platinum with no features?",
      "correct_answer": "J. Cole",
      "incorrect_answers": [
        "Kendrick Lamar",
        "Drake",
        "Big Sean"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "In which year did 'Caravan Palace' release their first album?",
      "correct_answer": "2008",
      "incorrect_answers": [
        "2000",
        "2015",
        "2004"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which former boy-band star released hit solo single 'Angels' in 1997?",
      "correct_answer": "Robbie Williams",
      "incorrect_answers": [
        "Justin Timberlake",
        "Harry Styles",
        "Gary Barlow"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Moby, an American DJ, singer, and musician, achieved worldwide success for the 1999 release of which of the following albums?",
      "correct_answer": "Play",
      "incorrect_answers": [
        "Everything Is Wrong",
        "Moby",
        "18"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "'Make You Feel My Love' was originally written and performed by which singer-songwriter?",
      "correct_answer": "Bob Dylan",
      "incorrect_answers": [
        "Elvis",
        "Adele",
        "Billy Joel"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Where did the British Boy Band 'Bros' come from?",
      "correct_answer": "Camberley",
      "incorrect_answers": [
        "Guildford",
        "Aldershot",
        "Bagshot"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "When was the 3rd album 'Notes from the Underground' of the band 'Hollywood Undead' released?",
      "correct_answer": "2013",
      "incorrect_answers": [
        "2011",
        "2014",
        "2009"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "The band Muse released their first album, Showbiz, in what year?",
      "correct_answer": "1999",
      "incorrect_answers": [
        "1998",
        "2000",
        "2001"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which group performs the song 'Crash into Me'?",
      "correct_answer": "Dave Matthews Band",
      "incorrect_answers": [
        "Phish",
        "The Grateful Dead",
        "Destiny's Child"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "hard",
      "question": "What is the official name of Prince's backing band?",
      "correct_answer": "The Revolution",
      "incorrect_answers": [
        "The Paupers",
        "The Wailers",
        "The Heartbreakers"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "The 'British Invasion' was a cultural phenomenon in music where British boy bands became popular in the USA in what decade?",
      "correct_answer": "60's",
      "incorrect_answers": [
        "50's",
        "40's",
        "30's"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Who was walking like an Egyptian in 1981?",
      "correct_answer": "The Bangles",
      "incorrect_answers": [
        "R.E.M.",
        "The Ocean Blue",
        "The Connells"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which song previously recorded by Elvis Presley was covered by UB40 with a reggae beat?",
      "correct_answer": "Can't Help Falling in Love",
      "incorrect_answers": [
        "Jailhouse Rock",
        "In the Ghetto",
        "Wooden Heart"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "hard",
      "question": "A Caixa Malacacheta is what kind of musical instrument which is commonly used in Latin American music?",
      "correct_answer": "Snare Drum",
      "incorrect_answers": [
        "Cow Bell",
        "Bass Drum",
        "Maraca"
      ]
    },
    {
      "category": "Music",
      "type": "multiple",
      "difficulty": "easy",
      "question": "'Hallelujah' is a song written by which Canadian recording artist?",
      "correct_answer": "Leonard Cohen",
      "incorrect_answers": [
        "Kory Lefkowits",
        "Ryan Letourneau ",
        "Justin Bieber "
      ]
    },
    {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What breed of dog was Marley in the film 'Marley & Me' (2008)?",
        "correct_answer": "Labrador Retriever",
        "incorrect_answers": [
          "Golden Retriever",
          "Dalmatian",
          "Shiba Inu"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What name did Tom Hanks give to his volleyball companion in the film `Cast Away`?",
        "correct_answer": "Wilson",
        "incorrect_answers": [
          "Friday",
          "Jones",
          "Billy"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which 1958 movie starred Kirk Douglas and Tony Curtis as half-brothers Einar and Eric?",
        "correct_answer": "The Vikings ",
        "incorrect_answers": [
          "The Long Ships",
          "Prince Valiant",
          "Spartacus"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who played Deputy Marshal Samuel Gerard in the 1993 film 'The Fugitive'?",
        "correct_answer": "Tommy Lee Jones",
        "incorrect_answers": [
          "Harrison Ford",
          "Harvey Keitel",
          "Martin Landau"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What was Marilyn Monroe`s character's first name in the film 'Some Like It Hot'?",
        "correct_answer": "Sugar",
        "incorrect_answers": [
          "Honey",
          "Caramel",
          "Candy"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Velma Kelly and Roxie Hart are the protagonists of which Oscar winning movie?",
        "correct_answer": "Chicago",
        "incorrect_answers": [
          "Dreamgirls",
          "Cabaret",
          "All That Jazz"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which actress danced the twist with John Travolta in 'Pulp Fiction'?",
        "correct_answer": "Uma Thurman",
        "incorrect_answers": [
          "Kathy Griffin",
          "Pam Grier",
          "Bridget Fonda"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which actor played the main character in the 1990 film 'Edward Scissorhands'?",
        "correct_answer": "Johnny Depp",
        "incorrect_answers": [
          " Clint Eastwood",
          "Leonardo DiCaprio",
          "Ben Stiller"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who directed the 2015 movie 'The Revenant'?",
        "correct_answer": "Alejandro G. Inarritu",
        "incorrect_answers": [
          "Christopher Nolan",
          "David Fincher",
          "Wes Anderson"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The Queen song `A Kind Of Magic` is featured in which 1986 film?",
        "correct_answer": "Highlander",
        "incorrect_answers": [
          "Flash Gordon",
          "Labyrinth",
          "Howard the Duck"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What was Dorothy's surname in 'The Wizard Of Oz'?",
        "correct_answer": "Gale",
        "incorrect_answers": [
          "Perkins",
          "Day",
          "Parker"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What was the title of the first Bond movie, released in 1962?",
        "correct_answer": "Dr. No",
        "incorrect_answers": [
          "From Russia with Love",
          "Goldfinger",
          "Thunderball"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "This movie contains the quote, 'I love the smell of napalm in the morning!'",
        "correct_answer": "Apocalypse Now",
        "incorrect_answers": [
          "Platoon",
          "The Deer Hunter",
          "Full Metal Jacket"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "This movie contains the quote, 'Nobody puts Baby in a corner.'",
        "correct_answer": "Dirty Dancing",
        "incorrect_answers": [
          "Three Men and a Baby",
          "Ferris Bueller's Day Off",
          "Pretty in Pink"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What is the name of the assassin in the first 'Hellboy' movie?",
        "correct_answer": "Karl Ruprecht Kroenen",
        "incorrect_answers": [
          "Klaus Werner von Krupt",
          "Grigori Efimovich Rasputin",
          "Ilsa Haupstein"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which of these actors/actresses is NOT a part of the cast for the 2016 movie 'Suicide Squad'?",
        "correct_answer": "Scarlett Johansson",
        "incorrect_answers": [
          "Jared Leto",
          "Will Smith",
          "Margot Robbie"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which of these movies did Jeff Bridges not star in?",
        "correct_answer": "The Hateful Eight",
        "incorrect_answers": [
          "Tron: Legacy",
          "The Giver",
          "True Grit"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which iconic character is featured in movies such as 'The Enforcer', 'Sudden Impact', and 'The Dead Pool'?",
        "correct_answer": "Dirty Harry",
        "incorrect_answers": [
          "Indiana Jones",
          "James Bond",
          "Harry Potter"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the name of the villian in the 2015 Russian-American Sci-Fi Movie 'Hardcore Henry'?",
        "correct_answer": "Akan",
        "incorrect_answers": [
          "Estelle",
          "Jimmy",
          "Henry"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who played Baron Victor Frankestein in the 1957 Hammer horror film 'The Curse of Frankenstein'?",
        "correct_answer": "Peter Cushing",
        "incorrect_answers": [
          "Boris Karloff",
          "Vincent Price",
          "Lon Chaney Jr."
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who is the main protagonist in, the 1985 film, Back to the Future?",
        "correct_answer": "Marty McFly",
        "incorrect_answers": [
          "Emmett 'Doc' Brown",
          "Biff Tannen",
          "George McFly"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What was the first movie to ever use a Wilhelm Scream?",
        "correct_answer": "Distant Drums",
        "incorrect_answers": [
          "Treasure of the Sierra Madre",
          "The Charge at Feather River",
          "Indiana Jones"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In 'Jurassic World', what is the name of the dinosaur that is a genetic hybrid?",
        "correct_answer": "Indominus Rex",
        "incorrect_answers": [
          "Mosasaurus",
          "Pteranodon",
          "Tyrannosaurus Rex "
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who voices the main character Blu in the 2011 animated film 'Rio'?",
        "correct_answer": "Jesse Eisenberg",
        "incorrect_answers": [
          "Michael Cera",
          "Jonah Hill",
          "Zach Galifianakis"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The 2002 film '28 Days Later' is mainly set in which European country?",
        "correct_answer": "United Kingdom",
        "incorrect_answers": [
          "France",
          "Italy",
          "Germany"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In what year was the movie 'Police Academy' released?",
        "correct_answer": "1984",
        "incorrect_answers": [
          "1986",
          "1985",
          "1983"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In Back to the Future Part II, Marty and Dr. Emmett Brown go to which future date?",
        "correct_answer": "October 21, 2015",
        "incorrect_answers": [
          "August 28, 2015",
          "July 20, 2015",
          "January 25, 2015"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which animated film did Steven Lisberger direct in 1980 before going on to direct Tron?",
        "correct_answer": "Animalympics",
        "incorrect_answers": [
          "The Fox and the Hound",
          "The Black Cauldron",
          "The Great Mouse Detecive"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What year did the James Cameron film 'Titanic' come out in theaters?",
        "correct_answer": "1997",
        "incorrect_answers": [
          "1996",
          "1998",
          "1999"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In the movie Gremlins, after what time of day should you not feed Mogwai?",
        "correct_answer": "Midnight",
        "incorrect_answers": [
          "Evening",
          "Morning",
          "Afternoon"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "'The first rule is: you don't talk about it' is a reference to which movie?",
        "correct_answer": "Fight Club",
        "incorrect_answers": [
          "The Island",
          "Unthinkable",
          "American Pie"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What type of cheese, loved by Wallace and Gromit, had it's sale prices rise after their successful short films?",
        "correct_answer": "Wensleydale",
        "incorrect_answers": [
          "Cheddar",
          "Moon Cheese",
          "Edam"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The 2016 Disney animated film 'Moana' is based on which culture?",
        "correct_answer": "Polynesian",
        "incorrect_answers": [
          "Native American",
          "Japanese",
          "Nordic"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who is the director of the 1991 film 'Silence of the Lambs'?",
        "correct_answer": "Jonathan Demme",
        "incorrect_answers": [
          "Stanley Kubrick",
          "Frank Darabont",
          "Michael Bay"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who was the director of 'Scott Pilgrim vs. the World (2010)'?",
        "correct_answer": "Edgar Wright",
        "incorrect_answers": [
          "Phil Lord",
          "Chris Miller",
          "Seth Rogan"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Leonardo Di Caprio won his first Best Actor Oscar for his performance in which film?",
        "correct_answer": "The Revenant",
        "incorrect_answers": [
          "The Wolf Of Wall Street",
          "Shutter Island",
          "Inception"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In the 'Jurassic Park' universe, what is the name of the island that contains InGen's Site B?",
        "correct_answer": "Isla Sorna",
        "incorrect_answers": [
          "Isla Nublar",
          "Isla Pena",
          "Isla Muerta"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In the 'Jurassic Park' universe, when did 'Jurassic Park: San Diego' begin construction?",
        "correct_answer": "1985",
        "incorrect_answers": [
          "1988",
          "1986",
          "1993"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who directed the movie 'Alien'?",
        "correct_answer": "Ridley Scott",
        "incorrect_answers": [
          "Christopher Nolan",
          "Michael Bay",
          "James Cameron"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What three movies, in order from release date, make up the 'Dollars Trilogy'?",
        "correct_answer": "'A Fistful of Dollars', 'For a Few Dollars More', 'The Good, the Bad, and the Ugly'",
        "incorrect_answers": [
          "'The Good, the Bad, and the Ugly', 'For A Few Dollars More', 'A Fistful of Dollars'",
          "'For a Few Dollars More', 'The Good, the Bad, and the Ugly', 'A Fistful of Dollars'",
          "'For a Few Dollars More', 'A Fistful of Dollars', 'The Good, the Bad, and the Ugly'"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What is the species of the 'Predator' in the 1987 movie 'Predator'?",
        "correct_answer": "Yautja",
        "incorrect_answers": [
          "Xenomorph",
          "Praetorian",
          "Phocrex"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which actor plays the character 'Tommy Jarvis' in 'Friday the 13th: The Final Chapter' (1984)?",
        "correct_answer": "Corey Feldman",
        "incorrect_answers": [
          "Macaulay Culkin",
          "Mel Gibson",
          "Mark Hamill"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which of the following films was directed by Ivan Reitman, written by Gary Ross, featured Kevin Kline, and was released in 1993?",
        "correct_answer": "Dave",
        "incorrect_answers": [
          "John",
          "Will",
          "Carl"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which town is the setting for the Disney movie The Love Bug (1968)?",
        "correct_answer": "San Francisco",
        "incorrect_answers": [
          "Los Angeles",
          "Sacramento",
          "San Jose"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In Mulan (1998), who is the leader of the Huns?",
        "correct_answer": "Shan Yu",
        "incorrect_answers": [
          "Chien-Po",
          "Li Shang",
          "Fa Zhou"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In Finding Nemo, what was the name of Nemo's mom?",
        "correct_answer": "Coral",
        "incorrect_answers": [
          "Sandy",
          "Pearl",
          "Shelly"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which sci-fi cult films plot concerns aliens attempting to prevent humans from creating a doomsday weapon?",
        "correct_answer": "Plan 9 from Outer Space",
        "incorrect_answers": [
          "The Man from Planet X",
          "It Came from Outer Space",
          "The Day The Earth Stood Still"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the name of the fictional retro-mod band starring Austin Powers as the lead vocalist?",
        "correct_answer": "Ming Tea",
        "incorrect_answers": [
          "Cough Fi",
          "Spear Mint",
          "Mister E"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In the 2014 film 'Birdman', what is the primary instrument in the score?",
        "correct_answer": "Drums",
        "incorrect_answers": [
          "Saxophone",
          "Violin",
          "Actual Live Birds Singing"
        ]
      },
      {
        "category": "Film",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which musical artist had a prominent role in the 2017 film 'Kingsman: The Golden Circle'?",
        "correct_answer": "Elton John",
        "incorrect_answers": [
          "Lady Gaga",
          "Rihanna",
          "Justin Bieber"
        ]
      },
      
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?",
        "correct_answer": "Jordan",
        "incorrect_answers": [
          "Benetton",
          "Ferrari",
          "Mercedes"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which German sportswear company's logo is the 'Formstripe'?",
        "correct_answer": "Puma",
        "incorrect_answers": [
          "Nike",
          "Adidas",
          "Reebok"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What tool lends it's name to a last-stone advantage in an end in Curling?",
        "correct_answer": "Hammer",
        "incorrect_answers": [
          "Wrench",
          "Drill",
          "Screwdriver"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In golf, what name is given to a hole score of two under par?",
        "correct_answer": "Eagle",
        "incorrect_answers": [
          "Birdie",
          "Bogey",
          "Albatross"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What cricketing term denotes a batsman being dismissed with a score of zero?",
        "correct_answer": "Duck",
        "incorrect_answers": [
          "Bye",
          "Beamer",
          "Carry"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of these teams isn't a member of the NHL's 'Original Six' era?",
        "correct_answer": "Philadelphia Flyers",
        "incorrect_answers": [
          "New York Rangers",
          "Toronto Maple Leafs",
          "Boston Bruins"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who was the British professional wrestler Shirley Crabtree better known as?",
        "correct_answer": "Big Daddy",
        "incorrect_answers": [
          "Giant Haystacks",
          "Kendo Nagasaki",
          "Masambula"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the highest belt you can get in Taekwondo?",
        "correct_answer": "Black",
        "incorrect_answers": [
          "White",
          "Red",
          "Green"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The Rio 2016 Summer Olympics held it's closing ceremony on what date?",
        "correct_answer": "August 21",
        "incorrect_answers": [
          "August 23",
          "August 19",
          "August 17"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which country is hosting the 2018 FIFA World Cup?",
        "correct_answer": "Russia",
        "incorrect_answers": [
          "Germany",
          "United States",
          "Saudi Arabia"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which country is hosting the 2022 FIFA World Cup?",
        "correct_answer": "Qatar",
        "incorrect_answers": [
          "Uganda",
          "Vietnam",
          "Bolivia"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which driver has been the Formula 1 world champion for a record 7 times?",
        "correct_answer": "Michael Schumacher",
        "incorrect_answers": [
          "Ayrton Senna",
          "Fernando Alonso",
          "Jim Clark"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which car manufacturer won the 2016 24 Hours of Le Mans?",
        "correct_answer": "Porsche",
        "incorrect_answers": [
          "Toyota",
          "Audi",
          "Ferrari"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which female player won the gold medal of table tennis singles in 2016 Olympics Games?",
        "correct_answer": "DING Ning (China)",
        "incorrect_answers": [
          "LI Xiaoxia (China)",
          "Ai FUKUHARA (Japan)",
          "Song KIM (North Korea)"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which soccer team won the Copa America 2015 Championship ?",
        "correct_answer": "Chile",
        "incorrect_answers": [
          "Argentina",
          "Brazil",
          "Paraguay"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
        "correct_answer": "4",
        "incorrect_answers": [
          "1",
          "2",
          "3"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the 2016 Formula 1 World Driver's Championship?",
        "correct_answer": "Nico Rosberg",
        "incorrect_answers": [
          "Lewis Hamilton",
          "Max Verstappen",
          "Kimi Raikkonen"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In 2016, who won the Formula 1 World Constructor's Championship for the third time in a row?",
        "correct_answer": "Mercedes-AMG Petronas",
        "incorrect_answers": [
          "Scuderia Ferrari",
          "McLaren Honda",
          "Red Bull Racing Renault"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which city did the former NHL team 'The Nordiques' originiate from?",
        "correct_answer": "Quebec City",
        "incorrect_answers": [
          "Houston",
          "Montreal",
          "New York"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What team won the 2016 MLS Cup?",
        "correct_answer": "Seattle Sounders",
        "incorrect_answers": [
          "Colorado Rapids",
          "Toronto FC",
          "Montreal Impact"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the oldest team in Major League Baseball?",
        "correct_answer": "Atlanta Braves",
        "incorrect_answers": [
          "Chicago Cubs",
          "Cincinnati Reds",
          "St. Louis Cardinals"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of the following Grand Slam tennis tournaments occurs LAST?",
        "correct_answer": "US Open",
        "incorrect_answers": [
          "French Open",
          "Wimbledon",
          "Australian Open"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which team has won the most Stanley Cups in the NHL?",
        "correct_answer": "Montreal Canadians",
        "incorrect_answers": [
          "Chicago Blackhawks",
          "Toronto Maple Leafs",
          "Detroit Red Wings"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which portuguese island is soccer player Cristiano Ronaldo from?",
        "correct_answer": "Madeira",
        "incorrect_answers": [
          "Terceira",
          "Santa Maria",
          "Porto Santo"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of the following pitchers was named National League Rookie of the Year for the 2013 season?",
        "correct_answer": "Jose Fernandez",
        "incorrect_answers": [
          "Jacob deGrom",
          "Shelby Miller",
          "Matt Harvey"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which sport is NOT traditionally played during the Mongolian Naadam festival?",
        "correct_answer": "American Football",
        "incorrect_answers": [
          "Wrestling",
          "Archery",
          "Horse-Racing"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which car manufacturer won the 2017 24 Hours of Le Mans?",
        "correct_answer": "Porsche",
        "incorrect_answers": [
          "Toyota",
          "Audi",
          "Chevrolet"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "When was the first official international game played?",
        "correct_answer": "1872",
        "incorrect_answers": [
          "1880",
          "1863",
          "1865"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which boxer was banned for taking a bite out of Evander Holyfield's ear in 1997?",
        "correct_answer": "Mike Tyson",
        "incorrect_answers": [
          "Roy Jones Jr.",
          "Evander Holyfield",
          "Lennox Lewis"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the most common type of pitch thrown by pitchers in baseball?",
        "correct_answer": "Fastball",
        "incorrect_answers": [
          "Slowball",
          "Screwball",
          "Palmball"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who is often called 'the Maestro' in the men's tennis circuit?",
        "correct_answer": "Roger Federer",
        "incorrect_answers": [
          "Bill Tilden",
          "Boris Becker",
          "Pete Sampras"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which African American is in part responsible for integrating  Major League baseball?",
        "correct_answer": "Jackie Robinson",
        "incorrect_answers": [
          "Curt Flood",
          "Roy Campanella",
          "Satchell Paige"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which player holds the NHL record of 2,857 points?",
        "correct_answer": "Wayne Gretzky",
        "incorrect_answers": [
          "Mario Lemieux ",
          "Sidney Crosby",
          "Gordie Howe"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which city features all of their professional sports teams' jersey's with the same color scheme?",
        "correct_answer": "Pittsburgh",
        "incorrect_answers": [
          "New York",
          "Seattle",
          "Tampa Bay"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "How many premier league trophies did Sir Alex Ferguson win during his time at Manchester United?",
        "correct_answer": "13",
        "incorrect_answers": [
          "11",
          "20",
          "22"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the name of Manchester United's home stadium?",
        "correct_answer": "Old Trafford",
        "incorrect_answers": [
          "Anfield",
          "City of Manchester Stadium",
          "St James Park"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which player 'kung-fu kicked' a Crystal Palace fan in January 1995?",
        "correct_answer": "Eric Cantona",
        "incorrect_answers": [
          "David Seamen",
          "Ashley Cole",
          "Mark Hughes"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who is Manchester United's top premier league goal scorer?",
        "correct_answer": "Wayne Rooney",
        "incorrect_answers": [
          "Sir Bobby Charlton",
          "Ryan Giggs",
          "David Beckham"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the premier league title in the 2015-2016 season following a fairy tale run?",
        "correct_answer": "Leicester City",
        "incorrect_answers": [
          "Tottenham Hotspur",
          "Watford",
          "Stoke City"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "When was the FC Schalke 04 founded?",
        "correct_answer": "1904",
        "incorrect_answers": [
          "1909",
          "2008",
          "1999"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The Los Angeles Dodgers were originally from what U.S. city?",
        "correct_answer": "Brooklyn",
        "incorrect_answers": [
          "Las Vegas",
          "Boston",
          "Seattle"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which year did Jenson Button won his first ever Formula One World Drivers' Championship?",
        "correct_answer": "2009",
        "incorrect_answers": [
          "2010",
          "2007",
          "2006"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who was the topscorer for England national football team?",
        "correct_answer": "Wayne Rooney",
        "incorrect_answers": [
          "David Beckham",
          "Steven Gerrard",
          "Michael Owen"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which country will host the 2022 FIFA World Cup?",
        "correct_answer": "Qatar",
        "incorrect_answers": [
          "USA",
          "Japan",
          "Switzerland"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which Formula 1 driver switched teams in the middle of the 2017 season?",
        "correct_answer": "Carlos Sainz Jr.",
        "incorrect_answers": [
          "Daniil Kvyat",
          "Jolyon Palmer",
          "Rio Haryanto"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is Tiger Woods' all-time best career golf-score?",
        "correct_answer": "61",
        "incorrect_answers": [
          "65",
          "63",
          "67"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the UEFA Champions League in 2017?",
        "correct_answer": "Real Madrid C.F.",
        "incorrect_answers": [
          "Atletico Madrid",
          "AS Monaco FC",
          "Juventus F.C."
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
        "correct_answer": "1-7",
        "incorrect_answers": [
          "1-5",
          "1-6",
          "2-6"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Who won the 2011 Stanley Cup?",
        "correct_answer": "Boston Bruins",
        "incorrect_answers": [
          "Montreal Canadiens",
          "New York Rangers",
          "Toronto Maple Leafs"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which two teams played in Super Bowl XLII?",
        "correct_answer": "The New York Giants & The New England Patriots",
        "incorrect_answers": [
          "The Green Bay Packers & The Pittsburgh Steelers",
          "The Philadelphia Eagles & The New England Patriots",
          "The Seattle Seahawks & The Denver Broncos"
        ]
      }
  ]

const formatted = records.map(function(object){
    const newObj = {
        category:object.category,
        Q:object.question,
        Correct:object.correct_answer,
        A2: object.incorrect_answers[0],
        A3: object.incorrect_answers[1],
        A4: object.incorrect_answers[2]
    }
    return newObj
})

db.Questions.bulkCreate(formatted).then(function(result){
    console.log("Database seeded")
})