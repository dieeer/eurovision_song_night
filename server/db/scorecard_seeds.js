use eurovision;
db.dropDatabase();
db.scores.insertMany([
    {
    "song": "Arcade 1",
    "scores": {
    "Jack":12,
    "Joe":45,
    "Peter":75,
    "Josie":87,
    }
   
},
{
    "Song": "Funny Times",
    "scores": {
                 "Jack":12,
    "Joe":45,
    "Peter":75,
    "Josie":87,
    }
}
])