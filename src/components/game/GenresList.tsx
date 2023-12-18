import React from 'react'
import useGenres from './Hooks/useGenres'

const GenresList = () => {
    const {genres} = useGenres()
  return (
    <div>{genres.map((gen, index)=> <h1 key={gen.id}>{gen.name}</h1>)}</div>
  )
}

export default GenresList