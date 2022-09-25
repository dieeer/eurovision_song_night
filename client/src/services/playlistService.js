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


    deletePlaylist(id) {
        return fetch(baseURL + id, {
            method: 'DELETE',
        })
    }, 
}

export default playlistService; 