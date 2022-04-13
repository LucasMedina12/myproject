import { getGeneros } from '../Services/getAll'
import { useQuery } from 'react-query'

export const useGenres = () => {

    const { data: generos } = useQuery(["generos"], getGeneros, {
        staleTime: Infinity
    })
    
    return { generos }
}