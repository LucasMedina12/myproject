import React from 'react'
import './Home.css'
import { useGenres } from '../../Hooks/useGenres'
import ListOfMovies from '../../Components/ListOfMovies/ListOfMovies'
import { useListMoviesGenres } from '../../Hooks/useListMoviesGenres'

const URL_POSTER = 'https://image.tmdb.org/t/p/original/'

export default function Home () {

    const { generos } = useGenres()

    const { list } = useListMoviesGenres()  


    return (
        <div className='home'>
        {
            list && 
            <section className='main' style={{ 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url('${URL_POSTER}${list[0].backdrop_path}')`  
            }}>
                <div className='gradient--vertical'>
                    <div className='gradient--horizontal'>
                        <div className="main-content">
                            <h1>{list[0].title ? list[0].title : list[0].name}</h1>
                            <h3 className='vote-average'
                                style={{ backgroundColor: list[0].vote_average > 7.5 ?  '#00FF00' : list[0].vote_average > 4.5 ? '#FFFF00' : 'FF0000'}}
                                >{list[0].vote_average}</h3>
                            <h3>{list[0].overview}</h3>
                            {
                                generos.map(genero => list[0].genre_ids.includes(genero.id) ? <h4 key={genero.name}>{genero.name}</h4> : null)
                            }
                            <button className='css-button-arrow--grey'>MIRAR AHORA</button>
                        </div>
                    </div>
                </div>  
                <h2>Peliculas del momento</h2>        
                <ListOfMovies />
            </section>
        }
        </div>
    )
}