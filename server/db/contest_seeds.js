use eurovision;

db.contests.insertMany([{
    name: "First Contest",
    songs: {
        song1: "632d9961c68ea68930e152c7",
        song2: "632d9961c68ea68930e152c1"
    },
    players: {
      player1: "Conrad",
      player2: "Jackie"
    }
  },
  {
    name: "Second Contest",
    songs: {
        song1: "632d9961c68ea68930e152b4",
        song2: "632d9961c68ea68930e152b7"
    },
    players: {
      player1: "John ",
      player2: "Joseph"
    }
  }
])