import axios from 'axios'

const instance = axios.create({
    baseUrl: 'https://api.themoviedb.org/3'
})

export default instance