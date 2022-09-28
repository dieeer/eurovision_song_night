const baseURL = 'http://localhost:9000/api/players/'

export const getPlayers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postPlayer = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deletePlayer = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}
Player(id, payload) {
    return fetch(baseURL + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json())
  },

findPlayer(payload) {
    return fetch(baseURL + id, {
  method: 'GET',
  body: JSON.stringify(payload),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json());
},

