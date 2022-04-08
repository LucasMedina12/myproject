import React from 'react'
import { Link } from 'wouter'
import { useMovieDetail } from '../../Hooks/useMovieDetail'
import { URL_POSTER } from '../../Services/settings'
import './style.sass'

export default function Movie ( { id } ) {

    const { movie } = useMovieDetail(id)

    
    const MovieInfo = ({name,value}) => (
        <div className={`movie__${name}`}>
        <span className='info__head'>
            {name.replace(/\b\w/g, l => l.toUpperCase())}
        </span>
        {value}
        </div>
    )


    console.log(movie)
  

   
    return(
        <>
        {
            movie && 
            <Link to={`/movie/${id}`}>
                <div className='movie' style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url('${URL_POSTER}${movie.poster_path}')`
                    }}>
                    <h2 className='movie__title'>{movie.title ? movie.title : movie.name}</h2>
                    <span className='movie__description'>{movie.overview}</span>
                    <div className='movie__infos'>
                        <MovieInfo name='duration' value={movie.runtime}/>
                        <MovieInfo name='director' value={Array.isArray(movie.production_companies) ? movie.production_companies.name : movie.production_companies[0].name }/>
                        <MovieInfo name='year' value={movie.release_date.slice(4)} />
                    </div>
                </div>
            </Link>
        }
        </>
      )
}