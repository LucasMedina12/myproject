import React, { useEffect, useState } from 'react'
import './Home.css'
import { useQuery } from 'react-query'
import { GetMain } from '../../Services/getAll'
import { getGeneros } from '../../Services/getGeneros'

const URL_POSTER = 'https://image.tmdb.org/t/p/original/'

export default function Home () {

    const [ generos, setGeneros ] = useState([])

    const { data: trending } = useQuery(["trending"], GetMain)

    useEffect( () => {
        getGeneros().then(res => setGeneros(res))
    }, [])

    console.log(trending)
    console.log(generos)

    return (
        <>
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
                            <h3>{trending.vote_average}</h3>
                            {
                                generos.map(genero => trending.genre_ids.includes(genero.id) ? <h3>{genero.name}</h3> : null)
                            }
                            
                            <h5>{trending.overview}</h5>
                        </div>
                    </div>
                </div>
            </section>
        }
        </>
    )
}