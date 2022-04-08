import { useState } from 'react'
import { getGeneros } from '../Services/getAll'

export const useGenres = () => {
    const [ generos, setGeneros ] = useState([])

    getGeneros().then(res => setGeneros(res))
    
    return { generos }
}