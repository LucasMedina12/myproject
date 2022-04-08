import React, { useEffect } from 'react'
import './Home.css'
import { useQuery } from 'react-query'
import { getTrending} from '../../Services/getAll'
import { useGenres } from '../../Hooks/useGenres'

const URL_POSTER = 'https://image.tmdb.org/t/p/original/'

export default function Home () {

    const { generos } = useGenres()
    const { data: trending } = useQuery(["trending"], () => getTrending(0))

    return (
        <div className='home'>
        {
            trending && 
            <section className='main' style={{ 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url('${URL_POSTER}${trending[0].backdrop_path}')`  
            }}>
                <div className='gradient--vertical'>
                    <div className='gradient--horizontal'>
                        <div className="main-content">
                            <h1>{trending[0].title}</h1>
                            <h3 className='vote-average'
                                style={{ backgroundColor: trending[0].vote_average > 7.5 ?  '#00FF00' : trending[0].vote_average > 4.5 ? '#FFFF00' : 'FF0000'}}
                                >{trending[0].vote_average}</h3>
                            <h3>{trending[0].overview}</h3>
                            {
                                generos.map(genero => trending[0].genre_ids.includes(genero.id) ? <h4>{genero.name}</h4> : null)
                            }
                            <button className='css-button-arrow--grey'>MIRAR AHORA</button>
                        </div>
                    </div>
                </div>    
            </section>
        }
        </div>
    )
}