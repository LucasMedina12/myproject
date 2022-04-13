import React from 'react'
import { Link } from 'wouter'
import { URL_POSTER } from '../../Services/settings'
import './style.sass'

export default function Movie ( { id, movie } ) {   
    const MovieCard = ( { type } ) =>{
        return (
            <Link to={`/${type}/${id}`}>    
                <div className='movie' style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url('${URL_POSTER}${movie.poster_path}')`
                    }}>
                    <h2 className='movie__title'>{movie.title ? movie.title : movie.name}</h2>
                    <span className='movie__description'>{movie.overview}</span>
                    <div className='movie__infos'>
                    </div>
                </div>
            </Link>
        )
    } 

    return(
        <>
        {
            movie && 
            movie.media_type === 'tv' ? <MovieCard type={'tv'} /> : <MovieCard type={'movie'} /> 
        }
        </>
      )
}