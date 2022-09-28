use eurovision;
db.dropDatabase();

db.players.insertMany([
  {
  name: "Michael",
  background: "https://eurovision.tv/sites/default/files/styles/wide/public/media/image/migration/956937a2-4a12-4abb-9efc-713a2edebd5f.png?itok=zNIUC3Ex",
  img: "https://e7.pngegg.com/pngimages/225/208/png-clipart-chin-man-glasses-emotion-beard-man-face-people.png",
  fav:"Albania"
},
{
    name: "Silly Simon",
    background: "https://wallpaperaccess.com/full/7053062.jpg",
    img: "https://e7.pngegg.com/pngimages/733/440/png-clipart-man-holding-his-head-psychology-of-anger-controlling-anger-anger-management-feeling-angry-child-face.png",
    fav:"Albania"
},
{
    name: "Emma",
    background: "https://wallpaperaccess.com/full/3871478.jpg",
    img: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
    fav:"Albania"
    
},
{
    name: "Brandon Legend",
    background: "https://www.irishexaminer.com/cms_media/module_img/2847/1423988_1_articlelarge_ie-332363_c9ec5e88f00e43fe8a8492f75b2b3dd2.jpg",
    img: "https://e7.pngegg.com/pngimages/733/440/png-clipart-man-holding-his-head-psychology-of-anger-controlling-anger-anger-management-feeling-angry-child-face.png",
    fav:"Albania"
},
{
    name: "Vicky",
    background: "https://wallpaperaccess.com/full/39612.jpg",
    img: "https://e7.pngegg.com/pngimages/225/208/png-clipart-chin-man-glasses-emotion-beard-man-face-people.png",
    fav: "Albania"
}
])