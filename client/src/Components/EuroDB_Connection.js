const baseURL = 'http://localhost:9000/api/all'
const songsURL = 'http://localhost:9000/api/songs'

export const getAll = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const getSongs = () => {
    return fetch(songsURL)
        .then(res => res.json())
}
