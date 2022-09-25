const baseURL = 'http://localhost:9000/api/playlists/'

const playlistService = {
    getPlaylists() {
        return fetch(baseURL).then((res) => res.json())
    },

    postPlaylist(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json())
    },

    deletePlaylist(id) {
        return fetch(baseURL + id, {
            method: 'DELETE',
        })
    }, 
}
export default playlistService; 