use eurovision;
db.dropDatabase();
db.scores.insertMany([
    {
    "Song": "Arcade 1",
    "Jack":12,
    "Joe":45,
    "Peter":75,
    "Josie":87,
},
{
    "Song": "Funny Times",
    "Jack":12,
    "Joe":45,
    "Peter":75,
    "Josie":87,
}
])