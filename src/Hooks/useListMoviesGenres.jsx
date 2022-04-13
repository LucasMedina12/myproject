import {useQuery} from 'react-query'
import { getMovieByGenre } from '../Services/getAll'

export const useListMoviesGenres = ( genre = 'trending' ) => {
    const { data: list } = useQuery(["listGenre", genre], () => getMovieByGenre(genre), {
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })
    return { list }
}