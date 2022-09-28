const baseURL = 'http://localhost:9000/api/all'

const SongService = {
  getSongs() {
    return fetch(baseURL).then((res) => res.json())
  },

  getSong(id) {
    return fetch(baseURL + id).then((res) => res.json())
  },

  postSongs(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json())
  },

  deleteSongs(id) {
    return fetch(baseURL + id, {
      method: 'DELETE',
    })
  },
}

export default SongService
