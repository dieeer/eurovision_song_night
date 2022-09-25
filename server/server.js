const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())

const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js')

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('eurovision')
    const songsCollection = db.collection('songs')
    const songsRouter = createRouter(songsCollection)
    app.use('/api/all', songsRouter)
    // let the router use another end point and database collection
    const contestCollection = db.collection('contests')
    const contestRouter = createRouter(contestCollection)
    app.use('/api/contests', contestRouter)
    // j - create a playlists router.
    const playlistCollection = db.collection('playlists')
    const playlistRouter = createRouter(playlistCollection)
    app.use('/api/playlists', playlistRouter)
    // add further collections and routers here
  })
  .catch(console.err)

app.listen(9000, function () {
  console.log(`Listening on port ${this.address().port}`)
})
