import axios from 'axios'
import { API_KEY, API_URL } from './settings'

export const getTrending = async ( res ) => {
    const { data } = await axios.get(`${API_URL}/trending/all/week?api_key=${API_KEY}&language=es`)
    return res === 1 ? data.results[0] : data.results
}

export const getMovieByGenre = async ( genre  = 'trending') => {
    if (genre === 'trending') {
        return getTrending(0)
    }
    else {
        const { data } = await axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`)
        console.log(data)
        return data
    }
    // const { data } = await axios.get(`${API_URL}/discover/movie`)
}

export const getGeneros = async () => {
    const { data } = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=es`)
    return data.genres
}

export const getDetailById = async ( id, type ) => {
    try{
    
        const { data } = await axios.get(`${API_URL}/${type}/${id}?api_key=${API_KEY}&language=es`)
        return data
    }
    catch{
        return null
    }
}