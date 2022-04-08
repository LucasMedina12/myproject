import {useQuery} from 'react-query'
import { getTrending } from '../Services/getAll'

export const useTrending = () => {
    const { data: trending } = useQuery(["trending"], () => getTrending(0))
    return { trending }
}