const baseURL = 'http://localhost:9000/scores/all'

const ScoreService = {
  getScores() {
    return fetch(baseURL).then((res) => res.json())
  },

  getScores(id) {
    return fetch(baseURL + id).then((res) => res.json())
  },

  postScores(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json())
  },

  deleteScores(id) {
    return fetch(baseURL + id, {
      method: 'DELETE',
    })
  },
}

export default ScoreService
