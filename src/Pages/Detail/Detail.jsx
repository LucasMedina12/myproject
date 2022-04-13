import React from 'react'
import { useDetails } from '../../Hooks/useDetails'
import './style.css'
import { URL_POSTER } from '../../Services/settings'
import { useLocation } from 'wouter'

export default function Detail ( { type } ) {
    const [location, setLocation] = useLocation()
    const id = type === 'movie' ? location.slice(7) : location.slice(4) 

    const { detail } = useDetails(id, type)

    return (
        <>
        {
            detail &&
                <div className='detail-container'>
                    <div className='detail-main' style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url('${URL_POSTER}${detail.backdrop_path}')`
                    }}>
                        <div className='detail--imageandgenre'>
                            <img src={`${URL_POSTER}${detail.poster_path}`} alt="" />
                                <a target='_blank' rel="noreferrer" className='button-play' href={detail.homepage}> </a>
                            <div className='detail--genres'>
                                {
                                    Array.isArray(detail.genres)
                                    ? detail.genres.map(genero => <a className='detail--genre'  key={genero.id} href={id}>{genero.name}</a>)
                                    : <a className='detail--genre' href={id}>{detail.genres.name}</a>
                                }
                            </div>
                        </div>
                        <div className='detail-title'>
                            <h1>{detail.title ? detail.title : detail.name}</h1>
                            {
                                detail.production_companies.lenght === 0
                                ? <h3>Companie</h3>
                                : <h3>{Array.isArray(detail.production_companies) ? detail.production_companies[0].name : detail.production_companies.name}</h3>
                            }
                        </div>
                    </div>
                    <div className='detail-description'>
                        <p>{detail.overview}</p>
                        <h3>{`Fecha de lanzamiento : ${detail.release_date}`}</h3>
                    </div>
                </div>
        }
        </>
    )
}