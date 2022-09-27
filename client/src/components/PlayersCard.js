import { deletePlayer} from "./PlayersService"
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