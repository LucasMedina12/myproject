import React, { useEffect, useState } from 'react'
import './Home.css'
import { useQuery } from 'react-query'
import { getTrending, getGeneros } from '../../Services/getAll'

const URL_POSTER = 'https://image.tmdb.org/t/p/original/'

export default function Home () {

    const [ generos, setGeneros ] = useState([])
    const { data: trending } = useQuery(["trending"], () => getTrending(1))

    useEffect( () => {
        getGeneros().then(res => setGeneros(res))
        console.log('render generos')
    }, [])


    return (
        <div className='home'>
        {
            trending && 
            <section className='main' style={{ 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url('${URL_POSTER}${trending.backdrop_path}')`  
            }}>
                <div className='gradient--vertical'>
                    <div className='gradient--horizontal'>
                        <div className="main-content">
                            <h1>{trending.title}</h1>
                            <h3 className='vote-average'
                                style={{ backgroundColor: trending.vote_average > 7.5 ?  '#00FF00' : trending.vote_average > 4.5 ? '#FFFF00' : 'FF0000'}}
                                >{trending.vote_average}</h3>
                            <h3>{trending.overview}</h3>
                            {
                                generos.map(genero => trending.genre_ids.includes(genero.id) ? <h4>{genero.name}</h4> : null)
                            }
                            <button className='css-button-arrow--grey'>MIRAR AHORA</button>
                        </div>
                    </div>
                </div>    
            </section>
        }
            <ul>
                <li>Populares</li>
                <li>Mejores Punteadas</li>
                {
                    generos.map(genero => <li>{genero.name}</li>)
                }
            </ul>     
        </div>
    )
}