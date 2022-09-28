import PlayersCard from "./PlayersCard";
import PlayersForm from "./PlayersForm";

const PlayersGrid = ({players, removePlayers}) => {
    const playersList = players.map((player) =>{
        return( 
        <PlayersCard player={player} key={player._id} removePlayers={removePlayers} />
     
       )
    });
    
    return (
        <>
            {playersList}
        </>
    );

}

export default PlayersGrid;