const baseURL = 'http://localhost:9000/api/contests/'

const ContestService = {
  getContests() {
    return fetch(baseURL).then((res) => res.json())
  },

  postContest(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json())
  },

  deleteContest(id) {
    return fetch(baseURL + id, {
      method: 'DELETE',
    })
  },
}

export default ContestService
