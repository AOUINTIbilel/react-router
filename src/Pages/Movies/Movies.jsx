import React from 'react'
import MovieList from '../../Component/MovieList'

const Movies = ({movies ,search  , ran}) => {
  return (
    <div>
        <MovieList Movie={movies}  search={search} ran={ran} />
    </div>
  )
}

export default Movies