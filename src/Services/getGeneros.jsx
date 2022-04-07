import axios from "axios";
import { API_URL, API_KEY } from "./settings";

export const getGeneros = async () => {
    const { data } = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=es`)
    console.log(data)
    return data.genres
}