import { useQuery } from "react-query"
import { getDetailById } from "../Services/getAll"

export const useDetails = ( id, type ) => {
    const { data: detail } = useQuery(["detail", id], () => getDetailById(id, type), {
        cacheTime: .2 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })
    return { detail }
}