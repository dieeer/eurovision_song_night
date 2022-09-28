import {useState, useEffect} from 'react'
import playlistService from '../services/playlistService'
import contestService from '../services/contestService'

const CreateContest = () => {
    
    const [contest, setContest] = useState({
        name: '',
        playlist: {}
    })
    const [contests, setContests] = useState([])
    
    const [playlist, setPlaylist] = useState({
        name: '',
        songs: []
    })

    const [playlists, setPlaylists] = useState([])

    const [name, setName] = useState('')
    const [playlistId, setPlaylistId] = useState('')
    const [selectedPlaylistId, setSelectedPlaylistId] = useState('')
   
    useEffect(() => {
        playlistService.getPlaylists()
        .then((data) => {
            setPlaylists(data)
        })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        const selectedPlaylist = playlists.find(
        (playlist) => playlist._id === selectedPlaylistId
        )
        contestService.createContest(contest, selectedPlaylist)
        contestService.getContests().then((contests) => setContests(contests))
    }

    const handleChange = (e) => {
        setContest({
            ...contest,
            [e.target.name]: e.target.value
        })
    }

    
    const playlistOptions = playlists.map((playlist) => {
    return (
        <option key={playlist._id} value={playlist._id}>
        {playlist.name}
        </option>
    )
    })

    // choose playlist from dropdown menu and create new contest with embedded playlist object

    const handleSelect = (e) => {
        console.log('This is the value of the playlist option: ', e.target.value)
        setSelectedPlaylistId(e.target.value)
    }


    return (
        <div>

        <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={contest.name} onChange={handleChange} placeholder='Contest Name'/>
            <select onChange={handleSelect}>
            <option value=''>Select Playlist</option>
            {playlistOptions}
            </select>
            <input type='submit' value='+' />
        </form>
        </div>
    )
}


    
    
    
    
    
    
//     const [contest, setContest] = useState({
//         name: '',
//     playlist: {}
// })

// // take contest name from input and push playlist object to contest 'playlist' based on playlist _id


// const handleSelect = (event) => {
//     setContest({...contest, [event.target.name]: event.target.value})
// }


// const handleSubmit = (event) => {
    
//     contestService.createContest(contest, playlists)
//     event.preventDefault();
//     setContest({
//         name: '',
//         playlist: {}
//     })
// }


//     const handleChange = (event) => {
//         setContest({...contest, [event.target.name]: event.target.value})
//     }



// // playlist functionality
//     const [playlists, setPlaylists] = useState([])

//     useEffect(() => {
//         playlistService.getPlaylists().then((playlists) => setPlaylists(playlists))
//     }, [])
        
        

    

//     return (
//         <div>  

//             <form onSubmit={handleSubmit}>
//                 <input type='text' name='name' value={contest.name} onChange={handleChange} placeholder='Contest Name'/>
//                 <select onChange={handleSelect} name='playlist'>
//                     <option value={contest.playlist}>Select Playlist</option>
//                     {playlistOptions}
//                 </select>
//                 <input type='submit' name='submit' value='Create Contest'/>

//             </form>
//         </div>
//     )

// }





    
    //     return (
    //     <form onSubmit={handleSubmit}>
    //     <label htmlFor="name">Contest Name</label>
    //     <input type="text" name="name" onChange={handleChange} value={contest.name} />
    //     <select onChange={handleSelect}>
    //     {playlistOptions}
    //     </select>
    //     <input type="submit" value="Create Contest" />
    //     </form>
    //     )
    // }


    export default CreateContest;