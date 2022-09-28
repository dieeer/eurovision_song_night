import { deletePlayer} from "../services/PlayersService"
import {useState, useEffect} from "react";
import './PlayersCard.css'

const PlayersCard = ({player, removePlayers}) => {
  const link = 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png';
  const link1 = 'https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face.png';
  const link2 = 'https://w7.pngwing.com/pngs/861/742/png-transparent-fifa-18-just-for-laughs-comedy-festival-fifa-17-batdad-just-for-laughs-gags-men-s-expression-of-surprise-men-s-blue-dress-shirt-illustration-face-people-smiley.png';
  const link3 = 'https://e7.pngegg.com/pngimages/446/646/png-clipart-saitama-illustration-one-punch-man-saitama-manga-sticker-one-punch-man-white-child.png';
  const link4 = 'https://w7.pngwing.com/pngs/488/1002/png-transparent-laughter-why-do-we-laugh-humour-joke-white-house-white-house-face-head-united-states.png';
  const link5 = "https://e7.pngegg.com/pngimages/225/208/png-clipart-chin-man-glasses-emotion-beard-man-face-people.png"
    const handleDelete = () => {
        deletePlayer(player._id).then(()=>{
            removePlayers(player._id);
        })
    }

    return (



      
        <div id="card">
            
            <h2> {player.name}</h2>
            <p><b>Age: {player.age}</b></p>
            <p><b>Sex: {player.sex}</b></p>
            <img id="api-img" src={player.img} className="db-img" />

            
            

    <button onClick={handleDelete}> Delete</button>

    <hr></hr>
    </div>
   
    
    )
}

export default PlayersCard;