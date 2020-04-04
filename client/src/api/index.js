import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/api'
})

export const getJokes = () => api.get('/jokes')

const apis = {
    getJokes,
}

export default apis