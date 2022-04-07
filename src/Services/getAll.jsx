import axios from 'axios'
import { API_KEY, API_URL } from './settings'

export const getTrending = async ( res ) => {
    const { data } = await axios.get(`${API_URL}/trending/all/week?api_key=${API_KEY}&language=es`)
    return res === 1 ? data.results[0] : data.results
}

export const getGeneros = async () => {
    const { data } = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=es`)
    console.log(data)
    return data.genres
}

export const getMovieById = async () => {
    const { data } = await axios.get(`${API_URL}/movie/634649?api_key=${API_KEY}&language=es`)
    return data
}