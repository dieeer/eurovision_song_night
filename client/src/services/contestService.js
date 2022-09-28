const baseURL = 'http://localhost:9000/api/contests/'

const contestService = {
  getContests() {
    return fetch(baseURL).then((res) => res.json())
  },

  // create new contest with text input for name and drop down for chosen playlist

  createContest(contest, playlist) {
    return fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: contest.name, playlist: playlist}),
    }).then((res) => res.json())
  },





  updateContest(contest) {
    return fetch(baseURL + contest._id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contest),
    }).then((res) => res.json())
  },

  addPlayerToContest(contest, playerToAdd) {
    const updatedContest = {...contest, players: [...contest.players, playerToAdd]}
    const {_id, ...updatedContestWithoutId} = updatedContest
    return fetch(baseURL + _id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedContestWithoutId),
    }).then((res) => res.json())
  },

  deletePlayerFromContest(contest, playerToDelete) {
    const updatedContest = {...contest, players: contest.players.filter((player) => player._id !== playerToDelete._id)}
    const {_id, ...updatedContestWithoutId} = updatedContest
    return fetch(baseURL + _id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedContestWithoutId),
    }).then((res) => res.json())
  },
  

  deleteContest(id) {
    return fetch(baseURL + id, {
      method: 'DELETE',
    })
  },
}

export default contestService;
