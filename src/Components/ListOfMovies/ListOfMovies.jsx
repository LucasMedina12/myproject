import React from 'react'
import { useTrending } from '../../Hooks/useTrending'
import Movie from '../Movie/Movie'
import './style.css'

export default function ListOfMovies () {

    const { trending } = useTrending()

    return (
        <div className='list-movies'>
            {
                trending.map( pelicula => {
                    return <Movie id={pelicula.id}/>
                } )
            }
        </div>
    )


}