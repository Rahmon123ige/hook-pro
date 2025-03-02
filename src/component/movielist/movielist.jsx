import React from 'react'
import Moviecard from '../moviecard/moviecard.jsx'
import './moviecard.css'

function Movielist({movies}) {
  return (
    <div className='list'>
      {
        movies.map((movie)=> 
            <Moviecard title={movie.title} 
                       description={movie.description} 
                       posterURL={movie.posterURL} 
                       rating={movie.rating} 
                       nkiri={movie.nkiri} />
        )
      }
    </div>
  )
}

export default Movielist
