import axios from 'axios'
import { API_KEY, API_URL } from './settings'

export const GetMain = async () => {
    const { data } = await axios.get(`${API_URL}/trending/all/week?api_key=${API_KEY}&language=es`)
    console.log(data)
    return data.results[0]
}