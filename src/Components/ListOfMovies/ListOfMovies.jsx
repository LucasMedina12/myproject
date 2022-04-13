import React from 'react'
import { useListMoviesGenres } from '../../Hooks/useListMoviesGenres'
import Movie from '../Movie/Movie'
import './style.css'

export default function ListOfMovies ( { genre } ) {
    const { list } = useListMoviesGenres()
    return (
        <>
        {
            list && 
            <div className='list-movies'>
                {
                    list.map( pelicula => {
                        return <Movie key={pelicula.id} id={pelicula.id} movie={pelicula}/>
                    } )
                }
            </div>
        }
        </>
    )


}