import { useState, useEffect } from "react";

import PlayersForm from "../components/PlayersForm";
import PlayersGrid from "../components/PlayersGrid";
import { getPlayers } from "../services/PlayersService";


const PlayersContainer = () => {
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
      getPlayers().then((player)=>{
        setPlayers(player);
      })
    }, []);
  
    const addPlayers = (player) =>{
      const temp = players.map(s =>s);
      temp.push(player);
      setPlayers(temp);
    }
  
    const removePlayers = (id) => {
      const temp = players.map(s =>s);
      const indexToDel = temp.map(s => s._id).indexOf(id);
      console.log(indexToDel);
  
      temp.splice(indexToDel, 1);
      setPlayers(temp);
      
    }

    return (
      <>

        <PlayersForm addPlayers={addPlayers}/>
        <PlayersGrid players={players} removePlayers={removePlayers} />
    

      </>
    );
}

export default PlayersContainer