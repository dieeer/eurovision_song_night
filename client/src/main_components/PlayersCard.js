import { deletePlayer
 } from "./PlayersService"
import {useState, useEffect} from "react";
import './PlayersCard.css'

const PlayersCard = ({player, removePlayers}) => {

    const handleDelete = () => {
        deletePlayer(player._id).then(()=>{
            removePlayers(player._id);
        })
    }

    const [trashTalk, setTrashTalk] = useState("");

    const handleCompliment = () => { 
        setTrashTalk("Wish you the best of luck!!!!")
        setTimeout(() => setTrashTalk(""), 800);
  }
  const handleInsult = (timer) => { 
    setTrashTalk("GO TO HELL YOU PEICE OF ****")
    setTimeout(() => setTrashTalk(""), 800);
    
  }

  const [apiUrl, setApiUrl] = useState("");

  const fetchApi = function(){
    const request = fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json()) 
    .then(data => setApiUrl(data.message))
  }



    return (
        
        <div id="card">
            
            <h2> {player.name}</h2>
            <p><b>Age: {player.age}</b></p>
            <p><b>Sex: {player.sex}</b></p>

            
    
    <img id="api-img" src={apiUrl} />
    <button onClick={fetchApi} className="avatar">Generate Avatar</button>
   
    <button onClick={handleDelete}> Delete</button>
    <button onClick={handleCompliment}> Compliment </button>
    <button onClick={handleInsult}> insult </button>
    <h1>{trashTalk}</h1>
    <hr></hr>
    </div>
           
        
    )
}

export default PlayersCard;