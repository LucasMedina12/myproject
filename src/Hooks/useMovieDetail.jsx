import { useQuery } from "react-query"
import { getMovieById } from "../Services/getAll"

export const useMovieDetail = ( id ) => {
    const { data: movie } = useQuery(["movieDetail", id], () => getMovieById(id))
    return { movie }
}