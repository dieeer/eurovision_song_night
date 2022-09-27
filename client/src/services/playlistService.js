const baseURL = 'http://localhost:9000/api/playlists/'

const playlistService = {
    getPlaylists() {
        return fetch(baseURL).then((res) => res.json())
    },

    // create new playlist with prompt for custom 'name' and empty 'songs' array
    createPlaylist() {
        return fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: prompt('Enter a name for your playlist'), songs: []}),
        }).then((res) => res.json())
    },

    // add song to playlist 'songs' array
    addSongToPlaylist(playlist, songToAdd) {
        const updatedPlaylist = {...playlist, songs: [...playlist.songs, songToAdd]}
        const {_id, ...updatedPlaylistWithoutId} = updatedPlaylist
        return fetch(baseURL + _id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPlaylistWithoutId),
        }).then((res) => res.json())
    },
    
    // delete song from playlist
        deleteSongFromPlaylist(playlist, songToDelete) {
            const updatedPlaylist = {...playlist, songs: playlist.songs.filter((song) => song._id !== songToDelete._id)}
            const {_id, ...updatedPlaylistWithoutId} = updatedPlaylist
            return fetch(baseURL + _id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPlaylistWithoutId),
            }).then((res) => res.json())
        },

    // update playlist 
    updatePlaylist(playlist) {
        return fetch(baseURL + playlist._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(playlist),
        }).then((res) => res.json())
    },
    





    deletePlaylist(playlist) {
        return fetch(baseURL + playlist._id, {
            method: 'DELETE',
        })
    }, 
}

export default playlistService; 