use eurovision;
db.dropDatabase();
db.players.insertMany([
  {
  name: "Michael",
  age: "29",
  sex:  "Male",
  img: "https://e7.pngegg.com/pngimages/225/208/png-clipart-chin-man-glasses-emotion-beard-man-face-people.png"
  
  
},
{
    name: "Stingey Stevens",
    age: "24",
    sex:  "Male",
    img: "https://e7.pngegg.com/pngimages/733/440/png-clipart-man-holding-his-head-psychology-of-anger-controlling-anger-anger-management-feeling-angry-child-face.png"
},
{
    name: "Emma",
    age: "31",
    sex:  "Female",
    img: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png'
    
},
{
    name: "Brandon Legend",
    age: "34",
    sex:  "Male",
    img: "https://e7.pngegg.com/pngimages/733/440/png-clipart-man-holding-his-head-psychology-of-anger-controlling-anger-anger-management-feeling-angry-child-face.png"
},
{
    name: "Vicky",
    age: "40",
    sex:  "Female",
    img: "https://e7.pngegg.com/pngimages/225/208/png-clipart-chin-man-glasses-emotion-beard-man-face-people.png"
}
])