import React from 'react'
import { Link } from 'wouter'
import './Header.css'

export const Header = () => {
    return (
        <div className='header'>
            <figure className='header-logo'>
                <Link to='/'>
                    <img src="/logonetflix.png" alt="NETFLIX" />
                </Link>
            </figure>
            <div className='header-right'>
                <ul className='header-ul'>
                    <li><Link to='/movies'>Peliculas</Link></li>
                    <li><Link to='/series'>Series</Link></li>
                </ul>
                <form>
                    <input type="text" placeholder='Buscar pelicula / serie'/>
                </form>
            </div>
        </div>
    ) 
}
