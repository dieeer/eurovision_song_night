import { deletePlayer} from "../services/PlayersService"
import {useState, useEffect} from "react";
import './PlayersCard.css'

const PlayersCard = ({player, removePlayers}) => {

    const handleDelete = () => {
        deletePlayer(player._id).then(()=>{
            removePlayers(player._id);
        })
    }

    return (



      
        <div id="card">
            
            <h2 className="h2-color"> {player.name}</h2>
            <div className="parent">
            <img id="api-img" src={player.img} className="db-img2"  />
            <img id="api-img" src={player.background} className="db-background1" />
            </div>

            
            

    <button onClick={handleDelete}> Delete</button>

   
    </div>
   
    
    )
}

export default PlayersCard;